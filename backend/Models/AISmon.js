const mongoose = require('mongoose');

const AISmonSchema = new mongoose.Schema({
    Bandwith: {
        type: String,
        required: true
    },
    MaxUsers: {
        type: String,
        required: true
    },
    ConcurrentUsers: {
        type: String,
        required: true
    },
    ConcurrentSessions: {
        type: String,
        required: true
    },
    Sprice: {
        type: Number,
        required: true
    },
    year1CMR: {
        type: Number,
        required: true
    },
    year2CMR: {
        type: Number,
        required: true
    },
    year3CMR: {
        type: Number,
        required: true
    }


});

module.exports = mongoose.model('AISmon', AISmonSchema);

 