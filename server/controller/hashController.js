var hashService = require('../service/hashService.js');

/**
 * Create a new hash
 *
 * @param {Object} req The request object
 * @param {Object} res The response object
 */
exports.generateHash = function (req, res) {

    var reqData = req.body.hashValue;

    hashService.generateHash(reqData, function(errors, data) {
        if (errors) {
            res.jsonp({
                status: 'failure',
                errors: error
            });
        } else {
            res.jsonp({
                status: 'success',
                data: data
            });
        }
    });

};
