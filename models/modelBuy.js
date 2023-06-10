var myMongos=require('mongoose')
var modelBuy=new myMongos.Schema({
  //סכום סופי, תאריך,קוד לקוח, קוד
   id:Number,clientId:Number,Date:String,sum:Number 
})
var Buy=myMongos.model("Buy",modelBuy,"buy")
module.exports=Buy