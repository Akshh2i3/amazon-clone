import Link from 'next/link'
import React from 'react'

const ProccedToBuy = ({ cart, cnt, Totalcost }) => {


    return (
        <div className='w-1/4 p-5 rounded-lg shadow-lg border-2 border-gray-300 h-fit'>
            <div>
                <p className='text-sm'>
                    <span className='text-[#017085]'>Your order is Eligible for Free Delivery. </span>
                    Choose<span className='text-[#007600]'> Free Delivery</span> option at Checkout</p>
                <div className='mb-4 mt-1 pt-2 text-xl font-bold'><span className='font-normal'>Total Amount:</span> $ {Totalcost}</div>

                <Link href={cnt != 0 ? '/checkout' : ''}>
                    <div className='py-2 bg-yellow-300 rounded-lg cursor-pointer text-center text-xl font-semibold'> Proceed To Buy</div>
                </Link>
            </div>
        </div>
    )
}

export default ProccedToBuy