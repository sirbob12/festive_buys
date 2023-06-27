const express = require('express');
const {getAllProducts, getProductById} = require('../controllers/productController')
const router = express.Router();

//creating the routes for our application


//@desc GET all products from database
//@routes GET /api/products
//@access Public
router.get('/',getAllProducts);


//@desc GET product by ID from database
//@routes GET /api/products/:id
//@access Public
router.get('/:_id',getProductById);


module.exports = router




