import Link from "next/link"

const AdminNavigation = () => {
  return (
    <div className="m-5 flex justify-end">
      <Link href={'/admin/dashboard'} className="mr-5 font-bold">Dashboard</Link>
      <Link href={'/admin/adminusersearch'} className="mr-5 font-bold">User Search</Link>
    </div>
  )
}

export default AdminNavigation