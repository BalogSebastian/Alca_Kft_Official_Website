import React, { useState } from 'react';
import {AiOutlineSearch } from 'react-icons/ai';
import furniture from "../assets/furniture.mp4";
import { useNavigate } from 'react-router-dom';


const Hero = ()  => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };

    const handleSearch = (event) => {
      event.preventDefault();
      switch (searchTerm) {
        case 'aran':
          navigate('/furniture_pages/FurnitureAran');
          break;
        case 'nobilia':
          navigate('/furniture_pages/FurnitureNobilia');
          break;
        case 'lube':
          navigate('/furniture_pages/FurnitureLube')
          break
        case 'vertex':
          navigate('/furniture_pages/FurnitureVertex')
          break
        case 'aeg':
          navigate('/kitchen_pages/KitchenAeg')
          break
        case 'bosch':
          navigate('/kitchen_pages/KitchenBosch')
          break
        case 'electrolux':
          navigate('/kitchen_pages/KitchenElectrolux')
          break
        case 'miele':
          navigate('/kitchen_pages/KitchenMiele')
          break
        case 'neff':
          navigate('/kitchen_pages/KitchenNeff')
          break
        case 'whirlpool':
          navigate('/kitchen_pages/KitchenWhirlpool')
          break
        default:
          break;
      }
    };
  
  
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
        <h2 className='py-2'>Minőség, megbízhatóság és odafigyelés</h2>
        <form className='flex justify-center items-center max-w-[700px] mx-auto w-full p-3 rounded-md'>
          <div>
          <input 
          className='p-4 rounded-full w-[300px] sm:w-[400px] text-black text-sm focus:outline-none'
           type='text'
            placeholder='Keress a katalógusból'
            value={searchTerm}
            onChange={handleInputChange}/> 
          </div>  
          <div>
            <button id='search_button_hero_page' type='submit' onClick={handleSearch}><AiOutlineSearch size={20} className='icon'/></button>
          </div>
        </form>
    </div>
    </div>
    
  )
}

export default Hero