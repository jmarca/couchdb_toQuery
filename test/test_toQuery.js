var tq = require ('../.')
var should = require('should')
var query = {
    'startkey':[10,'20','02']
}

describe('string parsing with numbers',function(){
    it('should not get confused about 02',function(done){
        var pq = tq(query)
        pq.should.eql('startkey=%5B10%2C%2220%22%2C%2202%22%5D')
        done()
    })
})
describe('parse an object okay',function(){
    it('should not turn 0 into a string',function(done){
        var parsed = tq({limit:200
                        ,startkey:0})
        parsed.should.eql('limit=200&startkey=0')
        done()
    })
})