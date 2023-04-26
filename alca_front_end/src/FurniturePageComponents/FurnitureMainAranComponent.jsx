import React from 'react';
import { useEffect } from 'react';
import Aran__Modulo13_Scacco_Matto from "../assets_for_FurniturePageComponents/Aran__Modulo13_Scacco_Matto.jpg";
import Aran_Classic_Magistra from "../assets_for_FurniturePageComponents/Aran_Classic_Magistra.jpg";
import Aran_Classic_Ylenia from "../assets_for_FurniturePageComponents/Aran_Classic_Ylenia.jpg";
import Aran_Modern_Erika from "../assets_for_FurniturePageComponents/Aran_Modern_Erika.jpg";
import Aran_Modern_Masca_Laccata from "../assets_for_FurniturePageComponents/Aran_Modern_Masca_Laccata.jpg";
import Aran_Modulo13_Lab13 from "../assets_for_FurniturePageComponents/Aran_Modulo13_Lab13.jpg";

const FurnitureMainAranComponent = ({ id }) => {

      useEffect(() => {
          if (id === 'aran') {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: "auto" });
            }
          }
        }, [id]);
      
      
        return (

          <div id={id} className='mx-auto max-w-[1240px] px-4 mt-8 mb-8 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='relative'>
             <img className='w-full h-full' src={Aran__Modulo13_Scacco_Matto} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modulo13 Scacco Matto
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Classic_Magistra} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Classic Magistra
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Classic_Ylenia} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Classic Ylenia
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Modern_Erika} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modern Erika
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Modern_Masca_Laccata} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modern Masca Laccata
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Modulo13_Lab13} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modulo13 Lab13
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran__Modulo13_Scacco_Matto} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modulol13 Scacco Matto
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Modulo13_Lab13} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Modulo13 Lab13
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Aran_Classic_Ylenia} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Aran Classic Ylenia
                  </p>
               </div>
            </div>
          </div>
    //      <div id={id} className='mx-auto h-1/2 max-w-[1440px] px-4 mt-16 mb-16 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
    //   {/* Left Side */}
    //    {/* <img
    //      className='row-span-3 object-cover w-full h-full p-2'
    //      src={nobilia_453_flash_modern}
    //      alt='/'
    //    />
    //    <img
    //      className='row-span-2 object-cover w-full h-full p-2'
    //      src={nobilia_Easytouch967_modern}
    //      alt='/'
    //    />
    //    <img
    //      className='row-span-2 object-cover w-full h-full p-2'
    //      src={nobilia_natura_744_fogganytu_nelkuli}
    //      alt='/'
    //    />
    //    <img
    //      className='row-span-3 object-cover w-full h-full p-2'
    //      src={nobilia_Nordic_786_klasszikus}
    //      alt='/'
    //    />
    //    <img
    //      className='row-span-2 object-cover w-full h-full p-2'
    //      src={nobilia_Sylt847_klasszikus}
    //      alt='/'
    //    /> */}
    //    <div className='relative'>
    //   <img className='w-full h-full' src={Aran__Modulo13_Scacco_Matto} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modulo13 Scacco Matto
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Classic_Magistra} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Classic Magistra
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Classic_Ylenia} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Arn Classic Ylenia
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Modern_Erika} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modern Erika
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Modern_Masca_Laccata} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modern Masca Laccata
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Modulo13_Lab13} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modulo13 Lab13
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran_Modern_Erika} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modern Erika
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran__Modulo13_Scacco_Matto} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modulo Scacco Matto
    //     </p>
    //   </div>
    // </div>
    // <div className='relative'>
    //   <img className='w-full h-full' src={Aran__Modulo13_Scacco_Matto} alt='/' />
    //   <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
    //     <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
    //       Aran Modulo13 Scacco Matto
    //     </p>
    //   </div>
    // </div>
    //     {/* <img
    //      className='row-span-2 object-cover w-full h-full p-2'
    //      src={nobilia_Sylt847_klasszikus}
    //      alt='/'
    //    /> */}
    //  </div>
     
  );
};

export default FurnitureMainAranComponent
