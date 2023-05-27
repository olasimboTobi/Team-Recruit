import React from 'react'
import chip from "../components/Assets/MasterCardLogo/chip.png";
import wifi from "../components/Assets/MasterCardLogo/wifi.png";
import mastercard from "../components/Assets/MasterCardLogo/mastercard-2.svg";
import apple from "../components/Assets/MasterCardLogo/apple-13.svg";
import docket from "../components/Assets/MasterCardLogo/docket.png";

const CardBody = () => {
  return (
    <div className='flex flex-col justify-start items-center w-full h-[100%] bg-[#FEFEFE] lg:h-[100%] xl:h-[100%]'>
        <div className='hidden md:block md:h-[5%] md:w-[25%] md:bg-[blue] lg:h-[5%]'></div>
        
        <div className='flex bg-[#E9EDF0] bg-opacity-90 w-[90%]  h-[100%] border-2 rounded-lg shadow-lg md:mt-[20%] md:h-[89%] md:w-[80%] xl:w-[70%] relative'>
            <div className='bg-[white] bg-opacity-70 w-[95%] mx-auto  h-[48%] border-2 rounded-lg shadow-lg md:w-[85%] md:mt-[-3.9em] md:h-[62%] lg:mt-[-5.2em] lg:h-[60%] lg:w-[80%] xl:h-[58%]'>
                <div className='flex w-[98%] mx-auto justify-between items-center md:w-[80%] md:py-8 lg:py-7 xl:py-8 '>
                    <img src={chip} alt="/" className="chip w-3 md:w-6 lg:w-8 xl:w-5"/>
                    <img src={wifi} alt="/" className="wifi w-3 md:w-6 lg:w-8 xl:w-5"/>
                    
                </div>
                
                <div class="credit-card__body w-[98%] text-[0.5rem] py-12 md:text-lg lg:text-2xl xl:text-lg mx-auto md:w-[80%] md:pt-2 lg:pt-4 xl:pt-12">
                    <span class="holder whitespace-nowrap">Jonathan micheal</span>
                    <div class="flex justify-start items-center gap-2 pt-2">
                        <div class="flex justify-start items-center gap-1">
                            <span class="circle w-[6px] h-[6px] rounded-[50%] bg-[black]"></span>
                            <span class="circle w-[6px] h-[6px] rounded-[50%] bg-[black]"></span>
                            <span class="circle w-[6px] h-[6px] rounded-[50%] bg-[black]"></span>
                            <span class="circle w-[6px] h-[6px] rounded-[50%] bg-[black]"></span>
                        </div>
                        <span class="visible-digits">3456</span>
                    </div>
                </div>
                <div className='flex justify-between text-[0.5rem] items-center w-[99%] mx-auto  md:pt-0 md:w-[80%] md:text-2xl xl:text-lg '>
                    <span class="expiry">09/22</span>
                    <img src={mastercard} alt="" className="flex w-3 md:w-6 "/>
                </div>
            </div>
            <div className='absolute  w-full top-[46%]'>
                <div className='flex justify-between items-center w-[80%] mx-auto'>
                    <p className='text-[0.5rem] text-[#AEB5C8] md:text-[1rem] xl:text-[0.9rem]'>Company</p>
                    <span className="flex justify-end items-center gap-1">
                        <img src={apple} alt="/" className='w-1 md:w-4 xl:w-3 '/>
                        <span className="inner-text text-[0.4rem] text-[#495271] font-extrabold md:text-[1rem] xl:text-[0.8rem]">Apple</span>
                    </span>
                </div>
            </div>
            <div className='absolute w-full top-[51%]'>
                <div className='flex justify-between items-center w-[80%] mx-auto'>
                    <p className='text-[0.5rem] text-[#AEB5C8] md:text-[1rem] xl:text-[0.9rem]'>Order Number</p>
                    <span className="flex justify-end items-center">
                        <span className="iinner-text text-[0.4rem] text-[#495271] font-extrabold md:text-[1rem] xl:text-[0.8rem]">1266201</span>
                    </span>
                </div>
            </div>
            <div className='absolute w-full top-[56%]'>
                <div className='flex justify-between items-center w-[80%] mx-auto'>
                    <p className='text-[0.5rem] text-[#AEB5C8] md:text-[1rem] xl:text-[0.9rem]'>Product</p>
                    <span className="flex justify-end items-center">
                        <span className="inner-text text-[0.4rem] text-[#495271] font-extrabold md:text-[1rem] xl:text-[0.8rem]">MacBook Air</span>
                    </span>
                </div>
            </div>
            <div className='absolute w-full top-[61%]'>
                <div className='flex justify-between items-center w-[80%] mx-auto'>
                    <p className='text-[0.5rem] text-[#AEB5C8] md:text-[1rem] xl:text-[0.9rem]'>VAT(20%)</p>
                    <span className="flex justify-end items-center">
                        <span className="inner-text text-[0.4rem] text-[#495271] font-extrabold md:text-[1rem] xl:text-[0.8rem]">$100.00</span>
                    </span>
                </div>
            </div>
            <div className='absolute w-full top-[80%]'>
                <div className='flex justify-between items-center w-[100%] mx-auto relative'>
                   <div className='absolute w-[25px] h-[25px] rounded-[50%] left-[-0.7rem]  bg-[#FEFEFE]'></div> 
                   <div className='absolute text-[black] w-[87%] left-[1rem]'><hr/></div>
                   <div className='absolute w-[25px] h-[25px] rounded-[50%] right-[-0.7rem]  bg-[#FEFEFE]'></div> 
                </div>
            </div>
            <div className='absolute w-full top-[82%]'>
                <div className='flex justify-between items-center w-[80%] mx-auto'>
                    <span className="flex flex-col justify-center items-between">
                        <p className='text-[0.5rem] text-[#AEB5C8] md:text-[1rem] xl:text-[0.9rem]'>You have to Pay</p>
                        <strong className="inner-text text-[0.5rem] text-[#495271] font-extrabold md:text-[1.8rem] xl:text-[1.5rem]">549.<sub className='text-[0.25rem] md:text-[1.5rem] xl:text-[1rem]'>99 <span className='font-thin text-[0.25rem] md:text-[1.5rem] xl:text-[1rem]'>USD</span></sub></strong>
                    </span>
                    <img src={docket} alt="/" className='w-2 md:w-8 xl:w-5'/>
                </div>
            </div>
        </div>
    </div>
  )
};

export default CardBody;