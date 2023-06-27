const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');

const app = express(); 

//connect app to the database;
connectDB();

//enable cors
app.use(cors());

const port = process.env.port || 5000;

//creating the functionalities for the routes 
app.use(express.json());
app.use('/api/products', productRoutes);



 
app.listen(port, ()=>console.log(`server running on port ${port}`));