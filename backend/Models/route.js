const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    origin: {
        Month: {
            base: {
                directFiber: {
                    primary: {
                        Bandwith: {
                            type: String
                        },
                        Sprice: {
                            type: Number
                        },
                        year1CMR: {
                            type: Number
                        },
                        year2CMR: {
                            type: Number
                        },
                        year3CMR: {
                            type: Number
                        }
                    },
                    backup: {
                        Bandwith: {
                            type: String
                        },
                        Sprice: {
                            type: Number
                        },
                        year1CMR: {
                            type: Number
                        }
                    }
                },
                GPONbase: {
                    primary: {
                        Bandwith: {
                            type: String
                        },
                        Sprice: {
                            type: Number
                        },
                        year1CMR: {
                            type: Number
                        },
                        year2CMR: {
                            type: Number
                        },
                        year3CMR: {
                            type: Number
                        }
                    },
                    backup: {
                        Bandwith: {
                            type: String
                        },
                        Sprice: {
                            type: Number
                        },
                        year1CMR: {
                            type: Number
                        }
                    }
                }
            }
        },
        initiation: {
            base:{
                directFiber:{
                    FiberAvailability: {
                        Sprice: {
                            type: Number
                        },
                        year1Commitement: {
                            type: String
                        },
                        year2Commitement: {
                            type: String
                        },
                        year3Commitement: {
                            type: String
                        }
                    },
                    FiberNonAvailability: {
                        distance: {
                            type: String
                        },
                        Sprice: {
                            type: Number
                        },
                        year1Commitement: {
                            type: String
                        },
                        year2Commitement: {
                            type: String
                        },
                        year3Commitement: {
                            type: String
                        }
                    }
                },
                GPONbase:{
                        Sprice: {
                            type: Number
                        },
                        year1Commitement: {
                            type: String
                        },
                        year2Commitement: {
                            type: String
                        },
                        year3Commitement: {
                            type: String
                        }
                }
            }
           
        }
    }
});

module.exports = mongoose.model('Route', routeSchema);
