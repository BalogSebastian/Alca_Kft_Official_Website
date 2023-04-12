import React from 'react';
import kitchen_accessorys_teka_global from '../assets/kitchen_accessorys_teka_global.mp4';

export default function KitchenAccessorysTekaGlobal () {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_accessorys_teka_global}
          autoPlay
            loop
              muted/>
  </div>

  );
};
