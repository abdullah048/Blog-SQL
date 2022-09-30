import Link from 'next/link'
import React from 'react'
import Layout from '../../components/layout'
import Menu from '../../components/menu'

const Post = () => {
  return (
    <Layout>
      <div className='flex gap-12'>
        <div className='flex-1 lg:flex-[5] flex flex-col gap-8'>
          <img
            src='https://images.pexels.com/photos/13463980/pexels-photo-13463980.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            alt=''
            className='w-full h-[300px] object-cover rounded-md'
          />
          <div className='flex items-center gap-5'>
            <img
              src='https://images.pexels.com/photos/13728847/pexels-photo-13728847.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
              alt=''
              className='w-12 h-12 rounded-full object-cover'
            />
            <div className='info'>
              <span className='font-bold'>Abdullah</span>
              <p className='text-sm font-thin tracking-wider'>
                Posted 2 days ago
              </p>
            </div>
            <div className='flex gap-1'>
              <Link href={`/write?edit=2`}>
                <img src='/edit.png' className='cursor-pointer h-5 w-5' />
              </Link>
              <img src='/delete.png' className='cursor-pointer h-5 w-5' />
            </div>
          </div>
          <h1 className='text-xl font-bold font-mplus mb-12 md:text-3xl text-justify'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer
            malesuada nunc vel risus commodo viverra maecenas accumsan.
          </h1>
          <p className='text-lg font-mplus text-justify md:leading-7'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum
            ut tristique et egestas quis ipsum. Lacus luctus accumsan tortor
            posuere ac ut consequat semper. Euismod nisi porta lorem mollis
            aliquam ut porttitor. Habitant morbi tristique senectus et netus. At
            augue eget arcu dictum. Fusce id velit ut tortor pretium viverra
            suspendisse potenti. Libero enim sed faucibus turpis in. Vel risus
            commodo viverra maecenas accumsan lacus. Quam vulputate dignissim
            suspendisse in. Eu nisl nunc mi ipsum faucibus vitae aliquet nec.
            Enim nec dui nunc mattis enim ut tellus elementum. Lectus arcu
            bibendum at varius vel pharetra vel turpis. Vitae aliquet nec
            ullamcorper sit amet risus nullam eget felis. Dolor purus non enim
            praesent. In hac habitasse platea dictumst vestibulum. Elementum
            integer enim neque volutpat ac tincidunt vitae semper quis. Dictum
            varius duis at consectetur lorem donec massa sapien. Mauris pharetra
            et ultrices neque ornare aenean euismod. Non nisi est sit amet
            facilisis magna. Turpis egestas maecenas pharetra convallis posuere
            morbi leo urna molestie. Tristique magna sit amet purus gravida quis
            blandit. Eget est lorem ipsum dolor sit amet consectetur adipiscing.
            Ullamcorper sit amet risus nullam. Ac tortor dignissim convallis
            aenean et tortor. Eget felis eget nunc lobortis mattis aliquam
            faucibus. Viverra aliquet eget sit amet tellus cras adipiscing enim
            eu. Ac turpis egestas sed tempus. Purus sit amet volutpat consequat
            mauris. Fames ac turpis egestas sed tempus urna. A diam maecenas sed
            enim. Purus in massa tempor nec. Arcu odio ut sem nulla. Vivamus at
            augue eget arcu dictum varius. Vel eros donec ac odio. Urna nunc id
            cursus metus aliquam eleifend mi in nulla. Massa tincidunt dui ut
            ornare lectus sit amet est. Bibendum arcu vitae elementum curabitur
            vitae.
            <br />
            <br /> Ac tortor vitae purus faucibus ornare suspendisse sed. Eu
            consequat ac felis donec et. Diam sit amet nisl suscipit adipiscing
            bibendum est. Congue eu consequat ac felis donec et odio
            pellentesque. Egestas purus viverra accumsan in nisl nisi
            scelerisque. Posuere morbi leo urna molestie at elementum eu
            facilisis. Orci phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt tortor. Sit amet nulla facilisi morbi tempus iaculis
            urna. Phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt. Volutpat blandit aliquam etiam erat. Non diam phasellus
            vestibulum lorem sed risus ultricies tristique nulla. Urna nec
            tincidunt praesent semper feugiat. Dictumst vestibulum rhoncus est
            pellentesque elit ullamcorper. Enim eu turpis egestas pretium
            aenean. Rhoncus aenean vel elit scelerisque mauris pellentesque
            pulvinar. Amet consectetur adipiscing elit pellentesque habitant
            morbi tristique senectus et. Et tortor consequat id porta. Donec
            pretium vulputate sapien nec sagittis aliquam malesuada bibendum
            arcu. Massa vitae tortor condimentum lacinia. Vestibulum sed arcu
            non odio euismod lacinia at. Consequat semper viverra nam libero
            justo. Sit amet nulla facilisi morbi tempus iaculis urna id.
            Imperdiet sed euismod nisi porta lorem mollis. Pellentesque pulvinar
            pellentesque habitant morbi tristique. Nunc aliquet bibendum enim
            facilisis gravida neque convallis a. Dignissim convallis aenean et
            tortor at. Vestibulum lorem sed risus ultricies tristique. Imperdiet
            proin fermentum leo vel orci.
            <br />
            <br /> Vestibulum lectus mauris ultrices eros in cursus turpis. Sit
            amet purus gravida quis blandit. Pellentesque pulvinar pellentesque
            habitant morbi tristique senectus. Nisl nisi scelerisque eu ultrices
            vitae auctor eu. Lorem mollis aliquam ut porttitor leo a diam
            sollicitudin. Placerat in egestas erat imperdiet sed euismod. Nec
            tincidunt praesent semper feugiat nibh. Adipiscing commodo elit at
            imperdiet dui accumsan sit amet nulla. Egestas dui id ornare arcu
            odio ut sem nulla. Duis tristique sollicitudin nibh sit. Felis
            bibendum ut tristique et. Non diam phasellus vestibulum lorem sed.
            Eget aliquet nibh praesent tristique magna. Sagittis id consectetur
            purus ut faucibus pulvinar. Aliquam vestibulum morbi blandit cursus.
            Eu consequat ac felis donec et odio pellentesque diam volutpat.
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
