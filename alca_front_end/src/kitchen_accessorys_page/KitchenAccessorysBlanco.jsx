import React from 'react';
import kitchen_accessorys_blanco from '../assets/kitchen_accessorys_blanco.mp4';

export default function KitchenAccessorysBlanco(){
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_accessorys_blanco}
          autoPlay
            loop
              muted/>
  </div>
  );
};

