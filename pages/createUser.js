import { useState } from 'react';
import baseUrl from '../helper/baseUrl';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
const Register = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, phone, address }
        let res = await fetch(`${baseUrl}/api/addUser`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        let response = await res.json()
        console.log(response)
        setName('')
        setPhone('')
        setAddress('')
        toast.success('User added', {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            router.push('/')
        }, 1000);
    }
    return (
        <div>
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
            <div className=" contact flex my-6  ">

                <div className=" container mx-auto form bg-white rounded-xl items-center shadow-lg p-8 w-96 text-gray-600">
                    <form className="flex flex-col space-y-4" onSubmit={handleSubmit} method="POST" >
                        <div>
                            <label htmlFor="Your Name" className="text-sm">Name</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <div>
                            <label htmlFor="Your E-mail" className="text-sm">Phone</label>
                        </div>
                        <div>
                            <input type="number" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <div>
                            <label htmlFor="Your Name" className="text-sm">Address</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)}
                                className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
                        </div>
                        <button type='submit'
                            className="send inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                            Register
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Register