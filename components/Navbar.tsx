import Link from 'next/link'
import React from 'react'
import ToggleTheme from '../components/theme-toggle-button'
import { MdEdit, MdOutlineLogout } from 'react-icons/md/index'

const Navbar = () => {
  return (
    <header className='fixed w-full p-1 z-20 backdrop-blur-md'>
      <div className='mx-auto max-w-3xl'>
        <nav className='flex items-center gap-3 text-base'>
          <a href='/' className='group'>
            <h2 className='font-semibold tracking-tighter p-2 font-mplus text-lg flex items-center gap-3'>
              Abdullah Shahbaz
            </h2>
          </a>
          <div className='items-center gap-6 hidden md:flex'>
            <Link href='/?cat=art'>Art</Link>
            <Link href='/?cat=science'>Science</Link>
            <Link href='/?cat=technology'>Technology</Link>
            <Link href='/?cat=cinema'>Cinema</Link>
            <Link href='/?cat=design'>Design</Link>
            <Link href='/?cat=food'>Food</Link>
          </div>
          <div className='flex-1'></div>
          <span className='font-mplus tracking-tighter text-purple-300 dark:text-teal-600'>
            Abdullah
          </span>
          {/*TODO: Create a model for logout and edit when click on userName*/}
          <span className='text-red-500'>
            <MdOutlineLogout />
          </span>
          <span className='text-orange-500 dark:text-teal-700'>
            <MdEdit />
          </span>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
