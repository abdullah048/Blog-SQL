import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-screen bg-[#b9e7e7]'>
      <form>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
        <button className=''>Log In</button>
      </form>
    </div>
  )
}

export default Login
