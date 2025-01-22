'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'; // Import icons for menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility   
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="flex h-[100px]  items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-1">
        {/* Navigation */}
        <div className="absolute top-[20px] left-4 lg:top-[38px] sm:top-[38px] sm:left-[130px] md:left-[220px] lg:left-[400px]">
        <nav
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-white z-20 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h1 className="text-lg font-bold">Your Logo</h1>
                    <button
                        onClick={toggleMenu}
                        className="text-2xl"
                        aria-label="Close Mobile Menu"
                    >
                        <HiOutlineX />
                    </button>
                </div>
                
          <nav className="flex gap-4 sm:gap-4 md:gap-5 lg:gap-20 text-[15px] sm:text-[16px] lg:text-[18px] px-6 lg:px-0 font-medium">

            <Link href="/Home" className="text-black hover:underline leading-7">
              Home
            </Link>
            <Link href="/Shop" className="text-black hover:underline leading-7">
              Shop
            </Link>
            {/* <Link href="/About" className="text-black hover:underline leading-7">
              About
            </Link> */}
            {/* <Link href="/Contact" className="text-black hover:underline leading-7">
              Contact
            </Link> */}
          </nav>
          </nav>
        </div>

        {/* Icons */}
        <div className="flex gap-5 sm:gap-3 md:gap-4 lg:gap-8 ml-0 md:mr-[-90px] sm:ml-[440px] lg:ml-[980px] px-24 sm:px-6 lg:px-0 mr-4 lg:mr-12 mt-8 sm:mt-0 lg:mt-0 ">
          <a href="../Account" rel="noopener noreferrer" aria-label="Profile">
            <Image
              src='/account.png'
              alt="Profile Icon"
              width={200}
              height={200}
              
              className="block text-black w-[20px] sm:w-[20px] md:w-[24px] min-w-[20px]"
            />
          </a>

          <a href="" rel="noopener noreferrer" aria-label="Search">
            <Image
              src='/icons_search (2).png'
              alt="Search Icon"
              height={200}
              width={200}
              className="block text-black w-[20px] sm:w-[15px] md:w-[20px] min-w-[18px]"
            />
          </a>

          <a href="" rel="noopener noreferrer" aria-label="Favorites">
            <Image
              src='/akar-icons_heart.png'
              alt="Heart Icon"
              height={200}
              width={200}
              className="block text-black  w-[20px] sm:w-[15px] md:w-[20px] min-w-[18px]"
            />
          </a>

          <a href="" rel="noopener noreferrer" aria-label="Cart">
            <Image
              src='/shopping-cart.png'
              alt="Cart Icon"
              height={200}
              width={200}
              className="block text-black  w-[20px] sm:w-[15px] md:w-[20px] min-w-[18px]"
            />
          </a>
        </div>
      </div>
      <button
                    onClick={toggleMenu}
                    className="md:hidden text-2xl"
                    aria-label="Toggle Mobile Menu"
                >
                    {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
                </button>
                <div className="hidden md:block">
      <nav className="flex gap-4 sm:gap-4 md:gap-5 lg:gap-20 text-[15px] sm:text-[16px] lg:text-[18px] px-6 lg:px-0 font-medium ">

            <Link href="/Home" className="text-black hover:underline leading-7">
              Home
            </Link>
            <Link href="/Shop" className="text-black hover:underline leading-7">
              Shop
            </Link>
            <Link href="/About" className="text-black hover:underline leading-7">
              About
            </Link>
            <Link href="/Contact" className="text-black hover:underline leading-7">
              Contact
            </Link>
          </nav>
          </div>
    </header>
  );
};

export default Header;
