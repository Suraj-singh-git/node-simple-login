const express = require("express");
const router = new express.Router()
const userModel = require("../models/User")
const jwt = require("jsonwebtoken")
router.get("/index",(req, res)=>{
    res.render("index")
})
router.get("/register",(req, res)=>{
    res.render("register")
})
router.get("/login",(req, res)=>{
    res.render("login")
})

router.post("/register",async(req, res)=>{
    const {fname,lname,email,pwd} = req.body;

    const user = new userModel({
        fname,
        lname,
        email,
        password:pwd
    })
    await user.save();

    // res.send({
    //     message:"Register Success !"
    // })

    res.redirect("/login")
})

router.post("/login", async(req, res)=>{
    const {email,password} = req.body;
    const user = await userModel.findOne({email,password})
    if(user)
    {
        //generating web token
      const token = jwt.sign({username:user.email},"suraj")   //secret key

      console.log(token)

    res.redirect("/index")

    }
    else{
        res.send({
            message:"Login Failed !"
        })
    }
})



router.get("/", async(req, res)=>{
    const users = await userModel.find()
    res.send(users);
    // console.log(user.fname)
})
module.exports = router