'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

const Adminlogin = () => {
    const [loemail, setLoemail] = useState()
    const [lopassword, setLopassword] = useState()
    const [lopasskey, setLopasskey] = useState()
    const [reemail, setReemail] = useState()
    const [repassword, setRepassword] = useState()
    const [repasskey, setRepasskey] = useState()
    const [loerror, setLoerror] = useState()
    const [reerror, setReerror] = useState()
    const [resuccess, setResuccess] = useState()
    const router = useRouter();

    async function handlelogin(e) {
        e.preventDefault();
        setLoerror('')
        try {
            if(!lopasskey || !lopassword || !loemail) {
                setLoerror("Please fill all the fields");
                return
            }
            const data = {
                email: loemail,
                password: lopassword,
                passkey: lopasskey
            }
            const res = await fetch('/api/admin/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if(res.ok) {
                router.push('/dashboard/admindashboard')
            }
            if(res.status === 401) {
                setLoerror('Passkey Failed')
            }
            if(res.error) {
                setLoerror('Invalid Credentials')
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }
    async function handleregister(e) {
        e.preventDefault();
        setReerror('')
        try {
            if(!repasskey || !repassword || !reemail) {
                setReerror("Please fill all the fields");
                return
            }
            const data = {
                email: reemail,
                password: repassword,
                passkey: repasskey
            }
            const res = await fetch('/api/admin/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            if(res.error) {
                setLoerror('Invalid Credentials')
                return;
            }
            if(res.status === 409) {
                setReerror('Email already exists')
            }
            if(res.status === 401) {
                setReerror('Passkey Failed')
            }
            if(res.ok) {
                setResuccess('Registeration successfull, please continue with login!')
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-10 xl:mx-16">
        <div className="m-5 p-5 bg-gray-300 rounded sm:mx-16">
            <h1 className="font-bold text-2xl">Admin Login</h1>
            <form className="flex flex-col mt-5">
                <label className="font-medium">Emial:</label>
                <input type="email" placeholder="Admin email" className="mt-2" onChange={(e) => {setLoemail(e.target.value)}} />
                <label className="font-medium">Password:</label>
                <input type="password" placeholder="Password" className="mt-2" onChange={(e) => {setLopassword(e.target.value)}} />
                <label className="font-medium">Pass key:</label>
                <input type="password" placeholder="****************" className="mt-2" onChange={(e) => {setLopasskey(e.target.value)}} />
                <button className="bg-lime-400 font-bold py-2" onClick={handlelogin}>Login</button>
                {loerror && (
                    <div className="text-red-500 font-bold md:ml-5 mt-5">{loerror}</div>
                )}
            </form>
        </div>
        <div className="m-5 p-5 bg-gray-300 rounded sm:mx-16">
            <h1 className="font-bold text-2xl">Admin Register</h1>
            <form className="flex flex-col mt-5">
                <label className="font-medium">Emial:</label>
                <input type="email" placeholder="Admin email" className="mt-2" onChange={(e) => {setReemail(e.target.value)}} />
                <label className="font-medium">Password:</label>
                <input type="password" placeholder="Password" className="mt-2" onChange={(e) => {setRepassword(e.target.value)}} />
                <label className="font-medium">Pass key:</label>
                <input type="password" placeholder="****************" className="mt-2" onChange={(e) => {setRepasskey(e.target.value)}} />
                <button className="bg-lime-400 font-bold py-2" onClick={handleregister}>Register</button>
                {reerror && (
                    <div className="text-red-500 font-bold md:ml-5 mt-5">{reerror}</div>
                )}
                {resuccess && (
                    <div className="text-green-500 font-bold md:ml-5 mt-5">{resuccess}</div>
                )}
            </form>
        </div>
    </section>
  )
}

export default Adminlogin