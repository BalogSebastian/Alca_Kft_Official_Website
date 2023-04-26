import React from 'react';
import { useEffect } from 'react';
import Creo_Contempo from "../assets_for_FurniturePageComponents/Creo_Contempo.jpg";
import Creo_Kyra_Frame from "../assets_for_FurniturePageComponents/Creo_Kyra_Frame.jpg";
import Creo_Selma from "../assets_for_FurniturePageComponents/Creo_Selma.jpg";
import Creo_Smart from "../assets_for_FurniturePageComponents/Creo_Smart.jpg";
import Creo_Tablet_Wood from "../assets_for_FurniturePageComponents/Creo_Tablet_Wood.jpg";
import Creo_Tablet from "../assets_for_FurniturePageComponents/Creo_Tablet.jpg";

const FurnitureMainCreoComponent = ({ id }) => {
    useEffect(() => {
        if (id === 'creo') {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "auto" });
          }
        }
      }, [id]);
      
        return (
          
         <div id={id} className='mx-auto max-w-[1240px] px-4 mt-8 mb-8 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {/* Left Side */}
       {/* <img
         className='row-span-3 object-cover w-full h-full p-2'
         src={nobilia_453_flash_modern}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Easytouch967_modern}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_natura_744_fogganytu_nelkuli}
         alt='/'
       />
       <img
         className='row-span-3 object-cover w-full h-full p-2'
         src={nobilia_Nordic_786_klasszikus}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Sylt847_klasszikus}
         alt='/'
       /> */}
       <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Contempo} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
        Creo_Kyra_Frame Contempo
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Kyra_Frame} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
        Creo Kitchen Kyra Frame
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Selma} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Creo Kitchen Selma
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Smart} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Creo Kitchens Smart
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Tablet_Wood} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Creo Kitchens Tablet Wood
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Tablet} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
         Creo Kitchens Tablet
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Smart} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
        Creo Kitchens Smart
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Kyra_Frame} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Creo Kitchens Kyra Frame
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Creo_Tablet} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
        Creo Kitchens Tablet
        </p>
      </div>
    </div>
    
    
        {/* <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Sylt847_klasszikus}
         alt='/'
       /> */}
     </div>
     
  );
};

export default FurnitureMainCreoComponent;
