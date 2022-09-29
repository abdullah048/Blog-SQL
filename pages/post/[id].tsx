import React from 'react'
import Layout from '../../components/layout'

const Post = () => {
  return (
    <Layout>
      <div className='flex gap-12'>
        <div className='flex-[5]'>
          <img src='' alt='' className='w-full h-[300px] object-cover' />
          <div className='flex items-center gap-2'>
            <img
              src=''
              alt=''
              className='w-[50%] h-[50%] rounded-full object-cover'
            />
            <div className='info'>
              <span className='font-bold'>Abdullah</span>
              <p className='text-sm font-thin tracking-wider'>
                Posted 2 days ago
              </p>
            </div>
          </div>
        </div>
        <div className='flex-[2]'>M</div>
      </div>
    </Layout>
  )
}

export default Post
