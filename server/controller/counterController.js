var counterService = require('../service/counterService.js');

/**
 * Create a new counter
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
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
