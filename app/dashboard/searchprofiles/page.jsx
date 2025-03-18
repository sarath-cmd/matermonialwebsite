import Search from "@/app/ui/userdashboard/Search"
import UserNavigation from "@/app/ui/userdashboard/UserNavigation"

const page = () => {
  return (
    <section className="overflow-hidden">
      <UserNavigation />
      <Search />
    </section>
  )
}

export default page