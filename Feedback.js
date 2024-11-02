// routes/feedback.js
const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');

// POST route to handle feedback submission
router.post('/', async (req, res) => {
    const { name, email, rating, comments } = req.body;

    try {
        const feedback = new Feedback({ name, email, rating, comments });
        await feedback.save();
        res.status(200).json({ message: 'Feedback submitted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to submit feedback', error });
    }
});

module.exports = router;
