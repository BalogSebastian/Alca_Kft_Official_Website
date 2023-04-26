{/_ Itt található a header-ön lévő elemek plsuz a dropdown-jai _/}

        {/* Bemutatkozás */}
        {/* <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="bemutatkozas_dropdown" className='border-b'>
                    Stúdiónk
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
                                    Studiónk
                                </a>
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
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Studiónk
                                    </button>
                                )}
                            </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu> */}

         {/* Bútor katalógus */}
        {/* <Menu as="div" className="relative inline-block text-left">
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
                                        exact
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
        </Menu> */}

         {/* Elérhetőség */}
        {/* <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button id="elerhetoseg_dropdown" className='border-b'>
                Kapcsolat
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
        </Menu> */}

        {/* Egy idejig még itt lesz ez a rész, hogy ne legyen baj */}

        {/* <button id='bemutatkozas_dropdown'
         data-dropdown-toogle='dropdown_1'
          className='border-b'>Bemutatkozás</button>
        <button id='konyhai_eszkozok_dropdown' data-dropdown-toogle='dropdown_2' className='border-b'>Konyhai eszközök</button>
        <button id='konyhai_kiegeszitok_dropdown' data-dropdown-toogle='dropdown_3' className='border-b'>Konyhai kiegészitők</button>
        <button id='butor_katalogus_dropdown' data-dropdown-toogle='dropdown_4' className='border-b'>Bútor katalógus</button>
        <button id='elerhetoseg_dropdown' data-dropdown-toogle='dropdown_5' className='border-b'>Elérhetőség</button>*/}

        {/* <div className='md:hidden z-10 flex justify-end'>
    <div onClick={handleNav} className='text-black'>
        {nav ? <AiOutlineClose size={45}/> : <HiOutlineMenuAlt4 size={45}/>}
    </div>

</div> */}

{/\* <div className='md:hidden z-10 flex justify-end'>

  <div onClick={handleNav} className='text-black flex items-center'>
    {nav ? (
      <AiOutlineClose size={45} />
    ) : (
      <HiOutlineMenuAlt4 size={45} />
    )}
  </div>
</div> */}

{/\* <div className='md:hidden z-10 flex justify-end'>

  <div onClick={handleNav} className='text-black'>
    {nav ? (
      <AiOutlineClose size={45} />
    ) : (
      <HiOutlineMenuAlt4 size={45} />
    )}
  </div>
</div> */}
