//This file to make Controller process

const { ObjectID , ObjectId} = require('bson');
const model = require('../model/main.model');

import {Express , Request ,Response} from "express";
// type Action =  express.Request;
// type Reaction   =  express.Response;

exports.exampleMethod = (req:Request,res:Response) => {
    const User = model

    const new_user = new User({
        name: req.body.name,
        age: req.body.age
    })
    
    new_user.save((err : any, result: any) => {
        if (err) {
            res.sendStatus(400);
        } else {
            res.sendStatus(201)
        }
    })
    
};  
  
  
  
  