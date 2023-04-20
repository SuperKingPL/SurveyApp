import { Input, TextField } from "@mui/material"
import StarsBackground from "../components/starsBackground"
import { Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import Cookies from "universal-cookie";

const Register = () => {

    const [captchaVerified,setCaptchaVerified] = useState(false);

    function onCaptchaChange() {
        setCaptchaVerified(true)
    }

    const RegisterUser = () => {
        if (captchaVerified) {
            fetch('http://127.0.0.1:4000/api/v1/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: "asdas@asd.pl",
                    username: "hello",
                    password: "1234"
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then((res) => res.json()).then((responseJson) => {
                const cookies = new Cookies();
                const expireDate = new Date();
                expireDate.setTime(expireDate.getTime() + (10*60*60*1000))

                cookies.set("token", responseJson["accessToken"], {path: '/', expires: expireDate})
            })
            alert("Register user.")
        }
    }
    return (
        <div className="formMount">
            <div className="Form">
                <h2>Załóż konto</h2>
                <input placeholder="Adres email" type="email"/>
                <input placeholder='Nazwa użytkownika'/>
                <input placeholder="Hasło" type="password"/>
                <Link to={"/login"}>Masz już konto? Zaloguj się.</Link>
                <ReCAPTCHA sitekey="6LckvqIlAAAAAHQbQCYrpw_aGFgtNvCZQV6wyjg6" style={{margin: 10}} onChange={onCaptchaChange}/>
                <button style={{width: 320}} onClick={RegisterUser} className={!captchaVerified ? "disabled" : ""}>Zarejestruj się</button>
            </div>
        </div>
    )
}

export default Register