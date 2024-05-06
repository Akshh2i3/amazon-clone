import Link from 'next/link';
import React from 'react'
import { MdLock } from "react-icons/md";


const TopSection = () => {
    return (
        <div className='py-5 flex justify-evenly items-center mx-auto bg-gray-300 border-b border-gray-400 shadow-xl mb-10'>
            <Link href={'/'}>
                <div>
                    <img src="/amazon-logo.png" alt="logo" style={{ width: '120px', height: '40px' }} />
                </div>
            </Link >
            <div className='text-5xl font-semi-bold'>Checkout</div>
            <div>
                <MdLock size={'3rem'} color='gray' />
            </div>
        </div >
    )
}

export default TopSection