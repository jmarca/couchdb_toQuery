/*global require JSON */
var isString = require('lodash.isstring')
var querystring = require('querystring')
var forEach = require('lodash.foreach')
// make sure that strings are strings, numbers are numbers when JSON encoding
function brutal_hack(v){
    if(! isString(v) && ! isNaN(v) ){
        return +v
    }else{
        return v
    }
}
// Encode only key, startkey and endkey as JSON
function toQuery(query) {
    var q={}
    forEach(query,function(v,k){
        if (['key', 'keys', 'startkey', 'endkey'].indexOf(k) != -1) {
            // keys can be arrays or strings
            var vmap;
            if(Array.isArray(v)){
                vmap = v.map(value => brutal_hack(value))
            }else{
                vmap = brutal_hack(v)
            }
            q[k] = JSON.stringify(vmap)
        } else {
            q[k] = String(v)
        }
    })
    return querystring.stringify(q)
}
module.exports=toQuery
