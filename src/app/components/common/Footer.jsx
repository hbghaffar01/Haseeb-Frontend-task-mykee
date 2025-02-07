"use client";

import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { apps, qrcode, send, social } from "@/assets";
import Image from "next/image";

export default function Footer() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-black">
      <div className="py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 px-8 py-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold font-[inter] text-gray-50">
              Exclusive
            </h1>
            <span className="text-lg font-medium text-gray-50 font-[poppins]">
              Subscribe
            </span>
            <p className="font-normal text-gray-50 font-[poppins]">
              Get 10% off your first order
            </p>
            <SearchInput
              placeholder="Enter your email"
              value={searchText}
              icon={send}
              onChange={(e) => setSearchText(e.target.value)}
              className="border-transparent h-11 w-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold font-[inter] text-gray-50">
              Support
            </h1>
            <span className="text-base font-medium text-gray-50 font-[poppins]">
              21st Floor, ABC tower building B with pool Dubai
            </span>
            <p className="font-normal text-gray-50 font-[poppins]">
              info@mykee.group
            </p>
            <p className="font-normal text-gray-50 font-[poppins]">
              +971 55 00 000 000
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold font-[inter] text-gray-50">
              Account
            </h1>
            {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map(
              (item) => (
                <span
                  key={item}
                  className="font-normal text-gray-50 font-[poppins] cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {item}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold font-[inter] text-gray-50">
              Quick Link
            </h1>
            {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
              (item) => (
                <span
                  key={item}
                  className="font-normal text-gray-50 font-[poppins] cursor-pointer hover:text-gray-300 transition-colors"
                >
                  {item}
                </span>
              )
            )}
          </div>

          {/* Download App Section */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold font-[inter] text-gray-50">
              Download App
            </h3>
            <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
              <div className="relative w-[75px] h-[75px]">
                <Image
                  src={qrcode}
                  alt="QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={apps}
                  alt="App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="w-full max-w-[200px]">
              <div className="relative w-full h-[24px]">
                <Image
                  src={social}
                  alt="social media links"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © 2024 Mykee. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
