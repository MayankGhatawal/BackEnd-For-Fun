import mongoose from "mongoose";
import express from "express";
import {USE_NAME} from "../controller/ui.new.js"
import dotenv from "dotenv";

dotenv.config(
    {
        path: "../env"
    }
);

const app = express();

(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${USE_NAME}`)
        app.on('error', (err)=>{
            console.error("ERROR ",err);
            process.exit(1);
        });
        app.listen(3000, function(){
            console.log("MongoDB Connected Successfully!");
        })
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
})()