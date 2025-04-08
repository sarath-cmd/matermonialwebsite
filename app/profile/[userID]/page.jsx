'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UserNavigation from "@/app/ui/userdashboard/UserNavigation";
import Loading from "@/app/ui/Loading";

const ProfilePage = () => {
  const { userID } = useParams(); // Extract userID from URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const loginuser = localStorage.getItem('userid')
        const response = await fetch('/api/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userID, loginuser }),
        });
        if (response.redirected) {
          window.location.href = response.url;
          return;
        }
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('viewlimit', data.newviewlimit)
      } catch (error) {
        console.log(error);
      }
    }
    fetchUser();
  }, [userID]);

  if (!user) {
    return <Loading />;
  }

  return (
    <section className="overflow-hidden ">
      <UserNavigation />
      <div className="p-5 m-5">
        {user.userphoto && (
          <img src={`data:image/png;base64,${user.userphoto}`} alt={`${user.name}'s photo`} className="w-screen md:w-[25vw] md:float-end"/>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div>
              <h1 className="text-2xl font-bold mb-3 xl:text-4xl">Personal Information</h1>
              <p className="ml-5 text-lg xl:text-3xl"><strong>Name:</strong> {user.name}</p>
              <p className="ml-5 text-lg xl:text-3xl"><strong>Gender:</strong> {user.gender}</p>
              <p className="ml-5 text-lg xl:text-3xl"><strong>D.O.B:</strong> {user.dob}</p>
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
    </section>
  );
};

export default ProfilePage;
