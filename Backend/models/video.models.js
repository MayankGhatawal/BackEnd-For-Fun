import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
    title:{
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    },
    description:{
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500
    },
    duration:{
        type: Number,
        required: true
    },
    views:{
        type: Number,
        default: 0
    },
    videoFile:{
        type: String,
        required: true
    },
    thumbnail:{
        type: String,
        required: true
    },
    owner:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    isPublished:{
        type: Boolean,
        default: false
    }
},{timestamps: true});

videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);