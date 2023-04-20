import { Router } from "express";
import { User } from "../models/user";
import { tokenizePassword } from "../services/authService";

const userRoute = Router()

userRoute.post("/register", async (req, res) => {
    // Pass arguments
    const {email, username, password} = req.body

    // Define user
    const user = new User()

    user.email = email
    user.username = username
    const accessToken = tokenizePassword(password, user.id)
    user.token = accessToken
    
    user.save()

    res.cookie("accessToken", accessToken);
    res.json({success: true, token: accessToken})
})

export default userRoute