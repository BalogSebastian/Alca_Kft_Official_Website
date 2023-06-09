import React from 'react';
import grohe_1 from '../../../assets_for_pages/assets_for_kitchen_accessorys/grohe_1.jpeg';
import grohe_2 from '../../../assets_for_pages/assets_for_kitchen_accessorys/grohe_2.jpeg';
import grohe_3 from '../../../assets_for_pages/assets_for_kitchen_accessorys/grohe_3.jpeg';
import grohe_4 from '../../../assets_for_pages/assets_for_kitchen_accessorys/grohe_4.jpeg';
import grohe_5 from '../../../assets_for_pages/assets_for_kitchen_accessorys/grohe_5.jpeg';

export default function GrogeFirstPhotoBlock(){
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 mt-5 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={grohe_1}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={grohe_2}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={grohe_3}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={grohe_4}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={grohe_5}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Sablon szöveg 1</h3>
        <p className='text-2xl py-6'>
          Sablon szöveg 2
        </p>
        <p className='pb-6'>
          Sablon szöveg 3
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Tudj meg többet
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>Vagy vedd fel velünk a kapcsolatot</button>
        </div>
      </div>
    </div>
  );
};
