const express = require('express');
const Order = require('../models/Order');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email').populate('vendor', 'name');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const { user, vendor, items, total, status } = req.body;
  if (!user || !items) {
    return res.status(400).json({ error: 'user and items are required' });
  }
  try {
    const order = new Order({ user, vendor, items, total: total || 0, status: status || 'received' });
    const saved = await order.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
