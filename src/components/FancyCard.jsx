import React from 'react'
import image from '../assets/images/features-icon-01.svg'

export default function FancyCard() {
    return (
        <div className='h-96  flex  shadow-lg flex-col bg-slate-800 p-6 rounded-md'>
            {/* Img here */}
            <img src={image} className='mb-3  ' width={56} height={56} alt='icon-1' />
            {/* Title Here */}
            <p className='text-white text-start text-2xl font-bold'>
                Title 1
            </p>
            {/* Description Here */}
            <p className='text-slate-400 text-start my-2'>
                Dummy description here  Dummy description here   Dummy description here  Dummy description here  Dummy description here   Dummy description here
            </p>

            {/* View Button Here */}
            <button className='py-2 mt-8 px-3 bg-slate-700 text-white rounded-xl font-bold hover:bg-white hover:text-slate-800'>
                View Details
            </button>

        </div>
    )
}
