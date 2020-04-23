const express = require('express');
var app = express();
var server = require('http').createServer(app);
app.get('/',function(req, res ){
    res.send("Welcome");
})
app.get('/add/:num1/:num2',function(req, res ){
    console.log("Addition");
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result = num1 + num2;
    res.send({"answer":result});
})
app.get('/sub/:num1/:num2',function(req, res ){
    console.log("Subtraction");
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result = num1 - num2;
    res.send({"answer":result});
})
app.get('/mul/:num1/:num2',function(req, res ){
    console.log("Multiplication");
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result = num1 * num2;
    res.send({"answer":result});
})
app.get('/div/:num1/:num2',function(req, res ){
    console.log("Division");
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    var result = num1 / num2;
    res.send({"answer":result});
})
server.listen('5001',function(){
    console.log('Server started successfully');
})