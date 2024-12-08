import Image from "next/image";
import Link from "next/link";

const ShoppingCartPage = () => {
  return (
    <div className="flex flex-col bg-white mt-[120px] px-4 sm:px-6 lg:px-16">
      {/* Free Delivery Section */}
      <div className="bg-gray-100 p-4 text-sm text-gray-600 mb-8 border-t border-b border-gray-200">
        Free Delivery applies to orders of ₹14,000.00 or more.{" "}
        <a href="#" className="underline">
          View details
        </a>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section - Bag Items */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>

          {/* Cart Item 1 */}
          <Link href="/orderdetails">
            <div className="flex items-start justify-between border-b pb-4 mb-4">
              <div className="flex">
                <Image
                  src="/eight.png"
                  alt="Nike Dri-FIT ADV TechKnit Ultra"
                  width={100}
                  height={100}
                  className="border-2 border-gray-300 rounded-md"
                />
                <div className="ml-4">
                  <h3 className="font-medium text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
                  <p className="text-sm text-gray-600">Men Short-Sleeve Running Top</p>
                  <p className="text-gray-900 font-medium mt-1">MRP: ₹3,895.00</p>
                  <p className="text-sm text-gray-600">Size: L | Quantity: 1</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="text-gray-600 hover:text-black">❤️</button>
                <button className="text-gray-600 hover:text-black mt-2">🗑️</button>
              </div>
            </div>
          </Link>

          {/* Cart Item 2 */}
          <div className="flex items-start justify-between border-b pb-4 mb-4">
            <div className="flex">
              <Image
                src="/2.png"
                alt="Nike Air Max 97 SE"
                width={100}
                height={100}
                className="border-2 border-gray-300 rounded-md"
              />
              <div className="ml-4">
                <h3 className="font-medium text-gray-800">Nike Air Max 97 SE</h3>
                <p className="text-sm text-gray-600">Men Shoes</p>
                <p className="text-gray-900 font-medium mt-1">MRP: ₹16,995.00</p>
                <p className="text-sm text-gray-600">Size: 8 | Quantity: 1</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <button className="text-gray-600 hover:text-black">❤️</button>
              <button className="text-gray-600 hover:text-black mt-2">🗑️</button>
            </div>
          </div>
        </div>

        {/* Right Section - Summary */}
        <div className="w-full lg:w-1/3 bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h2 className="text-lg font-bold text-gray-800 mb-6">Summary</h2>

          {/* Subtotal */}
          <div className="flex justify-between text-gray-800 mb-4">
            <p>Subtotal</p>
            <p>₹20,890.00</p>
          </div>

          {/* Estimated Delivery */}
          <div className="flex justify-between text-gray-800 mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>

          {/* Total */}
          <div className="flex justify-between font-bold text-lg text-gray-900 mb-6">
            <p>Total</p>
            <p>₹20,890.00</p>
          </div>

          {/* Checkout Button */}
          <button className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
