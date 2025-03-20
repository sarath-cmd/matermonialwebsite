import AdminDashboard from "../ui/admin/AdminDashboard"
import AdminNavigation from "../ui/admin/AdminNavigation"

const page = () => {
  return (
    <section>
        <AdminNavigation />
        <AdminDashboard />
    </section>
  )
}

export default page