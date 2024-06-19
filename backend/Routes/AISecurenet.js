const express = require('express');
const router = express.Router();
const AISecurenet = require('../Models/AISinit'); 
const AISecurenetMonth = require('../Models/AISmon');

//Ai initialisation inertion
router.post('/add/init', async (req, res) => {
    try {
        const { data } = req.body;
        const newAISecurenet = new AISecurenet({ data });
        const savedAISecurenet = await newAISecurenet.save();
        res.status(201).json({ message: "AISecurenet document added successfully", data: savedAISecurenet });
    } catch (error) {
        console.error("Error adding AISecurenet document:", error);
        res.status(500).json({ error: "Failed to add AISecurenet document" });
    }
});

// Backend Route (Express)
router.patch('/update/init/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const updatedAISecurenet = await AISecurenet.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedAISecurenet) {
            return res.status(404).json({ message: 'AISecurenet not found' });
        }

        res.json({ message: 'AISecurenet updated successfully', data: updatedAISecurenet });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});


//Ai monthly inertion
router.post('/add/month', async (req, res) => {
    try {
        const { Bandwith, MaxUsers, ConcurrentUsers, ConcurrentSessions, Sprice, year1CMR, year2CMR, year3CMR } = req.body; // Destructuring the request body 
        const newAISecurenetMonth = new AISecurenetMonth({ Bandwith, MaxUsers, ConcurrentUsers, ConcurrentSessions, Sprice, year1CMR, year2CMR, year3CMR }); // Creating a new document in AISecurenet collection
        const savedAISecurenetMonth = await newAISecurenetMonth.save(); // Saving the new document to the database
        res.status(201).json({ message: "AISecurenet document added successfully", data: savedAISecurenetMonth });
    } catch (error) {
        console.error("Error adding AISecurenet document:", error);
        res.status(500).json({ error: "Failed to add AISecurenet document" });
    }
});

//Ai initialisation retrieval
router.get('/get/init', async (req, res) => {
    try {
        const AISecurenetData = await AISecurenet.find();
        res.status(200).json({ 
            AISecurenet: AISecurenetData
        });
    } catch (error) {
        console.error("Error fetching AISecurenet documents:", error);
        res.status(500).json({ error: "Failed to fetch AISecurenet documents" });
    }
});


//Ai monthly retrieval
router.get('/get/month', async (req, res) => {
    try {
        const AISecurenetMonthData = await AISecurenetMonth.find(); // Fetching all documents from AISecurenet collection
        res.status(200).json({ 
            AISecurenetMonth: AISecurenetMonthData });
    } catch (error) {
        console.error("Error fetching AISecurenet documents:", error);
        res.status(500).json({ error: "Failed to fetch AISecurenet documents" });
    }
});


module.exports = router;


