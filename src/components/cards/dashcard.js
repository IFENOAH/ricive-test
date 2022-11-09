import Image from 'next/image'
import React from 'react'
import * as Icon from 'react-feather'
import GreenChart from '../assets/icons/_Chart.svg'
import RedChart from '..//assets/icons/_redChart.svg'

const DashCard = ({title, amount, variance, status}) => {
  return (
    <div className='rounded-lg border border-ricive-stroke2 p-4 w-full space-y-8 shadow-md'>
        <header className='flex items-center justify-between'>
            <span className='text-ricive-black text-sm'>{title ?? '[title]'}</span>
            <Icon.MoreVertical strokeWidth= '2px' style={{
                color: 'gray'
            }} />
        </header>

        <section className='w-full flex items-center justify-between'>
            <div className='flex items-start flex-col space-y-4'>
                <span className='text-4xl font-semibold text-ricive-black lg:text-2xl xl:text-4xl'>{amount ?? '[amount-here]'}</span>
                <div className='flex items-center space-x-2'>
                    {status === true && <Icon.ArrowUp strokeWidth='2px' style={{
                        color: 'green'
                    }} />}
                    {
                        status === false &&<Icon.ArrowDown strokeWidth='2px' style={{
                            color: 'red'
                        }} />
                    }
                    <p className='text-sm text-ricive-darkgray lg:text-xs xl:text-sm'>{variance ?? '[variance]'}% vs last month</p>
                </div>
            </div>
            <Image src = {status === true ? GreenChart : RedChart} alt = 'chart' />
        </section>
    </div>
  )
}

export default DashCard