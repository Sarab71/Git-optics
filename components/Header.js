import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
function Header() {
  return (
    <div>
      <div className='grid grid-col justify-center space-y-1 my-3'>
        <Image src="/sns.png" width="100" height="60"></Image>
      </div>
      <div className=' flex justify-center mx-auto space-x-3'>
        <Link href={'/'}><button className=" w-40 inline-block bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">home</button></Link>
        <Link href={'/createUser'}><button className=" w-40 inline-block bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
          add customer
        </button></Link>
      </div>
      <div className=' w-64 sm:w-96 mx-auto my-3 '>
        <input type="text" placeholder="Search here...."
          className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300" />
      </div>
    </div>
  )
}

export default Header