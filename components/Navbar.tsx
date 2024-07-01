import React from 'react';
import Link from "next/link";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/" className="flex flex-col justify-start items-center">
          <Image src='/logo.webp' alt='logo' width={100} height={20} className='object-contain' />
          <p className="font-bold text-base">
            CarHub
          </p>
        </Link>
        <CustomButton
          title="Sign in"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </header>
  );
};
export default Navbar