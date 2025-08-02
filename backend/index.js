
const express=require("express");
const app=express();
const stuRoute=require("./routes/stuRoutes");
const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/shivdb").then(()=>{
    console.log("Database connected successfully");
})
    

app.use("/students",stuRoute);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})