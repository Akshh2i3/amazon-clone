'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Rating from '../Rating'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import { useAppDispatch } from '@/lib/redux/reduxHooks'
import { addToCart } from '@/redux/cartSlice'

const CategoryWiseProducts = ({ category, live }) => {
    const { categoryData, getCategoryWiseData } = useSuperbase()
    const dispatch = useAppDispatch()

    useEffect(() => {
        getCategoryWiseData(category)
    }, [])

    return (
        <div className={`${live !== category && 'hidden'} m-3 p-3 bg-white rounded-lg w-full border border-gray-500 mx-auto relative -top-24`}>
            <div className='font-semibold capitalize text-3xl pb-4 w-fit mx-auto space-x-8 tracking-wider'>
                {category}
            </div>
            <div className='flex justify-evenly gap-14 overflow-x-scroll no-scrollbar'>
                {
                    categoryData.map((product) => (
                        <Link key={product.id} href={`product/${product.id}`}>
                            <div className='p-2 border-2 border-gray-500 rounded-lg w-[250px] h-full'>
                                <div className='flex flex-col items-center justify-evenly h-full gap-2 p-1'>

                                    <div className='p-3 rounded-lg bg-gray-200'>
                                        <img
                                            className='mix-blend-multiply'
                                            src={product.image} alt={product.title} style={{ width: '200px', height: '200px' }} />
                                    </div>
                                    <p className='text-xl'>{product.title}</p>
                                    <div className='flex items-center w-full justify-between gap-4'>
                                        <p className='font-bold'>${product.price} </p>
                                        <div className='text-sm'><Rating rating={product.rating} /></div>
                                    </div>

                                    <div className='w-full'>
                                        <Link href='/cart'>
                                            <div onClick={() => (
                                                dispatch(addToCart(product))
                                            )}
                                                className='px-5 py-2 text-xl font-semibold rounded-lg text-center cursor-pointer bg-[#FFD814]'>ADD TO CART
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div >
    )
}

export default CategoryWiseProducts