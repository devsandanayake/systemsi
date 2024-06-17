import React, { useEffect, useState } from 'react';
import background from '../Images/bg1.jpg';
import axios from 'axios';
import axiosInstance from '../axiosConfig';

export default function Home() {
  const [packageType, setPackageType] = useState('');
  const [chargeType, setChargeType] = useState('');
  const [accessMedium, setAccessMedium] = useState('');
  const [fiberAvailable, setFiberAvailable] = useState('');
  const [commitmentPeriod, setCommitmentPeriod] = useState('');
  const [distance, setDistance] = useState('');
  const [bandwidth, setBandwidth] = useState('');
  const [service, setService] = useState('');

  const [netguardmbps, setNetguardmbps] = useState('');

  const [data1, setData1] = useState([]);
  const [showData1, setShowData1] = useState(false);
  const [data2, setData2] = useState([]);
  const [showData2, setShowData2] = useState(false);


  useEffect(() => {
    axiosInstance.get('/AINetG/AINetGMon')
      .then((res) => {
        console.log('aefa',res.data);
        setNetguardmbps(res.data);
      })
      .catch((err) => {
        console.log('Error fetching data:', err.message);
      });
  }, []);
  


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData1(false);
    setShowData2(false);
    data1.length = 0;
    data2.length = 0;


    let url;
    if (packageType === 'BIL') {
      url = '/route/all';
    } else if (packageType === 'AISecureNet' && chargeType === 'Initiation Charge') {
      url = '/aisecurenet/get/init';
    } else if (packageType === 'AISecureNet' && chargeType === 'Monthly Rental') {
      url = '/aisecurenet/get/month';
    } else if (packageType === 'NetGuard') {
      url = '/AINetG/AINetGMon';
    }

    axiosInstance.get(url)
      .then((response) => {
        const routes = response.data.routes;
      

        if (packageType === 'BIL') {
          if (chargeType === 'Initiation Charge') {
            if (accessMedium === 'FIBER') {
              if (fiberAvailable === 'Yes') {
                if (commitmentPeriod === '1 Year') {
                  setData1(routes[0].initiation.base.directFiber.FiAvYear1CMR);
                } else if (commitmentPeriod === '2 Year') {
                  setData1(routes[0].initiation.base.directFiber.FiAvYear2CMR);
                } else if (commitmentPeriod === '3 Year') {
                  setData1(routes[0].initiation.base.directFiber.FiAvYear3CMR);
                }
              }
              if (fiberAvailable === 'No') {
                if (distance === '0 m - 500 m') {
                  if (commitmentPeriod === '1 Year') {
                    setData1(routes[0].initiation.base.directFiber.FiNonAvYear1CMR);
                  } else if (commitmentPeriod === '2 Year') {
                    setData1(routes[0].initiation.base.directFiber.FiNonAvYear2CMR);
                  } else if (commitmentPeriod === '3 Year') {
                    setData1(routes[0].initiation.base.directFiber.FiNonAvYear3CMR);
                  }
                }
                if (distance === '500 m - 1000 m') {
                  if (commitmentPeriod === '1 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi500Year1CMR);
                  } else if (commitmentPeriod === '2 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi500Year2CMR);
                  } else if (commitmentPeriod === '3 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi500Year3CMR);
                  }
                }
                if (distance === '1000 m +') {
                  if (commitmentPeriod === '1 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi1000Year1CMR);
                  } else if (commitmentPeriod === '2 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi1000Year2CMR);
                  } else if (commitmentPeriod === '3 Year') {
                    setData1(routes[0].initiation.base.directFiber.Fi1000Year3CMR);
                  }
                }
              }
            }
            else if (accessMedium === 'GPON') {
              let filteredRoutes;
              if (commitmentPeriod === '1 Year') {
                filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year1Commitment);
                setData1(filteredRoutes.map(route => route.GPONbase.year1Commitment));
              } else if (commitmentPeriod === '2 Year') {
                filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year2Commitment);
                setData1(filteredRoutes.map(route => route.GPONbase.year2Commitment));
              } else if (commitmentPeriod === '3 Year') {
                filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year3Commitment);
                setData1(filteredRoutes.map(route => route.GPONbase.year3Commitment));
              }
              // Ensure filteredRoutes is defined and not empty before logging
              if (filteredRoutes && filteredRoutes.length > 0) {
                console.log(filteredRoutes.map(route => route.GPONbase.year1Commitment || route.GPONbase.year2Commitment || route.GPONbase.year3Commitment));
              } else {
                console.log("No routes found for the selected GPON and commitment period.");
              }
            }

          }
          else if (chargeType === 'Monthly Rental') {
            if (accessMedium === 'FIBER') {
              if (service === 'Primary') {
                const bandwidthTarget = bandwidth; // Define the target bandwidth value

                  const filteredRoutes = routes
                    .filter(route => 
                      route.origin && 
                      route.origin.directFiber && 
                      route.origin.directFiber.primary.Bandwidth === bandwidthTarget
                    );
                  console.log(filteredRoutes);    

                  // If you still want to extract and log the Bandwidth values (which will all be 5 in this case)
                  const bandwidthValues = filteredRoutes
                    .map(route => route.origin.directFiber.primary.Bandwidth);
                  console.log(bandwidthValues);

              if (commitmentPeriod === '1 Year') {
                  setData1(filteredRoutes.map(route => route.origin.directFiber.primary.year1CMR));
                } else if (commitmentPeriod === '2 Year') {
                  setData1(filteredRoutes.map(route => route.origin.directFiber.primary.year2CMR));
                } else if (commitmentPeriod === '3 Year') {
                  setData1(filteredRoutes.map(route => route.origin.directFiber.primary.year3CMR));
                }
              } else if (service === 'Backup') {

                const bandwidthTarget = bandwidth; // Define the target bandwidth value

                  const filteredRoutes = routes
                    .filter(route => 
                      route.origin && 
                      route.origin.directFiber && 
                      route.origin.directFiber.primary.Bandwidth === bandwidthTarget
                    );
                  console.log(filteredRoutes);    

                  // If you still want to extract and log the Bandwidth values (which will all be 5 in this case)
                  const bandwidthValues = filteredRoutes
                    .map(route => route.origin.directFiber.backup.Bandwidth);
                  console.log(bandwidthValues);

                
                  setData1(filteredRoutes.map(route => route.origin.directFiber.backup.year1CMR));
                
              }
            } else if (accessMedium === 'GPON') {
              if (service === 'Primary') {

                const bandwidthTarget = bandwidth; // Define the target bandwidth value

                  const filteredRoutes = routes
                    .filter(route => 
                      route.origin && 
                      route.origin.GPONbase && 
                      route.origin.GPONbase.primary.Bandwidth === bandwidthTarget
                    );
                  console.log(filteredRoutes);    

                  // If you still want to extract and log the Bandwidth values (which will all be 5 in this case)
                  const bandwidthValues = filteredRoutes
                    .map(route => route.origin.GPONbase.primary.Bandwidth);
                  console.log(bandwidthValues);
                  
                if (commitmentPeriod === '1 Year') {
                  setData1(filteredRoutes.map(route => route.origin.GPONbase.primary.year1CMR));
                } else if (commitmentPeriod === '2 Year') {
                  setData1(filteredRoutes.map(route => route.origin.GPONbase.primary.year2CMR));
                } else if (commitmentPeriod === '3 Year') {
                  setData1(filteredRoutes.map(route => route.origin.GPONbase.primary.year3CMR));
                }
              } else if (service === 'Backup') {
                
                const bandwidthTarget = bandwidth; // Define the target bandwidth value

                const filteredRoutes = routes
                  .filter(route => 
                    route.origin && 
                    route.origin.GPONbase && 
                    route.origin.GPONbase.primary.Bandwidth === bandwidthTarget
                  );
                console.log(filteredRoutes);    

                // If you still want to extract and log the Bandwidth values (which will all be 5 in this case)
                const bandwidthValues = filteredRoutes
                  .map(route => route.origin.GPONbase.backup.Bandwidth);
                console.log(bandwidthValues);

                  setData1(filteredRoutes.map(route => route.origin.GPONbase.backup.year1CMR));
                
              }
            }
          }
        }
      if (packageType === 'AISecureNet') {
          if (chargeType === 'Initiation Charge') {

           const filteredData = response.data.AISecurenet.filter(item => 
              item.Bandwith === bandwidth
              );
               setData1(filteredData.map(item => item.Standard));
             }

           if (chargeType === 'Monthly Rental') {
            const filteredData = response.data.AISecurenetMonth.filter(item => item.Bandwith === bandwidth);
          
            setData2(filteredData.map(item => {
              if (commitmentPeriod === '1 Year') {
                return {
                  MaxUsers: item.MaxUsers,
                  ConcurrentUsers: item.ConcurrentUsers,
                  ConcurrentSessions: item.ConcurrentSessions,
                  Sprice: item.Sprice,
                  year1CMR: item.year1CMR,
                  commitmentPeriod: '1 Year'
                };
              }
              if (commitmentPeriod === '2 Year') {
                return {
                  MaxUsers: item.MaxUsers,
                  ConcurrentUsers: item.ConcurrentUsers,
                  ConcurrentSessions: item.ConcurrentSessions,
                  Sprice: item.Sprice,
                  year2CMR: item.year2CMR,
                  commitmentPeriod: '2 Year'
                };
              }
              if (commitmentPeriod === '3 Year') {
                return {
                  MaxUsers: item.MaxUsers,
                  ConcurrentUsers: item.ConcurrentUsers,
                  ConcurrentSessions: item.ConcurrentSessions,
                  Sprice: item.Sprice,
                  year3CMR: item.year3CMR,
                  commitmentPeriod: '3 Year'
                };
              }
            }));    
            setShowData2(true);
          }
    
    
  }
  
  if (packageType === 'NetGuard') {
    // Check if AINetGMonData exists and is not undefined
    if (response.data && response.data.length > 0) {
      const filteredData = response.data.filter(item => item.Bandwith === bandwidth); // Corrected property name

      // Update data1 based on commitmentPeriod
      if (commitmentPeriod === '1 Year') {
        setData1(filteredData.map(item => item.Commitment1Year));
      } else if (commitmentPeriod === '2 Year') {
        setData1(filteredData.map(item => item.Commitment2Year));
      } else if (commitmentPeriod === '3 Year') {
        setData1(filteredData.map(item => item.Commitment3Year));
      }
    } else {
      console.error('AINetGMonData is undefined');
      // Handle the case where AINetGMonData is undefined
    }
  }

    
    setShowData1(true); // Show data1 after fetching
    
      
    })
      .catch((error) => {
        console.log(error);
      });

  }


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
            Secure Internet
          </div>
        </div>
         
        <div>
          <button
            className='bg-red-500 text-white p-2 rounded-md'
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('role');
              window.location = '/login';
            }
            }
           >
            Logout
          </button>
        </div>
        <div className='flex justify-end'>
          <a href='/netguardall'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>NetGuard</button>
          </a>
          <a href='/bil'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>BIL</button>
          </a>

          <a href='/aisecurenet'>
            <button className='bg-blue-500 text-white p-2 rounded-md mt-5 mr-3'>AISecureNet</button>
          </a>
        </div>

        <div className='flex justify-center items-center mt-5'>
          <div className="bg-white p-2 rounded-lg shadow-md w-6/12 h-96 backdrop-blur-md backdrop-filter bg-opacity-20 justify-center" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}>
            <form onSubmit={handleSubmit} className='ml-32'>
              <div className='grid grid-cols-2 gap-4 text-lg'>
                <label className='font-semibold'>Select Package : </label>
                <select
                  className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                  value={packageType}
                  onChange={(e) => setPackageType(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="AISecureNet">AISecureNet</option>
                  <option value="NetGuard">NetGuard</option>
                  <option value="AINetGuard">AINetGuard</option>
                  <option value="BIL">BIL</option>
                </select>
              </div>

              {packageType === 'BIL' && (
                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Initiation Charge / Monthly Rental : </label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={chargeType}
                    onChange={(e) => setChargeType(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="Initiation Charge">Initiation Charge</option>
                    <option value="Monthly Rental">Monthly Rental</option>
                  </select>
                </div>
              )}

              {packageType === 'BIL' && chargeType === 'Initiation Charge' && (
                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Access Medium : </label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={accessMedium}
                    onChange={(e) => setAccessMedium(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="GPON">GPON</option>
                    <option value="FIBER">FIBER</option>
                  </select>
                </div>
              )}

              {packageType === 'BIL' && chargeType === 'Monthly Rental' && (
                <>
                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Access Medium : </label>
                    <select
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={accessMedium}
                      onChange={(e) => setAccessMedium(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="GPON">GPON</option>
                      <option value="FIBER">FIBER</option>
                    </select>
                  </div>

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Bandwidth (Mbps) :</label>
                    <input
                      type="text"
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={bandwidth}
                      onChange={(e) => setBandwidth(e.target.value)}
                      placeholder="Enter bandwidth"
                    />
                  </div>

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Primary / Backup : </label>
                    <select
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="Primary">Primary</option>
                      <option value="Backup">Backup</option>
                    </select>
                  </div>

                  {service === 'Primary' && (
                    <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                      <label className='font-semibold'>Commitment period : </label>
                      <select 
                          className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                          value={commitmentPeriod}
                          onChange={(e) => setCommitmentPeriod(e.target.value)}
                          >
                        <option value="">Select...</option>
                        <option value="1 Year">1 Year</option>
                        <option value="2 Year">2 Year</option>
                        <option value="3 Year">3 Year</option>
                      </select>
                    </div>
                  )}
                </>
              )}

              {accessMedium === 'FIBER' && chargeType === 'Initiation Charge' && (
                <>
                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Commitment period : </label>
                    <select 
                        className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                        value={commitmentPeriod}
                        onChange={(e) => setCommitmentPeriod(e.target.value)}
                        >
                      <option value="">Select...</option>
                      <option value="1 Year">1 Year</option>
                      <option value="2 Year">2 Year</option>
                      <option value="3 Year">3 Year</option>
                    </select>
                  </div>

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Fiber Available / No : </label>
                    <select
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={fiberAvailable}
                      onChange={(e) => setFiberAvailable(e.target.value)}
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>

                  {fiberAvailable === 'No' && (
                    <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                      <label className='font-semibold'>Distance : </label>
                      <select 
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={distance}
                      onChange={(e) => setDistance(e.target.value)}
                      >
                        <option value="">Select...</option>
                        <option value="0 m - 500 m">0 m - 500 m</option>
                        <option value="500 m - 1000 m">500 m - 1000 m</option>
                        <option value="1000 m +">1000 m +</option>
                      </select>
                    </div>
                  )}
                </>
              )}

              {accessMedium === 'GPON' && chargeType === 'Initiation Charge' && (
                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Commitment period : </label>
                  <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                   value={commitmentPeriod}
                   onChange={(e) => setCommitmentPeriod(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                  </select>
                </div>
              )}

              {packageType === 'AISecureNet' && (
                <>

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Initiation Charge / Monthly Rental : </label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={chargeType}
                    onChange={(e) => setChargeType(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="Initiation Charge">Initiation Charge</option>
                    <option value="Monthly Rental">Monthly Rental</option>
                  </select>
                </div>

                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Bandwidth (Mbps) :</label>
                    <input
                      type="text"
                      className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                      value={bandwidth}
                      onChange={(e) => setBandwidth(e.target.value)}
                      placeholder="Enter bandwidth"
                    />
                  </div>
                </>
                )}

                {packageType === 'AISecureNet' && chargeType === 'Monthly Rental' && (
                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Commitment period : </label>
                  <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={commitmentPeriod}
                    onChange={(e) => setCommitmentPeriod(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                  </select>
                </div>
                )}


                {packageType === 'NetGuard' && (
                  <>
                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth</option>
                    {netguardmbps.map((option, index) => (
                      <option key={option._id} value={option.Bandwith}>{option.Bandwith}</option>
                    ))}
                  </select>
                </div>

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Commitment period : </label>
                  <select className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={commitmentPeriod}
                    onChange={(e) => setCommitmentPeriod(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                  </select>
                </div>
                  </>
                )}

              
              <div className='text-lg mt-2'>
                <button type="submit" className='font-semibold bg-blue-500 w-32 ml-40 text-white p-2 rounded-md'>Submit</button>
              </div>
            </form>

            {data1.length > 0 && (
  <div className='flex items-center justify-center text-xl text-white mt-6'>
    {(chargeType === 'Initiation Charge' || !chargeType) && `Initial Charge Is: ${data1}`}
    {chargeType === 'Monthly Rental' && `Monthly Rental Is: ${data1}`}
  </div>
)}

{data1.length === 0 && data2.length > 0 && (
  <ul className='text-xl text-white mt-6'>
    {data2.map((item, index) => (
      <li key={index}>
        Max Users: {item.MaxUsers}, Concurrent Users: {item.ConcurrentUsers}, Concurrent Sessions: {item.ConcurrentSessions}, Standard Price: {item.Sprice}
        {item.commitmentPeriod === '1 Year' && `, Year 1 CMR: ${item.year1CMR}`}
        {item.commitmentPeriod === '2 Year' && `, Year 2 CMR: ${item.year2CMR}`}
        {item.commitmentPeriod === '3 Year' && `, Year 3 CMR: ${item.year3CMR}`}
      </li>
    ))}
  </ul>
)}


          </div>
        </div>
      </div>
    </>
  );
}
