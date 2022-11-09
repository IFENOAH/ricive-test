import React, { useState } from 'react'
import * as Icon from 'react-feather'
import Button from '../forms/button'
import { ProgressBar } from '../progressbar/progressbar'

const SidebarInfo = () => {
    const [completed, setCompleted] = useState(80);

  return (
    <div className='rounded bg-ricive-graylight p-4 w-full space-y-4'>
        <header className='flex items-center justify-between'>
            <p>Monthly Budget</p>
            <Icon.X style={{color: 'gray'}} />
        </header>
        <section className='w-full flex items-start flex-col space-y-4'>
            <p className='text-ricive-darkgray'>You are at 80% of your budget</p>
            <ProgressBar completed = {completed} />
        </section>

        <section className='flex items-start space-x-6'>
            <Button size='text-md' link>Dismiss</Button>
            <Button size='text-md' link color='text-ricive-green'>Upgrade Plan</Button>
        </section>
    </div>
  )
}

export default SidebarInfo