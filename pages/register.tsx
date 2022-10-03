import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  })

  const router = useRouter()

  //Handling user-inputs.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/register',
        user
      )
      if (res.status === 200) {
        toast.success(res.data.message)
        setTimeout(() => {
          router.push('/')
        }, 1000)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-[#fdf6e3] space-y-5'>
      <h1 className='text-4xl uppercase font-mplus tracking-tighter text-teal-600'>
        Register
      </h1>
      <form className='flex flex-col p-[50px] w-[370px] gap-5 bg-white shadow-xl rounded-md'>
        <input
          type='text'
          name='username'
          placeholder='Username'
          className='p-2 border-b border-zinc-500 outline-none'
          required
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Email'
          className='p-2 border-b border-zinc-500 outline-none'
          required
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          required
          className='p-2 border-b border-zinc-500 outline-none'
          onChange={handleChange}
        />
        <button
          className='p-2 border-none outline-none bg-teal-700 text-white rounded-md hover:bg-teal-900 font-mplus tracking-tight'
          type='submit'
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <span>
          Already have an account?{' '}
          <Link href='/login' passHref className=''>
            <span className='text-teal-600 cursor-pointer tracking-tighter'>
              Login
            </span>
          </Link>
        </span>
      </form>
    </div>
  )
}

export default Register
