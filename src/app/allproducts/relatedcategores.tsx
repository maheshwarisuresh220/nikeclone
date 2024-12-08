"use client"; // This makes the component a Client Component

import React from "react";

const RelatedCategories = () => {
  const categories = [
    { title: "Best Selling Products", url: "#" },
    { title: "Best Shoes", url: "#" },
    { title: "New Basketball Shoes", url: "#" },
    { title: "New Football Shoes", url: "#" },
    { title: "New Men's Shoes", url: "#" },
    { title: "New Running Shoes", url: "#" },
    { title: "Best Men's Shoes", url: "#" },
    { title: "New Jordan Shoes", url: "#" },
    { title: "Best Women's Shoes", url: "#" },
    { title: "Best Training & Gym", url: "#" },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-base font-semibold text-gray-900 uppercase mb-4">
          Related Categories
        </div>
        {/* Grid Layout for the Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => (window.location.href = category.url)}
              className="w-full py-2 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedCategories;
