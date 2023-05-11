import { Router } from "express";
import { User } from "../models/user";
import { encryptPassword } from "../services/authService";

const authRoute = Router();

authRoute.post("/", async(req, res) => {
    const {email, password} = req.body;

    const uid = await(await User.findOne({email: email}));
    if (uid == null) {res.json({"status": "auth_failed"}); return}

    if (encryptPassword(password, uid?.id) === uid?.token) {
        res.json({
            "status": "auth_success",
            "token": uid?.token
        })
    } else {
        res.json({
            "status": "auth_failed"
        })
    }
})

export default authRoute