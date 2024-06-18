import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig'; // Make sure this is properly set up
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../../Images/bg1.jpg';

export default function AISecureNetAll() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosInstance.get('/aisecurenet/get/month')
            .then((res) => {
                const dataArray = res.data.AISecurenetMonth; // Access the array from the response
                if (Array.isArray(dataArray)) {
                    setData(dataArray);
                } else {
                    console.error('Response data is not an array:', res.data);
                    toast.error('Unexpected response format');
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to fetch data');
            });
    }, []);

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

                <div className='w-full'>
                    <div className='text-center text-white text-4xl mb-4'>
                        AISecureNet Monthly Details
                    </div>
                </div>

                <div className='w-full mt-3 flex justify-end'>
                    <a href='/aisecurenet'>
                        <button className='text-white bg-blue-500 p-2 rounded-md shadow-md mr-3'>Insert</button>
                    </a>
                </div>

                <div className='w-full mt-3'>
                    <table className='mx-auto bg-white text-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20  border border-gray-300'>
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
                            {data.map((item) => (
                                <tr key={item._id} className='border-b border-gray-300'>
                                    <td className='border border-gray-300'>{item.Bandwith}</td>
                                    <td className='border border-gray-300'>{item.MaxUsers}</td>
                                    <td className='border border-gray-300'>{item.ConcurrentUsers}</td>
                                    <td className='border border-gray-300'>{item.ConcurrentSessions}</td>
                                    <td className='border border-gray-300'>{item.Sprice}</td>
                                    <td className='border border-gray-300'>{item.year1CMR}</td>
                                    <td className='border border-gray-300'>{item.year2CMR}</td>
                                    <td className='border border-gray-300'>{item.year3CMR}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
