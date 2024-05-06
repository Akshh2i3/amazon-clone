import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'

const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

export async function POST(req, res) {
    const body = await req.json()
    const { items, email } = body
    // console.log(items)
    // console.log(email)

    const arrangedItems = items.map(item => ({
        price_data: {
            currency: 'usd',
            product_data: {
                name: item.title,
                images: [item.image]
            },
            unit_amount: Math.floor(item.price * 100),
        },
        quantity: 1
    }))

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        shipping_address_collection: {
            allowed_countries: ['GB', 'US', 'CA']
        },
        line_items: arrangedItems,
        mode: 'payment',
        success_url: `${process.env.HOST}/success`,
        cancel_url: `${process.env.HOST}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map(item => item.image))
        }
    })

    return NextResponse.json({
        // message: 'data coming'
        id: session.id
    })
}