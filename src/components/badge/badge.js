import React from 'react'
import classNames from 'classnames'
import styles from '../../../styles/badge.module.css'

const Badge = (props) => {

  const categoryA = classNames('bg-ricive-bgblue w-max text-ricive-rblue whitespace-nowrap flex items-center justify-center rounded-full py-[5px] px-2')
  const categoryB = classNames('bg-ricive-bgpink w-max whitespace-nowrap flex items-center justify-center rounded-full py-[5px] px-2')
  const categoryC = classNames('bg-ricive-dashgreen w-max whitespace-nowrap flex items-center justify-center rounded-full py-[5px] px-2')
  const categoryD = classNames('bg-ricive-bgpurp w-max whitespace-nowrap flex items-center justify-center rounded-full py-[5px] px-2')

  const A = classNames('text-xs text-ricive-rblue w-max')
  const B = classNames('text-xs text-ricive-rpink w-max ')
  const C = classNames('text-xs text-ricive-green w-max ')
  const D = classNames('text-xs text-ricive-rpurp w-max ')


  const toggleClasses = classNames(props.category === 'Subscriptions' ? categoryA : props.category === 'Food and dining' ? categoryB : props.category === 'Income' ? categoryC :
    props.category === 'Groceries' ? categoryD : null
  )
  const toggleColorClass = classNames(props.category === 'Subscriptions' ? A : props.category === 'Food and dining' ? B : props.category === 'Income' ? C :
    props.category === 'Groceries' ? D : null
  )

  return (
    <div className= {toggleClasses}>
        <span className='' style = {{
            backgroundColor: props.category === 'Subscriptions' ? 'blue' : props.category === 'Food and dining' ? 'red' : props.category === 'Income' ? 'green' :
            props.category === 'Groceries' ? 'blue' : null ,
            display: 'inline-block',
            marginLeft: '5px',
            marginRight: '5px',
            marginBottom: -'2px',
            borderRadius: '50%',
            borderStyle: 'solid',
            borderWidth: '0.5px',
            height: '0px',
            padding: '2px',
            width: '0px',
            color: toggleColorClass
        }} >{props.leftIcon}</span>
        <span className= {toggleColorClass}>{props.children}</span>
    </div>
  )
}

export default Badge

// https://cdn.vox-cdn.com/thumbor/UKSLdttYoIK2bv1gd231rqL4eiQ=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg