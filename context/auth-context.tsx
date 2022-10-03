import axios from 'axios'
import dynamic from 'next/dynamic'
import React, { useState, useEffect, createContext } from 'react'
import { Users } from '../typings'

type Props = {
  children: React.ReactNode
}

export interface IAuthContext {
  user: Users
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IAuthContext | null>(
    JSON.parse(localStorage?.getItem('user'))
  )

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(currentUser))
    }
  }, [currentUser])

  const login = async (user: IAuthContext) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', user)
    setCurrentUser(res.data)
  }

  const logout = async () => {
    await axios.post('http://localhost:3000/api/auth/logout')
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default dynamic(() => Promise.resolve(AuthContextProvider), {
  ssr: false
})
