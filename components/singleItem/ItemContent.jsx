import React from 'react'
import Rating from '@/components/Rating'


const ItemContent = ({ singleProduct }) => {
    return (
        <div className='w-[50%]'>
            <div className='flex flex-col gap-1'>
                <h1 className='font-semibold text-xl'>{singleProduct.title}</h1>
                <p>{singleProduct.description}</p>
                <Rating rating={singleProduct.rating} />
            </div>

            <div className='mt-8'>
                <h1 className='font-bold text-sm'>About this item</h1>
                <li>Value Bundle: Enjoy the soft, luxurious feel of this eight pack of solid color washcloths face towels from Living Fashions. Made with a popcorn texture designed to exfoliate your hands, body or face, these terry cloths are perfect for placing on your bathroom countertop. This pack of eight gives you a fresh washcloth for every day of the week, plus one extra for good measure. 365 Day Money-Back Guarantee.</li>
                <li>Super Soft: Terry towel washcloths are manufactured using 100% soft ring spun cotton. Material remains soft after washing and drying.</li>
                <li>Easy Care: Machine washable and dryer safe. Washcloths are durable and stand up to multiple wash cycles. Enhanced for lasting colors.</li>
                <li>Extra Absorbent: Special manufacturing process enabling the washcloths to be extra absorbent and dry quickly.</li>
            </div>
        </div>
    )
}

export default ItemContent


//     return (
//         <div>
//             {
//                 // this will once run once you get data inside singleProduct
//                 // otherwise if you will only store object in singleProduct then it will also run when the data is not fetching and not successfully fetched which will show error
//                 singleProduct.map((product) => (
//                     <div className='w-[80%] mx-auto mt-10 bg-slate-400 flex' >
//                         <ItemImg singleProduct={singleProduct} />

//                         <div>
//                             <h1 className='font-semibold text-xl'>{product.title}</h1>
//                             <p>{product.description}</p>
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                             <Rating rating={singleProduct.rating} />
//                         </div>
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }
