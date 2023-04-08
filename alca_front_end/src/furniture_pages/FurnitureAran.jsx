import React from 'react';
import aran from '../assets/aran.mp4';

const FurnitureAran = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
          src={aran}
            autoPlay
              loop
                muted/>
    </div>
  )
}

export default FurnitureAran;
