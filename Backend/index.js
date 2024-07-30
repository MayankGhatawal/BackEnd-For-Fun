import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("Our Backend is Properly Work!")
})

app.get("/features", (req, res)=>{
    res.send("Kyu Hila dala na !")
})

app.listen(3000)