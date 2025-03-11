"use client";
import Link from "next/link"
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
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
    <footer className="pt-10 px-5 bg-white ">
      <div>
        <ul className="flex gap-12 font-medium justify-center flex-wrap pb-5">
          <Link href={'/'} className={`${ activetab === '/' ? 'text-black' : 'text-slate-500' }`}>Home</Link>
          <Link href={'/about'} className={`${ activetab === '/about' ? 'text-black' : 'text-slate-500' }`}>About</Link>
          <Link href={'/register'} className={`${ activetab === '/register' ? 'text-black' : 'text-slate-500' }`}>Register</Link>
          <Link href={'/login'} className={`${ activetab === '/login' ? 'text-black' : 'text-slate-500' }`}>Login</Link>
          <Link href={'/contact'} className={`${ activetab === '/contact' ? 'text-black' : 'text-slate-500' }`}>Contact</Link>
        </ul>
        <ul className="flex gap-12 font-medium justify-center flex-wrap py-5">
          <li className="opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 320 512">
              <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
            </svg>
          </li>
          <li className="opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
          </li>
          <li className="opacity-50 hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512">
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/>
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer