import React from 'react'
import ToggleTheme from '../components/theme-toggle-button'
const Navbar = () => {
  return (
    <header className='fixed w-full p-1 z-20 backdrop-blur-md'>
      <div className='mx-auto max-w-3xl'>
        <nav className='flex items-center gap-3 text-base'>
          <a href='/' className='group'>
            <h2 className='font-semibold tracking-tighter p-2 font-mplus text-lg flex items-center gap-3'>
              CraftzFox-Blog
            </h2>
          </a>
          <div className='items-center gap-6 hidden md:flex'>
            {/*<HeaderLink href={HOMEPAGE_URL}>About</HeaderLink>
            <HeaderLink
              href='https://github.com/withastro/astro'
              target='_blank'
            >
              <IoLogoGithub /> Source
            </HeaderLink>*/}
          </div>
          <div className='flex-1'></div>
          <ToggleTheme />
        </nav>
      </div>
    </header>
  )
}

export default Navbar
