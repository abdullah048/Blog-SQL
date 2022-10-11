import axios from 'axios'
import moment from 'moment'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Layout from '../../components/layout'
import Menu from '../../components/menu'

const Post = () => {
  const router = useRouter()
  const [post, setPost] = useState({
    id: 0,
    title: '',
    desc: '',
    cover: '',
    date: '',
    username: ''
  })
  const currentUser = JSON.parse(localStorage.getItem('user')!)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/post/${currentUser.id}`
        )
        if (res) {
          setPost(res.data)
        }
      } catch (error) {
        toast.error(`${error}`)
      }
    }
    fetchData()
  }, [])

  //Delete post
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/post/${post?.id}`)
      router.push('/')
    } catch (error) {
      toast(`${error}`)
    }
  }

  return (
    <Layout>
      <div className='flex gap-12'>
        <div className='flex-1 lg:flex-[5] flex flex-col gap-8'>
          <img
            src={post?.cover}
            alt=''
            className='w-full h-[300px] object-cover rounded-md'
          />
          <div className='flex items-center gap-5'>
            {currentUser.img && (
              <img
                src={currentUser.img}
                alt=''
                className='w-12 h-12 rounded-full object-cover'
              />
            )}
            <div className='info'>
              <span className='font-bold'>{currentUser.username}</span>
              <p className='text-sm font-thin tracking-wider'>
                Posted {moment(post?.date).fromNow()}
              </p>
            </div>
            {currentUser.username === post.username && (
              <div className='flex gap-1'>
                <Link href={`/write?edit=2`}>
                  <img src='/edit.png' className='cursor-pointer h-5 w-5' />
                </Link>
                <img
                  src='/delete.png'
                  onClick={handleDelete}
                  className='cursor-pointer h-5 w-5'
                />
              </div>
            )}
          </div>
          <h1 className='text-xl font-bold font-mplus mb-12 md:text-3xl text-justify'>
            {post?.title}
          </h1>
          <p className='text-lg font-mplus text-justify md:leading-7'>
            {post?.desc}
          </p>
        </div>
        <div className='hidden lg:flex lg:flex-[2]'>
          <Menu />
        </div>
      </div>
    </Layout>
  )
}

export default Post
