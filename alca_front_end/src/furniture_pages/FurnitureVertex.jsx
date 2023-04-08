import React from 'react';
import vertex from '../assets/vertex.mp4';

const FurnitureVertex = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
     src={vertex}
      autoPlay
       loop
        muted/>
    </div>
  )
}

export default FurnitureVertex;
