import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className='absolute top-0 h-screen w-screen flex flex-col gap-10 justify-center items-center'>
            <div className=' text-5xl text-green-400 font-bold'>Order Placed successfully </div>
            <Link href={'/'}>
                <div className='border border-gray-300 px-6 py-2 rounded-lg bg-gray-600 text-white'>Return to Home Page</div>
            </Link>
        </div>
    )
}

export default page