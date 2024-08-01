import express from 'express';
import { connectDB } from './db/connet.mongo';

const app = express();



connectDB()
.then( function (db) {
    console.log("connect");
})
.catch((error) => {
    console.log("Database error: " + error);
})





app.use(function(req, res, next) {
    console.log('Ready to serve');
    next();
})

app.use(function(req, res, next) {
    console.log('connecting ho raha h');
    next();
})

app.get("/", (req, res)=>{
    res.send("Our Backend is Properly Work!")
})

app.use(function(req, res, next) {
    console.log('Ab hum features wale route pe jaa rhe h');
    next();
})

app.get("/features", (req, res)=>{
    res.send("Kyu Hila dala na !")
})

app.listen(3000)