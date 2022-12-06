const mongoose = require("mongoose");
require("dotenv").config()
//connecting mongoose
mongoose.connect(process.env.mongodb,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("database connected"));


module.exports = mongoose;






