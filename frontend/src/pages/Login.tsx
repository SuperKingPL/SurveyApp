import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import { useRef } from 'react'
import AuthService from '../services/AuthService';
import Cookies from 'universal-cookie';

const Login = () => {

    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const auth = async () => {
        const req = await AuthService.AuthorizeUser(emailInputRef.current.value, passwordInputRef.current.value);
        if (req.status == "auth_success") {
            const cookies = new Cookies();
            const expireDate = new Date();
            expireDate.setTime(expireDate.getTime() + (20 * 60 * 1000 * 60))
            cookies.set("token", req.token, {path: '/', expires: expireDate})
            window.location.href = "/app";
            // navigate("/app");
        }
    };

    return (
        <div className='formMount'>
            <div className="Form">
                <h2>Witamy ponownie!</h2>
                <span>Cieszymy się, że znowu z nami jesteś.</span>
                <input placeholder='Adres email' type="email" ref={emailInputRef}/>
                <input placeholder='Hasło' type="password" ref={passwordInputRef}/>
                <Link to={"/register"}>Nie masz konta? Zarejestruj się!</Link>
                <button style={{width: 320}} onClick={auth}>Zaloguj się</button>
            </div>
        </div>
    )
}

export default Login