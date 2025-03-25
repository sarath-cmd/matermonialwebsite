'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

const AdminLogin = () => {
    const [loemail, setLoemail] = useState('');
    const [lopassword, setLopassword] = useState('');
    const [lopasskey, setLopasskey] = useState('');
    const [reemail, setReemail] = useState('');
    const [repassword, setRepassword] = useState('');
    const [repasskey, setRepasskey] = useState('');
    const [loerror, setLoerror] = useState('');
    const [reerror, setReerror] = useState('');
    const [resuccess, setResuccess] = useState('');
    const router = useRouter();


    async function handleLogin(e) {
        e.preventDefault();
        setLoerror('');
        try {
            if (!lopasskey || !lopassword || !loemail) {
                setLoerror("Please fill all the fields");
                return;
            }
            const response = await fetch('/api/admin/login', {
                method: 'POST',
                body: JSON.stringify({ email: loemail, password: lopassword, passkey: lopasskey }),
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            if (data.success) {
                sessionStorage.setItem('token', data.token); // Store the token
                router.push('/admin/dashboard');
            } else if (response.status === 401) {
                setLoerror('Passkey Failed');
            } else if (data.error) {
                setLoerror(data.error || 'Invalid Credentials');
            }
        } catch (error) {
            console.error(error);
            setLoerror('Something went wrong. Please try again later.');
        }
    }

    async function handleRegister(e) {
        e.preventDefault();
        setReerror('');
        setResuccess('');
        try {
            if (!repasskey || !repassword || !reemail) {
                setReerror("Please fill all the fields");
                return;
            }
            const response = await fetch('/api/admin/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: reemail,
                    password: repassword,
                    passkey: repasskey,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                setResuccess('Registration successful! Please continue with login.');
            } else if (response.status === 409) {
                setReerror('Email already exists');
            } else if (response.status === 401) {
                setReerror('Passkey Failed');
            } else if (data.error) {
                setReerror(data.error);
            }
        } catch (error) {
            console.error(error);
            setReerror('Something went wrong. Please try again later.');
        }
    }

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mx-16">
            <div className="m-5 p-5 bg-gray-300 rounded sm:mx-16">
                <h1 className="font-bold text-2xl">Admin Login</h1>
                <form className="flex flex-col mt-5" onSubmit={handleLogin}>
                    <label className="font-medium">Email:</label>
                    <input type="email" placeholder="Admin email" className="mt-2" onChange={(e) => setLoemail(e.target.value)} />
                    <label className="font-medium">Password:</label>
                    <input type="password" placeholder="Password" className="mt-2" onChange={(e) => setLopassword(e.target.value)} />
                    <label className="font-medium">Pass Key:</label>
                    <input type="password" placeholder="****************" className="mt-2" onChange={(e) => setLopasskey(e.target.value)} />
                    <button type="submit" className="bg-lime-400 font-bold py-2 mt-4">Login</button>
                    {loerror && (
                        <div className="text-red-500 font-bold md:ml-5 mt-5">{loerror}</div>
                    )}
                </form>
            </div>
            <div className="m-5 p-5 bg-gray-300 rounded sm:mx-16">
                <h1 className="font-bold text-2xl">Admin Register</h1>
                <form className="flex flex-col mt-5" onSubmit={handleRegister}>
                    <label className="font-medium">Email:</label>
                    <input type="email" placeholder="Admin email" className="mt-2" onChange={(e) => setReemail(e.target.value)} />
                    <label className="font-medium">Password:</label>
                    <input type="password" placeholder="Password" className="mt-2" onChange={(e) => setRepassword(e.target.value)} />
                    <label className="font-medium">Pass Key:</label>
                    <input type="password" placeholder="****************" className="mt-2" onChange={(e) => setRepasskey(e.target.value)} />
                    <button type="submit" className="bg-lime-400 font-bold py-2 mt-4">Register</button>
                    {reerror && (
                        <div className="text-red-500 font-bold md:ml-5 mt-5">{reerror}</div>
                    )}
                    {resuccess && (
                        <div className="text-green-500 font-bold md:ml-5 mt-5">{resuccess}</div>
                    )}
                </form>
            </div>
        </section>
    );
};

export default AdminLogin;
