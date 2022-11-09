import React from 'react'

const Button = ({imgBefore, children, imgAfter, link, color, roundleft, roundright, weight, rounded, size, main}) => {

  return (
    <button className={`flex items-center justify-between ${link ? '' : 'bg-ricive-white'}
      rounded-none space-x-4
      ${main ? 'bg-ricive-primaryGreen' : ''}
      ${rounded ? 'rounded-lg' : ''}
      ${link ? '' : 'border border-ricive-stroke px-[20px]'} ${link ? '' : 'py-[10px]'}
      ${roundleft ? 'rounded-l-lg' : ''}
      ${roundright ? 'rounded-r-lg' : ''}
      `}
    >
      {imgBefore}
      <h2 className={` ${color ? color : 'text-ricive-darkgray'} ${size ? size :  'text-sm'} ${weight ? weight :  'font-normal'} `} >
          {children}
      </h2>
      {imgAfter}
    </button>
  )
}

export default Button