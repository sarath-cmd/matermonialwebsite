'use client'

import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/app/ui/Loading";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter()
  useEffect(() => {
    async function getprofiles() {
      try {
        const response = await fetch('/api/dashboard', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        console.log(error)
      } finally {
      setIsLoading(false);
    }
    }
    getprofiles();
  }, [])
  if (isLoading) {
    return <Loading />
  }

  return (
    <section>
      {users && users.length > 0 && (
        <div className="p-5 flex flex-wrap justify-center gap-8">
          {users.map((user, index) => {
            const userPhotoBase64 = user.userphoto;

            return (
              <div key={index} className="my-2 w-full sm:w-[300px] flex-none">
                {userPhotoBase64 ? (
                  <img src={`data:image/png;base64,${userPhotoBase64}`} alt={`${user.name}'s photo`} className="h-[450px] w-full rounded-t" />
                ) : (
                  <p>No valid photo available</p>
                )}
                <div className="h-[220px] bg-yellow-100 rounded-b p-5 flex flex-col">
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Name:</p>
                    <h2 className="font-medium my-auto">{user.name}</h2>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">UserID:</p>
                    <h2 className="font-medium my-auto">{user.userID}</h2>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Education:</p>
                    <p className="font-medium my-auto">{user.education}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">Occupation:</p>
                    <p className="font-medium my-auto">{user.occupation}</p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-lg font-bold">District:</p>
                    <p className="font-medium my-auto">{user.district}</p>
                  </div>
                  <button className="w-full my-2 py-2 bg-lime-500 font-bold rounded-xl" onClick={() => router.push(`/profile/${user.userID}`)}>View profile</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  )
}

export default Dashboard