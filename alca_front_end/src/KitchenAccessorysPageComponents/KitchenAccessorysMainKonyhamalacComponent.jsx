import React from 'react';
import { useEffect } from 'react';
import grohe_6 from '../assets_for_pages/assets_for_kitchen_accessorys/grohe_6.jpeg';
import grohe_7 from '../assets_for_pages/assets_for_kitchen_accessorys/grohe_7.jpeg';
import grohe_8 from '../assets_for_pages/assets_for_kitchen_accessorys/grohe_8.jpeg';
import grohe_9 from '../assets_for_pages/assets_for_kitchen_accessorys/grohe_9.jpeg';
import grohe_10 from '../assets_for_pages/assets_for_kitchen_accessorys/grohe_10.jpeg';

const KitchenAccessorysMainKonyhamalacComponent = ({ id }) => {

  useEffect(() => {
    if (id === 'konyhamalac') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id]);

  return (
    <div id={id} className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
    {/* Left Side */}
  <div className='flex flex-col h-full justify-center ml-40'>
      <h3 className='text-5xl md:text-6xl font-bold'>Konyhamalacok</h3>
      <p className='text-2xl py-6'>
      Nem tudom mit irjak ide milyen konyha malac
      </p>
      <p className='pb-6'>
        Kis és nagy méretű
      </p>
      <div>
        <button className='border-black mr-4 hover:shadow-xl'>
          Tudj meg többet
        </button>
        <button className='bg-black text-white border-black hover:shadow-xl'>Vagy vedd fel velünk a kapcsolatot</button>
      </div>
    </div>
     <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
     <img
       className='row-span-3 object-cover w-full h-full p-2'
       src={grohe_6}
       alt='/'
     />
     <img
       className='row-span-2 object-cover w-full h-full p-2'
       src={grohe_7}
       alt='/'
     />
     <img
       className='row-span-2 object-cover w-full h-full p-2'
       src={grohe_8}
       alt='/'
     />
     <img
       className='row-span-3 object-cover w-full h-full p-2'
       src={grohe_9}
       alt='/'
     />
     <img
       className='row-span-2 object-cover w-full h-full p-2'
       src={grohe_10}
       alt='/'
     />
   </div>
   </div>
  )
}

export default KitchenAccessorysMainKonyhamalacComponent
