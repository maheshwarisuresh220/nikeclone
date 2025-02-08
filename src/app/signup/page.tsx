"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const SignupForm = () => {
  const router = useRouter();

  // ✅ State for User Inputs
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
  });

  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setFormData((prev) => ({ ...prev, gender: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // ✅ Signup Function
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ✅ Basic Validation
    if (!formData.email || !formData.password || !formData.firstName || !formData.dob || !formData.gender) {
      setError("❌ All fields are required!");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("❌ Invalid email format.");
      return;
    }

    if (formData.password.length < 6) {
      setError("❌ Password must be at least 6 characters.");
      return;
    }

    setLoading(true);

    // ✅ Simulating API Signup Delay
    setTimeout(() => {
      alert("Signup Successful! ✅");
      localStorage.setItem("user", JSON.stringify(formData));
      router.push("/"); // Redirect to homepage
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white px-4 sm:px-6 lg:px-8 mt-[150px] mb-[50px]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* 🏷️ Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/nike.png" alt="Nike logo" width={70} height={70} />
        </div>

        {/* 🏷️ Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">Become a Nike Member</h2>
        <p className="text-gray-600 mb-6 text-center">
          Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
        </p>

        {/* 🏷️ Signup Form */}
        <form className="space-y-4" onSubmit={handleSignup}>
          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password (6+ characters)"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* First & Last Name */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name (Optional)"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Date of Birth */}
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Gender Selection */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              />
              <span className="text-sm text-gray-600">Male</span>
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              />
              <span className="text-sm text-gray-600">Female</span>
            </label>
          </div>

          {/* Sign up for Emails */}
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 text-blue-500 focus:ring-blue-500 focus:ring-2 rounded"
              checked={agreeToEmails}
              onChange={() => setAgreeToEmails(!agreeToEmails)}
            />
            <span className="text-sm text-gray-600">
              Sign up for emails to get updates from Nike on products, offers, and your Member benefits
            </span>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Terms & Conditions */}
          <div className="text-sm text-gray-600">
            By creating an account, you agree to Nike Privacy Policy and Terms of Use.
          </div>

          {/* Join Us Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "JOIN US"}
          </button>
        </form>

        {/* Already a Member? */}
        <div className="text-center mt-4">
          <a href="#" className="text-blue-500 hover:underline">
            Already a Member? Sign In.
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
