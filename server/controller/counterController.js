var counterService = require('../service/counterService.js');

exports.generateCounter = function (req, res) {

    var reqData = req.body.counterValue;

    counterService.generateCounter(reqData, function (errors, data) {
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
