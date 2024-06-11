import React, { useState } from 'react';
import { Tabs } from 'antd';
import background from '../Images/bg1.jpg';
import './Bill.css';

const { TabPane } = Tabs;

export default function Bil() {
    const [activeTabKey, setActiveTabKey] = useState("1");

    const handleTabChange = (key) => {
        setActiveTabKey(key);
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

                <div className='w-full'>
                    <div className='text-center text-white text-4xl'>
                        BIL Details
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

                {/* Tabs for Direct Fiber Based and GPON based */}
                <Tabs defaultActiveKey="1" onChange={handleTabChange} className="custom-tabs" style={{ marginLeft: "10px" }}>
    <TabPane tab="Direct Fiber Based" key="1">
        {/* Content for Direct Fiber Based */}
    </TabPane>
    <TabPane tab="GPON Based" key="2">
        {/* Content for GPON Based */}
    </TabPane>
</Tabs>
            </div>
        </>
    );
}