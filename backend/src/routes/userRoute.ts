import { Router } from "express";
import { User, UserDocument } from "../models/user";
import { tokenizePassword } from "../services/authService";

const userRoute = Router()

userRoute.post("/register", async (req, res) => {
    // Pass arguments
    const {email, username, password} = req.body

    // Define user
    const user = new User()

    user.email = email
    user.username = username
    user.avatarUrl = "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
    const accessToken = tokenizePassword(password, user.id)
    user.token = accessToken
    
    user.save()

    res.cookie("accessToken", accessToken);
    res.json({success: true, token: accessToken})
});
userRoute.get("/:userId/fetch", async (req, res) => {
    const user = await User.findOne({_id: req.params.userId})
    if(user != null) {
        user.token = undefined
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.json(user)
    }
})

export default userRoute