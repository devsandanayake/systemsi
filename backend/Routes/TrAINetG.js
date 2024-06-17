const TrAINetGI = require('../Models/TrAINetGI');
const TrAINetGMon = require('../Models/TrAINetGMon');
const express = require('express');
const router = express.Router();

router.post('/TrAINetGMon', async (req, res) => {
    try {
        const { Bandwith, MaxUsers, ConcurrentUsers, ConcurrentSessions, Sprice, year1CMR, year2CMR, year3CMR } = req.body;
        const newTrAINetGMon = new TrAINetGMon({
            Bandwith,
            MaxUsers,
            ConcurrentUsers,
            ConcurrentSessions,
            Sprice,
            year1CMR,
            year2CMR,
            year3CMR
        });
        await newTrAINetGMon.save();
        res.json(newTrAINetGMon);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
);

router.get('/TrAINetGMon', async (req, res) => {
    try {
        const trAINetGMonData = await TrAINetGMon.find(); // Use a different variable name to store the data
        res.json(trAINetGMonData); // Return the fetched data as JSON response
    } catch (error) {
        console.error('Error fetching TrAINetGMon data:', error.message);
        res.status(500).send('Server error');
    }
});

router.post('/TrAINetGI', async (req, res) => {
    try {
        const { Bandwith, Standard, Commitment } = req.body;
        const newTrAINetGI = new TrAINetGI({
            Bandwith,
            Standard,
            Commitment
        });
        await newTrAINetGI.save();
        res.json(newTrAINetGI);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
);


router.get('/TrAINetGI', async (req, res) => {
    try {
        const trAINetGIData = await TrAINetGI.find(); // Use a different variable name to store the data
        res.json(trAINetGIData); // Return the fetched data as JSON response
    } catch (error) {
        console.error('Error fetching TrAINetGI data:', error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;