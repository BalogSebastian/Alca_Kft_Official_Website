import React from 'react';
import kitchen_accessorys_1 from '../assets/kitchen_accessorys_1.jpg';
import kitchen_accessorys_2 from '../assets/kitchen_accessorys_2.jpg';
import kitchen_accessorys_3 from '../assets/kitchen_accessorys_3.jpg';
import kitchen_accessorys_5 from '../assets/kitchen_accessorys_5.jpg';

const Furniture = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Összes konyhai kiegészítő</h1>
        <p className='py-4'>Hajdú Bihar Vármegye szivében</p>
        <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={kitchen_accessorys_5} alt="/" />
            <img className='w-full h-full object-cover' src={kitchen_accessorys_2} alt="/" />
            <img className='w-full h-full object-cover' src={kitchen_accessorys_1} alt="/" />
            <img className='w-full h-full object-cover' src={kitchen_accessorys_1} alt="/" />
            <img className='w-full h-full object-cover' src={kitchen_accessorys_5} alt="/" />
        </div>
    </div>
  )
}

export default Furniture
