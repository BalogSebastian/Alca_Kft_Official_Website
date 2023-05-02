import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import { useEffect } from 'react';

const FurnitureNavbarMainFooterComponent = () => {
const [nav, setNav] = useState(false);
    const handleNav = () => {
      setNav(!nav);
      if(!nav) {
          document.body.style.overflow = 'hidden'
      } else {
          document.body.style.overflow = 'scroll'
      }
    };
  
     {/* Itt ugrik az oldal tetejére */}
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
    return (
      <div className='absolute w-full flex justify-between p-4 items-center'>
        <h1 className='z-20'></h1>
        <HiMenuAlt3 onClick={handleNav} className='z-20 md:hidden  cursor-pointer mb-8' size={35} />
        <div
          className={
            nav
              ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
              : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
          }
        >
          <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
            <li 
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Nobilia modellek</li>
            <li
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Aran modellek</li>
            <li
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Lube modellek</li>
            <li
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Creo modellek</li>
            <li
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Vertex modellek</li>
            <li
            onClick={handleNav}
            className='font-bold text-3xl p-8'>Vissza a főoldalra</li>
          </ul>
        </div>
      </div>
    );
  }

export default FurnitureNavbarMainFooterComponent
