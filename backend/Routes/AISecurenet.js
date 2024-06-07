const express = require('express');
const router = express.Router();
const AISecurenet = require('../Models/AISecurenet'); 


router.post('/add', async (req, res) => {
    try {
        const { initiation, monthly } = req.body; // Extracting initiation and monthly data from the request body
        const newAISecurenet = new AISecurenet({ initiation, monthly }); // Creating a new AISecurenet document
        const savedAISecurenet = await newAISecurenet.save(); // Saving the new document to the database
        res.status(201).json({ message: "AISecurenet document added successfully", data: savedAISecurenet });
    } catch (error) {
        console.error("Error adding AISecurenet document:", error);
        res.status(500).json({ error: "Failed to add AISecurenet document" });
    }
});


module.exports = router;


