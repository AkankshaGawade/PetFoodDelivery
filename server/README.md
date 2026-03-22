# PetFoodDelivery Backend

## Setup

1. cd server
2. npm install
3. Create `.env` with `MONGO_URI` (default is `mongodb://localhost:27017/petfooddelivery`)
4. npm run dev (or npm start)

## API Endpoints

- GET /api/health
- GET /api/products
- GET /api/users
- POST /api/users
- GET /api/vendors
- POST /api/vendors
- GET /api/orders
- POST /api/orders

> Notes: Collections are created automatically by Mongoose when the first document is inserted.
