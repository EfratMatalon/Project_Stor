var express=require("express")
var router=express.Router()
var cors=require('cors')
router.use(cors())
var modelDetailsBuy=require('../models/modelDetailsBuy')

var counter=0
//הוספת קניה
var bodyparser = require("body-parser")
router.use(bodyparser.json())
router.put('/AddBuy',(req,res)=>{
    let NewBuy=req.body
    res.status(200, { 'Content-Type': 'application/json' })
    modelDetailsBuy.create({ id:++counter.id,idBuy:NewBuy.idBuy,idGame:NewBuy.idGame,
        amount:NewBuy.amount }),(err, result) => {
            if (err)
                console.log(err);
            else
                res.json(result) }
       
 })
 module.exports=router