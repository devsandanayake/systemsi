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

            <a href='/AINetGuard'>
            <button className='insertbtn mr-2'>
                                <span class="inbutton_top"> Insert
                                </span>
                        </button>
              </a>


            <a href='/AINetGuardInit'>  
            <button className='nbtn mr-2'>
                                <span class="nbutton_top"> Initiation
                                </span>
                        </button>                </a>
                
        </div>
        </div>

                <div>
                <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300 mt-4'>
                              <thead>
                                  <tr className='border-b border-gray-300'>
                                      <th className='border border-gray-300 text-gray-300 p-1'>Bandwidth</th>
                                      <th className='border border-gray-300 text-gray-300'>Max Users</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>Concurrent Users</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>Concurrent Sessions</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>Standard Price LKR</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>1 Year Commitment Monthly Rental LKR</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>2 Year Commitment Monthly Rental LKR</th>
                                      <th className='border border-gray-300 text-gray-300 p-1'>3 Year Commitment Monthly Rental LKR</th>
                                  </tr>
                              </thead>
                                <tbody>
                                    {ainetdata.map((data) => (
                                        <tr key={data._id} className='border-b border-gray-300 h-16'>
                                            <td className='border border-gray-300 text-white text-center'>{data.Bandwith}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.MaxUsers}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.ConcurrentUsers}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.ConcurrentSessions}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.Sprice}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.year1CMR}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.year2CMR}</td>
                                            <td className='border border-gray-300 text-white text-center'>{data.year3CMR}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                </div>

        </div>
    </>
  )
}
