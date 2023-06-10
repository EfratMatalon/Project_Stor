var myMongos=require('mongoose')
var modelGame= myMongos.Schema({
    //:שם משחק, קוד קטגוריה, מחיר, תמונ ה , תאור ,כמות קוד המשחק
    id:Number,name:String,IdCategory:Number,price:Number,pic:String,Description:String,amount:Number
})
var game=myMongos.model("game",modelGame,"game")
module.exports=game