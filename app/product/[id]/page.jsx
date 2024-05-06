'use client'
import React, { useEffect } from 'react'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import ItemImg from '@/components/singleItem/itemImg';
import ItemContent from '@/components/singleItem/ItemContent';
import AddToCartComp from '@/components/singleItem/AddToCartComp';


const page = ({ params }) => {
    const { id } = params
    const { singleProduct, getProductDetail } = useSuperbase()

    useEffect(() => {
        getProductDetail(id)
    }, [id])

    if (singleProduct.id === undefined) return;
    // else check if you recieved the data successfully or not 
    // until you dont recieve the data dont proceed

    return (
        <div className='w-[80%] mx-auto mt-10 flex gap-5'>
            <ItemImg singleProduct={singleProduct} />
            <ItemContent singleProduct={singleProduct} />
            <AddToCartComp singleProduct={singleProduct} />
        </div>
    )
}



export default page