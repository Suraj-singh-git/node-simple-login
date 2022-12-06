const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
   email:String,
    password:String

})

module.exports = mongoose.model("User",userSchema)