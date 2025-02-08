'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
//import imageUrlBuilder from '@sanity/image-url';
import { Product } from '../types/product';

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


export default function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]); // Typing the products state
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sidebarVisible, setSidebarVisible] = useState<boolean>(false);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]); // Typing the cart state
  const productsPerPage = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
          _id, productName, price, category, image { asset -> { url } }
        }`;
        const data = await client.fetch<Product[]>(query); // Typing fetch result
        setProducts(data);
      } catch (error) {
        console.error('Sanity Fetch Error:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();

    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  if (loading) return <p className="text-center text-xl">Loading products...</p>;

  let filteredProducts = [...products];

  if (selectedPriceRange) {
    filteredProducts = filteredProducts.filter((p) => {
      const priceString = String(p.price || '0');
      const price = parseFloat(priceString.replace(/[^0-9.-]+/g, ''));

      switch (selectedPriceRange) {
        case 'Under ₹2,000':
          return price < 2000;
        case '₹2,000 - ₹5,000':
          return price >= 2000 && price < 5000;
        case '₹5,000 - ₹10,000':
          return price >= 5000 && price < 10000;
        case '₹10,000 - ₹20,000':
          return price >= 10000 && price < 20000;
        case '₹20,000 and above':
          return price >= 20000;
        default:
          return true;
      }
    });
  }

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const nextPage = () => {
    if (indexOfLastProduct < filteredProducts.length) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const removeFilters = () => {
    setSelectedPriceRange(null);
    setCurrentPage(1);
  };

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    alert(`${product.productName} added to cart! (${updatedCart.length} items total)`);
  };

  return (
    <section className="px-4 py-8 mx-auto mt-[120px] max-w-screen-xl relative">
      <h2 className="text-xl font-semibold mb-6">All Products ({filteredProducts.length})</h2>

      <button
        className="block md:hidden bg-black text-white px-4 py-2 rounded-md mb-4"
        onClick={() => setSidebarVisible(true)}
      >
        Show Filters
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <aside
          className={`sticky top-[100px] left-0 bg-white p-4 w-auto min-w-[200px] max-w-[250px] h-full overflow-y-auto shadow-lg transition-transform transform ${
            sidebarVisible ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:block z-10`}
        >
          <button
            className="block md:hidden bg-red-500 text-white px-4 py-2 rounded-md mb-4"
            onClick={() => setSidebarVisible(false)}
          >
            Close
          </button>

          <div className="border p-4 rounded">
            <h3 className="font-medium mb-4">Price</h3>
            <ul className="space-y-2">
              {['Under ₹2,000', '₹2,000 - ₹5,000', '₹5,000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000 and above'].map(
                (price) => (
                  <li key={price}>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="price"
                        className="mr-2"
                        checked={selectedPriceRange === price}
                        onChange={() => setSelectedPriceRange(price)}
                      />
                      {price}
                    </label>
                  </li>
                )
              )}
            </ul>
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-md"
              onClick={removeFilters}
            >
              Remove Filters
            </button>
          </div>
        </aside>

        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.length === 0 ? (
            <p className="text-center text-xl col-span-full">No products found.</p>
          ) : (
            currentProducts.map((product, index) => (
              <div key={product._id || index} className="border p-4 rounded cursor-pointer">
                <Link href={`/product/${product._id}`}>
                  <Image
                    src={urlFor(product.image)}
                    alt={product.productName || 'Product Image'}
                    width={500}
                    height={500}
                    className="rounded object-cover"
                  />
                  <p className="text-sm">{product.productName || 'No Name'}</p>
                  <p className="text-sm">{product.category || 'No Category'}</p>
                  <p className="text-sm font-semibold">
                    MRP: {Number(product.price)?.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) || 'Unavailable'}
                  </p>
                </Link>

                <button
                  className="mt-2 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Pagination */}
      {indexOfLastProduct < filteredProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={nextPage}
            className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition duration-300"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
}
