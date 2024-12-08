import React from 'react';
import Image from 'next/image';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 sm:px-6 lg:px-8 mt-[120px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/nike.png" alt="Nike logo" width={70} height={70} />
        </div>
        <h2 className="text-2xl font-bold text-center">YOUR ACCOUNT</h2>
        <h1 className="text-2xl font-bold text-center mt-2">FOR EVERYTHING</h1>
        <h1 className="text-2xl font-bold mb-4 text-center mt-2">NIKE</h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
            />
            <span className="text-sm text-gray-600">Keep me signed in</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-black hover:underline">
            Not a Member? Join Us.
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
