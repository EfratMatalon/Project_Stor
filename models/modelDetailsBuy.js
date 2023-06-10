var myMongos=require('mongoose')
var modelDetailsBuy= myMongos.Schema({
    //קוד ,קוד קניה, קוד משחק , כמות
    id:Number,idBuy:Number,idGame:Number,quantity:Number
})
var DetailsBuy=myMongos.model("buyDetails",modelDetailsBuy,"buyDetails")
module.exports=DetailsBuy