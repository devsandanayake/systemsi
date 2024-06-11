const mongoose = require('mongoose');

const AISecurenetSchema = new mongoose.Schema({
    Bandwith: {
        type: String,
        required: true
    },
    Standard: {
        type: String,
        required: true
    },
    Commitment: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('AISinit', AISecurenetSchema);
