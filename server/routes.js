var hashController  = require('./controller/hashController.js'),
    counterController = require('./controller/counterController.js');

module.exports = function (app) {

    /** Fetches the index page when the (/) hits */
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    /** generates hash */
    app.post('/api/hash', function (req, res) {
        hashController.generateHash(req, res);
    });

    /** generates counter */
    app.post('/api/counter', function (req, res) {
        counterController.generateCounter(req, res);
    });
};
