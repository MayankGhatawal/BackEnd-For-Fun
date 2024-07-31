import {v2 as cloudinary} from "cloudinary";
import fs from "fs";

cloudinary.config({ 
    cloud_name: CLOUDINARY_CLOUD_NAME, 
    api_key: CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (filePath)=>{
    try {
        if(!filePath) return null;
        const report = await cloudinary.uploader.upload(filePath, {
            resourseType: "auto",
        })
        console.log("File uploaded successfully", report.url);
        return report
    } catch (error) {
        fs.unlinkSync(filePath)
    }
}