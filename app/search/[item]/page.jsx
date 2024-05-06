'use client'
import React, { useEffect } from 'react'
import { useSuperbase } from '@/lib/superbase/hooks/useSuperbase'
import SearchedItemCard from '@/components/Search/SearchedItemCard'

const page = ({ params }) => {
    // const { productArr, fetchAllData } = useSuperbase()
    const { filterData, fetchFilteredData } = useSuperbase()

    useEffect(() => {
        // fetchAllData()
        fetchFilteredData(params.item)
    }, [])
    // console.log(productArr)

    if (filterData.length == 0) return
    console.log(filterData)
    return (
        <div className='flex py-10'>
            <div className='w-[80%] mx-auto'>
                <div className='mb-2'>
                    <h1 className='font-bold text-2xl'>{filterData.length} Results</h1>
                    {filterData.length !== 0 && <p className='font-thin'> Check each product page for other buying options. Price and other details may vary based on product size and color.</p>}
                </div>
                <div className='grid grid-cols-4 gap-2'>
                    {   //data.length
                        filterData.map((product) => (
                            <SearchedItemCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default page