import React from "react";
import { FaPhoneAlt, FaCommentDots, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const GetHelpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white py-20 mt-[150px]">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
        {/* Left Content */}
        <div className="w-full lg:w-2/3 pr-0 lg:pr-8">
          <h1 className="text-4xl font-bold mb-6">GET HELP</h1>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              What Payment Options Can I Use on Nike Orders?
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We want to make buying your favorite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <ul className="text-gray-700 list-disc list-inside mb-4">
              <li>Visa, Mastercard, Diners Club, Discover, American Express</li>
              <li>Visa Electron, Maestro</li>
              <li>Apple Pay</li>
            </ul>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Nike Members can store multiple debit or credit cards in their
              profile for faster checkout. If you are not already a Member, join
              us today.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
                JOIN US
              </button>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition">
                SHOP NIKE
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <p className="text-gray-700 mb-2 leading-relaxed font-medium">
              Does my card need international purchases enabled?
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Yes, we recommend notifying your bank to enable international
              purchases on your card.
            </p>
            <p className="text-gray-700 mb-2 leading-relaxed font-medium">
              Can I pay with multiple methods?
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              No, Nike orders can not be split between multiple payment methods.
            </p>
          </div>

          <div className="flex items-center space-x-6 mt-8">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaThumbsUp className="text-gray-700 text-2xl" />
              <span className="text-gray-700">Was this answer helpful?</span>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaThumbsDown className="text-gray-700 text-2xl" />
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-2xl font-bold mb-4">CONTACT US</h3>

          {/* Phone Section */}
          <div className="flex items-center mb-6">
            <FaPhoneAlt className="text-black text-xl mr-4" />
            <div>
              <p className="text-gray-800 font-medium">000 800 919 9966</p>
              <p className="text-gray-600">Products & Orders: 24/7</p>
            </div>
          </div>

          {/* Message Section */}
          <div className="flex items-center mb-6">
            <FaCommentDots className="text-black text-xl mr-4" />
            <div>
              <p className="text-gray-600">We will reply within five business days</p>
            </div>
          </div>

          {/* Hours Section */}
          <div className="flex items-center">
            <FaPhoneAlt className="text-black text-xl mr-4" />
            <div>
              <p className="text-gray-800 font-medium">Company Info & Enquiries:</p>
              <p className="text-gray-600">07:30 - 16:30, Monday - Friday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetHelpPage;
