<Menu.Button id='fooldal_dropdown' data-dropdown-toogle='dropdown_1' className='border-b'>Bemutatkozás</Menu.Button>
<Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        >
<Menu.Items className="absolute w-40 mt-16 rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-1 focus:outline-none">

<div className="py-1">
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block px-4 py-2 text-sm'
)} >
Teszt1
</a>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block px-4 py-2 text-sm'
)} >
Teszt2
</a>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
<a
href="#"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block px-4 py-2 text-sm'
)} >
Teszt3
</a>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
<button
type="submit"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block w-full px-4 py-2 text-left text-sm'
)} >
Teszt4
</button>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
<button
type="submit"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block w-full px-4 py-2 text-left text-sm'
)} >
Teszt5
</button>
)}
</Menu.Item>
<Menu.Item>
{({ active }) => (
<button
type="submit"
className={classNames_bemutatkozo(
active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
'block w-full px-4 py-2 text-left text-sm'
)} >
Teszt6
</button>
)}
</Menu.Item>
</div>
</Menu.Items>
</Transition>
