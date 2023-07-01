const express = require("express")
const calc = require("./calc")

const app = express()

app.get("/time",function(req,res){

    let d = new Date();
    res.end(d+"")
}); 

app.get("/day",function(req,res){

    let d = new Date();
    res.end(d.getDay()+"")
});

app.get("/",function(req,res){

    res.end("welcome")
});

app.get("/calc",calc.addition)

app.listen("9999",function(req,res){
    console.log("Server Started")
});