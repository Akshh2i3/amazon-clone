import React from 'react'
import TopSection from '@/components/checkout/TopSection';
import CenterSection from '@/components/checkout/CenterSection';

const page = () => {
    return (
        <div className='absolute top-0 w-full h-full bg-white'>
            <TopSection />
            <CenterSection />
        </div>
    )
}

export default page