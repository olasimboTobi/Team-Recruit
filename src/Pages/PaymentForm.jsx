import React from 'react'
import PaymentHead from './PaymentHead'
import PayForm from './PayForm'

const PaymentForm = () => {
  return (
    <div className='flex flex-col w-[100%] h-[100%] items-start justify-center md:h-[100%]  md:w-[60%] xl:w-[70%]'>
        <PaymentHead/>
        <PayForm/>
    </div>
  )
}

export default PaymentForm