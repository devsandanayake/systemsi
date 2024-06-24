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
  const [bandwidthRange, setBandwidthRange] = useState('');
  const [service, setService] = useState('');

  const [netguardmbps, setNetguardmbps] = useState('');
  const [AINetgmbps, setAINetgmbps] = useState('');
  const [AISecureNetMbps, setAISecureNetMbps] = useState('');
  const [BILFiberMbps, setBILFiberMbps] = useState('');
  const [BILGPONMbps, setBILGPONMbps] = useState('');

  const [data1, setData1] = useState([]);
  const [showData1, setShowData1] = useState(false);
  const [data2, setData2] = useState([]);
  const [showData2, setShowData2] = useState(false);
  const [data3, setData3] = useState([]);
  const [showData3, setShowData3] = useState(false);
  const [data4, setData4] = useState([]);
  const [showData4, setShowData4] = useState(false);
  const [data5, setData5] = useState([]);
  const [showData5, setShowData5] = useState(false);
  const [data6, setData6] = useState([]);
  const [showData6, setShowData6] = useState(false);
  const [data7, setData7] = useState([]);
  const [showData7, setShowData7] = useState(false);
  const [data8, setData8] = useState([]);
  const [showData8, setShowData8] = useState(false);
  const [data9, setData9] = useState([]);
  const [showData9, setShowData9] = useState(false);
  const [data10, setData10] = useState([]);
  const [showData10, setShowData10] = useState(false);
  const [data11, setData11] = useState([]);
  const [showData11, setShowData11] = useState(false);
  const [data12, setData12] = useState([]);
  const [showData12, setShowData12] = useState(false);
  const [data13, setData13] = useState([]);
  const [showData13, setShowData13] = useState(false);
  const [data14, setData14] = useState([]);
  const [showData14, setShowData14] = useState(false);
  const [data15, setData15] = useState([]);
  const [showData15, setShowData15] = useState(false);
  const [data16, setData16] = useState([]);
  const [showData16, setShowData16] = useState(false);
  const [data17, setData17] = useState([]);
  const [showData17, setShowData17] = useState(false);
  const [data18, setData18] = useState([]);
  const [showData18, setShowData18] = useState(false);
  const [data19, setData19] = useState([]);
  const [showData19, setShowData19] = useState(false);
  const [data20, setData20] = useState([]);
  const [showData20, setShowData20] = useState(false);


  useEffect(() => {
    axiosInstance.get('/AINetG/AINetGMon')
      .then((res) => {
        // Assuming res.data is an array that needs to be sorted
        const sortedData = res.data.sort((a, b) => parseFloat(a.Bandwith) - parseFloat(b.Bandwith));
        setNetguardmbps(sortedData);
      })
      .catch((err) => {
        console.log('Error fetching data:', err.message);
      });
  }, []);

  useEffect(() => {
    axiosInstance.get('/TrAINetG/TrAINetGMon')
      .then((res) => {
        // Assuming res.data is an array that needs to be sorted
        const sortedData = res.data.sort((a, b) => parseFloat(a.Bandwith) - parseFloat(b.Bandwith));
        setAINetgmbps(sortedData);
      })
      .catch((err) => {
        console.log('Error fetching data:', err.message);
      });
  }, []);

  useEffect(() => {
    axiosInstance.get('/aisecurenet/get/month')
        .then((res) => {
            let dataArray = res.data.AISecurenetMonth; // Access the array from the response
            if (Array.isArray(dataArray)) {
                // Sort dataArray in ascending order based on Bandwith
                dataArray.sort((a, b) => {
                    // Assuming Bandwith is a number. If it's a string, you might need to parse it
                    return parseFloat(a.Bandwith) - parseFloat(b.Bandwith);
                });
                setAISecureNetMbps(dataArray);
            } else {
                console.error('Response data is not an array:', res.data);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}, []);

useEffect(() => {
  axiosInstance.get('/route/all')
    .then((response) => {
        // Correctly access the data from axios response
        const data = response.data;
        // Filter, map, and sort the routes as intended
        const sortedBILFiberMbps = data.routes
          .filter(route => route.origin?.directFiber?.primary)
          .map(route => route.origin.directFiber.primary)
          .sort((a, b) => parseFloat(a.Bandwidth) - parseFloat(b.Bandwidth)); // Assuming Bandwidth is a numeric value
        setBILFiberMbps(sortedBILFiberMbps);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}, []);

// Use another useEffect to log the BILFiberMbps state variable after it has been updated
useEffect(() => {
  console.log('BILFiberMbps', BILFiberMbps);
}, [BILFiberMbps]);

useEffect(() => {
  axiosInstance.get('/route/all')
    .then((response) => {
        const data = response.data;
        // Filter and map the GPON routes
        const filteredGponRoutes = data.routes
          .filter(route => route.origin?.GPONbase?.primary)
          .map(route => route.origin.GPONbase.primary);
        // Sort the GPON routes by Bandwidth in ascending order
        const sortedGponRoutes = filteredGponRoutes.sort((a, b) => parseFloat(a.Bandwidth) - parseFloat(b.Bandwidth));
        setBILGPONMbps(sortedGponRoutes);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
}, []);

const formatNumber = (value) => {
    if (!value) return value;

    // Ensure the value is a string and remove existing commas
    value = value.toString().replace(/,/g, '');

    // Use a regular expression to format the number with commas
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

  


  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData1(false);
    setShowData2(false);
    data1.length = 0;
    data2.length = 0;
    data3.length = 0;
    data4.length = 0;
    data5.length = 0;
    data6.length = 0;
    data7.length = 0;
    

    let url;
    let url2;
    if (packageType === 'BIL') {
      url = '/route/all';
    } else if (packageType === 'AISecureNet') {
      url = '/aisecurenet/get/init';
      url2 = '/aisecurenet/get/month';
    } else if (packageType === 'NetGuard') {
      url = '/AINetG/AINetGMon';
      url2 = '/AINetG/AINetGI';
    } else if (packageType === 'AINetGuard') {
      url = '/TrAINetG/TrAINetGMon';
      url2 ='/TrAINetG/TrAINetGI';
    }

    if (packageType === 'AINetGuard' && url2) {
      axios.all([
          axiosInstance.get(url),
          axiosInstance.get(url2)
      ])
      .then(axios.spread((response1, response2) => {
          const data1Response = response1.data;
          const data2Response = response2.data;

          // Process the data from the first response
          if (data1Response && data1Response.length > 0) {
              const filteredData1 = data1Response.filter(item => item.Bandwith === bandwidth);
              
              setData2(filteredData1.map(item => {
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
          } 
          else {
              console.error('TrAINetGMon data is undefined or empty');
          
          }

          // Process the data from the second response
          if (data2Response && data2Response.length > 0) {
              if (bandwidthRange === '15') {
                  setData3(data2Response.map(item => item.data.a1s));
                  setData4(data2Response.map(item => item.data.a1Sc));
              } else if (bandwidthRange === '175') {
                  setData3(data2Response.map(item => item.data.a2s));
                  setData4(data2Response.map(item => item.data.a2Sc));
              } else if (bandwidthRange === '450') {
                  setData3(data2Response.map(item => item.data.a3s));
                  setData4(data2Response.map(item => item.data.a3Sc));
              } else if (bandwidthRange === '900') {
                  setData3(data2Response.map(item => item.data.a4s));
                  setData4(data2Response.map(item => item.data.a4Sc));
              }
              else if (bandwidthRange === '1900') {
                setData3(data2Response.map(item => item.data.a5s));
                setData4(data2Response.map(item => item.data.a5Sc));
              }
              else if (bandwidthRange === '4000') {
                setData3(data2Response.map(item => item.data.a6s));
                setData4(data2Response.map(item => item.data.a6Sc));
              }
              
          } else {
              console.error('TrAINetGI data is undefined or empty');
          }

          setShowData3(true); // Show data1 after fetching
          setShowData4(true); // Show data2 after fetching
          console.log(data3);

      }))
      .catch((error) => {
          console.log(error);
      });

    } else if (packageType === 'AISecureNet' && url2) {
      axios.all([
          axiosInstance.get(url),
          axiosInstance.get(url2)
      ])
      .then(axios.spread((response1, response2) => {
        const data1Response = response1.data;
        const data2Response = response2.data;
        console.log('efe', data1Response);
        console.log('eacfa', data2Response);
    
        const data1Array = data1Response.AISecurenet;

        // Process the data from the first response
        if (Array.isArray(data1Array) && data1Array.length > 0) {
          console.log('ewfwf', data1Array);  // Log data1Array to check its structure
          let data3 = [], data4 = [];
          
          switch (bandwidthRange) {
            case '15':
              data3 = data1Array.map(item => item.data.a1s);
              data4 = data1Array.map(item => item.data.a1Sc);
              break;
            case '175':
              data3 = data1Array.map(item => item.data.a2s);
              data4 = data1Array.map(item => item.data.a2Sc);
              break;
            case '450':
              data3 = data1Array.map(item => item.data.a3s);
              data4 = data1Array.map(item => item.data.a3Sc);
              break;
            case '900':
              data3 = data1Array.map(item => item.data.a4s);
              data4 = data1Array.map(item => item.data.a4Sc);
              break;
            case '1900':
              data3 = data1Array.map(item => item.data.a5s);
              data4 = data1Array.map(item => item.data.a5Sc);
              break;
            case '4000':
              data3 = data1Array.map(item => item.data.a6s);
              data4 = data1Array.map(item => item.data.a6Sc);
              break;
            default:
              console.warn('Invalid bandwidth range:', bandwidthRange);
          }
          setData3(data3);
          setData4(data4);
          console.log('data3', data3);
          console.log('data4', data4);
        } else {
          console.warn('data1Response is not a valid array:', data1Array);
        }
    
        // Process the data from the second response
        if (data2Response && data2Response.AISecurenetMonth && data2Response.AISecurenetMonth.length > 0) {
          const filteredData = data2Response.AISecurenetMonth.filter(item => item.Bandwith === bandwidth);
          const mappedData = filteredData.map(item => {
            const commonData = {
              MaxUsers: item.MaxUsers,
              ConcurrentUsers: item.ConcurrentUsers,
              ConcurrentSessions: item.ConcurrentSessions,
              Sprice: item.Sprice,
            };
            switch (commitmentPeriod) {
              case '1 Year':
                return { ...commonData, year1CMR: item.year1CMR, commitmentPeriod: '1 Year' };
              case '2 Year':
                return { ...commonData, year2CMR: item.year2CMR, commitmentPeriod: '2 Year' };
              case '3 Year':
                return { ...commonData, year3CMR: item.year3CMR, commitmentPeriod: '3 Year' };
              default:
                return null;
            }
          }).filter(item => item !== null);
          setData2(mappedData);
        }
    
        setShowData1(true); // Show data1 after fetching
        setShowData2(true); // Show data2 after fetching
      }))
      .catch(error => {
        console.error("Error fetching data: ", error);
      });
    
  } 
  
  else if (packageType === 'NetGuard' && url2) {
    axios.all([
        axiosInstance.get(url),
        axiosInstance.get(url2)
    ])
    .then(axios.spread((response1, response2) => {
      const data1Response = response1.data;
      const data2Response = response2.data;
      console.log('xxy', data1Response);
      console.log('xxz', data2Response);

      if (data1Response && data1Response.length > 0) {
        const filteredData1 = data1Response.filter(item => item.Bandwith === bandwidth);
        
          if (commitmentPeriod === '1 Year') {
            setData5(filteredData1.map(item => item.Commitment1Year));
            setData6(filteredData1.map(item => item.Standard));
          } else if (commitmentPeriod === '2 Year') {
            setData5(filteredData1.map(item => item.Commitment2Year));
            setData6(filteredData1.map(item => item.Standard));
          }
          else if (commitmentPeriod === '3 Year') {
            setData5(filteredData1.map(item => item.Commitment3Year));
            setData6(filteredData1.map(item => item.Standard));
          }
      }
      else {
        console.error('AINetGMonData is undefined');
      }

      setShowData5(true); 
      setShowData6(true);

      if (data2Response && data2Response.length > 0) {
        setData7(data2Response.map(item => item.Const));
      } else {
        console.error('AINetGMonData is undefined');
      }
            


    }))
  
  
  }
  
  else {

    axiosInstance.get(url)
  .then((response) => {
    const routes = response.data.routes;

    if (packageType === 'BIL') {
      if (accessMedium === 'FIBER') {
        if (fiberAvailable === 'Yes') {
          if (commitmentPeriod === '1 Year') {
            setData8(routes[0].initiation.base.directFiber.FiAvSprice);
            setData9(routes[0].initiation.base.directFiber.FiAvYear1CMR);
          }
          if (commitmentPeriod === '2 Year') {
            setData8(routes[0].initiation.base.directFiber.FiAvSprice);
            setData9(routes[0].initiation.base.directFiber.FiAvYear2CMR);
          }
          if (commitmentPeriod === '3 Year') {
            setData8(routes[0].initiation.base.directFiber.FiAvSprice);
            setData9(routes[0].initiation.base.directFiber.FiAvYear3CMR);
          }
        }

        if (fiberAvailable === 'No') {
          if (distance === '0 m - 500 m') {
            if (commitmentPeriod === '1 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear1CMR);
            }
            if (commitmentPeriod === '2 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear2CMR);
            }
            if (commitmentPeriod === '3 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear3CMR);
            }
          }
          if (distance === '500 m - 1000 m') {
            if (commitmentPeriod === '1 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear1CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year1CMR);
            }
            if (commitmentPeriod === '2 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear2CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year2CMR);
            }
            if (commitmentPeriod === '3 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear3CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year3CMR);
            }
          }
          if (distance === '1000 m +') {
            if (commitmentPeriod === '1 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear1CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year1CMR);
              setData14(routes[0].initiation.base.directFiber.Fi1000Sprice);
              setData15(routes[0].initiation.base.directFiber.Fi1000Year1CMR);
            }
            if (commitmentPeriod === '2 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear2CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year2CMR);
              setData14(routes[0].initiation.base.directFiber.Fi1000Sprice);
              setData15(routes[0].initiation.base.directFiber.Fi1000Year2CMR);
            }
            if (commitmentPeriod === '3 Year') {
              setData10(routes[0].initiation.base.directFiber.FiNonAv);
              setData11(routes[0].initiation.base.directFiber.FiNonAvYear3CMR);
              setData12(routes[0].initiation.base.directFiber.Fi500Sprice);
              setData13(routes[0].initiation.base.directFiber.Fi500Year3CMR);
              setData14(routes[0].initiation.base.directFiber.Fi1000Sprice);
              setData15(routes[0].initiation.base.directFiber.Fi1000Year3CMR);
            }
          }
        }

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
            setData18(filteredRoutes.map(route => route.origin.directFiber.primary.Sprice));
            setData19(filteredRoutes.map(route => route.origin.directFiber.primary.year1CMR));
          } else if (commitmentPeriod === '2 Year') {
            setData18(filteredRoutes.map(route => route.origin.directFiber.primary.Sprice));
            setData1(filteredRoutes.map(route => route.origin.directFiber.primary.year2CMR));
          } else if (commitmentPeriod === '3 Year') {
            setData18(filteredRoutes.map(route => route.origin.directFiber.primary.Sprice));
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

          setData18(filteredRoutes.map(route => route.origin.directFiber.backup.Sprice));
          setData20(filteredRoutes.map(route => route.origin.directFiber.backup.year1CMR));

        }
      }
      if (accessMedium === 'GPON') {

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
            setData18(filteredRoutes.map(route => route.origin.GPONbase.primary.Sprice));
            setData19(filteredRoutes.map(route => route.origin.GPONbase.primary.year1CMR));
          } else if (commitmentPeriod === '2 Year') {
            setData18(filteredRoutes.map(route => route.origin.GPONbase.primary.Sprice));
            setData19(filteredRoutes.map(route => route.origin.GPONbase.primary.year2CMR));
          } else if (commitmentPeriod === '3 Year') {
            setData18(filteredRoutes.map(route => route.origin.GPONbase.primary.Sprice));
            setData19(filteredRoutes.map(route => route.origin.GPONbase.primary.year3CMR));
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
          setData18(filteredRoutes.map(route => route.origin.GPONbase.backup.Sprice));
          setData20(filteredRoutes.map(route => route.origin.GPONbase.backup.year1CMR));
        } else {
          let filteredRoutes;
          if (commitmentPeriod === '1 Year') {
            filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year1Commitment);
            setData18(filteredRoutes.map(route => route.GPONbase.Sprice));
            setData19(filteredRoutes.map(route => route.GPONbase.year1Commitment));
          } else if (commitmentPeriod === '2 Year') {
            filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year2Commitment);
            setData18(filteredRoutes.map(route => route.GPONbase.Sprice));
            setData19(filteredRoutes.map(route => route.GPONbase.year2Commitment));
          } else if (commitmentPeriod === '3 Year') {
            filteredRoutes = routes.filter(route => route.GPONbase && route.GPONbase.year3Commitment);
            setData18(filteredRoutes.map(route => route.GPONbase.Sprice));
            setData19(filteredRoutes.map(route => route.GPONbase.year3Commitment));
          }
          // Ensure filteredRoutes is defined and not empty before logging
          if (filteredRoutes && filteredRoutes.length > 0) {
            console.log(filteredRoutes.map(route => route.GPONbase.year1Commitment || route.GPONbase.year2Commitment || route.GPONbase.year3Commitment));
          } else {
            console.log("No routes found for the selected GPON and commitment period.");
          }
        }
      }
      setShowData8(true);
      setShowData9(true);
      setShowData10(true);
      setShowData11(true);
      setShowData12(true);
      setShowData13(true);
      setShowData14(true);
      setShowData15(true);
      setShowData16(true);
      setShowData17(true);
      setShowData18(true);
      setShowData19(true);
      setShowData20(true);
    }


    setShowData1(true); // Show data1 after fetching
    
      
    })
      .catch((error) => {
        console.log(error);
      });

  }
  }


  return (
    <>
      <div className='justify-center items-center h-screen' style={{  }}>
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
            Enterprise Tariff
          </div>
        </div>
         


        <div className='flex justify-center items-center mt-5'>
          <div className="bg-white p-2 rounded-lg shadow-md h-fit backdrop-blur-md backdrop-filter bg-opacity-20 justify-center" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.8)' }}>
            <form onSubmit={handleSubmit}>
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
                <>
              
                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Access Medium : </label>
                  <select 
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={accessMedium}
                    onChange={(e) => setAccessMedium(e.target.value)}
                  >
                    <option value="">Select...</option>
                    <option value="FIBER">FIBER</option>
                    <option value="GPON">GPON</option>
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

                {accessMedium === 'FIBER' && (
                   <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                   <label className='font-semibold'>Bandwidth (Mbps) :</label>
                   <select
                     className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                     value={bandwidth}
                     onChange={(e) => setBandwidth(e.target.value)}
                   >
                     <option value="" disabled>Select bandwidth</option>
                     {BILFiberMbps.map((option, index) => (
                       <option key={option._id} value={option.Bandwidth}>{option.Bandwidth}</option>
                     ))}
                   </select>
                 </div>
                )}

                {accessMedium === 'GPON' && (
                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth</option>
                    {BILGPONMbps.map((option, index) => (
                      <option key={option._id} value={option.Bandwidth}>{option.Bandwidth}</option>
                    ))}
                  </select>
                </div>
                )}

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

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                    <label className='font-semibold'>Fiber Available / Not : </label>
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

              {packageType === 'AISecureNet' && (
                <>
                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth</option>
                    {AISecureNetMbps.map((option, index) => (
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

                  <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth Range for Initiation Charge (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidthRange}
                    onChange={(e) => setBandwidthRange(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth range</option>
                    <option value="15">Upto 15 </option>
                    <option value="175">Upto 175</option>
                    <option value="450">Upto 450</option>
                    <option value="900">Upto 900</option>
                    <option value="1900">Upto 1900</option>
                    <option value="4000">Upto 4000</option>
                  </select>
                  </div>
                </>
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

                {packageType === 'AINetGuard' && (
                  <>
                   <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidth}
                    onChange={(e) => setBandwidth(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth</option>
                    {AINetgmbps.map((option, index) => (
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

                <div className='grid grid-cols-2 gap-4 text-lg mt-2'>
                  <label className='font-semibold'>Bandwidth Range for Initiation Charge (Mbps) :</label>
                  <select
                    className='bg-gray-200 p-1 rounded-md w-44 h-10 ml-2'
                    value={bandwidthRange}
                    onChange={(e) => setBandwidthRange(e.target.value)}
                  >
                    <option value="" disabled>Select bandwidth range</option>
                    <option value="15">Upto 15 </option>
                    <option value="175">Upto 175</option>
                    <option value="450">Upto 450</option>
                    <option value="900">Upto 900</option>
                    <option value="1900">Upto 1900</option>
                    <option value="4000">Upto 4000</option>
                  </select>
                </div>


                  </>
                )}


              
              <div className='text-lg mt-2 w-full flex justify-center items-center'>
  <button type="submit" className='font-semibold bg-blue-500 w-32 text-white p-2 rounded-md'>Submit</button>
</div>
            </form>

            {data1.length > 0 && (
  <div className='flex items-center justify-center text-xl text-white mt-6'>
    {(chargeType === 'Initiation Charge' || !chargeType) && `Initial Charge Is: ${data1}`}
    {chargeType === 'Monthly Rental' && `Monthly Rental Is: ${data1}`}
  </div>
)}



{data3.length > 0 && (
  <div className='text-white mt-2'>
    Initiation Charge
  <div className='w-full flex justify-center'>
    <div>
      <table className='text-white mt-2 border-collapse border border-gray-800'>
        <thead>
          <tr>
            <th className='border border-black w-64'>Standard Price</th>
            <th className='border border-black w-64'>Commitment Upto 3 years</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-black text-center'>{formatNumber(data3)}</td>
            <td className='border border-black text-center'>{formatNumber(data4)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
)}

{data7.length > 0 && (
  <div className='text-white mt-2'>
    Initiation Charge is : {formatNumber(data7)}
    </div>
)}

{(data5.length > 0 || data6.length > 0) && (
  <div className='text-white mt-2'>
    Monthly Rental
    <div className='w-full flex justify-center'>
      <div>
        <table className='text-white mt-2 border-collapse border border-gray-800'>
          <thead>
            <tr>
              <th className='border border-black w-64'>Standard Price</th>
              <th className='border border-black w-64'>Year Commitment Monthly Rental</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-black text-center'>{formatNumber(data6)}</td>
              <td className='border border-black text-center'>{formatNumber(data5)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
)}

{data1.length === 0 && data2.length > 0 && (
  <div className='text-white'>
    Monthly Rental
  <div className='flex justify-center'>
    <table className='text-white mt-1 border-collapse border border-black'>
  <thead>
    <tr>
      <th className='border border-black p-1'>Max Users</th>
      <th className='border border-black p-1'>Concurrent Users</th>
      <th className='border border-black p-1'>Concurrent Sessions</th>
      <th className='border border-black p-1'>Standard Price</th>
      <th className='border border-black p-1'>Year Commitment Monthly Rental</th>
    </tr>
  </thead>
  <tbody>
    {data2.map((item, index) => (
      <tr key={index}>
        <td className='border border-black p-1'>{item.MaxUsers}</td>
        <td className='border border-black p-1'>{item.ConcurrentUsers}</td>
        <td className='border border-black p-1'>{item.ConcurrentSessions}</td>
        <td className='border border-black p-1'>{formatNumber(item.Sprice)}</td>
        <td className='border border-black p-1'>
  {item.commitmentPeriod === '1 Year' ? formatNumber(item.year1CMR) :
   item.commitmentPeriod === '2 Year' ? formatNumber(item.year2CMR) :
   item.commitmentPeriod === '3 Year' ? formatNumber(item.year3CMR) : ''}
</td>
      </tr>
    ))}
  </tbody>
</table>
  </div>
</div>
)}

{(data8.length > 0 || data9.length > 0 || data10.length > 0 || data11.length > 0 || data12.length > 0 || data13.length > 0 || data14.length > 0 || data15.length > 0 || data16.length > 0 || data17.length > 0 || data18.length > 0 || data19.length > 0 || data20.length > 0) && (
  <div className='text-white mt-2'>
  Initiation Charge
  <div className='w-full flex justify-center'>
    <div>
      <table className='text-white mt-2 border-collapse border border-gray-800'>
        <thead>
          <tr>
            <th className='border border-black w-64'></th>
            <th className='border border-black w-64'>Standard Price</th>
            <th className='border border-black w-64'>Year Commitment Monthly Rental</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='border border-black text-center'>Fiber Available to the customer's end</td>
            <td className='border border-black text-center'>{formatNumber(data8)}</td>
            <td className='border border-black text-center'>{formatNumber(data9)}</td>
          </tr>
          <tr>
            <td className='border border-black text-center'>Fiber Not available to the Customer's end</td>
            <td className='border border-black text-center'>{formatNumber(data10)}</td>
            <td className='border border-black text-center'>{formatNumber(data11)}</td>
          </tr>
          <tr>
            <td className='border border-black text-center'>500m-750m segment & 750m-1,000m segment</td>
            <td className='border border-black text-center'>{formatNumber(data12)}</td>
            <td className='border border-black text-center'>{formatNumber(data13)}</td>
          </tr>
          <tr>
            <td className='border border-black text-center'>1,000m and above segment</td>
            <td className='border border-black text-center'>{formatNumber(data14)}</td>
            <td className='border border-black text-center'>{formatNumber(data15)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div className='mt-2'>
    Monthly Rental
    <div className='w-full flex justify-center'>
    <div>
      <table className='text-white mt-2 border-collapse border border-gray-800'>
        <thead>
          <tr>
            <th className='border border-black w-64'>Standard Price</th>
            <th className='border border-black w-64'>
  {data19 > 0 ? 'Year Commitment Monthly Rental' : data20 > 0 ? 'Minimum 1 Year Commitment Monthly Rental Rs.' : ''}
</th>
          </tr>
        </thead>
        <tbody>
          <tr>
    <td className='border border-black text-center'>{formatNumber(data18)}</td>

<td className='border border-black text-center'>{formatNumber(data19) || formatNumber(data20)}</td>  

</tr>
        </tbody>
      </table>
    </div>
  </div>

    </div>
</div>
  )}

          </div>
        </div>
      </div>
    </>
  );
}
