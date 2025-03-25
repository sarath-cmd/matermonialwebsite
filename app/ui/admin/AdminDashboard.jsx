'use client'

import { useEffect,useState } from "react"

const AdminDashboard = () => {
  const [users, setusers] = useState([])
  useEffect(() => {
    const getuserdata = async () => {
      try {
        const res = await fetch('/api/admin/dashboard', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        })
        const data = await res.json()
        setusers(data.users)
      } catch (error) {
        console.log(error)
      }
    }
    getuserdata()
  }, [])
    
  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="py-2 border xl:w-24">S.No</th>
            <th className="py-2 border">Name</th>
            <th className="py-2 border xl:w-64">ID</th>
            <th className="py-2 border xl:w-52">View count</th>
            <th className="py-2 border xl:w-72">Gender</th>
            <th className="py-2 border xl:w-72">Martital Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return(
              <tr key={index}>
                <th>{index += 1}</th>
                <th>{user.name}</th>
                <th>{user.userID}</th>
                <th>{user.viewlimit}</th>
                <th>{user.gender}</th>
                <th>{user.maritalstatus}</th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AdminDashboard