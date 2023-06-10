var express = require("express")
var router = express.Router()
var body = require('body-parser')
router.use(body.json())
var modelCategory = require('../models/modelCategory')
//שליפת הרשימה 
router.get('/getAll', (req, res) => {
    // ייצרנו משנה מקומי של מסד נתונים לצורך בדיקת הפונקציות
    // let mydata=[
    //     {id:1,name:"kkkkk"}
    // ]
    res.status(200, { 'Content-Type': 'application/json' })
    modelCategory.find({}, function (err, data) {
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})
//שליפת קטגוריה לפי קוד 
router.get('/getByid/:byid',(req,res)=>{
    let mybyid=req.params.byid
     res.status(200, { 'Content-Type': 'application/json' })
     modelCategory.find({id:mybyid}, function (err, data) {
        if (err)
            console.log(err);
        else
            res.json(data)
    })
}) 
  
//הוספה לרשימה 
router.put('/addCategory', (req, res) => {
    let NewCategory = req.body
    modelCategory.create({id:NewCategory.id,name:NewCategory.name},(err, data)=>{
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})
//מחיקת קטגוריה מהרשימה
router.delete('/delCategory/:idFotDel', (req, res) => {
    let idFotDel = req.params.idFotDel
    res.status(200, { 'Content-Type': 'application/json' })
    modelCategory.deleteOne({id:idFotDel},(err, data)=>{
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})
//עדכון הקטגוריה ברשימה 
router.put('/updeCategory/:Edit',(req,res)=>{
   let x=req.params.Edit
   let CategoeiForUpde=req.body
   modelCategory.findByIdAndUpdate(x,CategoeiForUpde,(err, data)=>{
    if (err)
        console.log(err);
    else
        res.json(data)
})

}) 
module.exports=router