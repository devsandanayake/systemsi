import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig'; 
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../../Images/bg1.jpg';

export default function AISecureNetInit() {
    const [data, setData] = useState({
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
        a6Sc: ''
    });

    const [documentId, setDocumentId] = useState(''); // Define documentId state
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get('/aisecurenet/get/init')
            .then((res) => {
                const initData = res.data.AISecurenet[0].data; // Assuming there's only one document
                setData(initData);
                setDocumentId(res.data.AISecurenet[0]._id); // Set documentId from response
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to fetch data');
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with documentId:', documentId, 'and structured data:', { data });
    if (!documentId) {
        toast.error('Document ID not available');
        return;
    }
    // Ensure the data is structured as expected by the backend
    const structuredData = { data }; // Adjust this line if necessary to match your schema
    axiosInstance.patch(`/aisecurenet/update/init/${documentId}`, structuredData)
        .then((res) => {
            console.log('Update successful:', res);
            toast.success('Data updated successfully');
        })
        .catch((error) => {
            console.error('Failed to update data:', error);
            toast.error('Failed to update data');
        });
};

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
                    <div className='text-center text-white text-4xl mb-4'>
                        AISecureNet Initiation Charges
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

                <div className='w-full'>
                    <form onSubmit={handleSubmit} className='mx-auto bg-white p-2 rounded-lg shadow-md w-fit backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                        <table className="min-w-full table-fixed border-collapse border border-gray-900">
                            <thead className="bg-gray-500 text-white">
                                <tr>
                                    <th className="border border-gray-900 p-2">Bandwidth</th>
                                    <th className="border border-gray-900 p-2 w-72">Standard (LKR)</th>
                                    <th className="border border-gray-900 p-2 w-72">Commitment (Upto 3Years) (LKR)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 15 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a1s" value={data.a1s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a1Sc" value={data.a1Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 175 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a2s" value={data.a2s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a2Sc" value={data.a2Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 450 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a3s" value={data.a3s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a3Sc" value={data.a3Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 900 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a4s" value={data.a4s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a4Sc" value={data.a4Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 1900 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a5s" value={data.a5s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a5Sc" value={data.a5Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                                <tr>
                                    <td className="border border-gray-900 p-2 text-gray-300">upto 4000 Mbps</td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a6s" value={data.a6s} onChange={handleChange} className="w-full"/></td>
                                    <td className="border border-gray-900 p-2"><input type="text" name="a6Sc" value={data.a6Sc} onChange={handleChange} className="w-full"/></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='flex justify-center'>
                            <button type="submit" className="beautiful-button mt-2">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
