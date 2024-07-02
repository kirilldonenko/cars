"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const signIn = () => {
    console.log('signIn')
  }

  return (
    <header className="w-full fixed z-10 bg-white">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex flex-col justify-start items-center">
          <Image src='/logo.webp' alt='logo' width={100} height={20} className='object-contain' />
          <p className="font-bold text-base">
            CarHub
          </p>
        </Link>

        <div className="hidden md:flex gap-6">
          <Link href="/catalog" className="font-bold text-base text-primary-blue">
            Car Catalog
          </Link>
          <Link href="/favourites" className="font-bold text-base text-primary-blue">
            Favourite Cars
          </Link>
        </div>

        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          handleClick={signIn}
        />

        <button className="md:hidden text-primary-blue" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white w-full absolute z-10 flex flex-col items-center gap-4 p-4 shadow-lg">
          <Link href="/catalog" className="font-bold text-base text-primary-blue" onClick={toggleMenu}>
            Car Catalog
          </Link>
          <Link href="/favourites" className="font-bold text-base text-primary-blue" onClick={toggleMenu}>
            Favourite Cars
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
