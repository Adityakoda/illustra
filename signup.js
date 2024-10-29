import { useState } from 'react';
import './signup.css';

function Signup({ count2 }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    if (count2 % 2 !== 0) {
        return null;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setMessage('Please fill in all fields');
            return;
        }

        const newAccount = { name, email, password };
        const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
        const emailExists = accounts.some(account => account.email === email);

        if (emailExists) {
            setMessage('Email is already registered.');
        } else {
            accounts.push(newAccount);
            localStorage.setItem('accounts', JSON.stringify(accounts));
            setMessage(`Account created successfully for ${name}!`);
            setName('');
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className='signup-container'>
            <form className='frm' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <div className='social-btns'>
                    <button type='button' className='s-btn'><img src='google.svg' alt='Google' />Google</button>
                    <button type='button' className='s-btn'><img src='apple.svg' alt='Apple' />Apple</button>
                </div>
                <div className='content'>
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                <div className='signup'>
                    <button type='submit' className='signup-btn'>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;