const tap = require('tap')
var tq = require ('../.')
var query = {
    'startkey':[10,'20','02']
}

function string_with_numbers(t){
    t.plan(1)
    return t.test('should not get confused about 02',tt=>{
        tt.plan(1)
        var pq = tq(query)
        tt.is(pq,'startkey=%5B10%2C%2220%22%2C%2202%22%5D')
        return tt.end()
    })
}

function parse_an_object_okay(t){
    t.plan(1)
    return t.test('should not turn 0 into a string',tt=>{
        tt.plan(1)
        var parsed = tq({limit:200
                        ,startkey:0})
        tt.is(parsed,'limit=200&startkey=0')
        return tt.end()
    })
}

tap.test('string with numbers',string_with_numbers)
tap.test('parse object',parse_an_object_okay)
