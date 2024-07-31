import mongoose from "mongoose";

const userSchema = new Schema(
{
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        lowercase: true,
        unique: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar:{
        type: String,
        required: true
    },
    coverimage:{
        type: String,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
        validate: {
            validator: (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password),
            message: "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        }

    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    refreshToken: {
        type: String,
        select: false,
    },

},{timestamps: true});

export const User = mongoose.model("User", userSchema);