import React from 'react'
import background from '../Images/bg1.jpg'


export default function Bil() {
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
             BIL Details
            </div>
          </div>
    
          <div className=' flex justify-end'>
            < a href='/bilinsert'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>Insert Monthly Rental</button>
            </a>

            < a href='/initiationup'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>Update Initiation Charge</button>
            </a>

          </div>
    
         <div className='flex justify-center items-center mt-5'>
      <div
        className="bg-white p-2 rounded-lg shadow-md w-6/12 h-96 backdrop-blur-md backdrop-filter bg-opacity-20 justify-center"
        style={{
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
        }}
      >
       
      </div>
    </div>
          </div>
          
          
         </>
      )
}
