import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import background from '../../Images/bg1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AINetGuardAll() {
    const [ainetdata, setAINetData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/TrAINetG/TrAINetGMon')
            .then((res) => {
                console.log(res.data);
                setAINetData(res.data);
            })
            .catch((err) => {
                console.log('Error fetching data:', err.message);
            });
    }
    , []);


  return (
    <>
    <ToastContainer />
    <div className='justify-center items-center h-screen' style={{ position: 'relative' }}>
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}></div>

        <div>
            <h1 className="text-4xl font-bold text-white text-center mb-6">AINetGuard</h1>
        </div>

        <div className='w-full'>
            <div className='flex justify-end'>
            <a href='/AINetGuardInit'>  
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2'> Initiation </button>
                </a>
                
                <a href='/AINetGuard'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 mb-2'> Insert </button>
                </a>

                


        </div>
        </div>

                <div>
                <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                              <thead>
                                  <tr className='border-b border-gray-300'>
                                      <th className='border border-gray-300'>Bandwidth</th>
                                      <th className='border border-gray-300'>Max Users</th>
                                      <th className='border border-gray-300'>Concurrent Users</th>
                                      <th className='border border-gray-300'>Concurrent Sessions</th>
                                      <th className='border border-gray-300'>Standard Price - Rs.</th>
                                      <th className='border border-gray-300'>1 Year Commitment Monthly Rental Rs.</th>
                                      <th className='border border-gray-300'>2 Year Commitment Monthly Rental Rs.</th>
                                      <th className='border border-gray-300'>3 Year Commitment Monthly Rental Rs.</th>
                                  </tr>
                              </thead>
                                <tbody>
                                    {ainetdata.map((data) => (
                                        <tr key={data._id} className='border-b border-gray-300 h-16'>
                                            <td className='border border-gray-300'>{data.Bandwith}</td>
                                            <td className='border border-gray-300'>{data.MaxUsers}</td>
                                            <td className='border border-gray-300'>{data.ConcurrentUsers}</td>
                                            <td className='border border-gray-300'>{data.ConcurrentSessions}</td>
                                            <td className='border border-gray-300'>{data.Sprice}</td>
                                            <td className='border border-gray-300'>{data.year1CMR}</td>
                                            <td className='border border-gray-300'>{data.year2CMR}</td>
                                            <td className='border border-gray-300'>{data.year3CMR}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                </div>

        </div>
    </>
  )
}
