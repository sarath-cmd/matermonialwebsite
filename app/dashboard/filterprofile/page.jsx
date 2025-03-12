import Filter from "@/app/ui/userdashboard/Filter"
import UserNavigation from "@/app/ui/userdashboard/UserNavigation"
import UserCard from "@/app/ui/userdashboard/UserCard"

const page = () => {
  return (
    <>
        <UserNavigation />
        <Filter />
        <UserCard />
    </>
  )
}

export default page