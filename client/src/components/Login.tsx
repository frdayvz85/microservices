import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-hot-toast";

interface LoginProps { }

const Login: React.FC<LoginProps> = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const loadingToast = toast.loading('Loading...')
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/auth/api/v1/users/login`, {
                email,
                password,
            });

            // Handle successful login
            console.log('Login successful', response.data);
            toast.success("Login successful", {
                id: loadingToast,
            })
            localStorage.setItem("userInfo", JSON.stringify({ token: response.data.accessToken }));
            setError(null);
            navigate("/students");
        } catch (err) {
            // Handle login error
            console.error('Login error', err);
            setError('Invalid email or password');
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-300 rounded w-full py-2 px-3"
                            placeholder="Your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
