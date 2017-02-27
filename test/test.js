"use strict";
let assert = require('assert');

// write tests here

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
    });
});

describe('Mongo', function() {
    describe('new user', function() {
        it('should save new user without error', function(done) {
            let user = require('../schema/users');
            let newUser = new user.User({ name: 'mocha test', email: 'testUser@gmail.com'});
            newUser.save(done);
        });
    });
});

