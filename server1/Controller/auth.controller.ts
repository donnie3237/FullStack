//This file to make Controller process
const bcrypt = require('bcrypt')
const { ObjectID , ObjectId} = require('bson');
const user = require('../model/user.model');
import nodemailer from 'nodemailer'
import { Request ,Response} from "express";
const jwt = require('jsonwebtoken')

exports.Register = async (req:Request,res:Response) => {
    const User = user
    const {name ,email } = req.body
    
    const hashPasswoed = await bcrypt.hash(req.body.password , 10)
    console.log(hashPasswoed)
    const new_user =  new User({name ,email , password:hashPasswoed })

    new_user.save((err : any, result: any) => {
        if (err) {
            res.sendStatus(400);
        } else {
            res.sendStatus(201)
        }
    })
}; 

exports.Login = async (req:Request,res:Response) => {
    const User = user
    const {email} = req.body
    
    User.find({"email":email}).then((result:any) => {
        if(result != ""){
            const matchPassword = bcrypt.compareSync(req.body.password ,result[0].password)
            if(matchPassword){
               const ID = result[0]._id
               const user = {ID:ID}
               const token:string = jwt.sign(user , process.env.SECRET_TOKEN)
               res.send(token)
            }else{
                res.send('wrongpassword')
            }
        }else{
            res.send('notfound')
        }
    })
}; 
exports.verify = (req:Request,res:Response) => {
    const {email} = req.body
    const sendTO = `${email}`
    const OTP = Math.floor(Math.random()* 1000000)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'paradorn3237@gmail.com',
            pass: process.env.MAIL_PASS
        }
    })
    const message = {
        from: 'dose',
        to: `${sendTO}`,
        sebject: 'dose',
        text: `รหัส OTP ของคุณคือ  ${OTP}`
    }
    transporter.sendMail(message,(err:any,result:any)=>{
        if(err){
            res.sendStatus(404)
        }else{
            res.send(`${OTP}`)
        }
    })
};
exports.getUser = (req:Request,res:Response) => {
    res.end()
};
  
  
  