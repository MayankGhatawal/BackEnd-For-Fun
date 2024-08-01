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
        await mongoose.connect(`${process.env.MONGO_URL}/${USE_NAME}`);
        app.on('error', (err)=>{
            console.error("ERROR ",err);
            process.exit(1);
        });
        app.listen(process.env.PORT, function(){
            console.log("MongoDB Connected Successfully! at ",process.env.PORT);
        })
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
})

export { connectDB }