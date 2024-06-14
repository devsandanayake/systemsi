const mongoose = require('mongoose');

const AINetGMonSchema = new mongoose.Schema({
    Bandwith: {
        type: String,
        required: true
    },
    Standard: {
        type: String,
        required: true
    },
    Commitment1Year: {
        type: String,
        required: true
    }
    ,
    Commitment2Year: {
        type: String,
        required: true
    },
    Commitment3Year: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('AINetGMon', AINetGMonSchema);