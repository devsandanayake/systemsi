import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs } from 'antd';
import background from '../Images/bg1.jpg';
import './Bill.css';

const { TabPane } = Tabs;

export default function Bil() {
    const [activeTabKey, setActiveTabKey] = useState("1");
    const [Routes, setRoutes] = useState([]);
    const [GponRoutes, setGponRoutes] = useState([{}]);

    const handleTabChange = (key) => {
        setActiveTabKey(key);
    };

 useEffect(() => {
    axios.get('http://localhost:3001/route/all')
        .then((response) => {
            // Correctly access the data from axios response
            const data = response.data;
            // Filter and map the routes as intended
            setRoutes(data.routes.filter(route => route.origin?.directFiber).map(route => route.origin.directFiber));
            // Use the state variable correctly (case-sensitive)
            console.log(Routes);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}, []);

    useEffect(() => {
      axios.get('http://localhost:3001/route/all')
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

                <div className='w-full'>
                    <div className='text-center text-white text-4xl'>
                        BIL Monthly Rental
                    </div>
                </div>

                <div className='flex justify-end'>
                    <a href='/bilinsert'>
                        <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>Insert Monthly Rental</button>
                    </a>

                    <a href='/initiationup'>
                        <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>Update Initiation Charge</button>
                    </a>
                </div>

                <Tabs defaultActiveKey="1" onChange={handleTabChange} className="custom-tabs" style={{ marginLeft: "10px" }}>
                    <TabPane tab="Direct Fiber Based" key="1">
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
                                {Routes.map((route, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {route.primary?.Bandwidth || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.primary?.Sprice || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.primary?.year1CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.primary?.year2CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.primary?.year3CMR || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.backup?.Sprice || 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {route.backup?.year1CMR || 'N/A'}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TabPane>
                    <TabPane tab="GPON Based" key="2">
                        <table className="min-w-full divide-y divide-gray-200 mt-3">
                            <thead>
                                <tr>
                                    <th colSpan="5" className="px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider text-center border">Primary</th>
                                    <th colSpan="2" className="px-6 py-3 text-center text-xs font-medium text-gray-200 uppercase tracking-wider border">Backup</th>
                                </tr>
                                <tr className="bg-gray-50">
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bandwidth</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">1 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">2 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">3 Year Commitment Monthly Rental Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Standard Price - Rs.</th>
                                    <th rowSpan="2" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Minimum 1 Year Commitment Monthly Rental Rs.</th>
                                </tr>
                            </thead>
                            <tbody>
    {GponRoutes.map((route, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {route.primary?.Bandwidth || ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {route.primary?.Sprice !== 'N/A' ? route.primary?.Sprice : ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {route.primary?.year1CMR !== 'N/A' ? route.primary?.year1CMR : ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {route.primary?.year2CMR !== 'N/A' ? route.primary?.year2CMR : ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {route.primary?.year3CMR !== 'N/A' ? route.primary?.year3CMR : ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {route.backup?.Sprice !== 'N/A' ? route.backup?.Sprice : ''}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
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
