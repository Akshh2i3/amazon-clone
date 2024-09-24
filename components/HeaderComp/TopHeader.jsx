'use client'
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useAppSelector } from "@/lib/redux/reduxHooks";
import { getCnt } from "@/redux/cartSlice";
import { superbase } from "@/lib/superbase/products";

const TopHeader = ({ user, setUser }) => {
  const [item, setItem] = useState('');
  const cnt = useAppSelector(getCnt)

  useEffect(() => {
    (async function () {
      try {
        const data = await superbase.auth.getUser();
        // console.log(data.data.user)
        setUser(data.data.user)
      } catch (error) {
        console.log('error while user sign-in')
      }
    })()
  }, [])

  return (
    <div className="bg-[#131921] text-white p-3">
      <div className="flex justify-around items-center">
        <Link href={'/'}>
          <div>
            <img src="/amazon-logo-2.webp" alt="amazon logo" width={100} height={100} />
          </div>
        </Link>
        <div className="w-3/5 flex items-center">
          <input className='w-full p-2 text-black rounded-l-md outline-none'
            type="text"
            placeholder="Search on Amazon.in"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />

          <Link href={(item !== '') ? `/search/${item}` : ''}>
            <IoSearch size={'2.5rem'} className="p-2 bg-[#F3A847]/90 hover:bg-[#E08E26]/90 rounded-r-md cursor-pointer" />
          </Link>
        </div>

        <div className="flex gap-3 items-center">
          <div>
            <Link href={'/signin'}>
              <h1 className="text-sm cursor-pointer hover:underline">
                {user ? (() => {
                  const { full_name, user_name } = user.identities[0].identity_data;
                  return full_name ? `Welcome ${full_name.split(' ')[0]}` : user_name;
                })()
                  : 'Sign-In'}
              </h1>

            </Link>
            <h1 className="font-bold ">Account & Lists</h1>
          </div>
          <div>
            <h1 className="text-xs">Returns</h1>
            <h1 className="font-bold">& Orders</h1>
          </div>


          <Link href={'/cart'}>
            <div className="flex items-end font-bold cursor-pointer">
              <div>
                <p className="mx-auto w-fit h-2 relative -top-2 left-1 bg-transparent">{cnt}</p>
                <FiShoppingCart size={'2.5rem'} />
              </div>
              <h1>Cart</h1>
            </div>
          </Link>

        </div>
      </div >
    </div>
  );
};

export default TopHeader;
