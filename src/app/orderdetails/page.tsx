'use client';
import React, { useState } from 'react';

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState({
    firstName: '',
    lastName: '',
    address: '',
    postalCode: '',
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!orderDetails.firstName || !orderDetails.lastName || !orderDetails.address || !orderDetails.postalCode) {
      alert('Please fill in all fields.');
      return;
    }

    // Simulate order placement
    setIsOrderPlaced(true);

    // Hide order confirmation after 5 seconds
    setTimeout(() => setIsOrderPlaced(false), 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-4 sm:px-6 lg:px-8 mt-[10px] relative">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Enter Your Order Details</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={orderDetails.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={orderDetails.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="address"
            placeholder="Address Line 1"
            value={orderDetails.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={orderDetails.postalCode}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Continue
          </button>
        </form>
      </div>

      {/* Order Confirmation Popup */}
      {isOrderPlaced && (
        <div className="absolute bottom-8 bg-green-500 text-white px-4 py-2 rounded-md shadow-md animate-fade-in">
          Your order is on the way! 🚚
        </div>
      )}
    </div>
  );
};

export default OrderPage;
