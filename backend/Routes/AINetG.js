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
router.patch('/AINetGI/:id', async (req, res) => {
    const { Const } = req.body;
    const { id } = req.params;

    try {
        const updatedAINetGI = await AINetGI.findByIdAndUpdate(id, { Const }, { new: true });

        if (!updatedAINetGI) {
            return res.status(404).json({ message: 'AINetGI not found' });
        }

        res.json(updatedAINetGI);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});



router.post('/AINetGI', async (req, res) => {
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
});


router.get('/AINetGMon', async (req, res) => {
    try {
        const AINetGMonData = await AINetGMon.find();
        res.json(AINetGMonData);
    } catch (error) {
        console.error('Error fetching AINetGMon data:', error.message);
        res.status(500).send('Server error');
    }
});

router.get('/AINetGI', async (req, res) => {
    try {
        const ainetgiData = await AINetGI.find();
        res.json(ainetgiData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


module.exports = router;