const express = require('express');

const router = express.Router();

require('../db/conn');
const User = require("../model/userSchema");

router.get('/',(req,res)=>{
    res.send(`hello wolrd from the server auth.js `)
})

router.post('/register',(req,res)=>{
    const  {name, email, work, phone, password, cpassword} = req.body;
    if(!name || !email || !work || !phone || !password || !cpassword){
        return res.status(422).json({error :"Plx filled the field properly"});
    }
    User.findOne({email:email})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error: "Email already Exist"});
        }

        const user = new User({name, email, phone, work, password, cpassword});

        user.save().then(()=>{
            res.status(201).json({message : "user registered successfuly" });
        }).catch((err) => res.status(500).json({error : "Failed to register"}));
    }).catch(err => {console.log(err)});




    // console.log(req.body.name);
    // console.log(req.body.email);
    
    // res.json({message:req.body})
    // res.send("register mu")
})
module.exports = router