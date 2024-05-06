import React from 'react'
import { useAppDispatch } from '@/lib/redux/reduxHooks'
import { decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/cartSlice'
import Link from 'next/link'

const ItemsInCart = ({ product }) => {
    const dispatch = useAppDispatch()

    return (
        <div className='flex justify-between border-t-2 border-gray-200/90 pt-2'>
            {/* <div className='grid grid-cols-2 gap-2 bg-red-200'> */}
            <div className='w-full flex'>
                {/* img */}
                <div className='w-[370px] bg-gray-200 p-3 rounded-lg overflow-hidden'>
                    <Link href={`/product/${product.id}`}>
                        <img className='mix-blend-multiply ' src={product.image} alt={product.title} style={{ width: '370px', height: '230px' }} />
                    </Link>
                </div>
                <div className='px-10 py-5 w-full flex flex-col gap-5'>
                    <Link href={`/product/${product.id}`}>
                        <p className='font-semibold text-xl'>{product.title}</p>
                    </Link>
                    <p className='text-[#007600] text-sm font-bold -mt-3'>In Stock</p>
                    <p onClick={() => {
                        dispatch(removeFromCart(product))
                    }}
                        className='text-white cursor-pointer hover:shadow-md hover:shadow-red-200 bg-red-600 rounded-lg px-3 py-1 w-fit'>REMOVE</p>

                    <div className='flex gap-6 text-xl bg-gray-300 w-fit px-3 pb-1 rounded-xl font-bold'>
                        <div onClick={() => {
                            if (product.quantity > 1) {
                                dispatch(decrementQuantity(product))
                            }
                        }}> - </div>
                        <div>{product.quantity}</div>
                        <div onClick={() => {
                            dispatch(incrementQuantity(product))
                        }}>+</div>
                    </div>
                </div>
            </div>


            <div>
                <div className='pt-14 font-bold text-2xl'>${product.price}</div>
                <div className='text-sm flex'>M.R.P: <span className='ml-1 line-through'>${(product.price + (product.price * 0.7)).toFixed(2)}</span>
                </div>
            </div>
        </ div >
    )
}

export default ItemsInCart