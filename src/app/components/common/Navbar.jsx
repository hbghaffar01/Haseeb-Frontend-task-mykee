"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SearchInput } from "./SearchInput";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import { Search } from "@/assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    open: {
      opacity: 1,
      display: "flex",
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className="w-full bg-white shadow-sm md:sticky top-0 z-[999]">
      <div className="max-w-[1440px] mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 z-20">
            <Image src="/logo.svg" alt="Makyee Logo" width={120} height={40} />
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
              <Link href="/" className="text-red-500 font-medium">
                Home
              </Link>
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium">
                  <span>Buy</span>
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 font-medium">
                  <span>Sell</span>
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Button color="bg-white !text-black border border-gray-200">
                Login
              </Button>
              <Button color="bg-red-500">Sign Up</Button>
            </div>
          </div>

          <button
            className="lg:hidden p-2 z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <div className="bg-gray-50 p-2 rounded-full">
                <X size={24} />
              </div>
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        <motion.div
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
          className="lg:hidden fixed inset-0 w-full h-full bg-white z-40 flex-col"
        >
          <div className="px-4 flex flex-col h-full">
            <div className="flex flex-col space-y-6 my-8">
              <Link
                href="/"
                className="text-2xl font-medium text-red-500"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/buy"
                className="text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Buy
              </Link>
              <Link
                href="/sell"
                className="text-2xl font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sell
              </Link>
              <div className="mt-auto mb-8 space-y-4">
              <Button
                onClick={() => setIsOpen(false)}
                color="bg-white !text-black border border-gray-200 w-full"
              >
                Login
              </Button>
              <Button
                onClick={() => setIsOpen(false)}
                color="bg-red-500 w-full"
              >
                Sign Up
              </Button>
            </div>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
