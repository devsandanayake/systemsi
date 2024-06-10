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
});

//get element by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const route = await Route.findById(id);
        if (!route) {
            return res.status(404).json({
                error: "Route not found"
            });
        }
        res.status(200).json({
            route: route
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            error: err.message
        });
    }
});

router.patch('/route/update/:id', async (req, res) => {
    const id = req.params.id;
    const { origin, initiation } = req.body;
    try {
        const route = await Route.findById(id);
        if (!route) {
            return res.status(404).json({
                error: "Route not found"
            });
        }
        route.origin = origin;
        route.initiation = initiation;
        const result = await route.save();
        res.status(200).json({
            message: "Route updated successfully",
            route: result
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            error: err.message
        });
    }
});



module.exports = router;
