var express = require("express")
var router = express.Router()
var modelBuy = require('../models/modelBuy')
var cors=require('cors')
router.use(cors())

var counter = 1
//שליפת הרשומה האחרונה
router.get('/getCounter', function (req, res) {
    let x = counter
    res.status(200, { 'Content-Type': 'applicatin/json' })
    modelBuy.find({ id: x }, (err, result) => {
        if (err)
            console.log(err);
        else
            res.json(result)
    })
})
//הוספת קניה
var body = require("body-parser")
router.use(body.json())
router.put('/addShopping', (req, res) => {
    let newBuy = req.body
    res.status(200, { 'Content-Type': 'application/json' })
    modelBuy.create({
        id: ++counter,
        clientId: newBuy.clientId,
        Date: newBuy.Date,
        sum: newBuy.sum
    }, (err, result) => {
        if (err)
            console.log(err);
        else
            res.json(result)
    })
})
module.exports = router