'use client'
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { superbase } from '@/lib/superbase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const page = () => {
    return (
        <div className='absolute top-0 bg-white w-full h-screen flex justify-center items-center'>
            <div className='w-1/3 p-3 border border-gray-800 rounded-lg'>
                <Auth
                    supabaseClient={superbase}
                    appearance={{ theme: ThemeSupa }}
                    providers={['github']}
                />
            </div>
        </div>
    )
}

export default page