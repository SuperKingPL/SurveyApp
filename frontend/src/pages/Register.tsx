import { Input, TextField } from "@mui/material"
import StarsBackground from "../components/starsBackground"
import { Link } from "react-router-dom"

const Register = () => {
    return (
        <div className="formMount">
            <div className="Form">
                <h2>Załóż konto</h2>
                <input placeholder="Adres email" type="email"/>
                <input placeholder='Nazwa użytkownika'/>
                <input placeholder="Hasło" type="password"/>
                <Link to={"/login"}>Masz już konto? Zaloguj się.</Link>
                <button style={{width: 320}}>Zarejestruj się</button>
            </div>
        </div>
    )
}

export default Register