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
        }
    }, 
    {   
        collection: 'board',
    }
)

module.exports = mongoose.model("model", model);