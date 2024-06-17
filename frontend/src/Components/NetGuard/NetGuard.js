import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InsertNetGuard = () => {
  const [formData, setFormData] = useState({
    Bandwith: '',
    Standard: '',
    Commitment1Year: '',
    Commitment2Year: '',
    Commitment3Year: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post('/AINetG/AINetGMon', formData);
      console.log(res.data); // handle the response as needed
      toast.success('Form submitted successfully!');
      setFormData({
        Bandwith: '',
        Standard: '',
        Commitment1Year: '',
        Commitment2Year: '',
        Commitment3Year: ''
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000); // Adjust the timeout duration as needed
    } catch (error) {
      console.error(error);
      toast.error('Error submitting form!');
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=)',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <div><h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Insert NetGuard</h1></div>
        <div className='w-full flex justify-center items-center'>
          <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50 items-center justify-center" onSubmit={handleSubmit}>
            <div>
              <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                <thead>
                  <tr className='border-b border-gray-300'>
                    <th className='border border-gray-300'>Bandwidth</th>
                    <th className='border border-gray-300'>Standard Price - Rs.</th>
                    <th className='border border-gray-300'>1 Year Commitment Monthly Rental Rs.</th>
                    <th className='border border-gray-300'>2 Year Commitment Monthly Rental Rs.</th>
                    <th className='border border-gray-300'>3 Year Commitment Monthly Rental Rs.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-b border-gray-300 h-16'>
                    <td className='border border-gray-300'>
                      <input type="text" name="Bandwith" value={formData.Bandwith} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300"/>
                    </td>
                    <td className='border border-gray-300'>
                      <input type="text" name="Standard" value={formData.Standard} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300"/>
                    </td>
                    <td className='border border-gray-300'>
                      <input type="text" name="Commitment1Year" value={formData.Commitment1Year} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300"/>
                    </td>
                    <td className='border border-gray-300'>
                      <input type="text" name="Commitment2Year" value={formData.Commitment2Year} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300"/>
                    </td>
                    <td className='border border-gray-300'>
                      <input type="text" name="Commitment3Year" value={formData.Commitment3Year} onChange={handleChange} className="p-1 rounded w-full h-16 bg-gray-300"/>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center w-full">
              <button type="submit" className="mt-4 w-64 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default InsertNetGuard;
