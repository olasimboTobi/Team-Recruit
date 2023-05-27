import React,{useState} from 'react'
import { Formik, Form,Field, ErrorMessage  } from "formik";
import * as Yup from "yup";
import masterCardlogo from "../components/Assets/MasterCardLogo/mc_symbol.svg";
import verifiedlogo from "../components/Assets/MasterCardLogo/verified-badge.svg";
import dotslogo from "../components/Assets/MasterCardLogo/dots.svg";


const initialValues = {
    cardNumber: "",
    cvvNumber: "",
    expiryMonth: "",
    expiryYear: "",
    password: "",
  };
  
  const validationSchema = Yup.object({
    cardNumber: Yup.string()
    .required("Please enter your card Number")
    .matches(/^[0-9]+$/, "Error Must be only digits")
    // .matches(\d{4}\s-\s\d{4}\s-\s\d{4}\s-\s\d{4}\b, "Must be only digits")
    .min(16, 'Error Must be exactly 16 digits')
    .max(16, 'Error Must be exactly 16 digits'),
    cvvNumber: Yup.string()
    .required("Please enter your 3 or 4 digits at the back of your atm card Number")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(3, 'Must be exactly 3 digits')
    .max(4, 'Must be exactly 3 digits'),
    expiryMonth: Yup.string()
    .label('Expiry month')
    .min(2)
    .max(2)
    .required(),
    expiryYear: Yup.string()
    .label('Expiry year')
    .min(4)
    .max(4)
    .required(),
    password: Yup.string()
      .required("Password cannot be empty")
      .max(20, "Password must not exceed 20 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must contain at least 8 characters with 1 Uppercase, Lowercase, Number and Special Character"
      ),
  });
  

const PayForm = () => {

    const[showCvvNumber, setShowCvvNumber] = useState(false)
    const[showPassword, setShowPassword] = useState(false)


    const handleSubmit = async (data) => {
       console.log("submit")
    };

  return (
    <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              
          >
            {({ errors, touched }) => (
              <Form className="w-[100%] h-[85%] md:h-[100%]">
                
                <div className="flex flex-col justify-center items-start w-[100%] mt-1 mb-1 md:mt-8 md:mb-4">
                    <div className='flex justify-between items-center w-full '>    
                        <label className="w-full">
                            <h2 className="title text-[0.5rem] text-[#4E5572] font-extrabold md:text-md xl:text-sm">Card Number</h2>
                            <p className="desc text-[0.5rem] text-[#3f4043] whitespace-wrap md:text-md lg:text-sm xl:text-xs">Enter the 15-digit card number on the card</p>
                        </label>
                        <button className="flex edit justify-between items-center gap-1  border-none outline-0 cursor-pointer md:gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-2 h-2 md:w-6 md:h-6 xl:w-4 xl:h-4"
                            >
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 
                                    1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 
                                    12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 
                                    0 002.214-1.32L19.513 8.2z" 
                                />
                            </svg>


                            <span className="btn-desc text-[blue] text-opacity-80 text-[0.8rem] md:text-lg xl:text-sm">Edit</span>
                        </button>
                    </div>
                    <div 
                       className={`${
                        errors.cardNumber && touched.cardNumber ? "border-warning" : ""
                        }
                        flex w-full justify-start items-center bg-[#F9FBFC] bg-opacity-80  rounded-md pr-[1%] border-gray-600  pl-[2%] py-[1%] border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700  border-border-red-700  placeholder:font-extralight outline-0

                        `}
                    >
                        <img src={masterCardlogo} alt="/" className="leading-icon w-[8%] mr-[1%] lg:w-[5%]"></img>
                        <Field 
                            name="cardNumber" 
                            type= "text" 
                            placeholder="2412   -   7512   -   3412   -   3456"
                            className="flex justify-start items-center w-[72%]  xl:w-[60%] mr-auto text-start bg-[#F9FBFC] bg-opacity-50  placeholder:font-extralight border-none text-[0.5rem] md:text-[1rem] lg:text-[1.5rem]"
                    
                        />
                        <img src={verifiedlogo} alt="/" className="trailing-icon w-[6%] lg:w-[3%]"></img>
                    </div>
                </div>
                {errors.cardNumber && touched.cardNumber&& (
                        <div className="w-[50%] flex items-start justify-start gap-2 text-[#ff0000]  text-[0.5rem] md:text-sm mb-[2%] text-red-900 ">
                        <ErrorMessage name="cardNumber" />
                        </div>
                )}


                <div className="flex flex-col justify-center items-start w-[100%] mt-1 mb-1 md:mt-8 md:mb-4">
                    <div className='flex justify-between items-center w-full '>    
                        <label className="w-full">
                            <h2 className="title text-[0.5rem] text-[#4E5572] font-extrabold md:text-md xl:text-sm">CVV Number</h2>
                            <p className="desc text-[0.5rem] text-[#3f4043] whitespace-wrap md:text-md lg:text-sm xl:text-xs">Enter the 3 or 4 digit number on the card</p>
                        </label>
                        <div 
                        className={`${
                            errors.cvvNumber && touched.cvvNumber ? "border-warning" : ""
                            }
                            flex w-[69%] justify-between items-center bg-[#F9FBFC] bg-[#F9FBFC] bg-opacity-80  rounded-md pr-[1%] border-gray-600  pl-[2%] py-[1%] border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700  border-border-red-700  placeholder:font-extralight outline-0

                            `}
                    >
                        <Field 
                            name="cvvNumber" 
                            type= {showCvvNumber ? "password" : "text"}
                            placeholder="327"
                            className="flex justify-end items-center w-[90%] text-center mx-auto bg-[#F9FBFC] bg-opacity-50  placeholder:font-extralight outline-0 border-none text-[0.5rem] md:text-[1rem] lg:text-[1.5rem]"
                    
                        />
                        <img onClick={()=> setShowCvvNumber(!showCvvNumber)} src={dotslogo} alt="/" className="trailing-icon w-[7%] md:w-[10%] lg:w-[8%]  xl:w-[6%]"></img>
                    </div>
                    </div>
                    
                </div>
                {errors.cvvNumber && touched.cvvNumber && (
                        <div className="w-[50%] flex items-start justify-start gap-2 text-[#ff0000]  text-[0.5rem] md:text-sm mb-4 text-red-900">
                        <ErrorMessage name="cvvNumber" />
                        </div>
                )}


                <div className="flex flex-col justify-center items-start w-[100%] mt-1 mb-1 md:mt-8 md:mb-4">
                    <div className='flex justify-between items-center w-full gap-4'>    
                        <label className="w-full">
                            <h2 className="title text-[0.5rem] text-[#4E5572] font-extrabold md:text-md xl:text-sm">Expiry Date</h2>
                            <p className="desc text-[0.5rem] text-[#3f4043] whitespace-wrap md:text-md lg:text-sm xl:text-xs">Enter the expiration date of the card</p>
                        </label>
                        <div className=''>
                            <div 
                                className={`${
                                    errors.expiryMonth  && touched.expiryMonth   ? "border-warning" : ""
                                    }
                                    flex w-full justify-between items-center bg-[#F9FBFC] bg-opacity-80   rounded-md pr-[1%] border-gray-600  pl-[2%] py-[1%] border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700  border-border-red-700  placeholder:font-extralight outline-0

                                    `}
                            >
                                
                                <Field 
                                    name="expiryMonth" 
                                    type= "text" 
                                    placeholder="09"
                                    className="flex justify-end items-center w-[90%] text-center mx-auto bg-[#F9FBFC] bg-opacity-50  placeholder:font-extralight outline-0 border-none text-[0.5rem] md:text-[1rem] lg:text-[1.5rem]"
                            
                                />
                                
                                    
                            </div>
                           
                        </div>
                        {errors.expiryMonth && touched.expiryMonth && (
                                <div className="w-[50%] flex items-start justify-start gap-2 text-[#ff0000]  text-[0.5rem] md:text-sm mb-[2%] text-red-900">
                                <ErrorMessage name="expiryMonth" />
                                </div>
                                )}
                        <div className='font-bold text-md md:text-2xl'>/</div>
                        <div className='flex flex-col justify-center items-between'>
                        <div 
                            className={`${
                                errors.expiryYear && touched.expiryYear ? "border-warning" : ""
                                }
                                flex w-full justify-between items-center bg-[#F9FBFC] bg-opacity-80  rounded-md pr-[1%] border-gray-600  pl-[2%] py-[1%] border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700  border-border-red-700  placeholder:font-extralight outline-0

                                `}
                        >
                            
                            <Field 
                                name="expiryYear" 
                                type= "text" 
                                placeholder="22"
                                className="flex justify-end items-center w-[90%] text-center mx-auto bg-[#F9FBFC] bg-opacity-50  placeholder:font-extralight outline-0 border-none text-[0.5rem] md:text-[1rem] lg:text-[1.5rem]"
                        
                            />
                            
                                
                        </div>
                        
                    </div>
                    {errors.expiryYear && touched.expiryYear && (
                            <div className="w-[50%] flex items-start justify-start gap-2 text-[#ff0000]  text-[0.5rem] md:text-sm mb-[2%] text-red-900">
                            <ErrorMessage name="expiryYear" />
                            </div>
                            )}
                        </div>
                    
                </div>
                

                <div className="flex flex-col justify-center items-start w-[100%] mt-1 mb-1 md:mt-8 md:mb-4">
                    <div className='flex justify-between items-center w-full '>    
                        <label className="w-full">
                            <h2 className="title text-[0.5rem] text-[#4E5572] font-extrabold md:text-md xl:text-sm">Password</h2>
                            <p className="desc text-[0.5rem] text-[#3f4043] whitespace-wrap md:text-md lg:text-sm xl:text-xs">Enter your Dynamic password</p>
                        </label>
                        <div 
                        className={`${
                            errors.password && touched.password ? "border-warning" : ""
                            }
                            flex w-[69%] justify-between items-center bg-[#F9FBFC] bg-opacity-80  rounded-md pr-[1%] border-gray-600  py-[1%] border-[1px] shadow-lg outline-0 rounded-md borderfocus:outline-none focus:border-red-700 focus:ring-1 focus:ring-border-red-700  border-border-red-700  placeholder:font-extralight outline-0

                            `}
                    >
                        <Field 
                            name="password" 
                            type= {showPassword ? "password" : "text"}
                            placeholder="Enter your password"
                            className="flex justify-start items-center text-start ml-[2%] w-[90%]  text-center  bg-[#F9FBFC] bg-opacity-50   placeholder:font-extralight outline-0 border-none text-[0.5rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.5rem]"
                    
                        />
                        <img  onClick={()=> setShowPassword(!showPassword)} src={dotslogo} alt="/" className="trailing-icon w-[7%] md:w-[10%] lg:w-[8%] xl:w-[6%]"></img>
                    </div>
                    </div>
                    
                </div>
                {errors.password&& touched.password && (
                        <div className="w-[50%] flex items-start justify-start gap-2 text-[#ff0000]  text-[0.5rem] md:text-sm mb-4 text-red-900">
                        <ErrorMessage name="password" />
                        </div>
                )}
                <div className='flex w-full justify-center items-center bg-[blue]  border-1 outline-1 rounded-md'>
                    <button type="submit" className='flex mx-auto py-[0.5em] px-[4em] md:py-[2em] md:px-[8em] text-[white] text-opacity-80  border-none rounded-none outline-none whitespace-nowrap bg-[blue]'>Pay Now</button>
                </div>
              </Form>
            )}
          </Formik>
  )
}

export default PayForm