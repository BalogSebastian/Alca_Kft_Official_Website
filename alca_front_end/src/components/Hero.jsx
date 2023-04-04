import React, { useState } from 'react';
import furniture from "../assets/furniture.mp4"

function Hero() {
    const [display, setDisplay] = useState(false);
    const handleHero = () => {
        setDisplay(!display)
    }
  return (
    <div
    className='w-full h-screen relative'>
    <video className='w-full h-full object-cover'
     src={furniture}
      autoPlay
       loop
        muted/>
    <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
    <div onClick={handleHero} className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-6'>
        <h1>Legjobb választék</h1>
        <h2>Minőség, megbíthatóság és odafigyelés</h2>
    </div>
    </div>
  )
}

export default Hero