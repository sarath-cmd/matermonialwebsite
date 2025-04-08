import Image from "next/image"
import gpay from "@/public/gpay1.jpg"

const page = () => {
  return (
    <section>
      <div className='bg-gray-800 py-16 flex justify-center'>
        <h1 className='font-bold text-4xl text-white'>Upgrade</h1>
      </div>
      <div className="m-5">
        <h1 className="font-black text-xl pb-5">Step 1:</h1>
        <table className="border-collapse border-2 border-gray-300 w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-1 py-2 border">Plan Name</th>
              <th className="px-1 py-2 border">Amout</th>
              <th className="px-1 py-2 border">Verified Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">Silver</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">1000</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">40</p></td>
            </tr>
            <tr>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">Gold</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">1500</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">65</p></td>
            </tr>
            <tr>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">Diamond</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">2000</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">95</p></td>
            </tr>
            <tr>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">Platinum</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">2500</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">125</p></td>
            </tr>
            <tr>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">VIP</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">5000</p></td>
              <td className="font-bold border-2 border-solid border-gray-300"><p className="text-xl flex justify-center py-3">100</p></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="m-5">
        <h1 className="font-black text-xl pb-5">Step 2:</h1>
        <Image src={gpay} alt="payment QR" className="h-[50vh]" />
      </div>
      <div className="m-5">
        <h1 className="font-black text-xl pb-5">Step 3:</h1>
        <p>Send the payment details to this Whatsapp number</p>
        <p>After verification YOur plan will be activated Instantly</p>
      </div>
    </section>
  )
}

export default page