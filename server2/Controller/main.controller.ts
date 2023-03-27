//This file to make Controller process

const { ObjectID , ObjectId} = require('bson');
const model = require('../model/main.model');
import * as mqtt from 'mqtt'
import {Request ,Response} from "express";

exports.sendMassage = (req:Request,res:Response)=>{
    const client = mqtt.connect('mqtt://broker.hivemq.com:1883')
    const {message} = req.body
    client.on('connect',()=>{
        client.publish('dose',`hello world ${message}`)
        
        res.sendStatus(200)
    })
}

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
  
  
  
  