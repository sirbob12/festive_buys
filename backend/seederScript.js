require('dotenv').config();
const connectDB = require('./config/db')
const product = require('./models/product')
const productData = require('./data/products');


//create the script for adding data to the database

//connect to database
connectDB() 

const ImportData = async()=>{

    try {
        await product.deleteMany({});
        await product.insertMany({productData});
        console.log('Data import was successful')
        process.exit();

    } catch (error) {
        console.error("Error with data import")
        process.exit(1)
    }
}

ImportData();