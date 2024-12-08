import React from 'react';
import Image from 'next/image'; // Import Next.js Image component
import { FaShoppingCart } from "react-icons/fa";

const ProductDisplay = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-white shadow-lg rounded-lg overflow-hidden max-w-5xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        {/* Use Next.js Image component for optimized image handling */}
        <Image
          src="/1.png" // Path to the image
          alt="Nike Air Force 1 PLT.AF.ORM"
          width={500} // Width of the image
          height={500} // Height of the image
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 p-4 sm:p-6 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Nike Air Force 1 PLT.AF.ORM</h2>
        <p className="text-gray-600 mb-6">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its (Inside out)-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0">
          <span className="text-2xl font-bold">₹8,695.00</span>
          <button className="flex items-center justify-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto">
            {/* Cart icon */}
            <FaShoppingCart className="w-5 h-5 mr-2" /> {/* Icon size and margin */}
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
