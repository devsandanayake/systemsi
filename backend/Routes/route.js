const express = require('express');
const router = express.Router();
const Route = require('../Models/route');


router.post('/add', (req, res) => {
    const route = new Route({
        origin: req.body.origin,
        initiation: req.body.initiation
    });
    route.save()
        .then((result) => {
            res.status(201).json({
                message: "Route added successfully",
                route: result
            });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                error: err.message
            });
        });
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