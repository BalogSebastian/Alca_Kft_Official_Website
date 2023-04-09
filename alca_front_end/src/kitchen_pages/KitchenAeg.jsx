import React from 'react';
import kitchen_aeg from '../assets/kitchen_aeg.mp4';

export default function KitchenAeg () {
  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_aeg}
          autoPlay
            loop
              muted/>
  </div>
  
  )
}

