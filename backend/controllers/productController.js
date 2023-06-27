const product =  require('../models/product');

const getAllProducts = async(req, res)=>{

    try {
        const products = await product.find({});
        res.json(products);

    } catch (error) {
        console.error('error');
        res.status(500).json({message:'Server Error!!'})
        
    }
}

//controller to get each specific product by ID from the databas
const getProductById = async(req,res)=>{
    try {
        const singleproduct = await product.findById(req.params._id);
        res.json(singleproduct);

    } catch (error) {
        console.error(error)
        res.status(500).json({message:'server error'})
    }
}


module.exports = {
    getAllProducts,
    getProductById
}