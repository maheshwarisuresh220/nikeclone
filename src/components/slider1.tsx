"use client"; // Ensure it's rendered on the client side

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

// Sample data for products
const products = [
  { name: "Air Max 1", price: "$120", category: "Men's Shoe", image: "/1.png" },
  { name: "Air Max 2", price: "$130", category: "Women's Shoe", image: "/2.png" },
  { name: "Air Max 3", price: "$125", category: "Men's Shoe", image: "/3.png" },
  { name: "Air Max 4", price: "$140", category: "Women's Shoe", image: "/4.png" },
  { name: "Air Max 5", price: "$150", category: "Men's Shoe", image: "/5.png" },
  { name: "Air Max 6", price: "$160", category: "Women's Shoe", image: "/6.png" },
  { name: "Air Max 7", price: "$170", category: "Men's Shoe", image: "/7.png" },
  { name: "Air Max 8", price: "$180", category: "Women's Shoe", image: "/8.png" },
];

const ShoeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const productsPerPage = 4; // Display 4 images at a time

  const nextSlide = () => {
    if (isAnimating) return; // Prevent clicks during animation
    setIsAnimating(true);

    // Loop to the first set of images if the last set is reached
    if (currentIndex >= products.length - productsPerPage) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  const prevSlide = () => {
    if (isAnimating) return; // Prevent clicks during animation
    setIsAnimating(true);

    // Loop to the last set of images if the first set is reached
    if (currentIndex <= 0) {
      setCurrentIndex(products.length - productsPerPage);
    } else {
      setCurrentIndex(currentIndex - 1);
    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 500); // Match the animation duration
  };

  // Slice the products to show only the ones for the current page (4 images)
  const currentProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div>
        <h1 className="text-[20px] mb-4">Best of Air Max</h1>

        {/* Carousel */}
        <div className="flex items-center justify-center py-4 relative">
          {/* Shop Button */}
          <button
            onClick={() => alert("Shop Now")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800"
          >
            Shop Now
          </button>

          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 text-2xl text-gray-700 hover:text-black top-1/2 transform -translate-y-1/2"
          >
            <FaChevronLeft />
          </button>

          {/* Image Container */}
          <div className="overflow-hidden w-full">
            <div
              className="grid grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
            >
              {currentProducts.map((product, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  {/* Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={350}
                    height={350}
                    className="object-contain rounded-md"
                  />
                  {/* Content below the image */}
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <p className="text-xl font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 text-2xl text-gray-700 hover:text-black top-1/2 transform -translate-y-1/2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeSlider;
