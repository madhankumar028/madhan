var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');

var morgan       = require('morgan');
var bodyParser   = require('body-parser');

var localDB = require('./config/database.js');

mongoose.connect(localDB.url);

app.use(morgan('dev'));

app.use(express.static('./client'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
