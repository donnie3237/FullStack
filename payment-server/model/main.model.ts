//make schema model

import mongoose from "mongoose";
const model = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        age:{
            type: Number,
            required: true
        },
        time:{
            type:String,
        }
    }, 
    {   
        collection: 'model'
    }
)

module.exports = mongoose.model("model", model);