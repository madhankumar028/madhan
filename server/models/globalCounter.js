var mongoose = require('mongoose');

var globalCounterSchema = mongoose.Schema({
    globalCounter: {
        input      : String,
        oldCounter : String,
        output     : String
    }
});

module.exports = mongoose.model('GlobalCounter', globalCounterSchema);
