import React from 'react';
import kitchen_accessorys_grohe from '../assets/kitchen_accessorys_grohe.mp4';

export default function KitchenAccessorysGrohe(){
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_accessorys_grohe}
          autoPlay
            loop
              muted/>
  </div>

  );
};

