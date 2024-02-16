import React from 'react'
import FIndProductForm from '../Forms/Find-Product Form';

export const FindProduct = () => {
  return (
    <>
        <div className='flex flex-col'>
        <div className="items-center text-center text-3xl bg-blue-gray-900 text-white rounded-md m-4 p-4">
          Find Product
        </div>
        <div className='ml-[40%] mt-8'>
            <FIndProductForm />
        </div>
        </div>
    </>
  )
}

export default FindProduct;
