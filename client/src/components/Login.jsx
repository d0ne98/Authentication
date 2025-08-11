import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";


export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);
        try {
            await login(username, password);
            navigate('/');
        } catch (err) {
            setError('Login failed. Please try again.');
        }
    };

     function handleChange(event) {
       
        const { name, value } = event.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    
    return(
        <div>
        <h2>Login</h2>
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="username" value={username} type="text" onChange={handleChange} required></input>
            <input name="password" placeholder="password" value={password} type="password" onChange={handleChange} required></input>
            <button type="submit">Login</button>
        </form>
        </div>
    )
}