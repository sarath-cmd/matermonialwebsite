import Filter from "@/app/ui/userdashboard/Filter"
import UserNavigation from "@/app/ui/userdashboard/UserNavigation"

const page = () => {
  return (
    <section className="overflow-hidden">
        <UserNavigation />
        <Filter />
    </section>
  )
}

export default page