import React, { useState } from 'react';

const DropdownForm = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      className="min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fallback color for transparency
      }}
    >
      <div><h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Insert AISecureNet</h1></div>

      <div className='w-full'>
        <div className="flex justify-center">
          <div className="bg-white bg-opacity-50 p-6 rounded-md shadow-md w-full max-w-lg">
            <div className="mb-4">
              <select
                id="form-select"
                value={selectedOption}
                onChange={handleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 bg-white bg-opacity-50 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">--Please choose an option--</option>
                <option value="initiation">Initiation</option>
                <option value="monthlyRent">Monthly rent</option>
              </select>
            </div>

            {selectedOption === 'initiation' && (
              <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Label</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Bandwidth (Mbps)</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Standard (Rs.)</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Commitment (Upto 3 Years) (Rs.)</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Submit
                </button>
              </form>
            )}

            {selectedOption === 'monthlyRent' && (
              <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Label</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Bandwidth (Mbps)</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Max Users</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Concurrent Users</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Concurrent Sessions</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">Standard Price - Rs.</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">1 Year Commitment Monthly Rental Rs.</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">2 Year Commitment Monthly Rental Rs.</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">3 Year Commitment Monthly Rental Rs.</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownForm;
