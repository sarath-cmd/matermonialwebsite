'use client'

import { useState } from "react"

const Adminusersearch = () => {
  const [users, setusers] = useState([])
  const [userID, setUserID] = useState()
  const [error, seterror] = useState()
  const [update, setupdate] = useState(false)
  const [newViewLimit, setNewViewLimit] = useState('')
    
  async function handleClick(e) {
    e.preventDefault();
    seterror('')
    try {
      const res = await fetch('/api/admin/adminsearchuser', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID }),
      })
      const data = await res.json()
      if(res.status === 401) {
          seterror('No User Found')
      } else {
        setusers(data.user)
        console.log(users)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function handleUpdateViewLimit() {
    try {
      if(!newViewLimit) {
        return
      }
      const res = await fetch('/api/admin/updateviewlimit', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID: users[0].userID, newViewLimit }),
      });
      if (res.ok) {
        setusers([{ ...users[0], viewlimit: newViewLimit }]);
        setupdate(false)
      } else {
        alert('Failed to update view limit');
      }
    } catch (error) {
      console.log(error);
    }
  }
      
  return (
    <section className="overflow-hidden">
      <div className="w-screen sm:flex justify-center gap-5 ml-3 sm:ml-0">
        <h5 className="font-bold my-auto">Enter User ID:</h5>
        <input type="number" className="my-3" placeholder="User ID" onChange={(e) => setUserID(e.target.value)} />
        <button type="submit" className="my-auto bg-lime-300 py-2 px-5 font-bold" onClick={handleClick}>Search Profile</button>
      </div>
      <div className="flex justify-center">
        {users && users.length > 0 && 
          <div className="my-3 sm:w-[300px] flex-none p-5  w-screen flex flex-col items-center">
            <img src={`data:image/png;base64,${users[0].userphoto[0]}`} alt={`${users[0].name}'s photo`} className="h-[450px] w-full rounded-t" />
            <div className="h-[350px] bg-yellow-100 rounded-b p-5 flex flex-col w-full">
              <div className="flex gap-2">
                <p className="text-lg font-bold">Name:</p>
                <h2 className="font-medium my-auto">{users[0].name}</h2>
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-bold">UserID:</p>
                <h2 className="font-medium my-auto">{users[0].userID}</h2>
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-bold">View Limit:</p>
                <h2 className="font-medium my-auto">{users[0].viewlimit}</h2>
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-bold">Marital Status:</p>
                <h2 className="font-medium my-auto">{users[0].maritalstatus}</h2>
              </div>
              <div className="flex gap-2">
                <p className="text-lg font-bold">Gender:</p>
                <h2 className="font-medium my-auto">{users[0].gender}</h2>
              </div>
              {update && 
                <>
                  <div className="flex">
                    <p className="font-bold">New Viewlimit:</p>
                    <input type="number" placeholder="Enter new limit" className="w-24" onChange={(e) => setNewViewLimit(e.target.value)} />
                  </div>
                  <button className="w-full my-2 py-2 bg-lime-500 font-bold rounded-xl" onClick={handleUpdateViewLimit}>save</button>
                </>
              }
              <button className="w-full my-2 py-2 bg-lime-500 font-bold rounded-xl" onClick={e => setupdate(true)}>Update</button>
              {error && <div className="font-bold text-red-500">{error}</div>}
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default Adminusersearch