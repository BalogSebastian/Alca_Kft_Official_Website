import React from "react";
import { useEffect } from "react";
import Vertex_Anett from "../assets_for_FurniturePageComponents/Vertex_Anett.jpg";
import Vertex_Bútor from "../assets_for_FurniturePageComponents/Vertex_Bútor.jpg";
import Vertex_Dorina from "../assets_for_FurniturePageComponents/Vertex_Dorina.jpg";
import Vertex_Line from "../assets_for_FurniturePageComponents/Vertex_Line.jpg";
import Vertex_Monza from "../assets_for_FurniturePageComponents/Vertex_Monza.jpg";
import Vertex_Orsi from "../assets_for_FurniturePageComponents/Vertex_Orsi.jpg";


const FurnitureMainVertexComponent = ({ id }) => {

  useEffect(() => {
    if (id === 'vertex') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    }
  }, [id]);


  return (
        <div id={id} className='mx-auto h-screen max-w-[1240px] px-4 mb-30 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Anett} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Anett
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Bútor} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Bútor Modell
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Dorina} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Dorina 
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Line} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Line
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Monza} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Monza
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Orsi} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Orsi
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Dorina} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                   Vertex Dorina
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Bútor} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                   Vertex bútor
                  </p>
               </div>
            </div>
            <div className='relative'>
             <img className='w-full h-full' src={Vertex_Dorina} alt='/' />
                <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                  <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>
                    Vertex Dorina
                  </p>
               </div>
            </div>
          </div>
    
  );
};

export default FurnitureMainVertexComponent;
