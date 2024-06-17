const mongoose = require('mongoose');

const TrAINetGISchema = new mongoose.Schema({
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
    },
});

module.exports = mongoose.model('TrAINetGI', TrAINetGISchema);