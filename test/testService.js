process.env.NODE_ENV = 'test';

var mongoose = require("mongoose");

var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect();

chai.use(chaiHttp);

describe('hash', function () {

    /*
    * Test the api/addUser route
    */
    describe('hashUserInput', function () {
        it('it should not hash without value field', function (done) {
            // debugger {used to debug the test case from chrome dev tool}
            var hash = {
                hashValue: "test"
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

    /*
    * Test the api/counter route
    */
    describe('counterUserInput', function () {
        it('it should not count without value field', function (done) {
            var counter = {
                counterValue: "12"
            };
            chai.request('http://localhost:8080')
                .post('/api/counter')
                .send(counter)
                .end(function (err, res) {
                    res.should.have.status(200);
                  done();
                });
        });
    });
});
