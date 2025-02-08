'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image'; // Import Sanity image builder
import { useRouter } from 'next/navigation';

// Define types for cart items
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size?: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

const ShoppingCartPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(500); // Default ₹500 if below ₹14,000
  const router = useRouter();

  // Fetch cart data from localStorage
  useEffect(() => {
    try {
      const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      console.log("Stored Cart:", storedCart);
      if (Array.isArray(storedCart)) {
        setCart(storedCart);
        calculateTotal(storedCart);
      } else {
        console.error('Invalid cart data');
        setCart([]);
      }
    } catch (error) {
      console.error('Error parsing cart data', error);
      setCart([]);
    }
  }, []);

  // Calculate total price of the cart
  const calculateTotal = (cartItems: CartItem[]) => {
    const totalPrice = cartItems.reduce(
      (acc, item) => acc + item.price * (item.quantity || 0),
      0
    );

    setTotal(totalPrice);
    setDeliveryFee(totalPrice >= 14000 ? 0 : 500); // Free delivery if ₹14,000 or more
  };

  // Remove item from cart
  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.id !== id); // Remove only the selected item
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Handle item quantity change
  const changeQuantity = (id: string, type: 'increment' | 'decrement') => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (type === 'increment') {
          item.quantity = (item.quantity || 0) + 1;
        } else if (type === 'decrement' && item.quantity > 1) {
          item.quantity -= 1;
        }
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  // Handle checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const finalAmount = total + deliveryFee;
    alert(`Proceeding to checkout. Total: ₹${finalAmount}`);

    // Navigate to a checkout page
    router.push('/checkout');
  };

  // Show message if cart is empty
  if (cart.length === 0) {
    return <p className="text-center text-xl mt-12">Your cart is empty.</p>;
  }

  return (
    <div className="flex flex-col bg-white mt-[150px] px-4 sm:px-6 lg:px-16">
      {/* Free Delivery Section */}
      <div className="bg-gray-100 p-4 text-sm text-gray-600 mb-8 border-t border-b border-gray-200">
        {total >= 14000 ? (
          <p className="text-green-600 font-semibold">
            You qualify for free delivery!
          </p>
        ) : (
          <p>
            Free Delivery applies to orders of ₹14,000.00 or more.{' '}
            <a href="#" className="underline">
              View details
            </a>
          </p>
        )}
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Bag Items */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>

          {/* Cart Items */}
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-start justify-between border-b pb-4 mb-4"
            >
              <div className="flex">
                {/* Sanity Image Fix */}
                <Image
                  src={urlFor(item.image)} // Ensure a valid image URL
                  alt={item.name || 'Product Image'}
                  width={100}
                  height={100}
                  className="border-2 border-gray-300 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">{item.name}</h3> {/* Display product name */}
                  <p className="text-gray-900 font-medium mt-1">
                    MRP: ₹{item.price.toLocaleString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-600">
                    Size: {item.size || 'N/A'} | Quantity: {item.quantity || 0}
                  </p>
                  <div className="flex mt-2">
                    <button
                      onClick={() => changeQuantity(item.id, 'decrement')}
                      className="text-gray-600 hover:text-black text-xl mr-2"
                    >
                      -
                    </button>
                    <button
                      onClick={() => changeQuantity(item.id, 'increment')}
                      className="text-gray-600 hover:text-black text-xl"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => removeFromCart(item.id)} // Ensure this only deletes the clicked item
                  className="text-gray-600 hover:text-black mt-2"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Summary</h2>

          {/* Subtotal */}
          <div className="flex justify-between text-gray-800 mb-4">
            <p>Subtotal</p>
            <p>₹{isNaN(total) ? '0.00' : total.toLocaleString('en-IN')}</p>
          </div>

          {/* Delivery Fee */}
          <div className="flex justify-between text-gray-800 mb-4">
            <p>Delivery Fee</p>
            <p>₹{deliveryFee}</p>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
            <p>Total</p>
            <p>₹{isNaN(total + deliveryFee) ? '0.00' : (total + deliveryFee).toLocaleString('en-IN')}</p>
          </div>

          {/* Checkout Button */}
          <Link href="/orderdetails">
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300"
            >
              Member Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
