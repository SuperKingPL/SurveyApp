import { Router } from "express";
import { User } from "../models/user";
import { tokenizePassword } from "../services/authService";

const userRoute = Router()

userRoute.post("/register", async (req, res) => {
    const {email, username, password} = req.body
    const accessToken = tokenizePassword(password);
    await new User({
        email: email,
        token: accessToken,
        username: username
    }).save()
    res.cookie("accessToken", accessToken);
    res.json({success: true})
})

export default userRoute