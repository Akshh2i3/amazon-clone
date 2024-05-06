'use client'
import React, { forwardRef, useEffect, useState } from 'react'
import CategoryWiseProducts from './CategoryWiseProducts'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const HomePage = () => {
    const [live, setLive] = useState(0)
    const categoryList = ["men's clothing", "women's clothing", "electronics", "jewelry"]

    const ForwardHander = () => {
        setLive((live + 1) % categoryList.length);
    }


    useEffect(() => {
        const timer = setTimeout(() => {
            ForwardHander(live)
        }, 4000);
        return () => {
            clearTimeout(timer)
        }
    }, [live])

    return (
        <div>
            <div>
                <img src="/backgroundImg.jpg" alt="banner" style={{
                    // width: '1600px',
                    // height: '400px',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
                }} />
            </div>

            <div className='flex h-fit relative -top-96'>
                <div
                    className='w-[10%] h-fit flex justify-center cursor-pointer relative -top-16 text-gray-700'
                >
                    <IoIosArrowBack
                        size={'3rem'}
                        onClick={() => {
                            live === 0 ? setLive(categoryList.length - 1) : setLive(live - 1);
                        }} />
                </div>

                <div className='flex flex-col gap-10 w-[80%]'>
                    {categoryList.map((category, idx) => (
                        <CategoryWiseProducts key={idx} category={category} live={categoryList[live]} />
                    ))}
                </div>

                <div
                    className='w-[10%] h-fit flex justify-center cursor-pointer relative -top-16 text-gray-700'
                >

                    <IoIosArrowForward
                        size={'3rem'}
                        onClick={() => {
                            ForwardHander()
                        }} />
                </div>
            </div>
        </div>
    )
}

export default HomePage