import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../Images/bg1.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function InitiationGPON() {
    const [formData, setFormData] = useState({
        Sprice: '',
        year1Commitment: '',
        year2Commitment: '',
        year3Commitment: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://124.43.179.18:3001/route/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ GPONbase: formData }),
            });
            const result = await response.json();
            console.log('Result:', result);
            
            setFormData({
                Sprice: '',
                year1Commitment: '',
                year2Commitment: '',
                year3Commitment: '',
            });

            toast.success('Data submitted successfully!');


        } catch (error) {
            console.error('Error:', error);
            toast.error('Error submitting data!');}
    };

    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    }

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
                    <div className='text-center text-white text-4xl mb-6'>
                        Insert GPON based Business Internet Line
                    </div>
                </div>

                <div className='w-full'>
        <div className="flex justify-end">
        <button className='bcbtn mr-2'
            onClick={handleBack}>
                <span class="bcbutton_top"> Back
                </span>
            </button>
        </div>
      </div>

                <div className='w-full mt-5'>
                        <form onSubmit={handleSubmit} className='mx-auto bg-white p-2 rounded-lg shadow-md w-fit backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                        <table className="min-w-full table-fixed border-collapse border border-gray-900">
                        <thead className="bg-gray-500 text-white">
                                    <tr>
                                        <th className='border border-gray-900 p-2'>Standard Price</th>
                                        <th className='border border-gray-900 p-2'>With 1 Year Commitment</th>
                                        <th className='border border-gray-900 p-2'>With 2 Year Commitment</th>
                                        <th className='border border-gray-900 p-2'>With 3 Year Commitment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='border border-gray-900'>
                                            <input type='text' name='Sprice' value={formData.Sprice} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-900 p-2'>
                                            <input type='text' name='year1Commitment' value={formData.year1Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-900 p-2'>
                                            <input type='text' name='year2Commitment' value={formData.year2Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-900 p-2'>
                                            <input type='text' name='year3Commitment' value={formData.year3Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex justify-center mt-4">
                                <button type="submit" className="beautiful-button">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            
        </>
    );
}
