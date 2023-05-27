import React, {useState} from 'react'
import serviceImg from "../components/Assets/TeamBackground/bg.jpg";
import Modal from '../components/Modal/Modal';
import PaymentForm from './PaymentForm';
import PaymentCard from './PaymentCard';



const TeamBackground = () => {

  const [showModal,setShowModal] = useState(false)

  const handleOnClose = () => setShowModal(false)

  
  return (
    <div name="support" className="flex justify-center items-center m-0 w-screen min-h-screen">
        <div className="w-full h-[100%] bg-gray-700/90 absolute">
            <img className="w-full h-full object-cover mix-blend-overlay bg-left-bottom" src={serviceImg} alt="/" />
        </div>
        <button onClick={()=> setShowModal(true)} className='px-14 py-4 bg-[#075cf6] text-[white] bg-opacity-80  text-opacity-80  cursor-pointer hover:bg-yellow-600 border-0 rounded-md z-10'>Make Payment</button>
        
        <Modal
        onClose={handleOnClose} 
        visible={showModal}
        >
          <div className="flex flex-col justify-center items-between w-[100%] h-[100%]  px-4 mx-auto py-4 md:flex md:flex-row md:justify-between md:items-center md:w-[98%] md:px-4 md:mx-auto md:h-[90%] lg:h-[90%] lg:w-[95%] xl:h-[92%]">
            <PaymentForm/>
            <PaymentCard/>
          </div>
        </Modal>
    </div>
  )
  }

export default TeamBackground