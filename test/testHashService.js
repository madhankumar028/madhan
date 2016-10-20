process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");
var hash = require('../server/models/hash.js');

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();

chai.use(chaiHttp);

describe('hash', function () {

    /*
    * Test the api/addUser route
    */
    describe('hashUserInput', function () {
        it('it should not hash without value field', function (done) {
            var hash = {
                hashvalue: "test"
            };
            chai.request('http://localhost:8080')
                .post('/api/hash')
                .send(hash)
                .end(function (err, res) {
                    res.should.have.status(200);
                  done();
                });
        });
    });
});
