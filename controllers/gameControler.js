var express=require("express")
var router=express.Router()
 var body = require("body-parser")
 router.use(body.json())
var modelGame=require('../models/modelGame')
var count=0
//שליפת הרשימה 
router.get('/getAll',(req,res)=>{
    res.status(200,{'Content-Type':'application/json'})
    modelGame.find({},function(err,data){
        if(err)
        console.log(err)
        else
        res.json(data)
       
    })
})
//שליפת משחק לפי קוד
router.get('/getByid/:id',(req,res)=>{
    let byid=req.query.Byid
     res.status(200, { 'Content-Type': 'application/json' })
     modelGame.find({id:byid}, function (err, data) {
        if (err)
            console.log(err);
        else
            res.json(data)
    })
    }) 
// הוספה לרשימה 
router.put('/addGame', (req, res) => {
    let NewGame= req.body  
    res.status(200, { 'Content-Type': 'application/json' })
    modelGame.create({id:count++, name:NewGame.name,IdCategory:NewGame.IdCategory,price:NewGame.params
        ,pic:NewGame.pic,Description:NewGame.Description,amount:NewGame.amount},(err, data)=>{
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})
//מחיקת משחק מהרשימה
router.delete('/delGame/:Id', (req, res) => {
    let idForDell = req.params.Id
     res.status(200, { 'Content-Type': 'application/json' })
    modelGame.deleteOne({id:idForDell},(err, data)=>{
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})

//עדכון המשחק ברשימה
router.put('/updeGame/:Edit',(req,res)=>{
   let x=req.params.Edit
   let gameForUpde=req.body
   modelGame.findByIdAndUpdate(x,gameForUpde,(err, data)=>{
    if (err)
        console.log(err);
    else
        res.json(data)
})
})
//שליפת משחק לפי קטגוריה מבוקשת 
router.get('/getGameByategory/:myId',(req,res)=>{
    let GameBycategory=req.params.myId
    res.status(200,{'ConCtent-Type':'application/json'})
    modelGame.find({IdCategory:GameBycategory},function(err,data){
        if(err)
        console.log(err);
        else
        res.json(data)
    })
})
module.exports=router