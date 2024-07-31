import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

userSchema.pre("save", function(next){
    if(this.isModified("password")){
    this.password = bcrypt.hash(this.password, 10)
    next()}
    else{
        next()
    }
})

userSchema.methods.isPasswordCorrect = async function(password){
    await bcrypt.compare(password, this.password);
}

userSchema.methods.genrateAccessKey = function(){
    jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname
    },
        process.env.ACCESS_TOKEN_SECRET,
    {   
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })
}
userSchema.methods.genrateRefreshKey = function(){
    jwt.sign({
        _id: this._id,
    },
        process.env.REFRESH_TOKEN_SECRET,
    {   
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })
}
export const User = mongoose.model("User", userSchema);