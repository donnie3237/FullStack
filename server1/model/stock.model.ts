//make schema model

import mongoose from "mongoose";
const stock = new mongoose.Schema(
    {
        name:{
            type: String,
            requried:true
        },
        price:{
            type: Number,
            requried:true
        },
        about:{
            type : String,
            requried:true
        }
    }, 
    {   
        collection: 'stock',
    }
)

module.exports = mongoose.model("stock", stock);