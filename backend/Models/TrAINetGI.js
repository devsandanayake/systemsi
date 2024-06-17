const mongoose = require('mongoose');

const TrAINetGISchema = new mongoose.Schema({
    data: {
        a1s: String,
        a1Sc: String,
        a2s: String,
        a2Sc: String,
        a3s: String,
        a3Sc: String,
        a4s: String,
        a4Sc: String,
        a5s: String,
        a5Sc: String,
        a6s: String,
        a6Sc: String,
    },
    
});

module.exports = mongoose.model('TrAINetGI', TrAINetGISchema);