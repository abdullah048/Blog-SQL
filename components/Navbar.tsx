import Link from 'next/link'
import React, { useRef, useState } from 'react'
import ToggleTheme from '../components/theme-toggle-button'

const Navbar = () => {
  const [drawer, setDrawer] = useState(false)
  const dropdown = useRef<HTMLSpanElement>(null)
  return (
    <header className='fixed w-full p-1 z-20 backdrop-blur-md'>
      <div className='mx-auto max-w-3xl relative'>
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
          <span
            className=' font-mplus tracking-tighter text-purple-300 dark:text-teal-600 cursor-pointer'
            ref={dropdown}
            onClick={() => setDrawer(!drawer)}
          >
            Abdullah
          </span>
          {drawer && (
            <div className='flex flex-col items-center justify-between py-2 absolute top-[90%] right-[6%] bg-zinc-300 dark:bg-gray-300 w-[100px] h-[100px] rounded-md'>
              <span className='text-red-500 tracking-tight cursor-pointer hover:opacity-50'>
                Logout
              </span>
              <Link href='/write'>
                <span className='text-orange-500 dark:text-teal-700 tracking-tighter cursor-pointer hover:opacity-50'>
                  Write
                </span>
              </Link>
            </div>
          )}
          <ToggleTheme />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
