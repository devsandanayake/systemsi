const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    origin: {
        base: {
            directFiber: {
                primary: {
                    Bandwidth: String,
                    Sprice: String,
                    year1CMR: String,
                    year2CMR: String,
                    year3CMR: String,
                },
                backup: {
                    Bandwidth: String,
                    Sprice: String,
                    year1CMR: String,
                },
            },
            GPONbase: {
                primary: {
                    Bandwidth: String,
                    Sprice: String,
                    year1CMR: String,
                    year2CMR: String,
                    year3CMR: String,
                },
                backup: {
                    Bandwidth: String,
                    Sprice: String,
                    year1CMR: String,
                },
            },
        },
    },
    initiation: {
        base: {
            directFiber: {
                FiberAvailability: {
                    Sprice: String,
                    year1Commitment: String,
                    year2Commitment: String,
                    year3Commitment: String,
                },
                FiberNonAvailability: {
                    distance: String,
                    Sprice: String,
                    year1Commitment: String,
                    year2Commitment: String,
                    year3Commitment: String,
                },
            },
            GPONbase: {
                FiberAvailability: {
                    Sprice: String,
                    year1Commitment: String,
                    year2Commitment: String,
                    year3Commitment: String,
                },
                FiberNonAvailability: {
                    distance: String,
                    Sprice: String,
                    year1Commitment: String,
                    year2Commitment: String,
                    year3Commitment: String,
                },
            },
        },
    },
});

module.exports = mongoose.model('Route', RouteSchema);
