import React from 'react';
import lube from '../assets/lube.mp4';

const FurnitureLube = () => {
  return (
    <div className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
        src={lube}
          autoPlay
            loop
              muted/>
    </div>
  )
}

export default FurnitureLube;
