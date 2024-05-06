import Link from 'next/link';
import React from 'react'
import Rating from '../Rating';

const SearchedItemCard = ({ product }) => {
    return (
        <div>
            <Link href={`/product/${product.id}`}>
                <div className='cursor-pointer'>
                    <div className='flex justify-center items-center bg-gray-100 rounded-md h-[250px] overflow-hidden'>
                        <img className='mix-blend-multiply p-8' src={product.image} alt={product.title} height={300} width={200} />
                    </div>
                    <h1 className='font-bold hover:text-[#CF5500]'>{product.title}</h1>
                    <p>{product.description.substring(0, 70)}...</p>

                    <Rating rating={product.rating} />
                    <p className='font-bold text-2xl'>${product.price}</p>
                </div>
            </Link>
        </div>
    )
}

export default SearchedItemCard