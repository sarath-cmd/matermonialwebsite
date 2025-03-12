import Image from "next/image"
import user from '@/public/user.png';
import Link from "next/link";


const UserNavigation = () => {
  return (
    <div className="flex w-screen justify-center sm:justify-end sm:mt-2 sm:pr-10">
        <ul className="flex gap-5 font-bold my-auto mr-5">
            <li><Link href={'/dashboard'} >All Profiles</Link></li>
            <li><Link href={'/dashboard/filterprofile'} >Filter Profiles</Link></li>
        </ul>
        {/* <Link> */}
            <Image src={user} alt="userImage" className="h-16 w-16" />
        {/* </Link> */}
    </div>
  )
}

export default UserNavigation