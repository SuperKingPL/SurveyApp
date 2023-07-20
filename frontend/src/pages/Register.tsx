import { Input, TextField } from "@mui/material"
import StarsBackground from "../components/StarsBackground"
import { Link, Navigate, useNavigate } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import Cookies from "universal-cookie";

const Register = () => {

    const [captchaVerified,setCaptchaVerified] = useState(false);

    const emailInputRef = React.useRef<HTMLInputElement>(null);
    const usernameInputRef = React.useRef<HTMLInputElement>(null);
    const passwordInputRef = React.useRef<HTMLInputElement>(null);

    const navigate = useNavigate()

    function onCaptchaChange() {
        setCaptchaVerified(true)
    }

    const RegisterUser = () => {
        if (!captchaVerified) {
            fetch('http://127.0.0.1:4000/api/v1/user/register', {
                method: 'POST',
                body: JSON.stringify({
                    email: emailInputRef.current.value,
                    username: usernameInputRef.current.value,
                    password: passwordInputRef.current.value
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }).then((res) => res.json()).then((responseJson) => {
                const cookies = new Cookies();
                const expireDate = new Date();
                expireDate.setTime(expireDate.getTime() + (20 * 60 * 1000 * 60))

                cookies.set("token", responseJson["token"], {path: '/', expires: expireDate})
                navigate("/app");
            })
        }
    }
    return (
        <div className="formMount">
            <div className="Form">
                <h2>Załóż konto</h2>
                <input placeholder="Adres email" type="email" ref={emailInputRef}/>
                <input placeholder='Nazwa użytkownika' ref={usernameInputRef}/>
                <input placeholder="Hasło" type="password" ref={passwordInputRef}/>
                <Link to={"/login"}>Masz już konto? Zaloguj się.</Link>
                {/* <ReCAPTCHA sitekey="6LckvqIlAAAAAHQbQCYrpw_aGFgtNvCZQV6wyjg6" style={{margin: 10}} onChange={onCaptchaChange}/> */}
                <button style={{width: 320}} onClick={RegisterUser} className={!captchaVerified ? "" : ""}>Zarejestruj się</button>
            </div>
        </div>
    )
}

export default Register