import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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

  return (
    <>
      <ToastContainer />
      <div className="min-h-screen items-center justify-center bg-cover bg-center"
          style={{
              backgroundImage: 'url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=)',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
          }}>
          <div>
              <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Insert AINetGuard Monthly Rental</h1>
          </div>
          <div className='w-full'>
              <div className="flex justify-center">
                  <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md w-full">
                      <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50" onSubmit={handleSubmit}>
                          <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                              <thead>
                                  <tr className='border-b border-gray-300'>
                                      <th className='border border-gray-300'>Bandwidth</th>
                                      <th className='border border-gray-300'>Max Users</th>
                                      <th className='border border-gray-300'>Concurrent Users</th>
                                      <th className='border border-gray-300'>Concurrent Sessions</th>
                                      <th className='border border-gray-300'>Standard Price - Rs.</th>
                                      <th className='border border-gray-300'>1 Year Commitment Monthly Rental Rs.</th>
                                      <th className='border border-gray-300'>2 Year Commitment Monthly Rental Rs.</th>
                                      <th className='border border-gray-300'>3 Year Commitment Monthly Rental Rs.</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className='border-b border-gray-300 h-16'>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="Bandwith" value={formData.Bandwith} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="MaxUsers" value={formData.MaxUsers} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="ConcurrentUsers" value={formData.ConcurrentUsers} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="ConcurrentSessions" value={formData.ConcurrentSessions} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="Sprice" value={formData.Sprice} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="year1CMR" value={formData.year1CMR} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="year2CMR" value={formData.year2CMR} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                      <td className='border border-gray-300'>
                                          <input type="text" name="year3CMR" value={formData.year3CMR} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300" />
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <div className="flex justify-center">
                              <button type="submit" className="mt-4 w-48 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                  Submit
                              </button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
      </>
  );
};

export default AINetGuard;