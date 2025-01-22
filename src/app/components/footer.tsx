import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="min-h-screen overflow-hidden  mt-8 sm:mt-8 md:mt-8 lg:mt-24 bg-white">
      <div className="max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl h-auto sm:h-auto lg:h-[312px] w-auto mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 lg:gap-20 lg:px-12">
        
        {/* First Column: Address */}
        <div className="mb-8 sm:mt-9 lg:mt-40 text-[14px] sm:text-[15px] lg:text-[16px] px-5 sm:px-5 lg:px-0 text-[#9F9F9F]">
          <p>400 University Drive Suite 200 Coral<br />Gables,<br />FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 lg:px-0 gap-10 sm:gap-5 lg:gap-64">
          
          {/* Links */}
          <div className="flex flex-col sm:ml-0 lg:ml-16 gap-6 sm:gap-8 lg:gap-16 mb-9 lg:mb-0">
            <h6 className="text-[#9F9F9F] text-[15px] sm:text-[16px] lg:text-[16px] font-medium">Links</h6>
            <Link href="/Home" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Home</Link>
            <Link href="/Shop" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Shop</Link>
            <Link href="/About" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">About</Link>
            <Link href="/Contact" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Contact</Link>
          </div>
          
          {/* Help Section */}
          <div className="flex flex-col sm:gap-8 lg:gap-16 gap-6">
            <h6 className="font-medium text-[15px] sm:text-[16px] lg:text-[16px] text-[#9F9F9F]">Help</h6>
            <Link href="/payment-options" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Payment Options</Link>
            <Link href="/returns" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Returns</Link>
            <Link href="/privacy-policy" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Privacy Policy</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 sm:gap-4 lg:gap-12 ml-10 sm:ml-10 lg:ml-32">
          <h6 className="text-[#9F9F9F] font-medium lg:text-left px-14 sm:px-64 lg:px-0 text-[15px] sm:text-[16px] lg:text-[16px]">Newsletter</h6>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="px-6 sm:px-6 lg:px-0">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-[180px] sm:w-[300px] lg:w-[230px] text-center sm:text-left text-[12px] sm:text-[14px] lg:text-[16px] h-[18px] sm:h-[20px] lg:h-[24px] focus:outline-none"
              />
              <hr className="mt-1 border border-black w-[200px] sm:w-[350px]" />
            </div>
            <div className="px-16 sm:px-5 lg:px-0">
              <button className="text-black hover:text-red-600 font-medium text-[13px] sm:text-[14px] lg:text-[16px]">SUBSCRIBE</button>
              <hr className="mt-1   border border-black w-[80px] sm:w-[90px]" />
            </div>
          </div>
        </div>
      </div>
{/* Footer Bottom Section */}
      <div className=" text-center">
        <hr className="mt-8 sm:mt-12 lg:mt-44 border border-[#9F9F9F] w-[300px] sm:w-[570px] lg:w-[1100px] mx-auto" />
        
        <div className="mb-5 sm:mb-10  mt-4 sm:mt-6 lg:mt-8 px-10 sm:px-8 md:px-24 lg:px-20 text-left text-[13px] sm:text-[15px] lg:text-[16px]">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
