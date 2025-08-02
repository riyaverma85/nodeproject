
const express=require("express");
const route=express.Router();
const stuControll=require("../controllers/stuController");

route.post("/save",stuControll.stuSave);

module.exports=route;