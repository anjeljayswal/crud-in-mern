const express = require('express');

const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`hello wolrd from the server auth.js `)
})

// using promises 
// router.post('/register',(req,res)=>{
//     const  {name, email, work, phone, password, cpassword} = req.body;
//     if(!name || !email || !work || !phone || !password || !cpassword){
//         return res.status(422).json({error :"Plx filled the field properly"});
//     }
//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error: "Email already Exist"});
//         }

//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save().then(()=>{
//             res.status(201).json({message : "user registered successfuly" });
//         }).catch((err) => res.status(500).json({error : "Failed to register"}));
//     }).catch(err => {console.log(err)});




//     // console.log(req.body.name);
//     // console.log(req.body.email);

//     // res.json({message:req.body})
//     // res.send("register mu")
// })

// using async await 
router.post('/register', async (req, res) => {
    const { name, email, work, phone, password, cpassword } = req.body;
    if (!name || !email || !work || !phone || !password || !cpassword) {
        return res.status(422).json({ error: "Plx filled the field properly" });
    }
    try {
        const userExist =await User.findOne({ email: email })
        if (userExist) {
            return res.status(422).json({ error: "Email already Exist" });
        }
        const user = new User({ name, email, phone, work, password, cpassword });



        const userRegister = await user.save();
        if(userRegister){
            res.status(201).json({ message: "user registered successfuly" });
        }else{
            res.status(500).json({ error: "Failed to register" })
        }
    } catch(err){  console.log(err) };
    // res.json({message:req.body})
})

// login router 
router.post('/signin', async(req,res)=>{
    // console.log(req.body);
    // res.json({messsage :"awsome"})
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error:"Plz Filled the Data"})
        }
        const userLogin =await User.findOne({email:email});
        if(!userLogin){
            res.json({message:" error user signin "});
        }else{
            res.json({message:"user signin Successfully"});
        }
        console.log(userLogin);
       


    }catch(err){
        console.log(err);
    }

})
module.exports = router