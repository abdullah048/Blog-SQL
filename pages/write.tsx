import React, { useState } from 'react'
import Quill from 'react-quill'
import Layout from '../components/layout'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'

const Write = () => {
  const [value, setValue] = useState('')
  return (
    <Layout>
      <div className='mt-5 flex gap-12 h-full'>
        <div className='flex-1 lg:flex-[5] flex flex-col gap-5'>
          <input
            placeholder='Title'
            className='p-[10px] border border-gray-300 rounded-md outline-none text-black'
          />
          <div className='h-[300px]'>
            <Quill
              theme='snow'
              value={value}
              onChange={setValue}
              className='h-full border-none'
            />
          </div>
        </div>
        <div className='hidden lg:flex flex-col gap-5 lg:flex-[2]'>
          <div className='border border-gray-300 p-[10px] rounded-md flex-1 flex flex-col justify-between text-sm'>
            <h1 className='text-xl font-mplus tracking-tight'>Publish</h1>
            <span className=''>
              <strong>Status:</strong> Draft
            </span>
            <span className=''>
              <strong>Visibility:</strong> Public
            </span>
            <input type='file' className='hidden' name='file' id='filePicker' />
            <label
              htmlFor='filePicker'
              className='underline decoration-purple-300 dark:decoration-teal-500 cursor-pointer'
            >
              Image Picker
            </label>
            <div className='flex justify-between'>
              <button className='px-2 py-2 bg-purple-300 dark:bg-teal-700 text-white rounded-md'>
                Save as draft
              </button>
              <button className='px-2 py-2 bg-purple-300 dark:bg-teal-700 text-white rounded-md'>
                Update
              </button>
            </div>
          </div>
          <div className='border border-gray-300 p-[10px] rounded-md flex-1 flex flex-col justify-between text-sm'>
            <h1 className='text-xl font-mplus tracking-tight'>Category</h1>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='art'
                name='cat'
                id='art'
              />
              <label htmlFor='art' className='cursor-pointer'>
                Art
              </label>
            </div>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='science'
                name='cat'
                id='science'
              />
              <label htmlFor='science' className='cursor-pointer'>
                Science
              </label>
            </div>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='technology'
                name='cat'
                id='technology'
              />
              <label htmlFor='technology' className='cursor-pointer'>
                Technology
              </label>
            </div>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='cinema'
                name='cat'
                id='cinema'
              />
              <label htmlFor='cinema' className='cursor-pointer'>
                Cinema
              </label>
            </div>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='design'
                name='cat'
                id='design'
              />
              <label htmlFor='design' className='cursor-pointer'>
                Design
              </label>
            </div>
            <div className='flex items-center gap-1 text-purple-300 dark:text-teal-500'>
              <input
                type='radio'
                className=''
                value='food'
                name='cat'
                id='food'
              />
              <label htmlFor='design' className='cursor-pointer'>
                Food
              </label>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Write), { ssr: false })
