import React from 'react'
import cancelImg from "../Assets/Modal/close.svg"

const Modal = ({visible, onClose, children}) => {
  
  if(!visible)return null;


  return (
    <div className='absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm
    flex justify-center items-center m-0 z-20' > 
        <div className='flex bg-[#FEFEFE] bg-opacity-80 w-[100%] mx-auto border-none rounded-none  md:w-[95%]'>
            <div className='w-full'>
               <div className='flex w-[98%] mx-auto justify-end items-center text-[1rem] md:py-6 font-normal md:w-[98%]'>
                 <div onClick={onClose} className='w-[18px] h-[18px] '>
                    <img  className='w-full h-full' src={cancelImg} alt="cancelImg"/>
                 </div>
               </div>
               {children}  
            </div>
        </div>
    </div>
  )
}

export default Modal