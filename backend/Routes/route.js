const express = require('express');
const router = express.Router();
const Route = require('../Models/route');


router.post('/add', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body

    const { origin, initiation } = req.body;

    const route = new Route({
        origin,
        initiation,
    });

    try {
        const result = await route.save();
        console.log('Saved Route:', result); // Log the saved document
        res.status(201).json({
            message: "Route added successfully",
            route: result,
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            error: err.message,
        });
    }
});



router.get('/all', (req, res) => {
    Route.find()
        .then((routes) => {
            res.status(200).json({
                routes: routes
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        });
}

);




module.exports = router;