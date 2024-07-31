import mongoose from "mongoose";

const todo = mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    passwords: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
        unique: true
    }
    
},{timestamps: true});

const TodoModel = mongoose.model("TodoModel", todo);