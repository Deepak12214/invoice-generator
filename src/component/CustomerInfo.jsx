import React, { useState, useEffect } from 'react';

const CustomerInfo = () => {
  let [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://customertransactionapi20250312083911-fvcvh5d8c5fdbths.centralus-01.azurewebsites.net/api/Billing/GetCustomerMasterData/dwd99');
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCustomerData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
customerData={
    applicantName : 'Deepak',
    tarrifTypeId : '421'
}
  return (
    <>
    <div className="flex justify-center items-center h-screen">
    {customerData ? (
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Customer Information</h2>
        <p className="text-lg"><strong>Name:</strong> {customerData.applicantName ? customerData.applicantName : 'Customer Name'}</p>
        <p className="text-lg"><strong>Tariff Type ID:</strong> {customerData.tarrifTypeId ? customerData.tarrifTypeId : 'No'}</p>
      </div>
    ) : (
      <p className="text-center text-gray-500">No customer data available.</p>
    )}
  </div>
  </>
  );
};

export default CustomerInfo;

