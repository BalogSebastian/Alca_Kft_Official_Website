import React from 'react';
import first_kitchen from '../assets/first_kitchen.jpg';
import second_kitchen from '../assets/second_kitchen.jpg';
import third_kitchen from '../assets/third_kitchen.jpg';
import fourth_kithcen from '../assets/fourth_kitchen.jpg';
import fifth_kitchen from '../assets/fifth_kitchen.jpg';
 
const Kitchen = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Legjobb konyhai gépek</h1>
        <p className='py-4'>Hajdú Bihar Vármegye szivében</p>
        <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={first_kitchen} alt="/" />
            <img className='w-full h-full object-cover' src={second_kitchen} alt="/" />
            <img className='w-full h-full object-cover' src={third_kitchen} alt="/" />
            <img className='w-full h-full object-cover' src={fourth_kithcen} alt="/" />
            <img className='w-full h-full object-cover' src={fifth_kitchen} alt="/" />
        </div>
    </div>
  )
}

export default Kitchen
