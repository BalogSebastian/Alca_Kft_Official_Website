import React, {useState} from 'react';
import { BsPerson } from 'react-icons/bs';
import { BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { HiOutlineMenuAlt4} from 'react-icons/hi';
import {FaFacebook, FaInstagram, FaPinterest} from 'react-icons/fa';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import KitchenAeg from '../kitchen_pages/KitchenAeg';
import KitchenBosch from '../kitchen_pages/KitchenBosch';
import KitchenElectrolux from '../kitchen_pages/KitchenElectrolux';
import KitchenMiele from '../kitchen_pages/KitchenMiele';
import KitchenNeff from '../kitchen_pages/KitchenNeff';
import KitchenWhirlpool from '../kitchen_pages/KitchenWhirlpool';
import KitchenAccessorysSchock from '../kitchen_accessorys_page/KitchenAccessorysSchock';
import FurnitureMainAranComponent from '../FurniturePageComponents/FurnitureMainAranComponent';

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
    {/*<div className='flex w-full justify-between text items-center h-20 px-4 absolute z-10 text-white'>*/}
    <div className='flex w-full justify-between text-center items-center h-20 px-4 py-4 absolute mt-4 z-10 text-white'>
        <div>
            <h1 onClick={handleNav}  className={logo ? 'hidden relative' : 'block relative'}></h1>
        </div>
        <ul className='hidden md:flex'>

       

        <Menu as="div" className="relative inline-block text-left ml-6">
            <div>
                <Menu.Button id="butor_katalogus_dropdown" className='border-b'>
                    Konyhabútorok
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
                                to="../FurniturePageComponents/FurnitureNavbarMainNobiliaComponent#nobilia"
                                exact
                                
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("nobilia");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "auto" });
                                        }
                                      }}
                                >
                                    Nobilia
                                </Link>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../FurniturePageComponents/FurnitureNavbarMainAranComponent#aran"
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("aran");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "auto" });
                                        }
                                      }}
                                    >
                                    Aran
                                </Link>
                            )}
                        </Menu.Item>



                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../FurniturePageComponents/FurnitureNavbarMainLubeComponent#lube"
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("lube");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "auto" });
                                        }
                                      }}
                                >
                                    Lube
                                </Link>
                            )}
                        </Menu.Item>
                        
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../FurniturePageComponents/FurnitureNavbarMainCreoComponent#creo"
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-center"
                                        )}
                                        onClick={() => {
                                            const element = document.getElementById("creo");
                                            if (element) {
                                              element.scrollIntoView({ behavior: "auto" });
                                            }
                                          }}
                                    >
                                        Creo
                                    </Link>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        to="../FurniturePageComponents/FurnitureNavbarMainVertexComponent#vertex"
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                        onClick={() => {
                                            const element = document.getElementById("vertex");
                                            if (element) {
                                              element.scrollIntoView({ behavior: "auto" });
                                            }
                                          }}
                                    >
                                        Vertex
                                    </Link>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
        {/* Konyhai eszközök */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id='konyhai_eszkozok_dropdown' className='border-b'>
                    Konyhai gépek
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
                                        to="../kitchen_pages/KitchenLiebher" 
                                        element={<KitchenNeff/>}
                                        exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block px-4 py-2 text-center"
                                        )}
                                    >
                                        Liebherr
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

        {/* Konyhai nagygépek */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="bemutatkozas_dropdown" className='border-b'>
                    Konyhai nagygépek
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
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                >
                                    Mosógép
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
                                    Szárítógép
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
                                    Mángorló
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
                                    Porszívok
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
                                    Thermomix
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
                <Menu.Items className="absolute right-0 w-40 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-2">

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoMedenceComponent#mosogatomedence" 
                                exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("mosogatomedence");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                >
                                    Mosogatótálcák
                                </Link>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                     to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainCsaptelepComponent#csaptelep" 
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("csaptelep");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                >
                                    Csaptelepek
                                </Link>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainMosogatoszerAdagoloComponent#mosogatoszeradagolo"  
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("mosogatoszeradagolo");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                >
                                    Mosogatószer adagolók
                                </Link>
                            )}
                        </Menu.Item>

                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainViztisztitoComponent#viztisztito"
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("viztisztito");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                >
                                    Víztisztitók
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainBeepitettSzemettaroloComponent#beepitettszemettarolo" 
                                    element={<KitchenAccessorysSchock/>}
                                    exact
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-center"
                                    )}
                                    onClick={() => {
                                        const element = document.getElementById("beepitettszemettarolo");
                                        if (element) {
                                          element.scrollIntoView({ behavior: "smooth" });
                                        }
                                      }}
                                >
                                    Beépített szemméttárolók
                                </Link>
                            )}
                        </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                    to="../KitchenAccessorysPageComponents/KitchenAccessorysNavbarMainKonyhamalacComponent#konyhamalac" 
                                    exact
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                        onClick={() => {
                                            const element = document.getElementById("konyhamalac");
                                            if (element) {
                                              element.scrollIntoView({ behavior: "smooth" });
                                            }
                                          }}
                                    >
                                        Konyhamalac
                                    </Link>
                                )}
                            </Menu.Item>
                      </div>
                </Menu.Items>
            </Transition>
        </Menu>
       
       {/* Munkalap megoldások */}
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="bemutatkozas_dropdown" className='border-b'>
                    Munkalap megoldások
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
                <Menu.Items className="absolute right-0 w-44 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
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
                                    Laminált
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
                                    Nedit
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
                                    Silestone
                                </Link>
                            )}
                        </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full px-4 py-2 text-center"
                                        )}
                                    >
                                        Dekton
                                    </button>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
       
        </ul>
         <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={25}/>
            <BsPerson size={25}/>
        </div> 

         {/* Hamburger menü */}

        <div onClick={handleNav} className='md:hidden z-10 flex justify-end'>
            {nav ? <AiOutlineClose className='text-black' size={45}/> : <HiOutlineMenuAlt4 size={45}/>}
        </div> 






        {/* Telefon menü mód */}

        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-200/90 px-14 py-10 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
                <h1 className='mt-6'>Alca Konyhabútor Stúdió.</h1>  
                <li className='border-b'>Konyhabútorok</li>
                <li className='border-b'>Konyhai gépek</li>
                <li className='border-b'>Konyhai nagygépek</li>
                <li className='border-b'>Konyhai kiegészitők</li>
                <li className='border-b'>Munkalap megoldások</li>
                <div className='flex flex-col'>
                    <button className='my-6 text-xl'>Keresés</button>
                    <button className='text-xl'>Fiók</button>
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

