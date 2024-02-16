import React from 'react'
import SaveproductForm from '../Forms/Save-Product Form'

const Saveproduct = () => {
  return (
    <>
    <div className='flex flex-col'>
        <div className='items-center text-center text-3xl bg-blue-gray-900 text-white rounded-md m-4 p-4'>Save Products</div>
        <div className='ml-[40%] mt-4'>
          <SaveproductForm />
        </div>
    </div>
    </>
  )
}
export default Saveproduct
