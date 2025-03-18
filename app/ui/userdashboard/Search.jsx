'use client';

import { useState } from "react";

const Search = () => {
  const [userID, setUserID] = useState('');
  const [user, setUser] = useState(null);

  async function handleClick(e) {
    e.preventDefault();
    try {
      const res = await fetch('/api/dashboard/searchuser', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID }),
      });
      if (!res.ok) {
        console.log("Failed to fetch user: ", res.status);
        setUser(null)
        return
      }
      const data = await res.json()
      setUser(data.user)
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  return (
    <section>
      <div className="w-screen sm:flex justify-center gap-5 ml-3 sm:ml-0">
        <h5 className="font-bold my-auto">Enter User ID:</h5>
        <input type="number" className="my-3" placeholder="User ID" onChange={(e) => setUserID(e.target.value)} />
        <button type="submit" className="my-auto bg-lime-300 py-2 px-5 font-bold" onClick={handleClick}>
          Search Profile
        </button>
      </div>

      {!user ? <p className="w-screen flex justify-center font-semibold">No User to Find</p>:<></>}

      {user && (
        <div className="p-5 flex flex-wrap justify-center gap-8">
          <div className="my-3 w-full sm:w-[300px] flex-none">
            {user.userphoto && user.userphoto.length > 0 ? (
              <img src={`data:image/png;base64,${user.userphoto[0]}`} alt={`${user.name}'s photo`} className="h-[450px] w-full rounded-t" />
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
              <button className="w-full my-2 py-2 bg-lime-500 font-bold rounded-xl">View profile</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Search;
