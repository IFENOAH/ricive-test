import Image from 'next/image'
import React from 'react'
import Logo from '../../components/assets/icons/visa.png'

const LogoComp = ({src, title, date}) => {
  return (
    <div className='flex items-center sapce-x-4'>
        <Image src = {src} width={50} height={50} alt = 'logo' />
        <div className='pl-4'>
            <p className='text-luc-black text-sm'>{title}</p>
            <span className='text-ricive-darkgray'>{date}</span>
        </div>
    </div>
  )
}

export default LogoComp