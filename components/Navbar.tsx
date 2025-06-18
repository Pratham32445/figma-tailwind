"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Industries", href: "#industries" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contacts", href: "#contacts" },
    { name: "Login", href: "/auth" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: (index : number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: index * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <nav className="bg-white h-[80px] pt-2 border-b-2">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              priority
            />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline md:space-x-10 lg:space-x-16">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`px-1 py-2 text-sm lg:text-lg font-poppins font-medium transition-colors duration-200 hover:text-orange-500 ${
                      item.name === "Login"
                        ? "text-gray-900 font-semibold"
                        : "text-gray-700 hover:text-orange-500"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              aria-expanded={isOpen}
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                variants={iconVariants}
                animate={isOpen ? "open" : "closed"}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative md:hidden z-50 overflow-hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
            // @ts-ignore
                  variants={menuItemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  custom={index}
                >
                  <Link
                    href={item.href}
                    className={`block px-4 font-poppins py-2 border-b-2 text-base font-medium transition-colors duration-200 hover:text-orange-500 hover:bg-gray-50 ${
                      item.name === "Login"
                        ? "text-gray-900 font-semibold"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
