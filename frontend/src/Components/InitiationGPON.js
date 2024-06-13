import React, { useState } from 'react';
import background from '../Images/bg1.jpg';

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
            const response = await fetch('/route/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ GPONbase: formData }),
            });
            const result = await response.json();
            console.log('Result:', result);
            // Handle the response as needed
        } catch (error) {
            console.error('Error:', error);
            // Handle error as needed
        }
    };

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
                    <div className='text-center text-white text-4xl'>
                        Insert GPON based Business Internet Line
                    </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <div className="bg-white p-2 rounded-lg shadow-md min-w-96 max-w-7xl h-auto backdrop-blur-md backdrop-filter bg-opacity-20 justify-center" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}>
                        <form onSubmit={handleSubmit}>
                            <table className='mt-4 bg-white text-black border border-gray-300 text-md w-11/12'>
                                <thead>
                                    <tr className='border-b border-gray-300'>
                                        <th className='border border-gray-300'>Standard Price</th>
                                        <th className='border border-gray-300'>With 1 Year Commitment</th>
                                        <th className='border border-gray-300'>With 2 Year Commitment</th>
                                        <th className='border border-gray-300'>With 3 Year Commitment</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b border-gray-300'>
                                        <td className='border border-gray-300'>
                                            <input type='text' name='Sprice' value={formData.Sprice} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-300'>
                                            <input type='text' name='year1Commitment' value={formData.year1Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-300'>
                                            <input type='text' name='year2Commitment' value={formData.year2Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                        <td className='border border-gray-300'>
                                            <input type='text' name='year3Commitment' value={formData.year3Commitment} onChange={handleChange} className='w-full p-2' />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="flex justify-center mt-4">
                                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
