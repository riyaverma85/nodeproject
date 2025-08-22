
// const express=require("express");
// const app=express();
// const stuRoute=require("./routes/stuRoutes");
// const mongoose=require("mongoose");
// const bodyparser=require("body-parser");
// require("dotenv").config();
// const cors=require("cors");
// mongoose.connect(process.env.DBCON).then(()=>{
//     console.log("Database connected successfully");
// })
    
// //Body parser middleware
// app.use(bodyparser.urlencoded({extended:true}));
// app.use(bodyparser.json());
// app.use(cors());
// app.use("/students",stuRoute);

// app.use((req,res,next)=>{
//     console.log("app level");
//     next();
// })
// app.get("/home",(req,res)=>{
//     console.log("this my home page");
//     res.send("okk")
// })
// const port=process.env.PORT


// app.listen(port,()=>{
//     console.log(`Server is running on port:${port}`);
// }) 

// // app.listen(3000,()=>{
// //     console.log("Server is running on port 3000");
// // })






















// const EventEmitter=require("events");
// const event=new EventEmitter();  //create

// event.on("doorbell",()=>{   //listen
//     console.log("Bahar kon hai???")
// })

// event.emit("doorbell");  //fire














//create ,fire(emit), listen(on)

// const myevent=require("events");
// const Myevent=new myevent();  //create

// Myevent.on("doorbell",(nm)=>{  //listen
//     if(nm=="raj"){
//       console.log("Ruko "+nm+" aati hu")
//     }
    
// })
// console.log("Hey!")
// Myevent.emit("doorbell","raj");  //fire   


let fs=require("fs");
let rs=fs.createReadStream("./demo.txt");

rs.on("open",()=>{
    console.log("file is open");
})
rs.emit("open");