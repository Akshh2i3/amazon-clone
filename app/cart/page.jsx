'use client'
import React from 'react'
import { getCart, getCnt } from '@/redux/cartSlice'
import { useAppSelector } from '@/lib/redux/reduxHooks'
import ProccedToBuy from '@/components/cart/ProccedToBuy'
import ShoppingCart from '@/components/cart/ShoppingCart'


const CartPage = () => {
    const cart = useAppSelector(getCart)
    const cnt = useAppSelector(getCnt)
    const Totalcost = (cart.reduce((sum, item) => (sum += item.quantity * item.price), 0)).toFixed(2)

    // if (cnt === 0) return <div className='h-screen w-screen text-5xl flex justify-center items-center'>No items in Cart</div>
    return (
        <div className='flex p-10 justify-around'>
            <ShoppingCart cart={cart} cnt={cnt} Totalcost={Totalcost} />
            <ProccedToBuy cart={cart} cnt={cnt} Totalcost={Totalcost} />
        </div>
    )
}

export default CartPage