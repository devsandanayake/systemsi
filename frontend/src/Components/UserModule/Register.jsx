import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';

export default function Register() {
    const [user, setUser] = useState({});

    const handleChange = () => {
        axiosInstance.post('/user/add', {
            username: user.username,
            password: user.password,
            role: user.role
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>

                <div className="mb-4">
                    <input
                        type='role'
                        placeholder="Role"
                        onChange={(e) => setUser({ ...user, role: e.target.value })}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <button
                    onClick={handleChange}
                    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                >
                    Register
                </button>
            </div>
        </div>
    );
}
