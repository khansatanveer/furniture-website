// import React from 'react';
// import Link from 'next/link';

// const Footer = () => {
//   return (
//     <footer className="min-h-screen max-h-screen overflow-hidden  mt-8 sm:mt-8 md:mt-8 lg:mt-12 bg-white">
//       <div className="max-w-screen-sm sm:max-w-screen-sm lg:max-w-screen-xl h-auto w-auto mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10 lg:gap-12 lg:px-20">
        
//         {/* First Column: Address */}
//         <div className="mb-8 sm:mt-9 lg:mt-40 text-[14px] sm:text-[15px] lg:text-[16px] px-5 sm:px-5 lg:px-0 text-[#9F9F9F]">
//           <p>400 University Drive Suite 200 Coral<br />Gables,<br />FL 33134 USA</p>
//         </div>

//         {/* Links Section */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 px-5 sm:px-0 lg:px-0 gap-10 sm:gap-5 lg:gap-60">
          
//           {/* Links */}
//           <div className="flex flex-col sm:ml-0 lg:ml-16 gap-6 sm:gap-8 lg:gap-16 mb-9 lg:mb-0">
//             <h6 className="text-[#9F9F9F] text-[15px] sm:text-[16px] lg:text-[16px] font-medium">Links</h6>
//             <Link href="/Home" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Home</Link>
//             <Link href="/Shop" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Shop</Link>
//             <Link href="/About" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">About</Link>
//             <Link href="/Contact" className="text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Contact</Link>
//           </div>
          
//           {/* Help Section */}
//           <div className="flex flex-col sm:gap-8 lg:gap-16 gap-6">
//             <h6 className="font-medium text-[15px] sm:text-[16px] lg:text-[16px] text-[#9F9F9F]">Help</h6>
//             <Link href="/payment-options" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Payment Options</Link>
//             <Link href="/returns" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Returns</Link>
//             <Link href="/privacy-policy" className="font-medium text-[13px] sm:text-[14px] lg:text-[16px] hover:text-blue-800">Privacy Policy</Link>
//           </div>
//         </div>

//         {/* Newsletter */}
//         <div className="flex lg:flex-col  gap-4 sm:gap-4 lg:gap-12 ml-10 sm:ml-10 lg:ml-32">
//           <h6 className="text-[#9F9F9F] font-medium lg:text-left px-14 sm:px-64 lg:px-0 text-[15px] sm:text-[16px] lg:text-[16px]">Newsletter</h6>
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="px-6 sm:px-6 lg:px-0">
//               <input
//                 type="text"
//                 placeholder="Enter Your Email Address"
//                 className="w-[180px] sm:w-[300px] lg:w-[230px] text-center sm:text-left text-[12px] sm:text-[14px] lg:text-[16px] h-[18px] sm:h-[20px] lg:h-[24px] focus:outline-none"
//               />
//               <hr className="mt-1 border border-black w-[200px] sm:w-[350px]" />
//             </div>
//             <div className="px-16 sm:px-5 lg:px-0">
//               <button className="text-black hover:text-red-600 font-medium text-[13px] sm:text-[14px] lg:text-[16px]">SUBSCRIBE</button>
//               <hr className="mt-1   border border-black w-[80px] sm:w-[90px]" />
//             </div>
//           </div>
//         </div>
//       </div>
// {/* Footer Bottom Section */}
//       <div className=" text-center lg:mb-[-400px] ">
//         <hr className="mt-8  sm:mt-12 lg:mt-20 border border-[#9F9F9F] w-[300px] sm:w-[570px] lg:w-[1200px] mx-auto" />
        
//         <div className="  mt-4 sm:mt-6 lg:mt-8 px-10 sm:px-8 md:px-24 lg:px-12 text-left text-[13px] sm:text-[15px] lg:text-[16px]">
//           <p>2022 Meubel House. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-8 sm:mt-8 md:mt-8 xl:mt-12">
      <div className="max-w-screen-sm sm:max-w-screen-md xl:max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 sm:gap-10 lg:gap-12 xl:gap-20 ml-28 px-auto">
        
        {/* First Column: Address */}
        <div className="mb-8 sm:mt-9 xl:mt-40 text-sm sm:text-base xl:text-lg text-gray-600">
          <p>400 University Drive Suite 200 Coral<br />Gables,<br />FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-5 lg:ml-10 lg:gap-12 xl:gap-10">
          
          {/* Links */}
          <div className="flex flex-col gap-4 sm:gap-6 xl:gap-10 mb-9 xl:mb-0 ">
            <h6 className="text-gray-600 text-sm sm:text-base xl:text-lg font-medium">Links</h6>
            <Link href="/Home" className="text-xs sm:text-sm xl:text-base hover:text-blue-800">Home</Link>
            <Link href="/Shop" className="text-xs sm:text-sm xl:text-base hover:text-blue-800">Shop</Link>
            <Link href="/About" className="text-xs sm:text-sm xl:text-base hover:text-blue-800">About</Link>
            <Link href="/Contact" className="text-xs sm:text-sm xl:text-base hover:text-blue-800">Contact</Link>
          </div>
          
          {/* Help Section */}
          <div className="flex flex-col gap-4 sm:gap-6 xl:gap-8 lg:ml-20">
            <h6 className="font-medium text-sm sm:text-base xl:text-lg text-gray-600">Help</h6>
            <Link href="/payment-options" className="font-medium text-xs sm:text-sm xl:text-base hover:text-blue-800">Payment Options</Link>
            <Link href="/returns" className="font-medium text-xs sm:text-sm xl:text-base hover:text-blue-800">Returns</Link>
            <Link href="/privacy-policy" className="font-medium text-xs sm:text-sm xl:text-base hover:text-blue-800">Privacy Policy</Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-4 sm:gap-6 xl:gap-8 lg:ml-20">
          <h6 className="text-gray-600 font-medium text-sm sm:text-base xl:text-lg">Newsletter</h6>
          <div className="flex flex-col sm:flex-row gap-4">
            <div>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="w-full sm:w-48 xl:w-64 text-center sm:text-left text-xs sm:text-sm xl:text-base h-8 sm:h-10 xl:h-12 focus:outline-none border-b border-black"
              />
            </div>
            <div>
              <button className="text-black hover:text-red-600 font-medium text-xs sm:text-sm xl:text-base mt-6 border-b border-black">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-8 sm:mt-12 xl:mt-12">
        <hr className="border border-gray-600 w-full sm:w-10 md:w-[700px] lg:w-[950px] xl:w-[1100px]   mx-auto" />
        
        <div className="mt-4 sm:mt-6 xl:mt-8 px-5 sm:px-10 xl:px-20 mb-5 text-left text-xs sm:text-sm xl:text-base text-gray-600">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;