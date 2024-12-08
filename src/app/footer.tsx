import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer content container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Footer Left Section */}
          <div>
            <h1 className="font-semibold text-[13px]">FIND A STORE</h1>
            <ul>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">BECOME A MEMBER</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">SIGN UP FOR EMAIL</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">SEND US FACEBOOK</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">STUDENT DISCOUNT</a></li>
            </ul>
          </div>

          {/* Footer Center Section */}
          <div>
            <h3 className="text-lg font-semibold text-[13px]">GET HELP</h3>
            <ul>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Order Status</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Delivery</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Returns</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Payment Options</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Contact Us on Nike.com Inquiries</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Contact Us on All Other Inquiries</a></li>
            </ul>
          </div>

          {/* Footer Right Section */}
          <div>
            <h3 className="text-lg font-semibold text-[13px]">ABOUT NIKE</h3>
            <ul>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">News</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Careers</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Investors</a></li>
              <li><a href="#" className="hover:underline text-[13px] opacity-75">Sustainability</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 text-sm">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-white" />
            <p className="text-white">Governor House Karachi</p>
            <span className="text-white">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</span>
          </div>
        </div>
      </div>

      {/* Social Media Icons on the Top-Right */}
      <div className="absolute top-4 right-8 flex space-x-4">
        <a href="#" className="text-2xl hover:text-blue-500">
          <FaFacebookF />
        </a>
        <a href="#" className="text-2xl hover:text-blue-500">
          <SiX /> {/* X icon */}
        </a>
        <a href="#" className="text-2xl hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="#" className="text-2xl hover:text-red-600">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
