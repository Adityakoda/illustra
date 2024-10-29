import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginpage.css';

function Login({ count1 }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    if (count1 % 2 !== 0) {
        return null;
    }

    const handleLogin = (e) => {
        e.preventDefault();

        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const account = accounts.find(acc => acc.email === email && acc.password === password);

        if (account) {
            setMessage(`Welcome back, ${account.name}!`);
            localStorage.setItem('userName', account.name); 
            navigate('/main'); 
        } else {
            setMessage('Invalid email or password');
        }
    };

    return (
        <div className='login-container'>
            <form className='frm' onSubmit={handleLogin}>
                <h1>Login</h1>
                <div className='social-btns'>
                    <button type='button' className='s-btn'><img src='google.svg' alt='Google' />Google</button>
                    <button type='button' className='s-btn'><img src='apple.svg' alt='Apple' />Apple</button>
                </div>
                <div className='content'>
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='content'>
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {message && <p className='message'>{message}</p>}
                <div className='login'>
                    <button type='submit' className='login-btn'>
                        Login
                    </button>
                </div>
                <a href='#'>Forgot password?</a>
            </form>
        </div>
    );
}

export default Login;
