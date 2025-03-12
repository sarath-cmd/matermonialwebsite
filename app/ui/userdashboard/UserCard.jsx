import Image from "next/image"
import img1 from '@/public/img1.jpeg';

const UserCard = () => {
  return (
    <div className="p-5 w-screen sm:flex justify-center gap-8 my-2 sm:flex-wrap">
        <Image src={img1} alt="test image" className="w-[300px] h-[450px]" />
        <div className="h-[200px] w-[300px] bg-rose-400"></div>
    </div>
  )
}

export default UserCard