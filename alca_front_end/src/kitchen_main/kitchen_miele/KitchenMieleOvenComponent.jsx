import React from 'react';
import { useEffect } from 'react';
import miele_oven_1 from '../../assets_for_kitchen_main/miele_oven_1.jpg';
import miele_oven_2 from "../../assets_for_kitchen_main/miele_oven_2.jpg";
import miele_oven_3 from "../../assets_for_kitchen_main/miele_oven_3.jpg";
import miele_oven_4 from "../../assets_for_kitchen_main/miele_oven_4.jpg";
import miele_oven_5 from "../../assets_for_kitchen_main/miele_oven_5.jpg";

const KitchenMieleOvenComponent = ({ id }) => {

    return (
        <div id={id} className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Hatalmas sütő választék</h1>
            <p className='py-4'>Sütő katalógus</p>
            <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={miele_oven_1} alt="/" />
                <img className='w-full h-full object-cover' src={miele_oven_2} alt="/" />
                <img className='w-full h-full object-cover' src={miele_oven_3} alt="/" />
                <img className='w-full h-full object-cover' src={miele_oven_4} alt="/" />
                <img className='w-full h-full object-cover' src={miele_oven_5} alt="/" />
            </div>
        </div>
      )
    }

export default KitchenMieleOvenComponent;
