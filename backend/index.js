
const express=require("express");
const app=express();
const stuRoute=require("./routes/stuRoutes");
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
const cors=require("cors");
mongoose.connect("mongodb://localhost:27017/predb").then(()=>{
    console.log("Database connected successfully");
})
    
//Body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(cors());
app.use("/students",stuRoute);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})