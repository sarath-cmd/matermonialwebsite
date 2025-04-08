'use client';

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import Loading from "@/app/ui/Loading";
import { useParams } from "next/navigation";
import { districtlist } from "@/app/ui/varibles";
import UserNavigation from "@/app/ui/userdashboard/UserNavigation";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [loading, setloading] = useState(true)
  const [newCast, setnewCast] = useState('')
  const [newKulam, setnewKulam] = useState('')
  const [newGothram, setnewGothram] = useState('')
  const [newEducation, setnewEducation] = useState('')
  const [newdistrict, setnewdistrict] = useState('')
  const [newmobilenumber, setnewmobilenumber] = useState('')
  const [newasset, setnewasset] = useState('')
  const [newaddress, setnewaddress] = useState('')
  const router = useRouter()
  const { userID } = useParams();

  useEffect(() => {
    if (!localStorage.getItem('userid') || !localStorage.getItem("email")) {
      router.push('/login');
    }
    async function fetchUser() {
      try {
        const userID = localStorage.getItem('userid');
        const email = localStorage.getItem('email');
        const res = await fetch('/api/dashboard/userprofile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userID, email }),
        });
        if (res.redirected) {
          window.location.href = res.url;
          return;
        }
        const data = await res.json();
        setUsers(data.users);
      } catch (error) {
        console.error(error);
      } finally {
        setloading(false);
      }
    }
    fetchUser();
  }, [userID]);

  function handlesignout(e) {
    if (!localStorage.getItem('userid') || !localStorage.getItem("email")) {
      router.push('/login');
    }
    e.preventDefault();
    localStorage.removeItem('userid');
    localStorage.removeItem('email');
    localStorage.removeItem('viewlimit');
    localStorage.removeItem('nextauth.message');
    signOut()
    router.push('/login')
  }
  function handleEducation(e) {
    setnewEducation(e.target.value)
  }
  function handleDistrict(e) {
    setnewdistrict(e.target.value)
  }
  async function handlesubmit(e) {
    e.preventDefault()
    const Data = {
      userID: localStorage.getItem('userid'),
      cast: newCast,
      kulam: newKulam,
      gothram: newGothram,
      education: newEducation,
      district: newdistrict,
      mobileno: newmobilenumber,
      asset: newasset,
      address: newaddress,
    }
    try {
      const res = await fetch('/api/dashboard/userprofile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Data),
      })
      setUpdate(false)
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }
  async function handledelete(e) {
    e.preventDefault()
    if (!localStorage.getItem('userid') || !localStorage.getItem("email")) {
      router.push('/login');
    }
    try {
      const userID = localStorage.getItem('userid');
      const email = localStorage.getItem('email');
      const res = await fetch('/api/dashboard/userprofile', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({userID, email}),
      })
      localStorage.removeItem('userid');
      localStorage.removeItem('email');
      localStorage.removeItem('viewlimit');
      localStorage.removeItem('nextauth.message');
      if (res.redirected) {
        signOut()
        window.location.href = res.url;
        return;
      }
    } catch (error) {
      console.log(error)
    }
  }
  if(loading) {
    return <Loading />
  }

  return (
    <section className="overflow-hidden">
      <UserNavigation />
      <div>
        {users.map((user, index) => (
          <div key={index}>
            <div className="p-5 m-5">
              {user.userphoto && (
                <img src={`data:image/png;base64,${user.userphoto}`} alt={`${user.name}'s photo`} className="w-screen md:w-[25vw] md:float-end"/>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                  <h1 className="text-2xl font-bold mb-3 xl:text-4xl">Personal Information</h1>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Name:</strong> {user.name}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Gender:</strong> {user.gender}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>D.O.B:</strong> {user.dob.split("T")[0]}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>T.O.B:</strong> {user.tob}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Cast:</strong> {user.cast}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Kulam:</strong> {user.kulam}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Gothram:</strong> {user.gothram}</p>
                </div>
                <div className="md:mt-12">
                  <p className="ml-5 text-lg xl:text-3xl"><strong>District:</strong> {user.district}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Education:</strong> {user.education}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Occupation:</strong> {user.occupation}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Salary (per month):</strong> {user.salary}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Marital Status:</strong> {user.maritalstatus}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Partner Preference:</strong> {user.partnerpreference}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Mobile Number:</strong> {user.mobileno}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                <div>
                  <h1 className="text-2xl font-bold mb-3 xl:text-4xl">Family Information</h1>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Father Name:</strong> {user.fathername}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Father Occupation:</strong> {user.fatheroccupation}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Mother Name:</strong> {user.mothername}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Mother Occupation:</strong> {user.motheroccupation}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Asset:</strong> {user.asset}</p>
                </div>
                <div className="md:mt-12">
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Parents Number:</strong> {user.parentnumber}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Number of Brother or Sister:</strong> {user.numberofbrosis}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Elder/Younger:</strong> {user.elderoryounger}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Address:</strong> {user.address}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Native Place:</strong> {user.nativeplace}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
                <div>
                  <h1 className="text-2xl font-bold mb-3 xl:text-4xl">Horoscope Information</h1>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Rasi:</strong> {user.rasi}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Nakshartram:</strong> {user.nakshartram}</p>
                </div>
                <div className="md:mt-12">
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Paadham:</strong> {user.paadham}</p>
                  <p className="ml-5 text-lg xl:text-3xl"><strong>Dhosam:</strong> {user.dhosam}</p>
                </div>
              </div>
              <table className="md:hidden mt-10">
                <tbody>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r1c1}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r1c2}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r1c3}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r1c4}</td>
                  </tr>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r2c1}</td>
                    <td colSpan="2" rowSpan={2}><p className="flex justify-center items-center">Rashi</p></td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r2c4}</td>
                  </tr>
                  <tr>
                  <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r3c1}</td>
                  <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r3c4}</td>
                  </tr>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r4c1}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r4c2}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r4c3}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t1r4c4}</td>
                  </tr>
                </tbody>
              </table>
              <table className="md:hidden my-10">
                <tbody>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r1c1}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r1c2}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r1c3}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r1c4}</td>
                  </tr>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r2c1}</td>
                    <td colSpan="2" rowSpan={2}><p className="flex justify-center items-center">Amsam</p></td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r2c4}</td>
                  </tr>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r3c1}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-soild border-black px-1 py-2">{user.t2r3c4}</td>
                  </tr>
                  <tr>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t2r4c1}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t2r4c2}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t2r4c3}</td>
                    <td className="w-20 sm:w-32 m-0 border-2 border-solid border-black px-1 py-2">{user.t2r4c4}</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center gap-10 mt-10">
                <table className="hidden md:block">
                  <tbody className="bg-gray-200">
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r1c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r1c2}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r1c3}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r1c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r2c1}</td>
                      <td colSpan="2" rowSpan={2}><p className="flex justify-center items-center">Rashi</p></td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r2c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r3c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r3c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r4c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r4c2}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r4c3}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t1r4c4}</td>
                    </tr>
                  </tbody>
                </table>
                <table className="hidden md:block">
                  <tbody className="bg-gray-200">
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r1c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r1c2}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r1c3}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r1c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r2c1}</td>
                      <td colSpan="2" rowSpan={2}><p className="flex justify-center items-center">Amsam</p></td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r2c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r3c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r3c4}</td>
                    </tr>
                    <tr>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r4c1}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r4c2}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r4c3}</td>
                      <td className="w-24 m-0 lg:w-32 xl:w-40 border-2 border-solid border-black px-1 py-2">{user.t2r4c4}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!update && 
        <>
          <button className="p-2 bg-orange-300 font-bold m-5 w-fit text-2xl rounded" onClick={() => setUpdate(true)}>Update</button>
        </>
      }
      {update && (
        <div>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Cast:</strong></p>
            <input type="text" placeholder="Cast" onChange={(e) => setnewCast(e.target.value)}/>
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Kulam:</strong></p>
            <input type="text" placeholder="Kulam" onChange={(e) => setnewKulam(e.target.value)} />
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Gothram:</strong></p>
            <input type="text" placeholder="Gothram" onChange={(e) => setnewGothram(e.target.value)} />
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Education:</strong></p>
            <select onChange={handleEducation} value={newEducation}>
              <option>Select Education Level</option>
              <option value='10th'>10th</option>
              <option value='Diploma'>Diploma</option>
              <option value='11th'>11th</option>
              <option value='12th'>12th</option>
              <option value='UG'>UG</option>
              <option value='PG'>PG</option>
              <option value='MBA'>MBA</option>
            </select>
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>District:</strong></p>
            <select onChange={handleDistrict} value={newdistrict}>
              <option defaultChecked >Select District</option>
              {districtlist.map((district, index) => (
                <option key={index} value={district}>{district}</option>
              ))}
            </select>
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Mobile no:</strong></p>
            <input type="number" placeholder="new mobilenumber" onChange={(e) => setnewmobilenumber(e.target.value)} />
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Asset:</strong></p>
            <input type="text" placeholder="Asset" onChange={(e) => setnewasset(e.target.value)} />
          </span>
          <span className="flex">
            <p className="ml-5 text-lg xl:text-3xl"><strong>Address:</strong></p>
            <input type="text" placeholder="new Address" onChange={(e) => setnewaddress(e.target.value)} />
          </span>
          <button className="p-2 bg-lime-400 font-bold m-5 w-fit text-2xl rounded" onClick={handlesubmit}>Save</button>
        </div>
      )}
      <div className="bg-red-200 p-5 flex flex-col">
        <h1 className="text-black text-2xl font-extrabold">DANGER</h1>
        <button className="p-2 bg-red-400 font-bold m-5 w-fit rounded" onClick={(e) => {handlesignout(e)}} 
        >Signout</button>
        <p><strong>Warning:</strong><br /><span className="ml-5">When you Delete the Account your profile viewlimit will also be Deleted.</span></p>
        <button className="p-2 bg-red-400 font-bold m-5 w-fit rounded" onClick={handledelete}>Delete Account</button>
      </div>
    </section>
  );
}
