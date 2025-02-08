"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
//import imageUrlBuilder from "@sanity/image-url";

//const builder = imageUrlBuilder(client);
const urlFor = (source: { asset?: { url: string } } | null | undefined) => {
  // Check if the source has an asset with a valid URL
  if (source?.asset?.url) {
    // Return the image URL directly if it's already available
    return source.asset.url;
  }
  // Return placeholder image if no valid URL is found
  return '/placeholder.png';
};
type Product = {
  productName: string;
  category: string;
  slug?: { current?: string };
  image?: { asset?: { url: string } };
};

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          productName, category, slug, image { asset -> { url } }
        }`;
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Sanity Fetch Error:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts([]);
      setSearchActive(false);
    } else {
      const filtered = products.filter(
        (product) =>
          product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setSearchActive(true);
    }
  }, [searchTerm, products]);

  return (
    <>
      <div className="mt-[36px]"> 
        <div className="flex items-center justify-center py-2 border-b shadow-sm bg-gray-50">
          <ul className="flex space-x-6 text-md font-semibold">
            <li className="cursor-pointer hover:underline">
              <Link href="/allproducts">All Products</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link href="/categories/men">Men</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link href="/categories/women">Women</Link>
            </li>
            <li className="cursor-pointer hover:underline">
              <Link href="/categories/kids">Kids</Link>
            </li>
          </ul>
        </div>

        {/* 🔍 Search Bar, Cart, Wishlist Section */}
        <div className="w-full py-2 px-6 flex items-center justify-between shadow-md bg-white">
          {/* Nike Logo */}
          <Link href="/">
            <Image src="/nike.png" alt="Nike logo" width={40} height={40} className="cursor-pointer" />
          </Link>

          {/* 🔍 Search Bar */}
          <div className="relative flex-1 max-w-[300px] mx-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 pl-10 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            
            {/* 🔍 Search Dropdown */}
            {searchActive && (
              <div className="absolute top-full left-0 w-full bg-white border border-gray-300 shadow-lg rounded-md z-50">
                <ul className="py-2">
                  {filteredProducts.length > 0 ? (
                    <>
                      {filteredProducts.slice(0, 3).map((product, index) => (
                        <li key={index} className="px-4 py-2 hover:bg-gray-100">
                          <Link href={`/product/${product.slug?.current}`} onClick={() => setSearchTerm("")}>
                            <div className="flex items-center">
                              <Image
                                src={urlFor(product.image)}
                                alt={product.productName || "Product Image"}
                                width={40}
                                height={40}
                                className="rounded-md"
                              />
                              <div className="ml-3">
                                <p className="font-semibold text-sm">{product.productName}</p>
                                <p className="text-xs text-gray-500">{product.category}</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      ))}
                      {filteredProducts.length > 3 && (
                        <li className="px-4 py-2 text-blue-600 cursor-pointer hover:bg-gray-100 text-center text-sm">
                          <Link href={`/allproducts`} onClick={() => setSearchTerm("")}>
                            Show All Items
                          </Link>
                        </li>
                      )}
                    </>
                  ) : (
                    <li className="px-4 py-2 text-gray-500 text-sm">No products found.</li>
                  )}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/cartpage">
              <button className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none">
                <FaShoppingBag className="text-white text-sm" />
              </button>
            </Link>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
              <FaHeart className="text-red-500 text-sm" />
            </button>
          </div>
        </div>
        <div className="mt-[20px]" />
      </div>
    </>
  );
};

export default Navbar;
