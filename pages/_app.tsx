import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import AuthContextProvider from '../context/auth-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  )
}

export default MyApp
