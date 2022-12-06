const mongoose = require("mongoose");

//connecting mongoose
mongoose.connect("mongodb+srv://test:test@cluster0.hvsjfft.mongodb.net/test3",{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("database connected"));


module.exports = mongoose;






