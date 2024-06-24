import React, { useState } from 'react';
import axiosInstance from '../../axiosConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import background from '../../Images/bg1.jpg';

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

        <div><h1 className="text-4xl font-bold text-gray-300 text-center mb-6">Insert NetGuard</h1></div>
        <div className='w-full flex justify-center items-center'>
          <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50 items-center justify-center" onSubmit={handleSubmit}>
            <div>
              <table className='mx-auto bg-white p-2 rounded-lg shadow-md w-11/12 backdrop-blur-md backdrop-filter bg-opacity-20 text-black border border-gray-300'>
                <thead>
                  <tr className='border-b border-gray-300'>
                    <th className='border border-gray-300'>Bandwidth</th>
                    <th className='border border-gray-300'>Standard Price LKR</th>
                    <th className='border border-gray-300'>1 Year Commitment Monthly Rental LKR</th>
                    <th className='border border-gray-300'>2 Year Commitment Monthly Rental LKR</th>
                    <th className='border border-gray-300'>3 Year Commitment Monthly Rental LKR</th>
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
              <button type="submit" className="beautiful-button">
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
