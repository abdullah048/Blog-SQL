import React from 'react'

const Menu = () => {
  const posts = [
    {
      id: 1,
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
      img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 2,
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
      img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      id: 3,
      title:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, numquam!',
      img: 'https://images.pexels.com/photos/12123082/pexels-photo-12123082.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    }
  ]

  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-xl font-bold'>Other posts you may like</h1>
      {posts.map(post => (
        <div className='flex flex-col gap-2' key={post.id}>
          <img
            src={post.img}
            alt=''
            className='w-full h-[200px] object-cover rounded-md'
          />
          <h2 className='text-lg font-bold'>{post.title}</h2>
          <button className='bg-purple-300 dark:bg-teal-500 py-3 rounded-md hover:text-white dark:hover:text-gray-200 max-w-[200px]'>
            Read More
          </button>
        </div>
      ))}
    </div>
  )
}

export default Menu
