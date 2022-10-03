import Link from 'next/link'
import Router from 'next/router'
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/auth-context'

const Login = () => {
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const { login } = useContext(AuthContext)

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      await login(user)
      toast.success('Logged In Successfully')
      Router.push('/')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#fdf6e3] space-y-5'>
      <h1 className='text-4xl uppercase font-mplus tracking-tighter text-teal-600'>
        Login
      </h1>
      <form className='flex flex-col p-[50px] w-[370px] gap-5 bg-white shadow-xl rounded-md'>
        <input
          type='text'
          placeholder='Username'
          className='p-2 border-b border-zinc-500 outline-none'
          name='username'
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          onChange={handleChange}
          className='p-2 border-b border-zinc-500 outline-none'
        />
        <button
          className='p-2 border-none outline-none bg-teal-700 text-white rounded-md hover:bg-teal-900 font-mplus tracking-tight'
          type='button'
          onClick={handleSubmit}
        >
          Log In
        </button>
        <span>
          Don&apos;t have an account?{' '}
          <Link href='/register' passHref className=''>
            <span className='text-teal-600 cursor-pointer tracking-tighter'>
              Register Now
            </span>
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Login
