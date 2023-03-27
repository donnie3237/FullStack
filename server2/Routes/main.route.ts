//router of server side
import express from 'express';
const Main_router : express.IRouter = express.Router();
const controller = require('../Controller/main.controller');
import cors from 'cors'
Main_router.use(express.urlencoded({ extended: true }));
Main_router.use(express.json())
Main_router.use(cors({origin:'*'}))

Main_router.get("/", (req : express.Request,res :express.Response)=>{
    res.send('Welcome to expressTS2')
})
Main_router.post('/example',(req : express.Request,res :express.Response)=>{
    controller.exampleMethod(req,res);
})
Main_router.post('/send',(req : express.Request,res :express.Response)=>{
    controller.sendMassage(req,res);
})

module.exports = Main_router ;