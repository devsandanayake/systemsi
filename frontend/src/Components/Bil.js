import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Tabs } from 'antd';
import background from '../Images/bg1.jpg';
import './Bill.css';
import axiosInstance from '../axiosConfig';

const { TabPane } = Tabs;

export default function Bil() {
    const [activeTabKey, setActiveTabKey] = useState("1");
    const [Routes, setRoutes] = useState([]);
    const [GponRoutes, setGponRoutes] = useState([{}]);

    const handleTabChange = (key) => {
        setActiveTabKey(key);
    };

 useEffect(() => {
    axiosInstance.get('/route/all')
        .then((response) => {
            // Correctly access the data from axios response
            const data = response.data;
            // Filter and map the routes as intended
            setRoutes(data.routes.filter(route => route.origin?.directFiber).map(route => route.origin.directFiber));
            // Use the state variable correctly (case-sensitive)
            console.log();
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);

    useEffect(() => {
        axiosInstance.get('/route/all')
          .then((response) => {
              const data = response.data;
              const filteredGponRoutes = data.routes.filter(route => route.origin?.GPONbase).map(route => route.origin.GPONbase);
              setGponRoutes(filteredGponRoutes);
              console.log(filteredGponRoutes);
          })
          .catch((error) => {
              console.error('Error fetching data:', error);
          });
  }, []);


  const navigate = useNavigate();

    const handleBack = () => {  
        navigate(-1);
    };


    return (
        <>
            <div className='justify-center items-center h-screen' style={{
                position: 'relative',
            }}>
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

                <div className='w-full mb-6'>
                    <div className='text-center text-white text-4xl'>
                        BIL Monthly Rental
                    </div>
                </div>

                <div className='flex justify-end'>
                    <a href='/bilinsert'>
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

                <Tabs defaultActiveKey="1" onChange={handleTabChange} className="custom-tabs" style={{ marginLeft: "10px" }}>
                    <TabPane tab="Direct Fiber Based" key="1">
                    <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20  border border-gray-300'>
                    <thead>
                                <tr>
                                    <th colSpan="5" className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider text-center border border-gray-300">Primary</th>
                                    <th colSpan="2" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border border-gray-300">Backup</th>
                                    <th rowSpan = "2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">Action</th>
                                </tr>
                                <tr>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">Bandwidth (Mbps)</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">Standard Price LKR</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">1 Year Commitment Monthly Rental LKR</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">2 Year Commitment Monthly Rental LKR</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">3 Year Commitment Monthly Rental LKR</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">Standard Price LKR</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-sm font-medium text-gray-300  tracking-wider border border-gray-300">Minimum 1 Year Commitment Monthly Rental LKR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Routes.map((route, index) => (
                                    <tr key={index} >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white border border-gray-300">
                                            {route.primary?.Bandwidth || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.Sprice || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year1CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year2CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year3CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.backup?.Sprice || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.backup?.year1CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            <a href={`/route/update/${route._id}`}>Update</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane tab="GPON Based" key="2">
                    <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20  border border-gray-300'>
                            <thead>
                                <tr>
                                    <th colSpan="5" className="px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider text-center border">Primary</th>
                                    <th colSpan="2" className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider border">Backup</th>
                                </tr>
                                <tr>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">Bandwidth</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">1 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">2 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">3 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-300 border border-gray-300 uppercase tracking-wider">Minimum 1 Year Commitment Monthly Rental Rs.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {GponRoutes.map((route, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white border border-gray-300">
                                            {route.primary?.Bandwidth || ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.Sprice !== 'N/A' ? route.primary?.Sprice : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year1CMR !== 'N/A' ? route.primary?.year1CMR : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year2CMR !== 'N/A' ? route.primary?.year2CMR : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.primary?.year3CMR !== 'N/A' ? route.primary?.year3CMR : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.backup?.Sprice !== 'N/A' ? route.backup?.Sprice : ''}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white border border-gray-300">
                                            {route.backup?.year1CMR !== 'N/A' ? route.backup?.year1CMR : ''}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPane>
                </Tabs>
            </div>
        </>
    );
}
