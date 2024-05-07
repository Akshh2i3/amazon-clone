'use client'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { addToCart } from '@/redux/cartSlice';
import { useAppDispatch } from '@/lib/redux/reduxHooks';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
    toast.success('Item Added to Cart', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const AddToCartComp = ({ singleProduct }) => {
    const dispatch = useAppDispatch()

    return (
        <div className='ml-10 border w-[20%] border-gray-300 rounded-md h-fit'>
            <div className='p-4 flex flex-col gap-4'>
                <img
                    src="/prime-logo.png" alt="primeLogo"
                    style={{ width: '60px', height: '30px' }} />

                <h1 className='text-[#017085]'>Free Delivery <span className='text-black font-bold'>Thursday, 21 March.</span> Details</h1>

                <h1>Or fastest delivery, <span className='font-bold'>Tomorrow, 20 March</span>, Order within <span className='text-[#30A46C]'>15 hrs 53 mins.</span> <span className='text-[#017085]'>Details</span> </h1>

                <p className='flex gap-1 items-center'>
                    <IoLocationOutline />
                    <span className='font-thin'>Deliver to India</span>
                </p>

                <div>
                    <div
                        onClick={() => {
                            notify();
                            dispatch(addToCart(singleProduct));
                        }}
                        className=' mx-3 px-5 py-2 rounded-lg text-center cursor-pointer bg-[#FFD814]'>
                        ADD TO CART
                        <ToastContainer />
                    </div>
                    <div className=' mx-3 px-5 py-2 rounded-lg text-center cursor-pointer bg-[#F39D06] mt-2'>BUY NOW</div>
                </div>

            </div>
        </div>
    )
}

export default AddToCartComp