var myMongos=require('mongoose')
var modelClient=new myMongos.Schema({
    id:Number,name:String,password:String,DetailsCard:Number 
})
var client=myMongos.model("client",modelClient,"clients")
module.exports=client