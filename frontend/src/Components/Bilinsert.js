import React, { useState } from 'react';
import background from '../Images/bg1.jpg';
import axios from 'axios';

export default function Bilinsert() {
    const [firstSelection, setFirstSelection] = useState('');
    const [secondSelection, setSecondSelection] = useState('');
    const [formData, setFormData] = useState({
        bandwidth: '',
        standardPrice: '',
        oneYearCommitment: '',
        twoYearCommitment: '',
        threeYearCommitment: '',
        backupStandardPrice: '',
        backupOneYearCommitment: '',
    });

    const handleFirstSelectionChange = (event) => {
        setFirstSelection(event.target.value);
        setSecondSelection(''); // Reset the second selection
    };

    const handleSecondSelectionChange = (event) => {
        setSecondSelection(event.target.value);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = {
            origin: firstSelection === 'Monthly Rental' ? {
                base: {
                    [secondSelection === 'Direct Fiber Based' ? 'directFiber' : 'GPONbase']: {
                        primary: {
                            Bandwidth: formData.bandwidth,
                            Sprice: formData.standardPrice,
                            year1CMR: formData.oneYearCommitment,
                            year2CMR: formData.twoYearCommitment,
                            year3CMR: formData.threeYearCommitment,
                        },
                        backup: {
                            Bandwidth: formData.bandwidth,
                            Sprice: formData.backupStandardPrice,
                            year1CMR: formData.backupOneYearCommitment,
                        },
                    },
                },
            } : null,
            initiation: firstSelection === 'Initiation Charge' ? {
                base: {
                    [secondSelection === 'Direct Fiber Based' ? 'directFiber' : 'GPONbase']: {
                        FiberAvailability: {
                            Sprice: formData.standardPrice,
                            year1Commitment: formData.oneYearCommitment,
                            year2Commitment: formData.twoYearCommitment,
                            year3Commitment: formData.threeYearCommitment,
                        },
                        FiberNonAvailability: {
                            distance: formData.bandwidth,
                            Sprice: formData.standardPrice,
                            year1Commitment: formData.oneYearCommitment,
                            year2Commitment: formData.twoYearCommitment,
                            year3Commitment: formData.threeYearCommitment,
                        },
                    },
                },
            } : null,
        };
         
         console.log(requestBody);
        axios.post('http://localhost:3001/route/add', requestBody)
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <>
            <div className='justify-center items-center h-screen' style={{
                position: 'relative', // Make the container position relative
            }}>
                <div style={{
                    position: 'fixed', // Fix the background
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1, // Send it to the back
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}></div>

                <div className='w-full'>
                    <div className='text-center text-white text-4xl'>
                        Insert BIL Details
                    </div>
                </div>

                <div className='flex justify-center items-center mt-5'>
                    <div
                        className="bg-white p-2 rounded-lg shadow-md min-w-96 max-w-7xl h-auto backdrop-blur-md backdrop-filter bg-opacity-20 justify-center"
                        style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)',
                        }}
                    >
                        <form className='' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4 text-lg w-60 items-center'>
                                <label className='font-semibold'>Select Type : </label>
                                <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2' value={firstSelection} onChange={handleFirstSelectionChange}>
                                    <option value="">Select...</option>
                                    <option>Monthly Rental</option>
                                    <option>Initiation Charge</option>
                                </select>

                                {(firstSelection === 'Monthly Rental' || firstSelection === 'Initiation Charge') && (
                                    <>
                                        <label className='font-semibold'>Select Type : </label>
                                        <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2' value={secondSelection} onChange={handleSecondSelectionChange}>
                                            <option value="">Select...</option>
                                            <option>Direct Fiber Based</option>
                                            <option>GPON Based</option>
                                        </select>
                                    </>
                                )}
                            </div>

                            {(firstSelection === 'Monthly Rental' && secondSelection) && (
                                <table className='mt-4 w-full bg-white text-black border border-gray-300'>
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
                                            <td className='border border-gray-300'>
                                                <input type='text' name='bandwidth' placeholder='Bandwidth' value={formData.bandwidth} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='standardPrice' placeholder='Standard Price - Rs.' value={formData.standardPrice} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='oneYearCommitment' placeholder='1 Year Commitment' value={formData.oneYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='twoYearCommitment' placeholder='2 Year Commitment' value={formData.twoYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='threeYearCommitment' placeholder='3 Year Commitment' value={formData.threeYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='backupStandardPrice' placeholder='Backup Standard Price' value={formData.backupStandardPrice} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='backupOneYearCommitment' placeholder='Backup 1 Year Commitment' value={formData.backupOneYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}

                            {firstSelection === 'Initiation Charge' && secondSelection && (
                                <table className='mt-4 w-full bg-white text-black border border-gray-300'>
                                    <thead>
                                        <tr className='border-b border-gray-300'>
                                            <th className='border border-gray-300'>Distance</th>
                                            <th className='border border-gray-300'>Standard Price - Rs.</th>
                                            <th className='border border-gray-300'>1 Year Commitment Rs.</th>
                                            <th className='border border-gray-300'>2 Year Commitment Rs.</th>
                                            <th className='border border-gray-300'>3 Year Commitment Rs.</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-b border-gray-300'>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='bandwidth' placeholder='Distance' value={formData.bandwidth} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='standardPrice' placeholder='Standard Price - Rs.' value={formData.standardPrice} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='oneYearCommitment' placeholder='1 Year Commitment' value={formData.oneYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='twoYearCommitment' placeholder='2 Year Commitment' value={formData.twoYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                            <td className='border border-gray-300'>
                                                <input type='text' name='threeYearCommitment' placeholder='3 Year Commitment' value={formData.threeYearCommitment} onChange={handleChange} className='p-1 rounded w-full' />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}

                            <div className='text-lg mt-4'>
                                <button type="submit" className='font-semibold bg-blue-500 w-32 text-white p-2 rounded-md'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
