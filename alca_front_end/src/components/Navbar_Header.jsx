import React from 'react';
import { BsPerson } from 'react-icons/bs';
import alca_logo from '../assets/alca_logo.jpg';
import {HiOutlinePhone} from "react-icons/hi";
import {HiOutlineHome} from 'react-icons/hi';
import { Link } from 'react-router-dom';


const Navbar_Header = () => {
  return (
    <div className='flex justify-between items-center px-8 py-8 bg-white'>
        <div className='flex items-center'>
            <h1 className='text-4xl font-extrabold text-gray-700 ml-10'>
                Alca Konyhabútor Stúdió.
            </h1>
            <img src={alca_logo} alt='' className='w-16 h-auto ml-4' />
        </div>
        <div className='flex'>
        <Link className='hidden md:flex  items-center px-3'>
            <HiOutlineHome className='mr-2' size={30}/>
                <p className='text-2xl font-extrabold text-gray-700'>Főoldal</p>
            </Link>
            <Link className='hidden md:flex  items-center px-3'>
            <HiOutlinePhone className='mr-2' size={30}/>
                <p className='text-2xl font-extrabold text-gray-700'>Kapcsolat</p>
            </Link>
            <Link className='hidden md:flex  items-center px-2'>
            <BsPerson size={30} className='mr-2'/>
                <p className='text-2xl font-extrabold text-gray-700'>Rólunk</p>
            </Link>
            <div className='hidden md:flex px-10'>
        </div>
        </div>
    </div>
  )
}

export default Navbar_Header;