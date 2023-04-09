import React from 'react';
import kitchen_miele from '../assets/kitchen_miele.mp4';

export default function KitchenMiele() {
  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_miele}
          autoPlay
            loop
              muted/>
  </div>

  )
}

