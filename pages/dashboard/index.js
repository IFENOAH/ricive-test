import classNames from 'classnames'
import React from 'react'
import DashCard from '../../src/components/cards/dashcard'
import LineChart from '../../src/components/charts/linechart'
import Button from '../../src/components/forms/button'
import {useMediaQuery} from '../../src/hooks/useMedia'
import * as Icon from 'react-feather'
import { DashTable } from '../../src/components/table/dashtable'

const DashIndex = () => {

  // const isMobile = useMediaQuery('(max-width: 425px)')
  // const isTablet = useMediaQuery('(max-width: 1000px)')
  // const isWeb = useMediaQuery('(min-width: 1000px)')

  // const mobile = classNames( 'w-full grid grid-cols-1 gap-4')
  // const Tablet = classNames( 'w-full grid grid-cols-3 gap-4')
  // const web = classNames( 'w-full grid grid-cols-4 gap-4')

  // const responsiveClasses = classNames(isMobile ? mobile : isTablet ? Tablet : isWeb ? web : null)

  const Data = [
    {
      id: 1,
      title: 'Users',
      amount: '20.8k',
      variance: 12,
      status: true
    },
    {
      id: 2,
      title: 'Sessions',
      amount: '26.4k',
      variance: 2,
      status: false
    },
    {
      id: 3,
      title: 'Session Duration',
      amount: '3m 5s',
      variance: 2,
      status: true
    },
  ]

  const info = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'MAR',
      uv: 2000,
      pv: 4800,
      amt: 2290,
    },
    {
      name: 'APR',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'MAY',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'JUN',
      uv: 2390,
      pv: 3800,
      amt: 1980,
    },
    {
      name: 'JUL',
      uv: 3490,
      pv: 2700,
      amt: 980,
    },
    {
      name: 'AUG',
      uv: 3490,
      pv: 1900,
      amt: 1200,
    },
    {
      name: 'SEP',
      uv: 3490,
      pv: 2580,
      amt: 2500,
    },
    {
      name: 'OCT',
      uv: 3490,
      pv: 1300,
      amt: 3100,
    },
    {
      name: 'NOV',
      uv: 3490,
      pv: 1900,
      amt: 1100,
    },
    {
      name: 'DEC',
      uv: 3490,
      pv: 2300,
      amt: 2100,
    },
  ]

  const DashList = Data?.map(val => {
    return   <DashCard
      key={val.id}
      amount = {val.amount}
      variance = {val.variance}
      title = {val.title} 
      status = {val.status}
    />
  })

  return (
    <div className='space-y-6 w-full'>
      <header className = 'w-full space-y-4 xl:flex justify-between'>
        <div>
          <h2 className = 'text-lg md:text-3xl font-medium'>Welcome back, Karen</h2>
          <span className = 'text-ricive-darkgray text-xs xl:text-sm'>Measure your advertising ROI and track and report website traffic.</span>
        </div>
        <div className='flex items-start space-x-4'>
          <Button imgBefore={<Icon.DownloadCloud strokeWidth= '2px' size='15px' />} roundleft roundright >Export</Button>
          <Button roundleft roundright main color = 'text-ricive-white' >Insights</Button>
        </div>
      </header>

      <div className='flex items-center justify-start overflow-scroll'>
        <Button roundleft>12 months</Button>
        <Button straight>30 days</Button>
        <Button straight>7 days</Button>
        <Button roundright >24 hours</Button>
      </div>

      <section className={'w-full grid grid-cols-1 lg:grid-cols-3 gap-4 '}>
        {DashList}
      </section>

      <section className='rounded border border-ricive-stroke2 p-4 space-y-6 h-auto shadow-md'>

        <header className='flex flex-col items-start space-y-4 md:flex-row md: justify-between mb-24'>
          <section className='flex items-start flex-col space-y-2'>
            <h2 className='font-medium text-ricive-black text-lg'>Total Balance</h2>
            <div className='flex items-center space-x-4'>
              <p className='text-luc-black text-lg md:text-4xl'>$107,843.82</p>
              <p className='flex items-center bg-ricive-dashgreen rounded-full px-2 space-x-2'>
                <Icon.ArrowUp strokeWidth= '3px' size='13px' style={{color: 'green'}} />
                <span className='text-sm text-ricive-green font-semibold'>7.2%</span>
              </p>
            </div>
          </section>
          <Button roundright roundleft >View Report</Button>
        </header>

        <LineChart data={info} width = {700} height = {350} />
      </section>

      <div>
        <DashTable />
      </div>
    </div>
  )
}

export default DashIndex