import {asyncHandler} from "../utils/asyncHandler.js";

const registerUser = asyncHandler( async (req,res) => {
    // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images,check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token from response
    // check for user creation 
    // return response
   

    // const{fullname, email, username, password} = req.body
    // console.log("email: ", email);
    res.status(200).json({
        message:"ok"
    })
})

export {registerUser}
