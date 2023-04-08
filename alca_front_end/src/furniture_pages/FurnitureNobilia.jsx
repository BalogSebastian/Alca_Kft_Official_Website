import React from 'react';
import nobilia from '../assets/nobilia.mp4';

const FurnitureNobilia = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
     src={nobilia}
      autoPlay
       loop
        muted/>
    </div>
  )
}

export default FurnitureNobilia;
