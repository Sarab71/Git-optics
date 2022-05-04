import baseUrl from "../../helper/baseUrl"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/router";
import { useEffect } from "react";
const User = ({ user }) => {
  const router = useRouter()
  const [rsph, setRsph] = useState("")
  const [rcyl, setRcyl] = useState("")
  const [raxis, setRaxis] = useState("")
  const [lsph, setLsph] = useState("")
  const [lcyl, setLcyl] = useState("")
  const [laxis, setLaxis] = useState("")
  const [add, setAdd] = useState("")
  const [frame, setFrame] = useState("")
  const [lens, setLens] = useState("")
  let effect = useEffect()
    effect = (() =>{
     console.log(user)
    }) 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { rsph, rcyl, raxis, lsph, lcyl, laxis, add, frame, lens }
    let res = await fetch(`${baseUrl}/api/orders?userId=${router.query.id}`, {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    let response = await res.json()
    console.log(response)

    setRsph('')
    setRcyl('')
    setRaxis('')
    setLsph('')
    setLcyl('')
    setLaxis('')
    setAdd('')
    setFrame('')
    setLens('')
    toast.success('User added', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  return (
    <div key={user._id} className="container mx-auto my-6  ">
      <div className="text-center border-b-4  ">
        <div className="name">
          <h1 className="text-3xl font-bold">Name: {user.name}</h1>
        </div>
        <div className="phone mt-3" >
          <h2 className="text-3xl font-bold">Phone: {user.phone}</h2>
        </div>
        <div className="address mt-3">
          <p className="text-3xl font-bold">Address: {user.address}</p>
        </div>
      </div>
      <ToastContainer
                position="bottom-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
     
      <form onSubmit={handleSubmit} method="POST">
        <div className="lg:hidden my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-center" >
            <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">

                </th>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                  right eye
                </th>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                  left eye
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">sph</td>
                <td>
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={rsph} onChange={(e) => setRsph(e.target.value)} type="number" placeholder='SPH' />
                </td>
                <td>
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={lsph} onChange={(e) => setLsph(e.target.value)} type="number" placeholder='SPH' />
                </td>
              </tr >
              <tr className="bg-white border-b">
                <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">cyl</td>
                <td>
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={rcyl} onChange={(e) => setRcyl(e.target.value)} type="number" placeholder='CYL' />
                </td>
                <td >
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={lcyl} onChange={(e) => setLcyl(e.target.value)} type="number" placeholder='CYL' />
                </td>
              </tr >
              <tr className="bg-white border-b">
                <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">axis</td>
                <td >
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={raxis} onChange={(e) => setRaxis(e.target.value)} type="number" placeholder='AXIS' />
                </td>
                <td >
                  <input className='w-20 py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={laxis} onChange={(e) => setLaxis(e.target.value)} type="number" placeholder='AXIS' />
                </td>
              </tr>
              <tr className="bg-white font-bold border-b">
                <td>ADD:</td>
                <td><input className="w-20 px-2 py-4 border-2 text-center" value={add} onChange={(e) => setAdd(e.target.value)} type="number" placeholder='ADD' /></td>
              </tr>
            </tbody>
          </table>

        </div>

        <div className="container mx-auto hidden lg:block my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-gray-500 dark:text-gray-400">
            <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="text-white px-6 py-3">Right Eye</th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="text-white px-6 py-3">Left Eye</th>
              </tr>
            </thead>
            <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="text-center">
                <th scope="col" className="text-white px-6 py-3">
                  SPH
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  CYL
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  AXIS
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  SPH
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  CYL
                </th>
                <th scope="col" className="text-white px-6 py-3">
                  AXIS
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" text-black font-bold text-center">
                <td >
                  <input className='w-32 px-2 py-4 text-center border-2' value={rsph} onChange={(e) => setRsph(e.target.value)} type="number" placeholder='SPH' />
                </td>
                <td >
                  <input className="w-32 px-2 py-4 text-center border-2" value={rcyl} onChange={(e) => setRcyl(e.target.value)} type="number" placeholder='CYL' />
                </td>
                <td >
                  <input className="w-32 px-2 py-4 text-center border-2" value={raxis} onChange={(e) => setRaxis(e.target.value)} type="number" placeholder='AXIS' />
                </td>
                <td >
                  <input className="w-32 px-2 py-4 text-center border-2" value={lsph} onChange={(e) => setLsph(e.target.value)} type="number" placeholder='SPH' />
                </td>
                <td>
                  <input className="w-32 px-2 py-4 text-center border-2" value={lcyl} onChange={(e) => setLcyl(e.target.value)} type="number" placeholder='CYL' />
                </td>
                <td >
                  <input className="w-32 px-2 py-4 text-center border-2" value={laxis} onChange={(e) => setLaxis(e.target.value)} type="number" placeholder='AXIS' />
                </td>
              </tr>
              <tr>
                <td className="text-black font-bold text-center ">ADD:</td>
                <td><input className="w-32 px-2 py-4 border-2 text-center text-black" value={add} onChange={(e) => setAdd(e.target.value)} type="number" placeholder='ADD' /></td>
              </tr>

            </tbody>
          </table>
        </div>

        <div className="my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="min-w-full text-center">
            <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">

                </th>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                  Frame and Lens
                </th>
                <th scope="col" className="text-sm font-medium text-white px-1 py-4">

                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">frame</td>
                <td>
                  <input className='w-full py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={frame} onChange={(e) => setFrame(e.target.value)} type="text" placeholder='FRAME' />
                </td>
              </tr >
              <tr className="bg-white border-b">
                <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">lens</td>
                <td>
                  <input className='w-full py-4 text-center border-2 whitespace-nowrap overflow-hidden' value={lens} onChange={(e) => setLens(e.target.value)} type="text" placeholder='LENS' />
                </td>
              </tr >

            </tbody>
          </table>

          <div className="text-center mx-auto ">
            <button type='submit'
              className=" send inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
              add new purchase
            </button>
          </div>

        </div>
      </form>
      <hr />
      <h1 className="font-bold text-center text-2xl">Orders</h1>
      {/* {orders.map((order) => (
        <div>
        <div className="sm:hidden my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-center">
          <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">

              </th>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                right eye
              </th>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                left eye
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="font-bold px-2 py-4 text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white">sph</td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.rsph}
              </td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.lsph}
              </td>
            </tr >
            <tr className="bg-white border-b">
              <td className="font-bold px-2 py-4 text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white">cyl</td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.rcyl}
              </td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.lcyl}
              </td>
            </tr >
            <tr className="bg-white border-b">
              <td className="font-bold px-2 py-4 text-xs uppercase bg-gray-50 dark:bg-gray-700 text-white">axis</td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.raxis}
              </td>
              <td className="text-sm font-bold text-gray-900 px-2 py-4 whitespace-nowrap">
                {order.laxis}
              </td>
            </tr>
            <tr className="bg-white font-bold border-b">
              <td>ADD:</td>
              <td>{order.add}</td>
            </tr>
          </tbody>
        </table>

      </div>

      <div className="hidden sm:block my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="text-white px-6 py-3">Right Eye</th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="text-white px-6 py-3">Left Eye</th>
            </tr>
          </thead>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="text-center">
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                SPH
              </th>
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                CYL
              </th>
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                AXIS
              </th>
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                SPH
              </th>
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                CYL
              </th>
              <th scope="col" className="text-white px-2 sm:px-6 py-3">
                AXIS
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" text-black font-bold text-center">
              <td>
                {order.rsph}
              </td>
              <td className="px-6 py-4">
                {order.rcyl}
              </td>
              <td className="px-6 py-4">
                {order.raxis}
              </td>
              <td className="px-6 py-4">
                {order.lsph}
              </td>
              <td className="px-6 py-4">
                {order.lcyl}
              </td>
              <td className="px-6 py-4">
                {order.laxis}
              </td>
            </tr>
            <tr>
              <td className="text-black font-bold text-center">ADD:</td>
              <td className="text-black font-bold text-center">{user.add}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="my-4 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-center">
          <thead className=" border-b-2 text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">

              </th>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">
                Frame and Lens
              </th>
              <th scope="col" className="text-sm font-medium text-white px-1 py-4">

              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">frame</td>
              <td>
                {order.frame}
              </td>
            </tr >
            <tr className="bg-white border-b">
              <td className="font-bold px-2 py-4 uppercase bg-gray-50 dark:bg-gray-700 text-white">lens</td>
              <td>
                {order.lens}
              </td>
            </tr >

          </tbody>
        </table>

      </div>
      </div>
      ))} */}
      
    </div>
  )
}
export async function getServerSideProps({ params: { id } }) {

  const res = await fetch(`${baseUrl}/api/user/${id}`)
  const data = await res.json()
  return {
    props: { user: data }
  }
}

// export async function getStaticProps(context) {
//   if (!mongoose.connections[0].readyState) {
//   await mongoose.connect(process.env.MONGO_URI)
//  }
//   let users = await User.find()
//    return {
//      props: {users: JSON.parse(JSON.stringify(users))},
//    }
//  }

export default User