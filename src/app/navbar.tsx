import Image from "next/image";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="bg-white w-full py-[10px]">
      {/* Main container */}
      <div className="flex items-center justify-between py-6 px-8 shadow-md w-full">
        {/* Nike logo with Sheet Trigger */}
        <Sheet>
          <SheetTrigger>
            <Image
              src="/nike.png"
              alt="Nike logo"
              width={70}
              height={70}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="w-full max-w-none">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Navigate Through Website
              </SheetDescription>
            </SheetHeader>
            <ul className="flex flex-col space-y-4 mt-4">
  <li>
    <Link
      href="/"
      className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      href="/allproducts"
      className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block"
    >
      All Products
    </Link>
  </li>
  <li className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block">
    Men
  </li>
  <li className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block">
    Women
  </li>
  <li className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block">
    Kids
  </li>
  <li className="hover:text-blue-800 hover:underline transition-colors duration-200 inline-block">
    Sale
  </li>
</ul>

          </SheetContent>
        </Sheet>

        {/* Navigation menu for larger screens */}
        <div className="hidden md:flex font-semibold mt-4 ml-[150px]">
          <ul className="flex space-x-8 items-center justify-center text-lg">
            <li className="cursor-pointer hover:underline">
              <Link href="/allproducts">All Products</Link>
            </li>
            <li className="cursor-pointer hover:underline">Men</li>
            <li className="cursor-pointer hover:underline">Women</li>
            <li className="cursor-pointer hover:underline">Kids</li>
            <li className="cursor-pointer hover:underline">Sale</li>
          </ul>
        </div>

        {/* Search and icon buttons */}
        <div className="flex items-center space-x-5">
          <div className="relative w-[180px] sm:w-[220px] md:w-[250px]">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 pl-10 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <Link href="/cartpage">
            <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none">
              <FaShoppingBag className="text-white hover:text-gray-200" />
            </button>
          </Link>
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
            <FaHeart className="text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
