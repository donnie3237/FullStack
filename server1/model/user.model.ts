//make schema model

import mongoose from "mongoose";
const user = new mongoose.Schema(
    {
        name:{
            type: String,
        },
        email:{
            type: String,
        },
        password:{
            type : String,
        }
    }, 
    {   
        collection: 'users',
    }
)

module.exports = mongoose.model("user", user);