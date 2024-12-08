import React from "react";
import Image from "next/image";

const SignupForm = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 sm:px-6 lg:px-8 mt-[350px] mb-[150px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image src="/nike.png" alt="Nike logo" width={70} height={70} />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">Become a Nike Member</h2>
        <p className="text-gray-600 mb-6 text-center">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            placeholder="Date of Birth"
            className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
            <select
              className="w-full sm:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="India">India</option>
            </select>
            <div className="flex items-center">
              <div className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
                />
                <span className="text-sm text-gray-600">Male</span>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
                />
                <span className="text-sm text-gray-600">Female</span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
            />
            <span className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits
            </span>
          </div>
          <div className="text-sm text-gray-600">
            By creating an account, you agree to Nike Privacy Policy and Terms of Use.
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            JOIN US
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Already a Member? Sign In.
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
