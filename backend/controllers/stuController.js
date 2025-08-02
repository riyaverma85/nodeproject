
const stuModel=require("../models/stuModel");
const stuSave=async(req,res)=>{
    const {name,rollno,city,fees}=req.body;
    const student=await stuModel.create({
        name:name,
        rollno:rollno,
        city:city,
        fees:fees
    })
     console.log(req.body)
     res.send("Data saved successfully");
}

module.exports={
    stuSave
}