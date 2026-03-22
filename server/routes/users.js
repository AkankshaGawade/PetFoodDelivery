const express = require('express');
const User = require('../models/User');

const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create user (empty user creation support)
router.post('/', async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = new User({ name: name || 'Unnamed', email: email || `user${Date.now()}@example.com`, role: role || 'customer' });
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
