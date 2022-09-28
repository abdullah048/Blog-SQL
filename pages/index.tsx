import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog with MySQL</title>
        <meta
          name='Blog created by craftzfox'
          content='Blog created with mysql, node js and next JS'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='app'>
        <div className='container'></div>
      </div>
    </Layout>
  )
}

export default Home
