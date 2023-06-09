import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import privacy from '../footer_pages_components/Privacy';
import KitchenAccessorysNavbarMainFooterComponent from '../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainFooterComponent';

export default function FurnitureFooterElement() {
  return (
    <div className='bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>Alca Konyhabútor Stúdió.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li><Link>Rólunk</Link></li>
            <li>
              <Link
                to="../footer_pages_components/privacy" 
                element={<privacy />}
              >Jogvédelem
              </Link>
            </li>
            <li>
              <Link>Partnerek</Link></li>
            <li><Link>Elérhetőség</Link></li>
            <li><Link>Pozicíók</Link></li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>
              <Link
              >
              Konyhabútorok 
              </Link>
              </li>
            <li>
              <Link>Konyhai gépek</Link></li>
            <li>
              <Link>Konyhai nagygépek</Link></li>
            <li>
              <Link
              to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainFooterComponent" 
              element={ <KitchenAccessorysNavbarMainFooterComponent />}
              >Konyhai kiegészítők</Link></li>
           
          </ul>
        </div>
      </div>
    </div>
  );
};
