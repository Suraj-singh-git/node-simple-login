const express = require("express");
require("./db/config.js");

const app = express();
const port = process.env.PORT||5000

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.set("view engine","ejs")
app.set("views","views")
app.use("/", require("./routes/route.js"));

app.listen(port, ()=>{
    console.log(`server is running on ${port}`)
});