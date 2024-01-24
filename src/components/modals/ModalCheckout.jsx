import React from 'react'
import Product1 from '../../assets/img/product1.jpg'

const ModalCheckout = ({visible, onClose}) => {

    const handleOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if(!visible) return null;

  return (
    <>
        <div onClick={handleOnClose} id='container' className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className='flex flex-col items-center bg-white p-20 w-[50%] text-center rounded'>
                <h1 className='font-extrabold text-4xl'>Confirm Payment</h1>
                <div className='my-5'>
                    <img src={Product1} alt="product" className='w-full'/>
                    <h1 className='font-semibold text-lg'>Headphone Cable</h1>
                    <p className='text-3xl mt-2 font-bold'>$199</p>
                </div>
                <button className='w-[50%] p-2 bg-[#40BFFF] text-white font-semibold rounded-md hover:bg-blue-500'>Confirm</button>
            </div>
        </div>
    </>
  )
}

export default ModalCheckout