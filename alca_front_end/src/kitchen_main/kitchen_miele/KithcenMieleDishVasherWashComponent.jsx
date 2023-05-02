import React from 'react';
import miele_dishwasher_1 from "../../assets_for_kitchen_main/miele_dishwasher_1.jpg";
import miele_dishwasher_2 from "../../assets_for_kitchen_main/miele_dishwasher_2.jpg";
import miele_dishwasher_3 from "../../assets_for_kitchen_main/miele_dishwasher_3.jpg";
import miele_dishwasher_4 from "../../assets_for_kitchen_main/miele_dishwasher_4.jpg";
import miele_dishwasher_5 from "../../assets_for_kitchen_main/miele_dishwasher_5.jpg";
import miele_wash_1 from "../../assets_for_kitchen_main/miele_wash_1.jpg";
import miele_wash_2 from "../../assets_for_kitchen_main/miele_wash_2.jpg";
import miele_wash_3 from "../../assets_for_kitchen_main/miele_wash_3.jpg";
import miele_wash_4 from "../../assets_for_kitchen_main/miele_wash_4.jpg";
import miele from "../../assets_for_kitchen_main/miele.jpg"

const KithcenMieleDishVasherWashComponent = ({ id }) => {
    return (
        <div id={id} className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
            <h1>Mosogatógép/Mosógép választék</h1>
            <p className='py-4'>Mosogatógép/Mosógép sütő katalógus</p>
            <div className='grid grid-rows-none md:grid-cols-4 py-4 gap-2 md:gap-4'>
                <img className='w-full h-full object-cover col-span-2 md:col-span-2 row-span-2' src={miele} alt="/" />
                <img className='w-full h-full object-cover' src={miele_dishwasher_2} alt="/" />
                <img className='w-full h-full object-cover' src={miele_dishwasher_3} alt="/" />
                <img className='w-full h-full object-cover' src={miele_dishwasher_4} alt="/" />
                <img className='w-full h-full object-cover' src={miele_dishwasher_5} alt="/" />
                <img className='w-full h-full object-cover' src={miele_wash_1} alt="/" />
                <img className='w-full h-full object-cover' src={miele_wash_2} alt="/" />
                <img className='w-full h-full object-cover' src={miele_wash_3} alt="/" />
                <img className='w-full h-full object-cover' src={miele_wash_4} alt="/" />
            </div>
        </div>
      )
}

export default KithcenMieleDishVasherWashComponent
