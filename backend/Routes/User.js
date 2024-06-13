const User = require('../Models/User');
const express = require('express');
const router = express.Router();

router.post('/add', async (req, res) => {
    console.log('Request Body:', req.body); // Log the request body

    const { username, password, role } = req.body;

    const user = new User({
        username,
        password,
        role
    });

    try {
        const result = await user.save();
        console.log('Saved User:', result); // Log the saved document
        res.status(201).json({
            message: "User added successfully",
            user: result,
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            error: err.message,
        });
    }
}
);

router.get('/all', (req, res) => {
    User.find()
        .then((users) => {
            res.status(200).json({
                users: users
            });
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            });
        });
}
);

//login 
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username, password: password });
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }

        res.status(200).json({
            user: user.role,
            status: 'LoginIN'
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({
            error: err
        });
    }
}
);



module.exports = router;


