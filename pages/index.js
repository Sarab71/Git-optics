import baseUrl from '../helper/baseUrl'
import Link from 'next/link'
import User from '../models/addUser'
import mongoose from 'mongoose'
const Home = ({users}) => {
  console.log(users)
  const userList = users.map(user => {
    return (
         <div key={user._id}>
      <Link href={'/user/[id]'} as={`/user/${user._id}`} ><div key={user._id} className="card shadow-lg overflow-hidden rounded-lg cursor-pointer ">
        <div className="infobox my-8 ">
          <div className="name text-center border-2 my-2 rounded-lg font-bold"> Name: {user.name}</div>
          <div className="address text-center border-2 my-2 rounded-lg font-bold"> Address: {user.address}</div>
          <div className="phone text-center border-2 my-2 rounded-lg font-bold"> Phone No: {user.phone}</div>
        </div>
      </div></Link>
      </div>
    )
  })
  return (
    <div className="container mx-auto max-w-7xl grid grid-cols-2 gap-2 p-2 md:gap-6 md:p-6 sm:grid-cols-3 mdx:grid-cols-4 my-6">
      {userList}
    </div> 
  )
}
export async function getStaticProps(context) {
 if (!mongoose.connections[0].readyState) {
 await mongoose.connect(process.env.MONGO_URI)
}
 let users = await User.find()
  return {
    props: {users: JSON.parse(JSON.stringify(users))},
  }
}
export default Home