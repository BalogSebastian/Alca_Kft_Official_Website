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

const FurnitureNavbarSecondMainComponent = () => {
    const [nav, setNav ] = useState(false);
    const [logo, setLogo ] = useState(false); 
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo)
    }

  return (
    <Menu>
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10'>
        <div>
        </div>
        <ul className='hidden md:flex bg-green-200 text-lg'>

        {/* Itt található a header-ön lévő elemek plsuz a dropdown-jai */}

        {/* Aran Navbar első elem, a főoldal menüpont  */}
       

        {/* Aran Menüpont 1 */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'
                >
                    Mosogatmedencék
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
                                    Menüpont 1 Teszt 1
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 1 Teszt 2
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 1 Teszt 3
                                </a>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        Menüpont 1 Teszt 4
                                    </button>
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
                    Csaptelepek
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
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 1
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 2
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 3
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>           
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Mosogatószer adagolók
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
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 1
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 2
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 3
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>           
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Víztisztítók
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
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 1
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 2
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 3
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>           
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Beépített szemméttárolók
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
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 1
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 2
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
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Menüpont 2 Teszt 3
                                </a>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>  

                  <Menu as="div" className="relative inline-block text-left">
            <div>
                <Link
                to='/'
                exact
                id="bemutatkozas_dropdown" className='relative inline-block text-left border-b'>
                    Vissza a Főoldalra
                </Link >
            </div>
            
        </Menu>                      
        {/* Egy idejig még itt lesz ez a rész, hogy ne legyen baj */}           
        </ul>
        <div className='hidden md:flex'>
        </div>
         {/* Hamburger menü */}
        <div onClick={handleNav} className='md:hidden z-10'>
        </div>
        {/* Telefon menü mód */}
    </div>
    </Menu>
  )
}

export default FurnitureNavbarSecondMainComponent
