import React, { Fragment } from 'react'
import { Menu } from '@headlessui/react'

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]


const Selector = () => {
    return(
        <Menu>
      <Menu.Button className='bg-blue-600 rounded w-[65px] h-[27px]'>Options</Menu.Button>
      <Menu.Items>
        {links.map((link) => (
          /* Use the `active` state to conditionally style the active item. */
          <Menu.Item key={link.href} as={Fragment} className='md:mx-7'>
            {({ active }) => (
              <a
                href={link.href}
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {link.label}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>

       
    )}

export default Selector


// const [inputValue, setInputValue] = useState("")
// <div className='flex items-center px-2 sticky top-0 bg-white'>
//             <AiOutlineSearch size={18} className="text-gray-700"/>
//             <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value.toLowerCase())} placeholder='Choose Subject' className='placeholder: text-gray-700 outline-none'/>
//         </div>

{/* <>

<div className="absolute">
  <Select variant="static" color="blue">
    <Option>All Subjects</Option>
    <Option>Science</Option>
    <Option>Languages</Option>
    <Option>Math</Option>
    <Option>Social Science</Option>
    <Option>Others</Option>
  </Select>
</div>

    </> */}