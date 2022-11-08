const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
//const productRoutes = require('./routes/productRoutes');

const app = express(); 

//connect app to the database;
connectDB();

const port = process.env.port || 5000;

//creating the functionalities for the routes 
//App.use(express.json());
//App.use('/api/products', 'productRoutes');


 
app.listen(port, ()=>console.log(`server running on port ${port}`));