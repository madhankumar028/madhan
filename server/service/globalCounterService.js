var globalCounter = require('../models/globalCounter.js');

exports.generateGlobalCounter = function (reqData, callback) {

    var input = reqData,
        lastInput = [];

    var globalCounterValue = new globalCounter();
    globalCounterValue.input  = reqData;
    globalCounterValue.output = lastInput;

    globalCounter.find({}).exec(function (error, data) {

        for (var i = 0; i < data.length; i++) {

            var globalCounterValue = {};
            globalCounterValue.input = data[i].input;
            globalCounterValue.output = data[i].output;
            console.log(data);
            lastInput.push(data[0]);
        }
    });

};
