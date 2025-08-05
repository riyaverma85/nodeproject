
const express=require("express");
const route=express.Router();
const stuControll=require("../controllers/stuController");

route.post("/save",stuControll.stuSave);
route.get("/display",stuControll.stuDisplay);
route.get("/update",stuControll.stuUpdate);
route.delete("/delete/:id",stuControll.dataDelete);

module.exports=route;