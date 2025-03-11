"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const pathname = usePathname();
    const [activetab, setactivetab] = useState('');
    useEffect(() => {
        setactivetab(pathname)
    }, [pathname])
    

    function menustate() {
        if(menu === false){
            setMenu(true);
        } else {
            setMenu(false);
        }
    }

  return (
    <section className='shadow-md shadow-black bg-lime-50'>
        <div className="hidden md:flex justify-between container mx-auto p-8 lg:p-10">
            <h1 className="font-black text-2xl lg:text-3xl">matrimony website</h1>
            <ul className="flex gap-3 lg:gap-5 text-lg font-bold my-auto lg:text-xl">
                <Link href={'/'} className={`${ activetab === '/' ? 'text-black' : 'text-slate-500' }`}>Home</Link>
                <Link href={'/about'} className={`${ activetab === '/about' ? 'text-black' : 'text-slate-500' }`}>About</Link>
                <Link href={'/register'} className={`${ activetab === '/register' ? 'text-black' : 'text-slate-500' }`}>Register</Link>
                <Link href={'/login'} className={`${ activetab === '/login' ? 'text-black' : 'text-slate-500' }`}>Login</Link>
                <Link href={'/contact'} className={`${ activetab === '/contact' ? 'text-black' : 'text-slate-500' }`}>Contact Us</Link>
            </ul>
        </div>

        <div className="md:hidden p-5 sm:px-10">
            <div className="flex justify-between ">
                <h1 className="font-bold text-xl my-auto sm:text-2xl">matrimony website</h1>
                <button className="font-black p-3 bg-slate-200 rounded" onClick={(e) => menustate(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7">
                        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            { menu && 
                <div className="px-2">
                    <ul className="flex flex-col gap-3 mt-5 font-semibold">
                        <Link href={'/'} className={`${ activetab === '/' ? 'text-black' : 'text-slate-500'} px-2 py-1 bg-slate-100 rounded`}>Home</Link>
                        <Link href={'/about'} className={`${ activetab === '/about' ? 'text-black' : 'text-slate-500'} px-2 py-1 bg-slate-100 rounded`}>About</Link>
                        <Link href={'/register'} className={`${ activetab === '/register' ? 'text-black' : 'text-slate-500'} px-2 py-1 bg-slate-100 rounded`}>Register</Link>
                        <Link href={'/login'} className={`${ activetab === '/login' ? 'text-black' : 'text-slate-500'} px-2 py-1 bg-slate-100 rounded`}>Login</Link>
                        <Link href={'/contact'} className={`${ activetab === '/contact' ? 'text-black' : 'text-slate-500'} px-2 py-1 bg-slate-100 rounded`}>Contact Us</Link>
                    </ul>
                </div>
            }
        </div>
    </section>
  )
}

export default Navbar