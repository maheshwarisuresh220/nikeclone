import Image from "next/image";
import { FaSearch, FaHeart, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <div className="bg-white">
      {/* Main container with flex to align the logo and navbar items */}
      <div className="flex items-center justify-between py-6 px-8 shadow-md">
        {/* Nike logo */}
        <Image
          src="/nike.png"
          alt="Nike logo"
          width={70}
          height={70}
          className="mt-4"
        />

        {/* Navigation menu */}
        <div className="hidden md:flex font-semibold mt-4 ml-[150px]">
          <ul className="flex space-x-8 items-center justify-center text-lg">
            {/* Dropdown for Men */}
            <li className="relative cursor-pointer hover:underline">
            <DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            </li>

            {/* Other menu items */}
            <li className="cursor-pointer hover:underline"><Link href="/allproducts">All Products</Link></li>
            <li className="cursor-pointer hover:underline">Women</li>
            <li className="cursor-pointer hover:underline">Kids</li>
            <li className="cursor-pointer hover:underline">Sale</li>
          </ul>
        </div>

        {/* Container for search bar and icons */}
        <div className="flex items-center space-x-5">
          {/* Search Bar */}
          <div className="relative w-[180px] sm:w-[220px] md:w-[250px]">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 pl-10 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          {/* Add to Cart Button */}
          <Link href="/cartpage">
            <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 focus:outline-none">
              <FaShoppingBag className="text-white hover:text-gray-200" />
            </button>
          </Link>

          {/* Heart-Shaped Button */}
          <button className="p-3 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none">
            <FaHeart className="text-red-500" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Toggle for Smaller Screens */}
      <div className="md:hidden flex justify-between items-center px-6 py-4">
        {/* Hamburger Icon for Mobile Menu */}
        <div className="space-y-2 cursor-pointer">
          <div className="w-6 h-1 bg-gray-600"></div>
          <div className="w-6 h-1 bg-gray-600"></div>
          <div className="w-6 h-1 bg-gray-600"></div>
        </div>

        {/* Mobile Menu Items */}
        <div className="hidden mobile-menu md:hidden absolute bg-white w-full h-screen top-0 left-0">
          <ul className="flex flex-col items-center justify-center text-lg space-y-4">
            <li><Link href="/allproducts">All Products</Link></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Sale</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
