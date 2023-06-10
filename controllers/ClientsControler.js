var express = require("express")
var router = express.Router()
var body = require('body-parser')
router.use(body.json())
var cors=require('cors')
router.use(cors())
var modelClient = require('../models/modelClient')
//שליפת כל הלקוחות  
router.get('/getAllClient', (req, res) => {
    res.status(200, { 'Content-Type': 'application/json' })
    modelClient.find({}, (err, result) => {
        if (err)
        
            console.log(err);
        else
            res.json(result)
    })
})
//הוספה
router.put('/addClient', (req, res) => {
    let NewClient = req.body
    res.status(200, { 'Content-Type': 'application/json' })
    modelClient.create({
        name: NewClient.name,
        password: NewClient.password,
        DetailsCard: NewClient.DetailsCard }, (err, data) => {
   
        if (err)
            console.log(err);
        else
            res.json(data)
    })
})
//בדיקה אם קיים לקוח לפי משתמש וסיסמא 
router.get('/getById/:name/:password', function (req, res) {
    let clientName = req.params.name
    let clientPassword = req.params.password
    console.log(clientName+" "+clientPassword);
    res.status(200, { 'Content-Type': 'applicatin/json' })
    modelClient.find({name:clientName,password:clientPassword}, (err, result) => {
        if (err)
            console.log(err);
        else
            res.json(result)
    })
})
module.exports = router