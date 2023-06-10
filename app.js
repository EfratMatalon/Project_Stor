'use strict';
var express=require('express')
var app=express()
var cors=require('cors')
app.use(cors())
var mymongos=require('mongoose')
mymongos.connect("mongodb+srv://test:1234@cluster0.e1lxlbd.mongodb.net/",{ useNewUrlParser: true, useUnifiedTopology: true })
var db=mymongos.connection
db.on('open',function(){
    console.log("db open!!!!!!!!!!!!!!!!!!!!!");
})
//קטגוריה
var category=require('./controllers/categoryControler')
app.use('/category',category)
//לקוחות
var clients=require('./controllers/ClientsControler')
app.use('/clients',clients)
//משחקים
var game=require('./controllers/gameControler')
app.use('/game',game)
//קניות
var buy=require('./controllers/BuyControler');
app.use('/buy',buy)
//פרטי קניות
var buyDetails=require('./controllers/DetailsBuyControler')
app.use('/DetailsBuy',buyDetails)

app.listen(1234,function(){
    console.log('run!!!!!!!!!!');    
})