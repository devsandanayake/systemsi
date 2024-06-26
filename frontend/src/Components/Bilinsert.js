import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../Images/bg1.jpg';
import axios from 'axios';
import axiosInstance from '../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        const response = await axiosInstance.post('/route/add', {
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
        // Reset form data to initial state after successful submission except for the 'type'
        setFormData(prevFormData => ({
            ...prevFormData, // Retain the 'type'
            bandwidth: '',
            sprice: '',
            year1CMR: '',
            year2CMR: '',
            year3CMR: '',
            backupSprice: '',
            backupYear1CMR: '',
        }));
        toast.success('Form submitted successfully!');
        
    } catch (error) {
        console.error('Error submitting form:', error);
        toast.error('Error submitting form!');
    }
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
                        Insert Monthly Rentals
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
                                <tr>
                                    <th colSpan="5" className="px-6 py-3 text-xs font-medium text-gray-700 uppercase tracking-wider text-center border border-gray-700">Primary</th>
                                    <th colSpan="2" className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border border-gray-700">Backup</th>
                                </tr>
                                <tr className="bg-gray-50">
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">Bandwidth (Mbps)</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">1 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">2 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">3 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-700  tracking-wider border border-gray-700">Minimum 1 Year Commitment Monthly Rental Rs.</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr className='border-b border-gray-700'>
                                        <td className='border border-gray-700  h-20'><input type='text' name="bandwidth" value={formData.bandwidth} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="sprice" value={formData.sprice} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="year1CMR" value={formData.year1CMR} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="year2CMR" value={formData.year2CMR} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="year3CMR" value={formData.year3CMR} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="backupSprice" value={formData.backupSprice} onChange={handleChange} className='h-full' /></td>
                                        <td className='border border-gray-700  h-20'><input type='text' name="backupYear1CMR" value={formData.backupYear1CMR} onChange={handleChange} className='h-full' /></td>
                                    </tr>
                                </tbody>
                            </table>
                        
                            <div className='w-full flex justify-center mt-2'>
                                <button type="submit" className="beautiful-button">
                                Submit
                                </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
