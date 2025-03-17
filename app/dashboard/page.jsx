
import Dashboard from "../ui/userdashboard/Dashboard"
import UserNavigation from "../ui/userdashboard/UserNavigation"
const page = () => {
  return (
    <section className='overflow-x-hidden'>
      <UserNavigation />
      <Dashboard />
    </section>
  )
}

export default page