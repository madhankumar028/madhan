var mongoose = require('mongoose');

var counterSchema = mongoose.Schema({
    counter: {
        input  : String,
        output : String
    }
});

module.exports = mongoose.model('Counter', counterSchema);
