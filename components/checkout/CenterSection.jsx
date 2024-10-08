'use client'
import React from 'react'
import { useAppSelector } from '@/lib/redux/reduxHooks'
import { superbase } from '@/lib/superbase/products'
import { getCart } from '@/redux/cartSlice'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios'

const CenterSection = () => {
    const cart = useAppSelector(getCart)
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY)

    const createStripeSession = async () => {
        try {
            const res = await superbase.auth.getUser()
            const user = res?.data?.user
            if (!user) {
                console.error("User not found")
                return
            }
            console.log(user)

            const checkoutSession = await axios.post('/api/checkout-sessions', {
                items: cart,
                email: user?.email
            })
            console.log(checkoutSession)

            if (checkoutSession?.statusCode === 500) {
                console.error(checkoutSession.message)
                return
            }

            const stripe = await stripePromise
            if (!stripe) {
                console.error('Stripe not loaded')
                return
            }

            const { error } = await stripe.redirectToCheckout({
                sessionId: checkoutSession?.data?.id
            })

            if (error) {
                console.log(error.message)
            }
        } catch (err) {
            console.error('Error during checkout process:', err)
        }
    }

    return (
        <div className='w-full mx-auto justify-evenly flex'>
            <div className='w-[60%]'>
                <div className='py-5 flex justify-between border-b border-gray-400'>
                    <h1 className='font-bold text-xl'>1. Delivery Address</h1>
                    <p>
                        Maya Gupta<br />
                        Eden Garden Appartment, Sector 53 <br />
                        Pune, Maharashtra 144411<br />
                        Add Delivery instructions<br />
                    </p>
                </div>
                <div className='py-5 flex justify-between w-full border-b border-gray-400'>
                    <h1 className='font-bold text-xl'>2. Items and Delivery</h1>
                    <ul className='max-w-[60%] list-disc text-xl'>
                        {cart.map((product, i) => (<li key={i}>{product.quantity} x {product.title}</li>))}
                    </ul>
                </div>
            </div>
            <div className='w-1/5 border border-gray-400 h-fit p-4'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl underline mb-3'>Order Summary</p>
                    {
                        cart.map((product, idx) => (
                            <p key={idx}>Product {idx + 1}: {product.price} * ({product.quantity}) = ${product.quantity * product.price}</p>
                        ))
                    }
                    <p className='text-2xl font-bold text-orange-700 mt-3'>Total Price: ${(cart.reduce((sum, item) => (sum += item.quantity * item.price), 0)).toFixed(2)}</p>
                </div>
                <div className='bg-yellow-300 text-xl font-semibold w-full text-center py-3 rounded-lg cursor-pointer mt-5'
                    onClick={createStripeSession}
                >
                    Click for Final Payment
                </div>
            </div>
        </div>
    )
}

export default CenterSection
