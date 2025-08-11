import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../AuthContext";


export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { register } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);
        try {
            await register(username, password);
            navigate('/');
        } catch (err) {
            setError('Register failed. Please try again.');
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
        <h2>Register</h2>
        {error && <h3>{error}</h3>}
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="username" value={username} type="text" onChange={handleChange} required></input>
            <input name="password" placeholder="password" value={password} type="password" onChange={handleChange} required></input>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}