import Image from 'next/image'
import con from '@/public/con.jpg'

const Contact = () => {
  return (
    <section>
        <div className='bg-gray-800 py-28 flex justify-center'>
            <h1 className='font-bold text-4xl text-white'>Contact Us</h1>
        </div>
        <div className='py-28 md:flex justify-evenly gap-5 xl:mx-[25vw]'>
            <div className='flex flex-col items-center my-16 md:my-0'>
                <button className='hover:bg-blue-500 p-8 bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className='size-11'>
                        <path className="svg-path" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                    </svg>
                </button>
                <h1 className='font-bold text-xl text-blue-500 my-2'>ADDRESS</h1>
                <p>
                    No.1/30 Amman Nagar,<br />
                    Saravanampatti,<br />
                    Coimbatore-641035<br />
                </p>
            </div>
            <div className='flex flex-col items-center my-16 md:my-0'>
                <button className='hover:bg-blue-500 p-8 bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-11'>
                       <path className="svg-path" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                </button>
                <h1 className='font-bold text-xl text-blue-500 my-2'>PHONE</h1>
                <p>+91 81249 24946</p>
            </div>
            <div className='flex flex-col items-center my-16 md:my-0'>
                <button className='hover:bg-blue-500 p-8 bg-gray-100'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='size-11'>
                        <path className="svg-path" d="M64 208.1L256 65.9 448 208.1l0 47.4L289.5 373c-9.7 7.2-21.4 11-33.5 11s-23.8-3.9-33.5-11L64 255.5l0-47.4zM256 0c-12.1 0-23.8 3.9-33.5 11L25.9 156.7C9.6 168.8 0 187.8 0 208.1L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-239.9c0-20.3-9.6-39.4-25.9-51.4L289.5 11C279.8 3.9 268.1 0 256 0z"/>
                    </svg>
                </button>
                <h1 className='font-bold text-xl text-blue-500 my-2'>EMAIL ADDRESS</h1>
                <p>mmiint24@gmail.com</p>
            </div>
        </div>
    </section>
  )
}

export default Contact