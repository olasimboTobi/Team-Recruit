import React from 'react'
import logoImg from "../components/Assets/Logo/logo.png";
import walletImg from "../components/Assets/Logo/insideLogo.svg";

const PaymentHead = () => {
  return (
    <div className='flex w-full justify-between items-center'>
        <div className='flex justify-start items-center gap-2 w-[45%] md:gap-4 md:w-[45%] lg:w-[40%]'>
            <div className='flex w-[30%] justify-start items-center md:w-[22%]  xl:w-[13%]'>
                <div className='w-[100%] h-[1.8rem] rounded-full bg-[blue] md:h-[47px] xl:w-[100%] xl:h-[50px] relative'>
                    <div className='absolute bottom-[0.28em] left-[0.5em] md:bottom-[0.56em] md:left-[0.7em] lg:bottom-[0.56em] lg:left-[0.68em]  xl:bottom-[0.56em] xl:left-[0.60em]'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="blue" class="w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 bg-[white] bg-opacity-80 "
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" 
                                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 
                                0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 
                                12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 
                                2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" 
                            />
                        </svg>
                    </div>

                </div>
            </div>
            <div className='flex'>
               <strong className='text-lg text-[#323B5C] md:text-2xl '>AceCoin<span className='font-light text-[#9A9EAE]'>Pay</span></strong>
            </div>
        </div>
        <div className="timer flex w-[30%] justify-end items-center lg:w-[28%] xl:w-[15%]">
            <span className="flex justify-center bg-[#1E2A53] bg-opacity-90  text-opacity-90  text-[white] text-md md:text-2xl w-[15%] mr-[1%] rounded-md ">0</span>
            <span className="flex justify-center bg-[#1E2A53] bg-opacity-90  text-opacity-90  text-[white] text-md md:text-2xl  w-[15%] rounded-md">1</span>
            <span className="timer-divider text-[#1E2A53] bg-opacity-90  text-opacity-90  m-[2%] text-md md:text-2xl font-bold">:</span>
            <span className="flex justify-center bg-[#1E2A53] bg-opacity-90  text-opacity-90  text-[white] text-md md:text-2xl w-[15%] mr-[1%] rounded-md">1</span>
            <span className="flex justify-center bg-[#1E2A53] bg-opacity-90  text-opacity-90  text-[white] text-md md:text-2xl w-[15%] rounded-md">9</span>
        </div>
       
    </div>
  )
}

export default PaymentHead