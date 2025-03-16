
const UserCard = ({ user }) => {
  return (
    <div key={index} className="p-5 w-screen sm:flex justify-center gap-8 sm:flex-wrap">
      <div className="my-5">
        <img src={`data:image/png;base64,${user.userphoto[0].$binary.base64}`} alt={`${user.name}'s photo`} className="h-[450px] w-full rounded-t" />
        <div className="h-[150px] bg-rose-400 rounded-b p-5">
          <h2 className="user-name">{user.name}</h2>
          <p className="user-education">{user.education}</p>
          <p className="user-occupation">{user.occupation}</p>
        </div>
      </div>
    </div> 
  )
}

export default UserCard