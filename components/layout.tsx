import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='min-h-screen h-full w-full bg-[#fdf6e3] dark:bg-zinc-900 dark:text-white transition-colors duration-500'>
      <Navbar />
      <div className='max-w-3xl mx-auto px-3 pt-14'>{children}</div>
      <Footer />{' '}
    </div>
  )
}

export default Layout
