import React from 'react';
import kitchen_accessorys_dyson from '../assets/kitchen_accessorys_dyson.mp4';

export default function KitchenAccessorysDyson() {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_accessorys_dyson}
          autoPlay
            loop
              muted/>
  </div>
  );
};

