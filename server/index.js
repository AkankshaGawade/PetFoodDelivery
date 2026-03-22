require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const userRoutes = require('./routes/users');
const vendorRoutes = require('./routes/vendors');
const orderRoutes = require('./routes/orders');

const app = express();
const port = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'PetFoodDelivery backend is running' });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Chicken Meal', price: 18.99 },
    { id: 2, name: 'Salmon Treat', price: 8.49 },
    { id: 3, name: 'Grain-Free Kibble', price: 24.95 }
  ]);
});

app.use('/api/users', userRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/orders', orderRoutes);

app.listen(port, () => {
  console.log(`PetFoodDelivery backend listening on http://localhost:${port}`);
});
