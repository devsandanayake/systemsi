const mongoose = require('mongoose');

const AINetGISchema = new mongoose.Schema({
    Const :{
        type: String,
        required: true
    }
    }
);

module.exports = mongoose.model('AINetGI', AINetGISchema);