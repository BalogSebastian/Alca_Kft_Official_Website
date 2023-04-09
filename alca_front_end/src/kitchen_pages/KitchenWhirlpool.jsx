import React from 'react';
import kitchen_whirlpool from '../assets/kitchen_whirlpool.mp4';

export default function KitchenWhirlpool(){
  return (

    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={kitchen_whirlpool}
          autoPlay
            loop
              muted/>
  </div>

  )
}

