const express = require("express");
const mongoose = require("mongoose")

const app = express();
const dotenv = require("dotenv");

dotenv.config();
require('./db/conn');

// const User = require('./model/userSchema');

app.use(express.json());

// to link the router files to make our route esay 
app.use(require('./router/auth'));


const PORT = process.env.PORT

//middleware
const middleware = (req,res, next)=>{
    console.log("Hello my middleware ")
    next();
}
// middleware();

// app.get('/',(req,res)=>{
//     res.send("hello wolrd from the server app.js")
// })

app.get('/about', middleware,(req,res)=>{
    console.log("hello about")
    res.send("Hellow about word from server")

})
app.get('/contact',(req,res)=>{
    res.send("Hellow contact word from server")

})
app.get('/login',(req,res)=>{
    res.send("Hellow login word from server")


})
app.get('/signup',(req,res)=>{
    res.send("Hellow register word from server")

})
// console.log("hii Anjali jayswal")

app.listen(PORT,()=>{
    console.log(`running on port ${PORT}`)
})