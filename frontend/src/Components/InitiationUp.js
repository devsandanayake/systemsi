import React, { useState, useEffect } from 'react';
import axios from 'axios';
import background from '../Images/bg1.jpg';

export default function InitiationUp() {
    const [formData, setFormData] = useState({
        FiAvSprice: '',
        FiAvYear1CMR: '',
        FiAvYear2CMR: '',
        FiAvYear3CMR: '',
        FiNonAv: '',
        FiNonAvYear1CMR: '',
        FiNonAvYear2CMR: '',
        FiNonAvYear3CMR: '',
        Fi500Sprice: '',
        Fi500Year1CMR: '',
        Fi500Year2CMR: '',
        Fi500Year3CMR: '',
        Fi1000Sprice: '',
        Fi1000Year1CMR: '',
        Fi1000Year2CMR: '',
        Fi1000Year3CMR: '',
    });
    const [itemId, setItemId] = useState(''); // Store the ID of the route

    useEffect(() => {
        // Fetch all routes and set formData and itemId for the first route as an example
        axios.get('http://localhost:3001/route/all')
            .then(response => {
                const routes = response.data.routes;
                if (routes.length > 0) {
                    const firstRoute = routes[0];
                    setFormData({
                        FiAvSprice: firstRoute.initiation.base.directFiber.FiAvSprice || '',
                        FiAvYear1CMR: firstRoute.initiation.base.directFiber.FiAvYear1CMR || '',
                        FiAvYear2CMR: firstRoute.initiation.base.directFiber.FiAvYear2CMR || '',
                        FiAvYear3CMR: firstRoute.initiation.base.directFiber.FiAvYear3CMR || '',
                        FiNonAv: firstRoute.initiation.base.directFiber.FiNonAv || '',
                        FiNonAvYear1CMR: firstRoute.initiation.base.directFiber.FiNonAvYear1CMR || '',
                        FiNonAvYear2CMR: firstRoute.initiation.base.directFiber.FiNonAvYear2CMR || '',
                        FiNonAvYear3CMR: firstRoute.initiation.base.directFiber.FiNonAvYear3CMR || '',
                        Fi500Sprice: firstRoute.initiation.base.directFiber.Fi500Sprice || '',
                        Fi500Year1CMR: firstRoute.initiation.base.directFiber.Fi500Year1CMR || '',
                        Fi500Year2CMR: firstRoute.initiation.base.directFiber.Fi500Year2CMR || '',
                        Fi500Year3CMR: firstRoute.initiation.base.directFiber.Fi500Year3CMR || '',
                        Fi1000Sprice: firstRoute.initiation.base.directFiber.Fi1000Sprice || '',
                        Fi1000Year1CMR: firstRoute.initiation.base.directFiber.Fi1000Year1CMR || '',
                        Fi1000Year2CMR: firstRoute.initiation.base.directFiber.Fi1000Year2CMR || '',
                        Fi1000Year3CMR: firstRoute.initiation.base.directFiber.Fi1000Year3CMR || '',
                    });
                    setItemId(firstRoute._id); // Store the ID of the first route
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Item ID:', itemId); // Debugging line
        axios.patch(`http://localhost:3001/route/update/${itemId}`, {
            initiation: {
                base: {
                    directFiber: { ...formData },
                },
            },
        })
        .then(response => {
            console.log('Update successful:', response.data);
        })
        .catch(error => {
            console.error('Error updating route:', error);
        });
    };
    
    

    return (
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
                    Edit Initiation Charge
                </div>
            </div>

            <div className='flex justify-center items-center mt-5'>
                <form onSubmit={handleSubmit}>
                    <table className='mt-4 bg-white p-2 rounded-lg shadow-md w-11/12 h-96 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                        <thead>
                            <tr className='border-b border-gray-300'>
                                <th className='border border-gray-300'>Fiber Availability</th>
                                <th className='border border-gray-300'>Distance</th>
                                <th className='border border-gray-300'>Standard Price - Rs.</th>
                                <th className='border border-gray-300'>1 Year Commitment Rs.</th>
                                <th className='border border-gray-300'>2 Year Commitment Rs.</th>
                                <th className='border border-gray-300'>3 Year Commitment Rs.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-gray-300'>
                                <td className='border border-gray-300 w-44 text-gray-300'> Fiber Available to the customer's end
                                </td>
                                <td className='border border-gray-300 text-gray-300'> Within 500m distance
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiAvSprice' value={formData.FiAvSprice} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiAvYear1CMR' value={formData.FiAvYear1CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiAvYear2CMR' value={formData.FiAvYear2CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiAvYear3CMR' value={formData.FiAvYear3CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <td className='border border-gray-300 w-44 text-gray-300'> Fiber Not Available to the customer's end
                                </td>
                                <td className='border border-gray-300 text-gray-300'> Within 500m distance
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiNonAv' value={formData.FiNonAv} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiNonAvYear1CMR' value={formData.FiNonAvYear1CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiNonAvYear2CMR' value={formData.FiNonAvYear2CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='FiNonAvYear3CMR' value={formData.FiNonAvYear3CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <td className='border border-gray-300 w-44 text-gray-300' rowSpan='2'>
                                    Fiber available to the customer's end
                                </td>
                                <td className='border border-gray-300 text-gray-300'>
                                    500m - 1km
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi500Sprice' value={formData.Fi500Sprice} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi500Year1CMR' value={formData.Fi500Year1CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi500Year2CMR' value={formData.Fi500Year2CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi500Year3CMR' value={formData.Fi500Year3CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                            </tr>
                            <tr className='border-b border-gray-300'>
                                <td className='border border-gray-300 text-gray-300'>
                                    1km - 3km
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi1000Sprice' value={formData.Fi1000Sprice} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi1000Year1CMR' value={formData.Fi1000Year1CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi1000Year2CMR' value={formData.Fi1000Year2CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                                <td className='border border-gray-300'>
                                    <input type='text' name='Fi1000Year3CMR' value={formData.Fi1000Year3CMR} onChange={handleChange} className='p-1 rounded w-full h-16 bg-gray-300' />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='flex justify-center mt-4'>
                        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
