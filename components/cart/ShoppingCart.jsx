'use client'
import React from 'react'
import ItemsInCart from './ItemsInCart'
import { useAppDispatch } from '@/lib/redux/reduxHooks'
import { clearCart } from '@/redux/cartSlice'

const ShoppingCart = ({ cart, cnt, Totalcost }) => {

    const dispatch = useAppDispatch()
    return (
        <div className='p-5 w-2/3'>
            <h1 className='text-3xl font-semibold mb-1'>Shopping Cart</h1>
            <p className='text-right text-gray-500 text-md'>Price</p>
            <div className='flex flex-col gap-3 pb-2'>
                {cart.map((product, idx) => (<ItemsInCart key={idx} product={product} />))}
            </div>
            <div className='border-t-2 border-gray-200/90 pt-2 text-xl font-bold flex justify-between'>
                <div className='text-red-600 cursor-pointer' onClick={() => { dispatch(clearCart()) }}> Remove All Items</div>
                <div><span className='font-normal'>SubTotal({cnt} Items): </span>${Totalcost}</div>
            </div>
        </div>
    )
}

export default ShoppingCart