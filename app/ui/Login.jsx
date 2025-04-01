'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Login = () => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const { data: session } = useSession();
  async function handleclick(e) {
    e.preventDefault();
    setError('');
    if(!email || !password) {
      setError("Please fill Email and Password")
    }
    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })
      if(res.error) {
        setError('Invalid Credentials')
        return;
      }
      if(res.ok) {
        localStorage.setItem('userid', session?.user.userID)
        localStorage.setItem('viewlimit', session?.user.viewlimit)
        localStorage.setItem('email', email)
        router.replace('/dashboard');
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <section>
      <h1 className='flex justify-center my-5 font-bold text-xl sm:mt-10 md:text-2xl xl:text-3xl'>Login</h1>
      <form onSubmit={handleclick} className="flex flex-col mx-10 sm:mx-28 md:mx-[30%] mb-10" method="post" encType="multipart/form-data">
        <label className="font-medium text-lg">Email:</label>
        <input type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)}/>
        <label className="font-medium text-lg">Password:</label>
        <input type="password" placeholder="Enter Your Password" onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-zinc-400 md:ml-5 rounded-2xl py-2 font-bold text-black">Login</button>

        {error && (
          <div className="text-red-500 font-bold md:ml-5 mt-5">{error}</div>
        )}
      </form>
      <div className="absolute bottom-0 left-5 flex gap-2">
        <h2 className="text-gray-500">
          Login for admin
        </h2>
        <Link href={'/adminlogin'} className="underline text-gray-500">AdminLogin</Link>
      </div>
    </section>
  )
}

export default Login