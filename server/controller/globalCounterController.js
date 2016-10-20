var globalCounterService = require('../service/globalCounterService.js');

exports.generateGlobalCounter = function (req, res) {

    var reqData = req.body.globalCounterValue;

    globalCounterService.generateGlobalCounter(reqData, function (errors, data) {
        if (errors) {
            res.jsonp({
                status: 'failure',
                error: errors
            });
        } else {
            res.jsonp({
                status: 'success',
                data: data
            });
        }
    });
};
