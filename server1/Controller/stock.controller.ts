//This file to make Controller process
const bcrypt = require('bcrypt')
const { ObjectID , ObjectId} = require('bson');
const stock = require('../model/stock.model');

import { Request ,Response} from "express";

exports.addStock = (req:Request , res:Response)=>{
    const {name , price , about} = req.body
    stock.create({name , price , about},function(err:any,result:any){
        if(err){
            res.sendStatus(400)
        }else{
            res.sendStatus(201)
        }
    })
}
exports.getStock = (req:Request , res:Response)=>{
    stock.find({},function(err:any,result:any){
        if(err){
            res.sendStatus(400)
        }else{
            res.send(result)
        }
    })
}