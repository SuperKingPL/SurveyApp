import { Link } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    return (
        <div className='formMount'>
            <div className="Form">
                <h2>Witamy ponownie!</h2>
                <span>Cieszymy się, że znowu z nami jesteś.</span>
                <input placeholder='Adres email' type="email"/>
                <input placeholder='Hasło' type="password"/>
                <Link to={"/register"}>Nie masz konta? Zarejestruj się!</Link>
                <button style={{width: 320}}>Zaloguj się</button>
            </div>
        </div>
    )
}

export default Login