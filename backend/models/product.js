const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({

    name:{
        type:string,
        required:true
    },

    description:{
        type:string,
        required:true
    },

    countInStock:{
       type:number,
       required:true
    },

    imageUrl:{
        type:string,
        required:true
    }
})

const product = mongoose.model('products', productSchema);

module.exports = product