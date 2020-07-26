const express=require("express");
const mongoose=require("mongoose");
const core=require("cors");
require("dotenv").config();

const app=express();
app.use(express.json());
    app.use(cors());
    const PORT=process.env.PORT ||3000;
    app.listen(PORT,()=>console.log(`The server has started on port ${PORT}`));