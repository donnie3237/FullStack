//router of server side

import express , {Request , Response} from 'express';
const Stock_Router : express.IRouter = express.Router();
const Stock_controller = require('../Controller/stock.controller');
Stock_Router.use(express.urlencoded({ extended: true }));
import cors from 'cors'
Stock_Router.use(cors({
    "origin":'*',
    "methods": ['GET','POST','PUT','DELETE']
}));
Stock_Router.use(express.json())
Stock_Router.get("/", (req : Request,res :Response)=>{
    res.send('Welcome to stock page')
})
Stock_Router.get("/get", (req : Request,res :Response)=>{
    Stock_controller.getStock(req,res);
})
Stock_Router.post('/add',(req : Request,res :Response)=>{
    Stock_controller.addStock(req,res);
})

module.exports = Stock_Router ;