import React, { useState } from 'react';
import {AiOutlineSearch } from 'react-icons/ai';
import furniture from "../assets/furniture.mp4"

const Hero = ()  => {
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
        <h2 className='py-2'>Minőség, megbíthatóság és odafigyelés</h2>
        <form className='flex justify-center items-center max-w-[700px] mx-auto w-full p-3 rounded-md'>
          <div>
          <input className='p-4 rounded-full w-[300px] sm:w-[400px] font-bold focus:outline-none'
           type='text'
            placeholder='Keress a katalógusból'/> 
          </div>  
          <div>
            <button><AiOutlineSearch size={20} className='icon' /></button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Hero