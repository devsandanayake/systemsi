import React, { useState } from 'react';
import background from '../Images/bg1.jpg';
import axios from 'axios';

export default function Bilinsert() {
    const [formData, setFormData] = useState({
        type: '',
        bandwidth: '',
        sprice: '',
        year1CMR: '',
        year2CMR: '',
        year3CMR: '',
        backupSprice: '',
        backupYear1CMR: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/route/add', {
                origin: {
                
                        [formData.type]: {
                            primary: {
                                Bandwidth: formData.bandwidth,
                                Sprice: formData.sprice,
                                year1CMR: formData.year1CMR,
                                year2CMR: formData.year2CMR,
                                year3CMR: formData.year3CMR,
                            },
                            backup: {
                                Sprice: formData.backupSprice,
                                year1CMR: formData.backupYear1CMR,
                            },
                        },
                
                },
                initiation: {}, // Add any initiation data here if necessary
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting form:', error);
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
                        Insert Monthly Rentals
                    </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <div className="bg-white p-2 rounded-lg shadow-md min-w-96 max-w-7xl h-auto backdrop-blur-md backdrop-filter bg-opacity-20 justify-center" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}>
                        <form onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4 text-lg w-60 items-center'>
                                <label className='font-semibold'>Select Type : </label>
                                <select name="type" value={formData.type} onChange={handleChange} className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'>
                                    <option value="">Select...</option>
                                    <option value="directFiber">Direct Fiber Based</option>
                                    <option value="GPONbase">GPON Based</option>
                                </select>
                            </div>

                            
                            <table className='mt-4 bg-white text-black border border-gray-300 text-sm'>
                                <thead>
                                    <tr className='border-b border-gray-300'>
                                        <th className='border border-gray-300'>Bandwidth</th>
                                        <th className='border border-gray-300'>Standard Price - Rs.</th>
                                        <th className='border border-gray-300'>1 Year Commitment Monthly Rental Rs.</th>
                                        <th className='border border-gray-300'>2 Year Commitment Monthly Rental Rs.</th>
                                        <th className='border border-gray-300'>3 Year Commitment Monthly Rental Rs.</th>
                                        <th className='border border-gray-300'>Backup Standard Price - Rs.</th>
                                        <th className='border border-gray-300'>Backup Minimum 1 Year Commitment Monthly Rental Rs.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b border-gray-300'>
                                        <td className='border border-gray-300'><input type='text' name="bandwidth" value={formData.bandwidth} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="sprice" value={formData.sprice} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="year1CMR" value={formData.year1CMR} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="year2CMR" value={formData.year2CMR} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="year3CMR" value={formData.year3CMR} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="backupSprice" value={formData.backupSprice} onChange={handleChange} /></td>
                                        <td className='border border-gray-300'><input type='text' name="backupYear1CMR" value={formData.backupYear1CMR} onChange={handleChange} /></td>
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
