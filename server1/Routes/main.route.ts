//router of server side
import cors from 'cors'
import express , {Request , Response} from 'express';
const Main_router : express.IRouter = express.Router();
const Auth_controller = require('../Controller/auth.controller');

Main_router.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
Main_router.use(express.json())
Main_router.get("/", (req : Request,res :Response)=>{
    res.send('Welcome to expressTS')
})
Main_router.post('/register',(req : Request,res :Response)=>{
    Auth_controller.Register(req,res);
})
Main_router.post('/login',(req : Request,res :Response)=>{
    Auth_controller.Login(req,res);
})
Main_router.post('/otp',(req : Request,res :Response)=>{
    Auth_controller.verify(req,res);
})

module.exports = Main_router ;