'use client'

import Image from "next/image"
import user from '@/public/user.png';
import Link from "next/link";
import { useState, useEffect } from "react";

const UserNavigation = () => {
  const [usermenu, setusermenu] = useState(false)
  const [userid, setUserid] = useState(null);
  useEffect(() => {
    const authToken = sessionStorage.getItem('userid');
    setUserid(authToken);
  }, []);
  function menustate() {
    if(usermenu === false){
      setusermenu(true);
    } else {
      setusermenu(false);
    }
  }
  return (
    <section>
      <div className="hidden md:block">
        <div className="flex w-screen justify-center sm:justify-end sm:mt-2 sm:pr-10">
            <ul className="flex gap-5 font-bold my-auto mr-5">
              <li className="font-bold">User ID:{userid}</li>
              <li><Link href={'/dashboard'} >All Profiles</Link></li>
              <li><Link href={'/dashboard/filterprofiles'} >Filter Profiles</Link></li>
              <li><Link href={'/dashboard/searchprofiles'} >Search Profiles</Link></li>
            </ul>
            {/* <Link> */}
                <Image src={user} alt="userImage" className="h-16 w-16" />
            {/* </Link> */}
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-end mt-5 mr-5">
          <button className="font-black p-2 bg-slate-200 rounded" onClick={(e) => menustate(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:size-7">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        { usermenu && 
          <div className="px-2 bg-slate-300 py-5">
            <ul className="flex flex-col gap-3 my-2 font-semibold px-5">
            <li className="font-bold">User ID: {userid}</li>
              <li><Link href={'/dashboard'} >All Profiles</Link></li>
              <li><Link href={'/dashboard/filterprofiles'} >Filter Profiles</Link></li>
              <li><Link href={'/dashboard/searchprofiles'} >Search Profiles</Link></li>
            </ul>
          </div>
        }
      </div>
    </section>
  )
}

export default UserNavigation