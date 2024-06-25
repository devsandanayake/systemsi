import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../Images/bg1.jpg';
import axiosInstance from '../axiosConfig';


export default function GPONinit() {
    const [GponDetails, setGponDetails] = useState([]);

    useEffect(() => {
        axiosInstance.get('/route/all')
            .then((response) => {
                const data = response.data;
                // Assuming data.routes is an array and we're looking for a GPONbase property within each route
                const gponDetails = data.routes.map(route => route.GPONbase).filter(gponBase => gponBase !== undefined);
                setGponDetails(gponDetails);
                console.log(gponDetails);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

  return (
    <>
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
                    <div className='text-center text-white text-4xl mb-6'>
                        GPON Initiation Charge
                    </div>
                </div>

    <div className='flex justify-end'>
                <div className='mr-5'>

                    <a href='/initiationgpon'>
                    <button className='insertbtn mr-2'>
                                <span class="inbutton_top"> Insert
                                </span>
                        </button>
                    </a>

                    <button className='bcbtn mr-2'
                    onClick={handleBack}>
                                <span class="bcbutton_top"> Back
                                </span>
                            </button>
                </div>
            </div>

            <div className='w-full mt-4'>
                    <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20  border border-gray-300'>
                                <thead>
                                    <tr className='border-b border-gray-300'>
                                        <th className='border border-gray-300 text-gray-300'>Standard Price</th>
                                        <th className='border border-gray-300 text-gray-300'>With 1 Year Commitment</th>
                                        <th className='border border-gray-300 text-gray-300'>With 2 Year Commitment</th>
                                        <th className='border border-gray-300 text-gray-300'>With 3 Year Commitment</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {GponDetails.map((gponDetail, index) => (
                                        <tr key={index} className='border-b border-gray-300'>
                                            <td className='border border-gray-300 text-white p-1'>
                                                {gponDetail.Sprice}
                                            </td>
                                            <td className='border border-gray-300 text-white p-1'>
                                                {gponDetail.year1Commitment}
                                            </td>
                                            <td className='border border-gray-300 text-white p-1'>
                                                {gponDetail.year2Commitment}
                                            </td>
                                            <td className='border border-gray-300 text-white p-1'>
                                                {gponDetail.year3Commitment}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            </div>
    </div>
    </>
  )
}
