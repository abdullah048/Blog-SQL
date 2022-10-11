import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Layout from '../components/layout'

const Home: NextPage = () => {
  const router = useRouter()
  const cat = router.asPath.split('/')[1]

  const [posts, setPosts] = useState([
    {
      id: 0,
      title: '',
      desc: '',
      cover: '',
      uid: 0
    }
  ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/post/posts${cat}`
        )
        if (res) {
          setPosts(res.data)
          console.log(res.data)
        }
      } catch (error) {
        toast.error(error)
      }
    }
    fetchData()
  }, [cat])

  // const posts = [
  //   {
  //     id: 1,
  //     title:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
  //     img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  //   },
  //   {
  //     id: 2,
  //     title:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
  //     img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  //   },
  //   {
  //     id: 3,
  //     title:
  //       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
  //     img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  //   }
  // ]

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
        <div className='container'>
          <div className='home'>
            <div className='mt-12 flex flex-col gap-36'>
              {posts.map(post => (
                <div className='flex gap-24 odd:flex-row-reverse' key={post.id}>
                  <div className='flex-[1] relative'>
                    <img
                      src={post?.cover}
                      alt='hero'
                      className='w-full max-h-[400px] object-cover'
                    />
                  </div>
                  <div className='flex-[2] flex flex-col gap-10'>
                    <Link href={`/post/${post?.id}`}>
                      <h1 className='text-xl font-bold md:text-4xl'>
                        {post?.title}
                      </h1>
                    </Link>
                    <p className='text-justify md:text-lg'>{post?.desc}</p>
                    <button className='bg-purple-300 dark:bg-teal-500 py-3 rounded-md hover:text-white dark:hover:text-gray-200 max-w-[200px]'>
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
