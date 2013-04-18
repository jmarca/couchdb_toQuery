/*global require JSON */
var _ = require('lodash')
var querystring = require('querystring')
// make sure that strings are strings, numbers are numbers when JSON encoding
function brutal_hack(v){
    if(! _.isString(v) && ! isNaN(v) ){
        return +v;
    }else{
        return v;
    }
}
// Encode only key, startkey and endkey as JSON
var toQuery = function(query) {
        var q={};
        _.each(query,function(v,k){
            if (['key', 'keys', 'startkey', 'endkey'].indexOf(k) != -1) {
                // keys can be arrays or strings
                var vmap;
                if(_.isArray(v)){
                    vmap = _.map(v,function(value){ return brutal_hack(value); });
                }else{
                    vmap = brutal_hack(v);
                }
                q[k] = JSON.stringify(vmap);
            } else {
                q[k] = String(v);
            }
        });
        return querystring.stringify(q);
};
module.exports=toQuery
