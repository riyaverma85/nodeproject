
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
const stuDisplay=async(req,res)=>{
    const student=await stuModel.find();
    res.send(student)
}
const stuUpdate=async(req,res)=>{
    const student=await stuModel.find();
    res.send(student)
}
const dataDelete=async(req,res)=>{
    //console.log(req.params);
    const {id}=req.params;
    await stuModel.findByIdAndDelete(id);
     res.send("Data deleted successfully");
}

module.exports={
    stuSave,
    stuDisplay,
    stuUpdate,
    dataDelete
}