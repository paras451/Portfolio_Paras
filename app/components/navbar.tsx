"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 p-4 text-white shadow-md fixed w-full top-0 left-0 right-0  z-50 ">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 hover:from-pink-600 hover:to-purple-400 transition duration-300 ease-in-out hover:scale-105 transform">
            Paras Singh Chilwal
          </h1>
          {/* desktop menu */}

          <div className="hidden md:flex space-x-8 items-center font-bold pr-12">
            {[
              { name: "Home", href: "/" },
              { name: "About Me", href: "#about" },
              { name: "Projects", href: "#projects" },
              { name: "Skills", href: "#skills" },
              { name: "Contact", href: "#footer" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
            relative pb-1 text-white transition duration-300 ease-in-out hover:scale-110 transform
            
            /* Underline Pseudo-element Setup */
            after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-full 
            /* Gradient matching your branding */
            after:bg-gradient-to-r after:from-purple-400 after:to-pink-600 

            hover:filter hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]
            
            /* Animation logic: slides in from left, departs out the right */
            after:scale-x-0 after:origin-center after:transition-transform after:duration-300 after:ease-out
            hover:after:scale-x-100 hover:after:origin-center
          "
              >
                {item.name}
              </Link>
            ))}
             
          </div>
          {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800 px-6 py-18 space-y-10 flex flex-col items-center font-bold font-family-sans text-lg">
            <Link href="/">Home</Link>
            <Link href="#about">About Me</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#footer">Contact</Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
