import Image from "next/image";
import Link from 'next/link';

const Topbar = () => {
  return (
    <div className="bg-slate-100 w-full fixed top-0 left-0 z-10">
      <nav className="mx-4 sm:mx-6 lg:mx-10 my-2">
        <div className="flex items-center justify-between">
          {/* Jordan Logo */}
          <div>
            <Image
              src="/airjordan.png"
              alt="Air Jordan logo"
              width={20}
              height={20}
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden sm:flex">
            <ul className="flex space-x-3 mr-3 text-[12px] font-bold">
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]">Find a Store</li>
              <li className="hover:underline cursor-pointer font-thin">|</li>
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]"><Link href="/gethelp">Help</Link></li>
              <li className="hover:underline cursor-pointer font-thin">|</li>
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]"><Link href="/signup">Join Us </Link></li>
              <li className="hover:underline cursor-pointer font-thin">|</li>
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]"> <Link href="/login">Sign In </Link></li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="sm:hidden">
            <ul className="flex space-x-3 mr-3 text-[12px] font-bold">
              <li className="cursor-pointer">☰</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
