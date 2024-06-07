import React from 'react';

const InsertNetGuard = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/1501103626/photo/defocused-background-image-of-a-spacious-hallway-in-a-modern-office.jpg?b=1&s=612x612&w=0&k=20&c=aB8ktdkwuAhIXrPeZoNFh8KlLOor5GNImsP9qMqA0cU=)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fallback color for transparency
        // backgroundBlendMode: 'overlay', // Blend mode for the transparency effect
      }}
    >
        <div><h1 className="text-4xl font-bold text-gray-800 text-center mb-6">Insert NetGuard</h1></div>
        <div className='w-full'>
            <div className="flex justify-center">
            <div className="pt-20 w-full max-w-lg mx-auto bg-white bg-opacity-50 p-6 rounded-md shadow-md mt-8">
        <form className="space-y-4 border border-gray-300 p-4 rounded-md bg-white bg-opacity-50">
          <div>
            <label className="block text-sm font-medium text-gray-700">Bandwidth</label>
            <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Standard Price - Rs.</label>
            <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">1 Year Commitment Monthly Rental Rs.</label>
            <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">2 Year Commitment Monthly Rental Rs.</label>
            <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">3 Year Commitment Monthly Rental Rs.</label>
            <input type="text" className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 bg-white bg-opacity-50" />
          </div>
          <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Submit
          </button>
        </form>
      </div>

            </div>
        </div>
      

    </div>
  );
};

export default InsertNetGuard;
