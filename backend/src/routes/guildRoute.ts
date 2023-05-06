import { Router } from "express";
import { Authorize, getIDByToken } from "../services/authService";

const guildRoute = Router()

guildRoute.get("/create", async (req, res) => {
    if (Authorize(req.headers.authorization)) {
        
    }
})

export default guildRoute