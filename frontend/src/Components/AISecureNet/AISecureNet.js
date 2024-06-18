import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [formData, setFormData] = useState({
    Bandwith: '',
    Standard: '',
    Commitment: '',
    MaxUsers: '',
    ConcurrentUsers: '',
    ConcurrentSessions: '',
    Sprice: '',
    year1CMR: '',
    year2CMR: '',
    year3CMR: ''
  });

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit = async (event) => {
  event.preventDefault();
  // Define resetData outside of the try block to ensure it's accessible later
  let resetData = {
    Bandwith: '',
    MaxUsers: '',
    ConcurrentUsers: '',
    ConcurrentSessions: '',
    Sprice: '',
    year1CMR: '',
    year2CMR: '',
    year3CMR: '',
  };

  try {
    const response = await axiosInstance.post('/aisecurenet/add/month', {
      Bandwith: formData.Bandwith,
      MaxUsers: formData.MaxUsers,
      ConcurrentUsers: formData.ConcurrentUsers,
      ConcurrentSessions: formData.ConcurrentSessions,
      Sprice: formData.Sprice,
      year1CMR: formData.year1CMR,
      year2CMR: formData.year2CMR,
      year3CMR: formData.year3CMR,
    });
    console.log(response.data);
    toast.success('Monthly rent data added successfully!');
  } catch (error) {
    console.error("Error adding AISecurenet document:", error);
    toast.error('Error adding AISecurenet document. Please try again.');
  }
  // Reset formData to initial state after successful submission or in case of an error
  setFormData(resetData);
};

  return (
    <>
    <ToastContainer />
    <div
      className="min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
      }}
    >
      <div><h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Insert AISecureNet</h1></div>

      <div className='w-full'>
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md">
            

              
              <form onSubmit={handleSubmit} className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Bandwidth (Mbps)</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Max Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Concurrent Users</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Concurrent Sessions</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">Standard Price - Rs.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">1 Year Commitment Monthly Rental Rs.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">2 Year Commitment Monthly Rental Rs.</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-700">3 Year Commitment Monthly Rental Rs.</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className='border border-gray-700'>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="Bandwith"
                          value={formData.Bandwith}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="MaxUsers"
                          value={formData.MaxUsers}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="ConcurrentUsers"
                          value={formData.ConcurrentUsers}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="ConcurrentSessions"
                          value={formData.ConcurrentSessions}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="Sprice"
                          value={formData.Sprice}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="year1CMR"
                          value={formData.year1CMR}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="year2CMR"
                          value={formData.year2CMR}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                      <td className="p-2 whitespace-nowrap border border-gray-700">
                        <input
                          type="text"
                          name="year3CMR"
                          value={formData.year3CMR}
                          onChange={handleInputChange}
                          className="block w-full p-1 h-14 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-gray-300 bg-opacity-50"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Submit
                </button>
              </form>
            
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DropdownForm;
