import React from 'react';
import kitchen_neff from '../assets/kitchen_neff.mp4';

export default function KitchenNeff() {

  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_neff}
          autoPlay
            loop
              muted/>
  </div>

  )
}

