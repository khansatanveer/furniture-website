'use client'
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Sidebar from "@/app/components/sidebarCart";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Cartopen, setCartopen] = useState(false);

  // Toggle cart open/close
  const toggleCartOpen = () => {
    setCartopen(!Cartopen);
  }

  return (
    <>
      <header className="flex flex-col items-center justify-between px-4 lg:px-12 max-w-7xl mx-auto transition-all duration-300 ">
        <div className="flex items-center justify-between w-full h-16 ">
          {/* LOGO */}
          <div className="text-2xl font-bold font-serif ">
            Living Luxe
          </div>

          {/* NAVIGATION LINKS (Hidden on Mobile) */}
          <nav className="hidden lg:flex gap-12 text-lg font-medium">
            <Link href="/Home" className="text-black hover:underline">Home</Link>
            <Link href="/Shop" className="text-black hover:underline">Shop</Link>
            <Link href="/Blog" className="text-black hover:underline">Blog</Link>
            <Link href="/Contact" className="text-black hover:underline">Contact</Link>
          </nav>

          {/* ICONS (Sign-in, Favorites, Cart) */}
          <div className="flex items-center gap-2 md:gap-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Image src="/account.png" alt="Sign In" width={24} height={24} className="cursor-pointer" />
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>

            {/* Favorites Icon */}
            <Image src="/akar-icons_heart.png" alt="Favorites" width={20} height={20} className="cursor-pointer" />

            {/* Cart Button */}
            <button title="Cart" onClick={toggleCartOpen} className="relative">
              <AiOutlineShoppingCart className="cursor-pointer w-6 h-6" />
              <span className="absolute top-0 right-0 translate-x-1/2 translate-y-[-45%] bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                4
              </span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-black">
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU (DROPDOWN) */}
        {isMenuOpen && (
          <div className="w-full  lg:hidden flex flex-col items-center py-4 space-y-4">
            <Link href="/Home" className="text-black text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/Shop" className="text-black text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link href="/Blog" className="text-black text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link href="/Contact" className="text-black text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      {/* SidebarCart Component */}
      <Sidebar Cartopen={Cartopen} setCartopen={setCartopen} />
    </>
  );
};

export default Header;
