var counter = require('../models/counter.js');

exports.generateCounter = function (reqData, callback) {

    var output = 0;

    if ((reqData <= 0)) {
        return;
    }

    var userInput = parseInt(reqData);

    output = userInput + 1;

    var counterValue = new counter();
    counterValue.counter.input  = reqData;
    counterValue.counter.output = output;

    counterValue.save(function (errors, data) {
        if (errors) {
            callback('Error countering value', null);
            return;
        }
        callback(null, data);
    });
};
