import React, { useState } from 'react';
import axios from 'axios';  
import axiosInstance from '../../axiosConfig';

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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Username:</label>
                    <input 
                        type="text" 
                        name="username" 
                        value={user.username} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={user.password} 
                        onChange={handleChange} 
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <button 
                    type="submit" 
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
}
