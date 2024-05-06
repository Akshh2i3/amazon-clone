import React from 'react'

const ItemImg = ({ singleProduct }) => {
    return (
        <div className='bg-gray-100 h-fit rounded-md'>
            <img
                className='mix-blend-multiply p-2'
                src={singleProduct.image}
                alt={singleProduct.title}
                style={{ width: '300px', height: '300px' }}
            />
        </div>
    )
}

export default ItemImg