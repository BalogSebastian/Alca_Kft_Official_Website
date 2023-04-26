import React from 'react';
import { useEffect } from 'react';
import nobilia_453_flash_modern from "../assets_for_FurniturePageComponents/nobilia_453_flash_modern.jpg";
import nobilia_Easytouch967_modern from "../assets_for_FurniturePageComponents/nobilia_Easytouch967_modern.jpg";
import nobilia_natura_744_fogganytu_nelkuli from "../assets_for_FurniturePageComponents/nobilia_natura_744_fogganytu_nelkuli.jpg";
import nobilia_Nordic_786_klasszikus from "../assets_for_FurniturePageComponents/nobilia_Nordic_786_klasszikus.jpg";
import nobilia_Sylt847_klasszikus from "../assets_for_FurniturePageComponents/nobilia_Sylt847_klasszikus.jpg";
import nobilia_touch_340_foggantyu from "../assets_for_FurniturePageComponents/nobilia_touch_340_foggantyu.jpg";



const FurnitureMainNobiliaComponent = ({ id }) => { 
  
  useEffect(() => {
  if (id === 'nobilia') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "auto" });
    }
  }
}, [id]);


  return (
    
    <div id={id} className='mx-auto max-w-[1240px] px-4 mt-28 mb-8 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <div className='relative'>
      <img className='w-full h-full' src={nobilia_Sylt847_klasszikus} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Sylt 847
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full ' src={nobilia_453_flash_modern} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia 453 Flash Modern
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full ' src={nobilia_natura_744_fogganytu_nelkuli} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Natura 744 
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full r' src={nobilia_Nordic_786_klasszikus} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Nordic 786
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full ' src={nobilia_Easytouch967_modern} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia EasyTouch967
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full' src={nobilia_Sylt847_klasszikus} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Sylt847
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full' src={nobilia_Easytouch967_modern} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia EasyTouch 987
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full' src={nobilia_touch_340_foggantyu } alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Touch 340
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full' src={nobilia_touch_340_foggantyu } alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Nobilia Touch 340
        </p>
      </div>
    </div>
     </div>
  );
};

export default FurnitureMainNobiliaComponent;
