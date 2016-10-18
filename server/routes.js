var hashController = require('./controller/hashController.js');
var counterController = require('./controller/counterController.js');
var globalCounter = require('./controller/globalCounterController.js');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/index.html'));
    });

    app.post('/api/hash', function (req, res) {
        hashController.generateHash(req, res);
    });

    app.post('/api/counter', function (req, res) {
        counterController.generateCounter(req, res);
    });

    app.post('/api/global-counter', function (req, res) {
        globalCounterController.generateGlobalCounter(req, res);
    });
};
