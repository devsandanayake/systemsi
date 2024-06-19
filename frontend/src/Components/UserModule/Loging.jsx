import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import './Login.css'; // Ensure you import your CSS file

export default function Login() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.post('/user/login', {
            username: user.username,
            password: user.password,
        }).then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.status);
            localStorage.setItem('role', response.data.user);
            window.location = '/';
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className='container'>
        <div className="login wrap">
            <div className="h1">Login</div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="user name"
                    value={user.username} 
                    onChange={handleChange} 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={user.password} 
                    onChange={handleChange} 
                />
                <input 
                    type="submit" 
                    value="Login"
                    className="btn"
                />
            </form>
        </div>
        </div>
    );
}
