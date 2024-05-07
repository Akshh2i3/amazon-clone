'use client'
import { superbase } from '@/lib/superbase/products';
import React from 'react'
import { IoMenu } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const BottomHeader = ({ user, setUser }) => {
  const notify = () => {
    toast.success('User Signed out Successfully', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <div className='flex justify-between items-center bg-[#232F3E] '>
      <ul className='text-white px-3 py-2 flex gap-5 items-center list-none cursor-pointer'>
        <li className='flex items-center font-bold'><IoMenu size={'2rem'} />ALL</li>
        <li>Today's Deal</li>
        <li>Customer Service</li>
        <li>Registry</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
      <h1
        onClick={async () => {
          try {
            if (!user) return
            await superbase.auth.signOut()
            setUser(undefined)
            notify()
            console.log('sign-out successfully')
          } catch (error) {
            console.log('error while signing out user')
            console.log(error)
          }
        }}
        className='text-[#F3A847] font-bold border-b-2 border-transparent hover:border-[#F3A847] mr-[3vw] px-2 text-xl'>
        Sign Out
        <ToastContainer /></h1>
    </div>
  )
}

export default BottomHeader