const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();

// db connect copied from mongoosdb
const DB ='mongodb+srv://anjali:anjali@cluster0.bubldov.mongodb.net/mernstack?retryWrites=true&w=majority' 
// use promoise 
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log("connection succefully")
// }).catch((err)=> console.log('no connection',err));




//middleware

mongoose.connect(DB).then(()=>{
    console.log("connection succefully")
}).catch((err)=> console.log('no connection',err));

const middleware = (req,res, next)=>{
    console.log("Hello my middleware ")
    next();
}
// middleware();

app.get('/',(req,res)=>{
    res.send("Hellow word from server")

})
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

app.listen(3040,()=>{
    console.log("running on port 3040")
})