const mongoose = require('mongoose');

const AISecurenetSchema = new mongoose.Schema({
     initiation:{
           Bandwith:String,
           Standard:String,
           Commitment:String
        },
    Monthly:{
            Bandwith:String,
            MaxUsers:String,
            ConcurrentUsers:String,
            ConcurrentSessions:String,
            Sprice:Number,
            year1CMR:Number,
            year2CMR:Number,
            year3CMR:Number
        }   


});

module.exports = mongoose.model('AISecurenet', AISecurenetSchema);