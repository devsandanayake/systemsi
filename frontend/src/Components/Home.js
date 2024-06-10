import React from 'react'
import background from '../Images/bg1.jpg'

export default function Home() {
  return (
    <>
    <div className='justify-center items-center h-screen' style={{
      position: 'relative', // Make the container position relative
   
    }}>
      <div style={{
        position: 'fixed', // Fix the background
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, // Send it to the back
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}></div>

      <div className='w-full'>
        <div className=' text-center text-white text-4xl'>
         Secure Internet
        </div>
      </div>

      <div className=' flex justify-end'>
        < a href='/bil'>
        <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>BIL</button>
        </a>
      </div>

     <div className='flex justify-center items-center mt-5'>
  <div
    className="bg-white p-2 rounded-lg shadow-md w-6/12 h-96 backdrop-blur-md backdrop-filter bg-opacity-20 justify-center"
    style={{
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
    }}
  >
    <form className='ml-32'>
     <div className='grid grid-cols-2 gap-4 text-lg'>
  <label className='font-semibold'>Select Package : </label>
  <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'>
    <option value="">Select...</option>
    <option>AISecureNet</option>
    <option>NetGuard</option>
    <option>AINetGuard</option>
    <option>BIL</option>
  </select>
</div>

      <div className='grid grid-cols-2 gap-4 text-lg mt-10'>
        <label className='font-semibold'>Select Commitment period : </label>
        <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'>
          <option>1 Year</option>
          <option>2 Year</option>
          <option>3 Year</option>
        </select>
      </div>

      <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
        <label className='font-semibold'>Select Bandwidth : </label>
        <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'>
          <option>UPI</option>
          <option>Net Banking</option>
          <option>Debit Card</option>
          <option>Credit Card</option>
        </select>
      </div>

      <div className='text-lg mt-2'>
        <button type="submit" className='font-semibold bg-blue-500 w-32 ml-40 text-white p-2 rounded-md'>Submit</button>
      </div>
    </form>
  </div>
</div>
      </div>
      
      
     </>
  )
}
