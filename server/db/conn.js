const mongoose = require("mongoose")
// db connect copied from mongoosdb
const DB =process.env.DATABASE;


mongoose.connect(DB).then(()=>{
    console.log("connection succefully")
}).catch((err)=> console.log('no connection',err));


// use promoise 
// mongoose.connect(DB,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(()=>{
//     console.log("connection succefully")
// }).catch((err)=> console.log('no connection',err));
