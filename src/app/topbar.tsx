'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Topbar = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu visibility

  // ✅ Check if user is logged in
  const loadUser = () => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser(); // Load user on component mount

    // ✅ Listen for changes to localStorage (e.g., login/logout from other tabs)
    const handleStorageChange = () => {
      loadUser();
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="bg-slate-100 w-full fixed top-0 left-0 z-10">
      <nav className="mx-4 sm:mx-6 lg:mx-10 my-2">
        <div className="flex items-center justify-between">
          {/* Jordan Logo */}
          <div>
            <Image src="/airjordan.png" alt="Air Jordan logo" width={20} height={20} />
          </div>

          {/* Navigation Menu */}
          <div className="hidden sm:flex">
            <ul className="flex space-x-3 mr-3 text-[12px] font-bold">
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]">Find a Store</li>
              <li className="hover:underline cursor-pointer font-thin">|</li>
              <li className="hover:opacity-50 cursor-pointer duration-[200ms]">
                <Link href="/gethelp">Help</Link>
              </li>
              <li className="hover:underline cursor-pointer font-thin">|</li>

              {/* ✅ Show Username if Logged In */}
              {user ? (
                <>
                  <li className="hover:opacity-50 cursor-pointer duration-[200ms]">
                    <Link href="/">{user.email}</Link>
                  </li>
                  <li className="hover:underline cursor-pointer font-thin">|</li>
                  <li
                    className="hover:opacity-50 cursor-pointer duration-[200ms] text-red-500"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </>
              ) : (
                <>
                  <li className="hover:opacity-50 cursor-pointer duration-[200ms]">
                    <Link href="/signup">Join Us</Link>
                  </li>
                  <li className="hover:underline cursor-pointer font-thin">|</li>
                  <li className="hover:opacity-50 cursor-pointer duration-[200ms]">
                    <Link href="/login">Sign In</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button
              className="text-2xl cursor-pointer"
              onClick={toggleMobileMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-lg py-4">
          <ul className="flex flex-col items-center space-y-4 text-sm font-bold">
            <li className="hover:opacity-50 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:opacity-50 cursor-pointer">
              <Link href="/gethelp">Help</Link>
            </li>

            {/* Show username and logout for logged-in users */}
            {user ? (
              <>
                <li className="hover:opacity-50 cursor-pointer">
                  <Link href="/">{user.email}</Link>
                </li>
                <li
                  className="hover:opacity-50 cursor-pointer text-red-500"
                  onClick={handleLogout}
                >
                  Logout
                </li>
              </>
            ) : (
              <>
                <li className="hover:opacity-50 cursor-pointer">
                  <Link href="/signup">Join Us</Link>
                </li>
                <li className="hover:opacity-50 cursor-pointer">
                  <Link href="/login">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Topbar;
