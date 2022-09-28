import React from 'react'
import Footer from './footer'
import Navbar from './Navbar'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className='h-screen w-screen bg-[#fdf6e3] dark:bg-zinc-900 dark:text-white transition-colors duration-500'>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
