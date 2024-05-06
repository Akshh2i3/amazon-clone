import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";

const Rating = ({ rating }) => {
    const ratingObj = JSON.parse(rating)

    return (
        <div className='flex gap-1 items-center'>
            {
                Array(Math.floor(ratingObj.rate)).fill(true).map((flag, idx) => (<IoStar key={idx} color='yellow' />))
            }

            {
                (Math.floor(ratingObj.rate) != ratingObj.rate) &&
                (<IoStarHalfOutline color='yellow' />)
            }
            <p className='text-[#017085]'>{ratingObj.count} rating</p>
        </div>
    )
}

export default Rating