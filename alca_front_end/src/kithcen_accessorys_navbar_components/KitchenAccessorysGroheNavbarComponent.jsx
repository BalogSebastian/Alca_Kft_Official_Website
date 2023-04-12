import React, {useState} from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link} from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function KitchenAccessorysGroheNavbarComponent(){

    const [nav, setNav ] = useState(false);
    const [logo, setLogo ] = useState(false); 
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }

  return (
    <Menu>
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav}  className={logo ? 'hidden' : 'block'}>Alca Kft.</h1>
        </div>
        <ul className='hidden md:flex'>

        {/* Itt található a header-ön lévő elemek plsuz a dropdown-jai */}

        {/* Aran Navbar első elem, a főoldal menüpont  */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Link
                to='/'
                exact
                id="bemutatkozas_dropdown" className='relative inline-block text-left border-b'>
                    vissza a Főoldalra
                </Link >
            </div>
            
        </Menu>

        {/* Aran Menüpont 1 */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Zuhanyzó és termosztátok 
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    FALSÍKON BELÜLI (REJTETT) ZUHANYRENDSZER TERMÉKEK
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Termosztátok
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    FALSÍKON KÍVÜLI ZUHANYRENDSZER TERMÉKEK
                                </Link>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        KÉZIZUHANYOK ÉS ZUHANYSZETTEK
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        GROHE ZUHANYOK, A VÍZSZÓRÁS
                                    </Link>
                            )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu> 

        {/* Aran Menüpont 2 */}  
         <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Fürdőszoba kollekcíók
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    GROHE SPA KOLLEKCIÓK
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                              "block px-4 py-2 text-center"
                                    )}
                                >
                                    FÜRDŐSZOBAI CSAPTELEPEK COSMOPOLITAN DESIGN-NAL
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    FÜRDŐSZOBAI CSAPTELEPEK KORTÁRS DESIGN-NAL
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    FÜRDŐSZOBAI KIEGÉSZÍTŐK
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>  

        {/* Kádak és mosdókagylók */}
         <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Kádak és mosdókagylók
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    GROHE KERÁMIÁK
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    ZUHANYTÁLCÁK
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    ESSENCE FÜRDŐKÁDAINK
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu> 

        {/* Konyhai kollekcíók/csaptelepek */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Konyhai kollekcíók/csaptelepek
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Grohe vízszűrő rendszerek
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    GROHE PREMIUM LIFESTYLE KOLLEKCIÓK
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    GROHE PERFORMANCE TERMÉKCSALÁDOK
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>              

        {/* Egy idejig még itt lesz ez a rész, hogy ne legyen baj */}           

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
    </Menu>

  );
};
