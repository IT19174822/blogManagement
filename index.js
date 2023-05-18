const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/BMS");

const express= require("express");
const app = express();







const isBlog=require("./middlewares/isBlog");
app.use(isBlog.isBlog);

//for admin routes
const adminRoute=require("./routes/adminRoute");
app.use('/',adminRoute);
app.listen(3000,function(){
    console.log("Server is running");
});

