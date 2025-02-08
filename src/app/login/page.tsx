"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();

  // ✅ State for User Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Dummy User Credentials (For Testing)
  const dummyUsers = [
    {
      email: "test@nike.com",
      password: "password123",
    },
    {
      email: "sureshstorage3@gmail.com",
      password: "suresh22",
    },
    {
      email: "maheshwarisuresh220@gmail.com",
      password: "suresh22",
    },
    {
      email: "faizainmasood@gmail.com",
      password: "faizan",
    },
  ];
  
  

  // ✅ Login Function
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents full-page reload
    setError("");
    setLoading(true);
  
    setTimeout(() => {
      const user = dummyUsers.find((user) => user.email === email && user.password === password);
      if (user) {
        alert("Login Successful! ✅");
        localStorage.setItem("user", JSON.stringify({ email, rememberMe }));
        router.push("/");
      } else {
        setError("❌ Invalid email or password.");
      }
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 sm:px-6 lg:px-8 mt-[120px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* 🏷️ Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/nike.png" alt="Nike logo" width={70} height={70} />
        </div>

        {/* 🏷️ Title */}
        <h2 className="text-2xl font-bold text-center">YOUR ACCOUNT</h2>
        <h1 className="text-2xl font-bold text-center mt-2">FOR EVERYTHING</h1>
        <h1 className="text-2xl font-bold mb-4 text-center mt-2">NIKE</h1>

        {/* 🏷️ Login Form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          {/* Email Input */}
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Keep Me Signed In */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <span className="text-sm text-gray-600">Keep me signed in</span>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <a href="/signup" className="text-black hover:underline">
            Not a Member? Join Us.
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
