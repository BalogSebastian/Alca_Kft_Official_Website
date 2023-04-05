import React, {useState} from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';

const Navbar = () => {

    const [nav, setNav ] = useState(false);
    const [logo, setLogo ] = useState(false); 
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav}  className={logo ? 'hidden' : 'block'}>Alca Kft.</h1>
        </div>
        <ul className='hidden md:flex'>
            <button id='fooldal_dropdown' data-dropdown-toogle='dropdown_1' className='border-b'>Főoldal</button>
            <button id='konyhai_eszkozok_dropdown' data-dropdown-toogle='dropdown_2' className='border-b'>Konyhai eszközök</button>
            <button id='konyhai_kiegeszitok_dropdown' data-dropdown-toogle='dropdown_3' className='border-b'>Konyhai kiegészitők</button>
            <button id='butor_katalogus_dropdown' data-dropdown-toogle='dropdown_4' className='border-b'>Bútor katalógus</button>
            <button id='elerhetoseg_dropdown' data-dropdown-toogle='dropdown_5' className='border-b'>Elérhetőség</button>
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={25}/>
            <BsPerson size={25}/>
        </div>

         {/* Hamburger menü */}

        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
        </div>

        {/* Telefon menü mód */}

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-14 py-10 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1>Alca Kft.</h1>  
                <li className='border-b'>Főoldal</li>
                <li className='border-b'>Konyhai eszközök</li>
                <li className='border-b'>Konyhai kiegészitők</li>
                <li className='border-b'>Bútor katalógus</li>
                <li className='border-b'>Elérhetőség</li>
                <div className='flex flex-col'>
                    <button className='my-6'>Keresés</button>
                    <button>Fiók</button>
                </div>
                <div className='flex justify-between my-8'>
                    <FaFacebook className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaInstagram className='icon'/>
                </div>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
