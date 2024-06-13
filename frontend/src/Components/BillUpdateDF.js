import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from react-router-dom

export default function BillUpdateDF() {
  const { id } = useParams(); // Destructure id from the useParams hook
  console.log(id);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure id is properly included in the URL
        const response = await fetch(`http://localhost:3001/route/${id}`);
        const data = await response.json();
        console.log('Data:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, [id]); // Dependency array ensures useEffect is called again if id changes

  return (
    <div>BillUpdateDF</div>
  );
}