import { Router } from "express";
import { User, UserDocument } from "../models/user";
import { Authorize, encryptPassword } from "../services/authService";

const userRoute = Router()

userRoute.post("/register", async (req, res) => {
    // Pass arguments
    const {email, username, password} = req.body

    // Define user
    const user = new User()

    user.email = email.toLowerCase()
    user.username = username
    user.avatarUrl = "https://external-preview.redd.it/4PE-nlL_PdMD5PrFNLnjurHQ1QKPnCvg368LTDnfM-M.png?auto=webp&s=ff4c3fbc1cce1a1856cff36b5d2a40a6d02cc1c3"
    const accessToken = encryptPassword(password, user.id)
    user.token = accessToken
    user.guilds = []
    
    user.save()

    res.cookie("accessToken", accessToken);
    res.json({success: true, token: accessToken})
});
userRoute.get("/:userId/fetch", async (req, res) => {
    const auth = await Authorize(req.headers.authorization, req.params.userId);
    if (!auth) {
        const user = await User.findById(req.params.userId);
        if (user != null) {
            user.token = undefined
            res.json(user)
        }
    } else {
        const user = await User.findById(req.params.userId);
        res.json(user)
    }
})

export default userRoute