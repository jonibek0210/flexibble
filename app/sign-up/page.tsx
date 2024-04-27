"use client"
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth } from "@/firebase/firebase.config"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [creatUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth)

    const handleSignUp = async () => {
        try {
            const res = await creatUserWithEmailAndPassword(email, password)
            console.log({ res });
            setEmail("")
            setPassword("")
        } catch (e) {
            console.error(e)
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
                <div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 rounded border-[#989898] border bg-gray-700 focus:outline-none"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 rounded border-[#989898] border bg-gray-700 focus:outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        onClick={handleSignUp}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
