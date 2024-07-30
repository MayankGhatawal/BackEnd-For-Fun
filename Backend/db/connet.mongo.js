import mongoose from "mongoose";
import express from "express";
import USE_NAME from "../controller/ui.new.js"

const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${USE_NAME}`)
        app.on('/', function(req, res){
            console.log("MongoDB Connected Successfully !");
        })
    } catch (error) {
        console.log("Error: " + error);
        process.exit(1);
    }
})()