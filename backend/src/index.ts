import express, { Express, Request, Response } from "express";
import mongoose, { Mongoose } from "mongoose";
import { User } from "./models/user";
import serverRouter from "./routes/server";

const app: Express = express()
const database = mongoose.connect("mongodb://127.0.0.1:27017/SurveyDB").then((e) => {
    console.log("Connected to DB.")

    app.use(express.json())
    app.use("/api/v1/", serverRouter)

    app.get("/", async (req: Request, res: Response) => {
        const user = new User({
            email: "xatel@upo.up",
            username: "XeNoNeNiAs",
            discriminator: "0000",
            bot: true
        });
        user.save()
        res.send("Zapisano")
    })
    
    app.listen(4000, () => {
        console.log("Serwer wystartował...")
    })
})