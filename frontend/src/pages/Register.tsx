import { Input, TextField } from "@mui/material"
import StarsBackground from "../components/starsBackground"
import { Link } from "react-router-dom"

const Register = () => {

    const RegisterUser = () => {
        fetch('http://127.0.0.1:4000/api/v1/user/register', {
            method: 'POST',
            body: JSON.stringify({
                email: "asd@asd.pl",
                username: "hello",
                password: "1234"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        alert("Register user.")
    }
    return (
        <div className="formMount">
            <div className="Form">
                <h2>Załóż konto</h2>
                <input placeholder="Adres email" type="email"/>
                <input placeholder='Nazwa użytkownika'/>
                <input placeholder="Hasło" type="password"/>
                <Link to={"/login"}>Masz już konto? Zaloguj się.</Link>
                <button style={{width: 320}} onClick={RegisterUser}>Zarejestruj się</button>
            </div>
        </div>
    )
}

export default Register