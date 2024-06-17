import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../../Images/bg1.jpg';

export default function AINetGuardInit() {
    const [ainetdata, setAINetData] = useState({
        a1s: '',
        a1Sc: '',
        a2s: '',
        a2Sc: '',
        a3s: '',
        a3Sc: '',
        a4s: '',
        a4Sc: '',
        a5s: '',
        a5Sc: '',
        a6s: '',
        a6Sc: '',
    });
    const [documentId, setDocumentId] = useState('');

    useEffect(() => {
        axiosInstance.get('/TrAINetG/TrAINetGI')
            .then((res) => {
                const data = res.data[0]; // Assuming the first (and only) document
                setAINetData(data.data);
                setDocumentId(data._id); // Store the document ID
            })
            .catch((err) => {
                console.log('Error fetching data:', err.message);
            });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAINetData({ ...ainetdata, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosInstance.patch(`/TrAINetG/TrAINetGI/${documentId}`, { data: ainetdata })
            .then((res) => {
                toast.success('Data updated successfully');
            })
            .catch((err) => {
                toast.error('Error updating data');
                console.log('Error updating data:', err.message);
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

                <div className='text-white text-center text-3xl'>AINetGuard Initiation</div>

                <div className='w-full mt-3'>
                    <div className="flex justify-center">
                        <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md w-full">
                            <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50" onSubmit={handleSubmit}>
                                <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                                    <thead>
                                        <tr className='border-b border-gray-300'>
                                            <th className='border border-gray-300'>Bandwidth</th>
                                            <th className='border border-gray-300'>Standard (Rs.)</th>
                                            <th className='border border-gray-300'>Commitment (Upto 3Years) (Rs.)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 15 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a1s" value={ainetdata.a1s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a1Sc" value={ainetdata.a1Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 175 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a2s" value={ainetdata.a2s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a2Sc" value={ainetdata.a2Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 450 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a3s" value={ainetdata.a3s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a3Sc" value={ainetdata.a3Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 900 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a4s" value={ainetdata.a4s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a4Sc" value={ainetdata.a4Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 1900 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a5s" value={ainetdata.a5s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a5Sc" value={ainetdata.a5Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>upto 4000 Mbps</td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a6s" value={ainetdata.a6s} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type="text" name="a6Sc" value={ainetdata.a6Sc} onChange={handleInputChange} className="w-full"/>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='flex justify-center'>
                                    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Update</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
