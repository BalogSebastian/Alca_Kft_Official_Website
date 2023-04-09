import React, {useState} from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BrowserRouter, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import FurnitureNobilia from '../furniture_pages/FurnitureNobilia';
import FurnitureAran from '../furniture_pages/FurnitureAran';
import FurnitureLube from '../furniture_pages/FurnitureLube';
import FurnitureVertex from '../furniture_pages/FurnitureVertex';
import KitchenAeg from '../kitchen_pages/KitchenAeg';
import KitchenBosch from '../kitchen_pages/KitchenBosch';
import KitchenElectrolux from '../kitchen_pages/KitchenElectrolux';
import KitchenMiele from '../kitchen_pages/KitchenMiele';
import KitchenNeff from '../kitchen_pages/KitchenNeff';
import KitchenWhirlpool from '../kitchen_pages/KitchenWhirlpool';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

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

        {/* Bemutatkozás */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="bemutatkozas_dropdown" className='border-b'>
                    Bemutatkozás
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
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt1-Bemutatkozás
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt2-Bemutatkozás
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href=""
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt3-Bemutatkozás
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt4-Bemutatkozás
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        {/* Konyhai eszközök */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Konyhai eszközök
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
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../kitchen_pages/KitchenAeg" 
                                    element={<KitchenAeg/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Aeg
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../kitchen_pages/KitchenBosch" 
                                    element={<KitchenBosch/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Bosch
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../kitchen_pages/KitchenElectrolux" 
                                    element={<KitchenElectrolux/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Electrolux
                                </Link>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../kitchen_pages/KitchenMiele" 
                                        element={<KitchenMiele/>}
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-center"
                                        )}
                                    >
                                        Miele
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../kitchen_pages/KitchenNeff" 
                                        element={<KitchenNeff/>}
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-center"
                                        )}
                                    >
                                        Neff
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../kitchen_pages/KitchenWhirlpool" 
                                        element={<KitchenWhirlpool/>}
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        Whirlpool
                                    </Link>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        {/* Konyhai kiegészítők */}                                  
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_kiegeszitok_dropdown' className='border-b'>
                    Konyhai kiegészítők
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
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt1-Konyhai_Kiegészitők
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt2-Konyhai_Kiegészitők
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt3-Konyhai_Kiegészitők
                                </a>
                            )}
                        </Menu.Item>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt4-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt5-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt6-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt7-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt8-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                        <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Teszt9-Konyhai_Kiegészitők
                                    </button>
                                )}
                            </Menu.Item>
                        </form>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        {/* Bútor katalógus */}                                   
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="butor_katalogus_dropdown" className='border-b'>
                    Bútor katalógus
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
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../furniture_pages/FurnitureNobilia" 
                                element={<FurnitureNobilia/>}
                                exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Nobilia
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../furniture_pages/FurnitureAran" 
                                    element={<FurnitureAran/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Aran
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../furniture_pages/FurnitureLube" 
                                    element={<FurnitureLube/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Lube
                                </Link>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../furniture_pages/FurnitureVertex" 
                                        element={<FurnitureVertex/>}
                                        xact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        Vertex
                                    </Link>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        {/* Elérhetőség */} 
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="elerhetoseg_dropdown" className='border-b'>
                Elérhetőség
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
                    <div className="py-1">
                    <form method="POST" action="#">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt1-Elérhetőség
                                </a>
                            )}
                        </Menu.Item>
                        </form>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt1-Elérhetőség
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Teszt1-Elérhetőség
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>

        {/* Egy idejig még itt lesz ez a rész, hogy ne legyen baj */}                                

        {/* <button id='bemutatkozas_dropdown'
         data-dropdown-toogle='dropdown_1'
          className='border-b'>Bemutatkozás</button>
        <button id='konyhai_eszkozok_dropdown' data-dropdown-toogle='dropdown_2' className='border-b'>Konyhai eszközök</button>
        <button id='konyhai_kiegeszitok_dropdown' data-dropdown-toogle='dropdown_3' className='border-b'>Konyhai kiegészitők</button>
        <button id='butor_katalogus_dropdown' data-dropdown-toogle='dropdown_4' className='border-b'>Bútor katalógus</button>
        <button id='elerhetoseg_dropdown' data-dropdown-toogle='dropdown_5' className='border-b'>Elérhetőség</button>*/}
        
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
  )
}

