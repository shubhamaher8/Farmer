"use client";
import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button"; // Correct path to your Button component
import { MenuIcon, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    closed: { opacity: 0, x: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/getting-started", label: "Getting Started" },
    { href: "/solutions", label: "Solutions" },
    { href: "/dashboard", label: "Dashboard" },
  ];
  
  return (
    <header className="py-3 bg-white transition-all duration-300 shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center font-dm-serif text-xl font-bold pl-7">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6327/6327051.png"
            alt="Smart Farm Logo"
            className="h-12 w-auto mr-4"
          />
          Smart Farm
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-4">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button variant="ghost" className="text-black hover:bg-gray-100 transition-colors text-sm font-inter">
                {item.label}
              </Button>
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l border-gray-300 pl-4">
            <Link href="/login">
              <Button variant="ghost" className="text-black hover:bg-gray-100 transition-colors text-sm font-inter">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-black text-white rounded-md hover:bg-black/90 transition-all duration-200 text-sm font-inter">
                Register
              </Button>
            </Link>
          </div>
        </div>

        <button
          className="md:hidden text-black hover:text-gray-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-black hover:text-gray-600 text-sm py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="ghost" className="w-full hover:bg-gray-100 transition-colors text-sm font-inter">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <div className="border-t border-gray-300 pt-4 mt-4">
                <Link href="/login">
                  <Button variant="ghost" className="w-full mb-2 hover:bg-gray-100 transition-colors text-sm font-inter">
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button className="w-full bg-black text-white rounded-md hover:bg-black/90 transition-all duration-200 text-sm font-inter">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}