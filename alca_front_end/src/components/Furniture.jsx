import React from 'react';
import first_butor from '../assets/first_bútor.jpg';
import second_butor from '../assets/second_butor.jpg';
import third_butor from '../assets/third_butor.jpg';
import fourth_butor from '../assets/fourth_butor.jpg';

const Furniture = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1 className='mb-3'>Legjobb bútorok egy helyen</h1>
        <p>Hajdú Bihar Vármegye szivében</p>
        <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={first_butor} alt="/" />
            <img className='w-full h-full object-cover' src={second_butor} alt="/" />
            <img className='w-full h-full object-cover' src={third_butor} alt="/" />
            <img className='w-full h-full object-cover' src={fourth_butor} alt="/" />
            <img className='w-full h-full object-cover' src={fourth_butor} alt="/" />
        </div>
    </div>
  )
}

export default Furniture
