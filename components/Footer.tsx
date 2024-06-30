import React from 'react';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-center">
          <Image
            src="/logo.webp"
            alt="Car Hub Logo"
            width={100}
            height={20}
            className="object-contain"
          />
          <div className="font-bold text-[14px] mb-6">
            Car Hub
          </div>
          <p className="text-base text-gray-700">
            Car Hub 2024 <br/>
            All rights reserved &copy;
          </p>
        </div>
      </div>
      
    </footer>
  );
};
export default Footer