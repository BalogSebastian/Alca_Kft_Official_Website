import React from 'react';
import kitchen_bosch from '../assets/kitchen_bosch.mp4';

export default function KitchenBosch(){
  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_bosch}
          autoPlay
            loop
              muted/>
  </div>
  
  )
}

