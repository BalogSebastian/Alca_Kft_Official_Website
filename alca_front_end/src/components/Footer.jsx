import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import privacy from '../footer_pages_components/Privacy';

export default function Footer() {
  return (
    <div className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>Alca Kft.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <FaFacebook className='icon' />
            <FaPinterest className='icon' />
            <FaInstagram className='icon' />
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>Rólunk</li>
            <li>
              <Link

                to="../footer_pages_components/privacy" 
                element={<privacy />}
              >Jogvédelem
              </Link>

            </li>
            <li>Partnerek</li>
            <li>Elérhetőség</li>
            <li>Pozicíók</li>
          </ul>
          <ul className='text-right lg:flex'>
            <li>Bemutatkozás</li>
            <li>Konyhai eszközök</li>
            <li>Konyhai kiegészítők</li>
            <li>Bútor katalógus</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
