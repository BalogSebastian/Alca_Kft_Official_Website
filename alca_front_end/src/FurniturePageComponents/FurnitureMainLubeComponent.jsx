import React from 'react';
import { useEffect } from 'react';
import Lube_Borgo_Antico_Anita from "../assets_for_FurniturePageComponents/Lube_Borgo_Antico_Anita.jpg";
import Lube_Borgo_Antico_Onelia from "../assets_for_FurniturePageComponents/Lube_Borgo_Antico_Onelia.jpg";
import Lube_Classic_Agnese from "../assets_for_FurniturePageComponents/Lube_Classic_Agnese.jpg";
import Lube_Classic_Flavour from "../assets_for_FurniturePageComponents/Lube_Classic_Flavour.jpg";
import Lube_Modern_Imagina_Plus from "../assets_for_FurniturePageComponents/Lube_Modern_Imagina_Plus.jpg";
import Lube_Modern_Immagina_Wood from "../assets_for_FurniturePageComponents/Lube_Modern_Immagina_Wood.jpg";

const FurnitureMainLubeComponent = ({ id }) => {

    useEffect(() => {
        if (id === 'lube') {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "auto" });
          }
        }
      }, [id]);
      
      
        return (
          
         <div id={id} className='mx-auto max-w-[1240px] px-4 mt-28 mb-28 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                 {/* Left Side */}
       {/* <img
         className='row-span-3 object-cover w-full h-full p-2'
         src={nobilia_453_flash_modern}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Easytouch967_modern}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_natura_744_fogganytu_nelkuli}
         alt='/'
       />
       <img
         className='row-span-3 object-cover w-full h-full p-2'
         src={nobilia_Nordic_786_klasszikus}
         alt='/'
       />
       <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Sylt847_klasszikus}
         alt='/'
       /> */}
       <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Borgo_Antico_Anita} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Borgo Antico Anita
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Borgo_Antico_Onelia} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Borgo Antico Onelia
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Classic_Agnese} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Classic Agnese
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Classic_Flavour} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Classic Flavour
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Modern_Imagina_Plus} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Modern Imagina Plus
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Modern_Immagina_Wood} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Modern Immagina Wood
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Classic_Agnese} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Aran Modern Erika
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Modern_Immagina_Wood} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Modern Immagina Wood
        </p>
      </div>
    </div>
    <div className='relative'>
      <img className='w-full h-full object-cover' src={Lube_Modern_Imagina_Plus} alt='/' />
      <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
        <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
          Lube Modern Imagina Plus
        </p>
      </div>
    </div>
    
    
        {/* <img
         className='row-span-2 object-cover w-full h-full p-2'
         src={nobilia_Sylt847_klasszikus}
         alt='/'
       /> */}
     </div>
     
  );
};

export default FurnitureMainLubeComponent
