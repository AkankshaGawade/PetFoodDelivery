const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: false },
  items: { type: [Object], required: true },
  total: { type: Number, required: true, default: 0 },
  status: { type: String, enum: ['received', 'preparing', 'delivered', 'cancelled'], default: 'received' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
