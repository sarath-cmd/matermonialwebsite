'use client'

import Image from "next/image"
import hero from '@/public/test.jpg'
import { Rubik_Mono_One, Josefin_Sans } from '@next/font/google';
import { useRouter } from "next/navigation";

const RubikMonoOne = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400',
});
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: '700',
});
const Hero = () => {
  const router = useRouter();

  return (
    <>
      <section className="hidden md:flex">
        <div className="grid grid-cols-2">
          <div className="my-auto mx-auto">
            <h1 className={`${RubikMonoOne.className} text-lg lg:text-3xl px-5`}>
              Find your perfect partner<br /> in our loving community.
            </h1>
            <button onClick={(e) => router.push('/register')} className="ml-5 p-3 mt-5 font-semibold rounded-xl bg-blue-500 text-white hover:shadow-xl hover:shadow-zinc-400 flex gap-2">
              Register Now
              <svg xmlns="http://www.w3.org/2000/svg" className="size-5 my-auto" viewBox="0 0 512 512">
                <path fill="#ffffff" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"/>
              </svg>
            </button>
          </div>
          <div className="h-[80%]">
            <Image src={hero} alt="hero wedding image" className="w-full h-[70vh] bg-cover bg-center pr-12 rounded-tl-full rounded-br-full mt-14 xl:rounded-tl-[80%] xl:rounded-br-[80%]" />
          </div>
        </div>
      </section>

      <main className="md:hidden">
       <Image src={hero} alt="hero wedding image" className="w-full h-[100%] bg-cover bg-center absolute top-0 left-0 -z-10" />
       <div className="w-[70%] my-[40%]">
         <div className='mx-[10%] bg-slate-400 p-3 inline-flex rounded bg-opacity-70'>
           <h1 className={`${josefinSans.className}`}>
             Find your perfect partner<br /> in our loving community.
           </h1>
           <br />
         </div>
         <button className="flex gap-2 p-2 rounded-full bg-white text-black mx-[10%] my-2">
           Register Now 
           <svg xmlns="http://www.w3.org/2000/svg" className="size-5 my-auto" viewBox="0 0 512 512">
             <path fill="#121212" d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"/>
           </svg>
         </button>
       </div>
     </main>
    </>
  )
}

export default Hero