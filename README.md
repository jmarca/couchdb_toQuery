# CouchDB toQuery


[![Build Status](https://travis-ci.org/jmarca/couchdb_toQuery.svg?branch=master)](https://travis-ci.org/jmarca/couchdb_toQuery)
[![Maintainability](https://api.codeclimate.com/v1/badges/f505b3909eba92e14b28/maintainability)](https://codeclimate.com/github/jmarca/couchdb_toQuery/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/f505b3909eba92e14b28/test_coverage)](https://codeclimate.com/github/jmarca/couchdb_toQuery/test_coverage)

Tiny little utility that I use a lot to convert query objects into
proper CouchDB query strings.  The deal is that you have to pass key,
startkey, and endkey parameters as JSON, while everything else needs
to be encoded as a string.  Also, long ago I stuffed in a simple
little hack that makes sure that numbers stay numbers in this
process.

This is totally a use at your own risk type of module.  It works for
me because this is how I work, but perhaps it won't work for you.

# Acknowledgment

The origins of this module are from way back when Felix G's
node-couchdb module first went unmaintained.  I switched to just
directly querying couchdb, and ran into problems.  I copied the
'toQuery' string from there.

Then later I kept getting hit with irritating cases in which numbers
would get converted to text, which of course will sort and match
completely differently, so I slapped in the brutal_hack.
