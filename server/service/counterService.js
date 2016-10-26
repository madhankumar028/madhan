var counter = require('../models/counter.js');

/**
 * Creates a new counter
 *
 * @param {Object} reqData The counter data
 * @param {Function} callback The callback function
 */
exports.generateCounter = function (reqData, callback) {

    var counterValue = new counter(),
        output       = 0;

    if (reqData > 0) {
        var userInput = parseInt(reqData);

        output = userInput + 1;

        counterValue.counter.input  = reqData;
        counterValue.counter.output = output;

        counterValue.save(function (errors, data) {
            if (errors) {
                callback('Error countering value', null);
                return;
            }
            callback(null, data);
        });
    } else {
        output = "Invalid value!";

        counterValue.counter.input  = reqData;
        counterValue.counter.output = output;

        counterValue.save(function (errors, data) {
            if (errors) {
                callback('Error countering value', null);
                return;
            }
            callback(null, data);
        });
    }
};
