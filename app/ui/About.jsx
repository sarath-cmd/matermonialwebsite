import Image from "next/image"
import about from "@/public/about.jpg"

const About = () => {
  return (
    <section>
        <div className='bg-gray-800 py-28 flex justify-center'>
            <h1 className='font-bold text-4xl text-white'>About Us</h1>
        </div>
        <div className="my-24 md:hidden">
            <>
                <h1 className="text-4xl flex justify-center font-black gap-3"><span className="border-b-8 border-solid border-black pb-5 pr-3">Our </span>Story</h1>
                <p className="p-5 font-medium">
                    Established with a vision to simplify matrimonial searches, our journey began on [Start Date]. 
                    Our aim has always been to create a platform that connects individuals with their ideal life partners, fostering meaningful relationships within their community. 
                    Since our inception, we have proudly facilitated [Number] successful marriages, and the journey continues with the unwavering support of our dedicated members.
                    <br /><br />
                    Our platform brings together profiles from across the state, nation, and even globally, ensuring you have a wide array of options to explore. 
                    Signing up is simple—just register with your profile details, a photograph, and other relevant information to become part of our ever-growing community. 
                    We're here to support you every step of the way, from registration to the moment your journey of togetherness begins.
                </p>
            </>
        </div>
        <div className="my-24 hidden md:grid grid-flow-col grid-cols-2 xl:mx-[25vw]">
            <Image src={about} alt="about image" className="max-h-[75vh] px-10 my-auto xl:my-0"/>
            <div>
                <h1 className="text-4xl flex justify-start font-black gap-3"><span className="border-b-8 border-solid border-black pb-5 pr-3">Our </span>Story</h1>
                <p className="p-5 font-medium mt-5">
                    Established with a vision to simplify matrimonial searches, our journey began on [Start Date]. 
                    Our aim has always been to create a platform that connects individuals with their ideal life partners, fostering meaningful relationships within their community. 
                    Since our inception, we have proudly facilitated [Number] successful marriages, and the journey continues with the unwavering support of our dedicated members.
                    <br /><br />
                    Our platform brings together profiles from across the state, nation, and even globally, ensuring you have a wide array of options to explore. 
                    Signing up is simple—just register with your profile details, a photograph, and other relevant information to become part of our ever-growing community. 
                    We're here to support you every step of the way, from registration to the moment your journey of togetherness begins.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About