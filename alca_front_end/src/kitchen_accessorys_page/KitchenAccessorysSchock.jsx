import React from 'react';
import kitchen_accessorys_schock from '../assets/kitchen_accessorys_schock.mp4';

export default function KitchenAccessorysSchock() {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_accessorys_schock}
          autoPlay
            loop
              muted/>
  </div>

  );
}
