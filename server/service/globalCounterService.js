var globalCounter = require('../models/globalCounter.js');

exports.generateGlobalCounter = function (reqData, callback) {

    var input = reqData,
        lastInput = [];

    var globalCounterValue = new globalCounter();
    globalCounterValue.input  = reqData;
    globalCounterValue.output = lastInput;

    globalCounter.find().sort({_id: -1}).exec(function (error, data) {
        if (data.length > 0) {
            lastInput.push(data[0]);
        }
    });

};
