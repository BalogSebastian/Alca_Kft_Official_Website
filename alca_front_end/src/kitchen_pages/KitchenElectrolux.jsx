import React from 'react';
import kitchen_electrolux from '../assets/kitchen_electrolux.mp4';

export default function KitchenElectrolux (){
  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_electrolux}
          autoPlay
            loop
              muted/>
  </div>

  )
}

