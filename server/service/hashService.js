var md5 = require('md5');
var crypto = require('crypto');

var hash = require('../models/hash.js');

exports.generateHash = function (reqData, callback) {

    var input = reqData;
    input = crypto.createHash('md5').update(input).digest('hex');

    var hashValue = new hash();
    hashValue.hash.input = reqData;
    hashValue.hash.output = input;

    hashValue.save(function (errors, data) {
        if (errors) {
            callback('Error hashing value', null);
            return;
        }
        console.log(hashValue._id);
        callback(null, data);
    });
};
