import express from 'express';

const app = express();

app.get("/", (req, res)=>{
    res.send("Our Backend is Properly Work!")
})

app.listen(3000)