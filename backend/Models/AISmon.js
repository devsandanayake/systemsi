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
        type: String,
        required: true
    },
    year1CMR: {
        type: String,
        required: true
    },
    year2CMR: {
        type: String,
        required: true
    },
    year3CMR: {
        type: String,
        required: true
    }


});

module.exports = mongoose.model('AISmon', AISmonSchema);

 