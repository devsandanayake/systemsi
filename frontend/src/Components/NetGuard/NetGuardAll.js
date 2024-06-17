import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';
import background from '../../Images/bg1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NetGuardAll() {
    const [netdata, setNetData] = useState([]);
    const [netIndata, setNetInData] = useState('');
    const [netInId, setNetInId] = useState('');

    useEffect(() => {
        axiosInstance.get('/AINetG/AINetGMon')
            .then((res) => {
                console.log(res.data);
                setNetData(res.data);
            })
            .catch((err) => {
                console.log('Error fetching data:', err.message);
            });
    }, []);

    useEffect(() => {
        axiosInstance.get('/AINetG/AINetGI')
            .then((res) => {
                console.log(res.data);
                // Assuming you want the first item's Const value
                if (res.data.length > 0) {
                    setNetInData(res.data[0].Const);
                    setNetInId(res.data[0]._id); // Save the ID for updating
                } else {
                    setNetInData('No initiation charge found');
                }
            })
            .catch((err) => {
                console.log('Error fetching data:', err.message);
            });
    }, []);

    const handleInputChange = (e) => {
        setNetInData(e.target.value);
    };

    const handleUpdate = () => {
        axiosInstance.patch(`/AINetG/AINetGI/${netInId}`, { Const: netIndata })
            .then((res) => {
                console.log('Updated data:', res.data);
                toast.success('Initiation charge updated successfully!');
            })
            .catch((err) => {
                console.log('Error updating data:', err.message);
                toast.error('Error updating initiation charge!');
            });
    };

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
                    <h1 className="text-4xl font-bold text-white text-center mb-6">NetGuard</h1>
                </div>
                <div className='w-full text-3xl text-gray-300'>
                    Initiation Charge
                </div>
                <div className='w-full mt-1'>
                    <div className='ml-5 text-gray-300 text-xl'>
                        Initiation Charge is:
                        <input 
                            type="text" 
                            value={netIndata} 
                            onChange={handleInputChange} 
                            className='ml-2 p-1 border border-gray-400 rounded bg-slate-600'
                        />
                    </div>
                    <button 
                        className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mt-2'
                        onClick={handleUpdate}
                    >
                        Update
                    </button>
                </div>
                <div className='w-full'>
                    <hr className='border border-black' />
                </div>
                <div className='w-full text-2xl text-gray-300'>
                    Monthly Rentals
                </div>
                <div className='w-full'>
                    <div className='flex justify-end mr-5'>
                        <a href='/netguard'>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                Insert
                            </button>
                        </a>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center'>
                    <div>
                        <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                            <thead>
                                <tr className='border-b border-gray-300'>
                                    <th className='border border-gray-300'>Bandwidth</th>
                                    <th className='border border-gray-300'>Standard Price - Rs.</th>
                                    <th className='border border-gray-300'>1 Year Commitment Monthly Rental Rs.</th>
                                    <th className='border border-gray-300'>2 Year Commitment Monthly Rental Rs.</th>
                                    <th className='border border-gray-300'>3 Year Commitment Monthly Rental Rs.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {netdata.map((item, index) => (
                                    <tr key={index} className='border-b border-gray-300 h-16'>
                                        <td className='border border-gray-300'>{item.Bandwith}</td>
                                        <td className='border border-gray-300'>{item.Standard}</td>
                                        <td className='border border-gray-300'>{item.Commitment1Year}</td>
                                        <td className='border border-gray-300'>{item.Commitment2Year}</td>
                                        <td className='border border-gray-300'>{item.Commitment3Year}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}
