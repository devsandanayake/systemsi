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
                    Sprice: String,
                    year1CMR: String,
                },
            },
        },
    },
    initiation: {
        base: {
            directFiber: {
                FiAvSprice: String,
                FiAvYear1CMR: String,
                FiAvYear2CMR: String,
                FiAvYear3CMR: String,
                FiNonAv: String,
                FiNonAvYear1CMR: String,
                FiNonAvYear2CMR: String,
                FiNonAvYear3CMR: String,
                Fi500Sprice: String,
                Fi500Year1CMR: String,
                Fi500Year2CMR: String,
                Fi500Year3CMR: String,
                Fi1000Sprice: String,
                Fi1000Year1CMR: String,
                Fi1000Year2CMR: String,
                Fi1000Year3CMR: String,
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
