import { Self } from "../services/UserService"

export function DisplayDevInfo() {
    Self.Fetch().then((e) => {
        console.log("%cDEV INFO", "color: #ebd834; font-size: 30px;")
        console.log(`Logged as user: ${e.username}#${e.discriminator} (${e._id})`)
        console.log(e);
    })
}