"use client";
import React from "react";
import { useState } from "react";

const Shops = () => {
  const [shopName, setShopName] = useState("");
  const [shopDescription, setShopDescription] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://reka-app-admin.vercel.app/api/shop", {
        method: "POST",
        headers: {
          "constent-type": "application/json",
        },
        body: JSON.stringify({
          shopName,
          shopDescription,
          email,
          phone,
          address,
        }),
      });
      if (res.ok) {
        router.push("/shops");
      } else {
        throw new Error("Failed to Create Product");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <form
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg space-y-6"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Register Your Shop
        </h2>

        {/* Shop Name */}
        <div className="relative">
          <input
            type="text"
            id="shopName"
            placeholder="Shop Name"
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 py-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
          <label
            htmlFor="shopName"
            className="absolute left-4 top-0 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-500"
          >
            Shop Name
          </label>
        </div>

        {/* Shop Description */}
        <div className="relative">
          <textarea
            id="shopDescription"
            placeholder="Shop Description"
            value={shopDescription}
            onChange={(e) => setShopDescription(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 py-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
            rows="4"
            required
          ></textarea>
          <label
            htmlFor="shopDescription"
            className="absolute left-4 top-0 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-500"
          >
            Shop Description
          </label>
        </div>

        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 py-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
          <label
            htmlFor="email"
            className="absolute left-4 top-0 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-500"
          >
            Email
          </label>
        </div>

        {/* Phone */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 py-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
          <label
            htmlFor="phone"
            className="absolute left-4 top-0 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-500"
          >
            Phone Number
          </label>
        </div>

        {/* Address */}
        <div className="relative">
          <input
            type="text"
            id="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="peer w-full border-b-2 border-gray-300 py-2 px-4 outline-none focus:border-blue-500 transition-colors duration-300"
            required
          />
          <label
            htmlFor="address"
            className="absolute left-4 top-0 text-gray-500 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-[-12px] peer-focus:text-sm peer-focus:text-blue-500"
          >
            Address
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Shops;
