import { asyncHandler } from "../utils/asynchandler";

const userRegistration = asyncHandler(async (req, res) =>{
    res.status(200).json({
        message: "Completed registration"
    })
})