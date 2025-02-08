'use client'; // Ensure it's rendered on the client side

import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { client } from '../sanity/lib/client'; // Adjust the path to your sanity client

// Define TypeScript type for the product data
type Product = {
  productName: string;
  price: string;
  category: string;
  image: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
};

const ShoeSlider = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const productsPerPage = 4; // Display 4 images at a time

  useEffect(() => {
    // Sanity GROQ query to fetch product data
    const query = `*[_type == "product"]{
      productName,
      price,
      category,
      image {
        asset -> {
          url
        }
      },
      slug
    }`;

    // Fetch data from Sanity
    client.fetch(query).then((data) => {
      setProducts(data);
    }).catch((error) => {
      console.error('Error fetching products: ', error);
    });
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (currentIndex >= products.length - productsPerPage) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (currentIndex <= 0) {
      setCurrentIndex(products.length - productsPerPage);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  // Slice the products to show only the ones for the current page (4 images)
  const currentProducts = products.slice(currentIndex, currentIndex + productsPerPage);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-[20px] mb-4">Best of Air Max</h1>

        {/* Carousel */}
        <div className="flex items-center justify-center py-4 relative">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-4 text-2xl text-gray-700 hover:text-black top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
          >
            <FaChevronLeft />
          </button>

          {/* Image Container */}
          <div className="overflow-hidden w-full">
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 transition-transform duration-500 ease-in-out"
            >
              {currentProducts.map((product, index) => (
                <div key={product.slug?.current || index} className="relative flex flex-col items-center group">
                  {/* Image with hover effect */}
                  <Image
                    src={product.image.asset.url}
                    alt={product.productName}
                    width={350}
                    height={350}
                    className="object-contain rounded-md transition-transform duration-300 transform group-hover:scale-105 group-hover:rotate-3"
                  />
                  {/* Content below the image */}
                  <div className="text-center mt-2">
                    <h3 className="text-lg font-semibold group-hover:text-black transition-colors duration-300">{product.productName}</h3>
                    <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{product.category}</p>
                    <p className="text-xl font-bold group-hover:text-black transition-colors duration-300">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-4 text-2xl text-gray-700 hover:text-black top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Shop Now Button */}
        <div className="text-center mt-6">
          <button
            onClick={() => alert('Shop Now')}
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoeSlider;
