const AINetGMon = require('../Models/AINetGMon');
const AINetGI = require('../Models/AINetGI');
const express = require('express');
const router = express.Router();

// @route POST api/AINetGMon
router.post('/AINetGMon', async (req, res) => {
    try {
        const { Bandwith, Standard, Commitment1Year, Commitment2Year, Commitment3Year } = req.body;
        const newAINetGMon = new AINetGMon({
            Bandwith,
            Standard,
            Commitment1Year,
            Commitment2Year,
            Commitment3Year
        });
        await newAINetGMon.save();
        res.json(newAINetGMon);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
);

// @route Patch api/AINetGI
router.patch('/AINetGI', async (req, res) => {
    try {
        const { Const } = req.body;
        const newAINetGI = new AINetGI({
            Const
        });
        await newAINetGI.save();
        res.json(newAINetGI);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}
);


router.get('/AINetGMon', async (req, res) => {
    try {
        const AINetGMon = await AINetGMon.find();
        res.json(AINetGMon);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

);

router.get('/AINetGI', async (req, res) => {
    try {
        const AINetGI = await AINetGI.find();
        res.json(AINetGI);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
}

);


module.exports = router;