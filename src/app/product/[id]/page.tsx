'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import { Product } from '@/app/types/product';

// Create image URL builder instance
const builder = imageUrlBuilder(client);

const urlFor = (source?: { asset?: { _ref?: string; url?: string } }) => {
  if (!source || !source.asset) return '/placeholder.png'; // Handle undefined cases

  if (source.asset.url) {
    return source.asset.url;
  }

  if (source.asset._ref) {
    return builder.image(source.asset._ref).url();
  }

  return '/placeholder.png';
};

export default function ProductPage() {
  const { id } = useParams<{ id: string }>(); // Grab the product id from the URL
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch product by ID
  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const query = `*[_type == "product" && _id == $id][0]`; // Use _id in query
        const data = await client.fetch(query, { id });

        if (data) {
          setProduct(data);
        } else {
          console.error('Product not found');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Load cart from Local Storage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  // Update cart in Local Storage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product: Product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    alert(`${product.productName} added to cart! (${updatedCart.length} items total)`);
  };

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (!product) return <p className="text-center text-xl">Product not found</p>;

  return (
    <div className="container mx-auto px-4 py-8 mt-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center">
          <Image
            src={urlFor(product.image)}
            alt={product.productName || 'Product Image'}
            width={500}
            height={500}
            className="rounded object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-semibold text-gray-900">{product.productName}</h1>
          <p className="text-lg text-gray-600 my-4">{product.category}</p>
          <p className="text-2xl font-semibold text-gray-900">
            ₹{product.price && !isNaN(product.price) ? product.price.toLocaleString('en-IN') : 'Unavailable'}
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
