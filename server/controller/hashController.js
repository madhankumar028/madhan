var hashService = require('../service/hashService.js');

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
