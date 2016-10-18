var mongoose = require('mongoose');

var hashSchema = mongoose.Schema({
    hash: {
        input  : String,
        output : String
    }
});

module.exports = mongoose.model('Hash', hashSchema);
