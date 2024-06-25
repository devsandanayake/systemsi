import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../../Images/bg1.jpg';


const AINetGuard = () => {
  const [formData, setFormData] = useState({
      Bandwith: '',
      MaxUsers: '',
      ConcurrentUsers: '',
      ConcurrentSessions: '',
      Sprice: '',
      year1CMR: '',
      year2CMR: '',
      year3CMR: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axiosInstance.post('/TrAINetG/TrAINetGMon', formData);
        console.log('Data saved:', response.data);
        toast.success('Data saved successfully!');
        // Reset formData to initial state
        setFormData({
            Bandwith: '',
            MaxUsers: '',
            ConcurrentUsers: '',
            ConcurrentSessions: '',
            Sprice: '',
            year1CMR: '',
            year2CMR: '',
            year3CMR: ''
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000); 
    } catch (error) {
        console.error('Error saving data:', error);
        toast.error('Error saving data!');
    }
};

const navigate = useNavigate();

const handleBack = () => {
    navigate(-1);
};


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
      <div>
              <h1 className="text-4xl font-bold text-gray-300 mt-2 text-center mb-6">Insert AINetGuard Monthly Rental</h1>
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

          <div className='w-full mt-3'>
              <div className="flex justify-center">
              <form onSubmit={handleSubmit} className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Bandwidth (Mbps)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Max Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Concurrent Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Concurrent Sessions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Standard Price LKR</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">1 Year Commitment Monthly Rental LKR</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">2 Year Commitment Monthly Rental LKR</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">3 Year Commitment Monthly Rental LKR</th>
                    </tr>
                              </thead>
                              <tbody className="bg-white divide-y divide-gray-200">
                              <tr className='border border-gray-700'>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="Bandwith" value={formData.Bandwith} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="MaxUsers" value={formData.MaxUsers} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="ConcurrentUsers" value={formData.ConcurrentUsers} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="ConcurrentSessions" value={formData.ConcurrentSessions} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="Sprice" value={formData.Sprice} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="year1CMR" value={formData.year1CMR} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="year2CMR" value={formData.year2CMR} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                      <td className='p-2 whitespace-nowrap border border-gray-700'>
                                          <input type="text" name="year3CMR" value={formData.year3CMR} onChange={handleChange} className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50" />
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <div className=" w-full flex justify-center">
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
};

export default AINetGuard;