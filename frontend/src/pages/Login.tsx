import '../styles/login.css'
import '../styles/animatedBackground.scss'
import StarsBackground from '../components/starsBackground'

const Login = () => {
    return (
        <div>
            <div className="Form">
                <h2>Witamy ponownie!</h2>
                <span>Cieszymy się, że znowu z nami jesteś.</span>
                <input/>
                <input/>
                <button style={{width: 320}}>Zaloguj się</button>
            </div>
            <StarsBackground/>
        </div>
    )
}

export default Login