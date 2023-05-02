import React from 'react';
import miele_cooktops_1 from "../../assets_for_kitchen_main/miele_cooktops_1.jpg";
import miele_cooktops_2 from "../../assets_for_kitchen_main/miele_cooktops_2.jpg";
import miele_cooktops_3 from "../../assets_for_kitchen_main/miele_cooktops_3.jpg";
import miele_cooktops_4 from "../../assets_for_kitchen_main/miele_cooktops_4.jpg";
import miele_cooktops_5 from "../../assets_for_kitchen_main/miele_cooktops_5.jpg";

const KitchenMieleCookingPlatesComponent = ({ id }) => {

    return (
        <div id={id} className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Hatalmas főzőlap választék</h1>
            <p className='py-4'>Főzőlap katalógus</p>
            <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={miele_cooktops_1} alt="/" />
                <img className='w-full h-full object-cover' src={miele_cooktops_2} alt="/" />
                <img className='w-full h-full object-cover' src={miele_cooktops_3} alt="/" />
                <img className='w-full h-full object-cover' src={miele_cooktops_4} alt="/" />
                <img className='w-full h-full object-cover' src={miele_cooktops_5} alt="/" />
            </div>
        </div>
      )
    }

export default KitchenMieleCookingPlatesComponent;
