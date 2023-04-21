const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    res.status(200).json("This is your homePage")
})

app.listen(9090,()=>{
    console.log("Server is Running")
})