import Image from 'next/image';
import React from 'react'
import * as Icon from 'react-feather';
import Input from '../forms/input';
import Logo from '../assets/icons/ricive-logo.svg'


const SidebarHeader = () => {
  return (
    <div className='flex flex-col px-4 w-full h-10 space-y-2 mb-8'>
        <div className='flex items-center justify-start space-x-2'>
          <Image style={{backgroundColor: '#FFFFFF', borderRadius: '10px'}} width={105} height = {105} src= {Logo} alt="logo" />
        </div>
        <Input leftIcon={ <Icon.Search className='text-ricive-darkgray outline:none focus:outline-none ' />} padding = 'py-6' placeholder='Search' />
    </div>
  )
}

export default SidebarHeader