var myMongos=require('mongoose')
var modelCategory=new myMongos.Schema({
   //קוד, שם קטגוריה
    id:Number,name:String
})
var category=myMongos.model("Category",modelCategory,"Category")
module.exports=category