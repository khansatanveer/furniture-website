// 'use client'
// import Image from 'next/image';
// // import Pic_1 from '@/app/public/Trenton modular .png';
// import Pic_2 from '@/app/public/table.png';
// import Pic_3 from '@/app/public/Outdoor bar table and stool 1.png';
// import Pic_4 from '@/app/public/Mask2.png';
// import Pic_5 from '@/app/public/Grain coffee table 1.png';
// import Pic_6 from '@/app/public/Kent coffee table 1.png';
// import Pic_7 from '@/app/public/Round coffee table_color 2 1.png';
// import Pic_8 from '@/app/public/Reclaimed teak coffee table 1.png';
// import Pic_9 from '@/app/public/Plain console_ 1.png';
// import Pic_10 from '@/app/public/Reclaimed teak Sideboard 1.png';
// import Pic_11 from '@/app/public/SJP_0825  1 (1).png';
// import Pic_12 from '@/app/public/Bella chair and table 1.png';
// import Pic_13 from '@/app/public/Granite square side table 1.png';
// import Pic_14 from '@/app/public/Asgaard sofa 1.png';
// import Pic_15 from '@/app/public/Maya sofa three seater 1.png';
// import Pic_16 from '@/app/public/Outdoor sofa set 1.png';
// import Header from '@/app/components/header';
// import Link from "next/link";
// import Bg from '@/app/public/Rectangle 1.png'
// import Logo from '@/app/public/Meubel House_Logos-05.png'
// import Arrow from '@/app/public/arrow-down.png'
// import React, { useState } from "react";
// import Filter from '@/app/public/filter.png'
// import Round from '@/app/public/big-round.png'
// import View from '@/app/public/view-list.png'
// const ShopPage = () => {

//   const [itemsPerPage, setItemsPerPage] = useState(16);
//   const [sortOption, setSortOption] = useState("Default");
//   const sampleImages = [
//     { id: 1, src:'/Trenton modular .png' , alt: "Picture 1" , name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
//     { id: 3, src:Pic_2 , alt: "Picture 2", name: "Granite dining table with dining chair", price: "Rs. 25,000.00"  },
//     { id: 2, src: Pic_3, alt: "Picture 3" , name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
//     { id: 4, src: Pic_4, alt: "Picture 4" , name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
//     { id: 5, src: Pic_5, alt: "Picture 5" , name: "Grain coffee table", price: "Rs. 15,000.00" },
//     { id: 6, src: Pic_6, alt: "Picture 6" , name: "Kent coffee table", price: "Rs. 225,000.00" },
//     { id: 7, src: Pic_7, alt: "Picture 7" , name: "Round coffee table_color 2", price: "Rs. 251,000.00" },
//     { id: 8, src: Pic_8, alt: "Picture 8" , name: "Reclaimed teak coffee table", price: "Rs. 25,200.00" },
//     { id: 9, src: Pic_9, alt: "Picture 9" , name: "Plain console_", price: "Rs. 258,200.00" },
//     { id: 10, src: Pic_10, alt: "Picture 10" , name: "Reclaimed teak Sideboard", price: "Rs. 20,000.00" },
//     { id: 11, src: Pic_11, alt: "Picture 11" , name: "SJP_0825 ", price: "Rs. 200,000.00" },
//     { id: 12, src: Pic_12, alt: "Picture 12" , name: "Bella chair and table", price: "Rs. 100,000.00" },
//     { id: 13, src: Pic_13, alt: "Picture 13" , name: "Granite square side table", price: "Rs. 258,800.00" },
//     { id: 14, src: Pic_14, alt: "Picture 14" , name: "Asgaard sofa", price: "Rs. 250,000.00" },
//     { id: 15, src: Pic_15, alt: "Picture 15" , name: "Maya sofa three seater", price: "Rs. 115,000.00" },
//     { id: 16, src: Pic_16, alt: "Picture 16" , name: "Outdoor sofa set", price: "Rs. 244,000.00" },
//   ];
  



  
//   return (
//     <div >
//       <Header />
//       {/* Hero Section */}
//       <section className="relative ">
//     <div className="">
//           <Image
//             src={Bg}
//             alt="Background"
//             className="object-cover w-full h-[400px]"
//           />
          
//     <div className="absolute inset-0   flex flex-col items-center justify-center">
//       {/* Logo */}
//       <div className="mb-[-20px] ">
//         <Image
//           src={Logo} 
//           alt="Logo"
//           width={90} 
//           height={35}
//         />
//       </div>
//       {/* Title and Breadcrumb */}
//       <div className="text-center ">
//         <h1 className="text-[48px] font-medium text-black">Shop</h1>
//         <p className="mt-1 mb-6 flex items-center text-[18px] px-3">
//   <Link
//     href="/Home"
//     className="font-medium  text-black"
//   >
//     Home
//   </Link>
//   <Image
//   src={Arrow} 
//   alt=''
//   className="mx-2 text-black font-normal mt-2"/>
  
  
//   <span className="font-extralight text-stone-800 ">Shop</span>
// </p>

//       </div>
//     </div>
//     </div>
// </section>
//                  {/* Filterbar */}

// <div className="flex flex-wrap items-center justify-between gap-4 mt-10 h-[90px] md:px-8 bg-[#FAF4F4] text-black">
//       {/* Left Section */}
//       <div className="flex  items-center md:gap-4 mt-5 md:mt-0 gap-2 sm:gap-3">
//         {/* Filter Button */}
//         <button
//   onClick={() => alert('Filter modal opened!')}
//   className="flex md:ml-12 sm:ml-4 items-center text-sm md:gap-6 gap-2 font-medium "
// > 
//   <Image
//   src={Filter}
//   alt='filter'
//   className='text-black md:w-7 w-5'/>
//   <span className='font-medium text-[16px] sm:text-[17px] md:text-[20px]'>Filter</span>
// </button>

//         {/* View Toggle Buttons */}
//         <div className="flex sm:space-x-2 ">
//           {/* Grid View */}
          
//             <Image
//             src={Round}
//             alt='round'
//             className='w-5 md:w-full'
//             />
        
//           {/* List View */}
          
//             <Image
//             src={View}
//             alt='view list'
//             className='w-5 md:w-full'
//             />
//         </div>

//         {/* Divider (hidden on small screens) */} 
        
//         <div className="ml-1 sm:hidden w-[2px]  h-5 bg-[#9F9F9F]"></div>
// {/* Divider (hidden on large screens) */}
// <div className="hidden sm:block w-[3px] h-9 bg-[#9F9F9F]"></div> 
//         {/* Showing Results Text */}
//         <p className="  text-black sm:text-[14px] md:text-[16px] font-normal hidden sm:block">
//           Showing 1–{itemsPerPage} of 32 results
//         </p>
//       </div>
// {/* Small Screen Results Text */}
// <p className="text-[14px] text-black sm:hidden w-full mt-[-50px] text-right">
//         Showing 1–{itemsPerPage} of 32 results
//       </p> 
      
//       {/* Right Section */}
      
//       <div className="flex  items-center mt-[-20px]  sm:mt-[0px] md:mt-[0px] "> 
//         {/* Items Per Page Dropdown */}
//         <div className="flex  items-center sm:mb-[-20px] md:mb-[0px] sm:mr-[175px] md:mr-0 ">
//   <label htmlFor="itemsPerPage" className="md:text-[20px]  text-[15px]  font-normal">
//     Show
//   </label>
//   <select
//     id="itemsPerPage"
//     value={itemsPerPage}
//     onChange={(e) => setItemsPerPage(Number(e.target.value))}
//     className="md:w-16 md:h-14 w-10 h-8   border-hidden  rounded text-[#9F9F9F] text-center focus:outline-none "
//   >
//     <option value={8}>8</option>
//     <option value={16}>16</option>
//   </select>
// </div>
// </div>
//         {/* Sort By Dropdown */}
//         <div className="flex items-center ml-32 sm:mt-[-90px] sm:ml-[470px] md:ml-0 mt-[-60px] md:mt-[0px] lg:mr-12 ">
//   <label htmlFor="itemsPerPage" className="md:text-[20px] text-[15px]  font-normal">
//     Sort by
//   </label>
//             <select
//             id="itemsPerPage"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="md:w-44 md:h-14 w-24 h-8  border-hidden rounded text-[#9F9F9F]  md:text-left px-2 focus:outline-none"
//             >
//               {["Default", "Price: Low to High", "Price: High to Low", "Popularity", "Rating"].map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//             </div>
      
//     </div>
//         {/* Image Grid */}
        
// <div className='max-w-screen-2xl container mx-auto pb-8 px-4'>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//   {sampleImages.map((image) => (
//     <div key={image.id} className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      
//         <Image
//           src={image.src}
//           alt={image.alt}
//           height={300}
//           width={300}
//           className="h-[250px] w-full object-cover"
//         />
    
//       <div className="p-4 text-center">
//         <h3 className="text-lg font-medium text-gray-800">{image.name}</h3>
//         <p className="text-xl font-semibold text-gray-900 mt-2">{image.price}</p>
//       </div>
//     </div>
//   ))}
// </div>
// </div>


//         {/* Pagination Section */}
//         <div className="flex justify-center gap-1 sm:gap-4 py-16">
//           <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
//             <span className='text-[20px] font-normal'>1</span>
//             </button>
//           <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
//           <span className='text-[20px] font-normal'>2</span>
//             </button>
//           <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
//           <span className='text-[20px] font-normal'>3</span>
//             </button>
//           <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
//           <span className='text-[20px] font-normal'>Next</span>
//             </button>
//         </div>
//        {/* Benefits Section */}
//        <section className="bg-[#FAF4F4] py-16 ">
//         <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//           <div>
//             <h3 className="text-[25px]  lg:text-[30px] md:text-[25px] font-medium ">Free Delivery</h3>
//             <p className="text-[16px]  lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
//           </div>
//           <div>
//             <h3 className="text-[25px] md:text-[25px] font-medium">90 Days Return</h3>
//             <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
//           </div>
//           <div>
//             <h3 className="text-[25px] md:text-[25px] font-medium">Secure Payment</h3>
//             <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
//           </div>
//         </div>
//       </section>
//       </div>
//   );
// };

// export default ShopPage;






// // import React from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import ShopLine from '../components/shop';
// // import Field from '../components/Feild';
// // import Header from '../components/header';
// // import Page from '../components/Ourpage';
// // import { client } from '@/sanity/lib/client';
// // import { urlFor } from '@/sanity/lib/image';

// // interface Product {
// //   category: string;
// //   id: string;
// //   price: number;
// //   description: string;
// //   stockLevel: number;
// //   imagePath: string;
// //   discountPercentage: number;
// //   isFeaturedProduct: number;
// //   name: string;
// //   image: any;
// // }

// // // Fetch products from Sanity
// // async function fetchProducts(): Promise<Product[]> {
// //   const query = `*[_type == "product"]{
// //     category,
// //     _id,
// //     price,
// //     description,
// //     stockLevel,
// //     imagePath,
// //     discountPercentage,
// //     isFeaturedProduct,
// //     name,
// //     "image":image.asset._ref
// //   }`;
// //   const products = await client.fetch(query);
// //   return products;
// // }

// // const Shop = async () => {
// //   const products = await fetchProducts();

// //   return (
// //     <div className="bg-gray-50">
// //       <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
// //         {/* Header Section */}
// //         <div className="bg-[#faf4f4]">
// //           <Header />
// //         </div>

// //         {/* Banner Section */}
// //         <div className="relative text-black">
// //           <Image
// //             src="/shop.jpeg" // Replace with the correct image file path
// //             alt="Shop Banner"
// //             height={400}
// //             width={1600}
// //             className="w-full h-40 md:h-auto object-cover"
// //           />
// //           <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
// //             Shop
// //           </h1>
// //           {/* Breadcrumb Section */}
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
// //             <p className="text-gray-700 text-xs md:text-xl flex items-center">
// //               <Link href="/" className="font-bold hover:underline">
// //                 Home
// //               </Link>
// //               <span className="font-bold mx-2">{'>'}</span>
// //               <Link href="/shop" className="hover:underline">
// //                 Shop
// //               </Link>
// //             </p>
// //           </div>
// //         </div>

// //         {/* Shop Line Section */}
// //         <div className="my-6">
// //           <ShopLine />
// //         </div>

// //         {/* Product List */}
// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //           {products.map((product: Product, index) => (
// //             <div
// //               key={index}
// //               className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
// //             >
// //               {/* Product Image */}
// //               <Image
// //                 src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
// //                 alt={product.name}
// //                 height={300}
// //                 width={300}
// //                 className="h-[250px] w-full object-cover"
// //               />
// //               <div className="p-4 text-center">
// //                 {/* Product Name */}
// //                 <p className="text-lg font-medium text-gray-800">{product.name}</p>
// //                 {/* Product Price */}
// //                 <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Additional Sections */}
// //         <div className="justify-center mx-auto">
// //           <Page />
// //         </div>
// //         <Field />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Shop;




// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// // import ShopLine from '../components/shop';
// // import Field from '../components/Feild';
// import Header from '../components/header';
// // import Page from '../components/Ourpage';
// import { client } from '@/sanity/lib/client';
// import { urlFor } from '@/sanity/lib/image';

// interface Product {
//   category: string;
//   id: string;
//   price: number;
//   description: string;
//   stockLevel: number;
//   imagePath: string;
//   discountPercentage: number;
//   isFeaturedProduct: number;
//   name: string;
//   image: string;
// }

// // Fetch products from Sanity
// async function fetchProducts(): Promise<Product[]> {
//   const query = `*[_type == "product"]{
//     category,
//     _id,
//     price,
//     description,
//     stockLevel,
//     imagePath,
//     discountPercentage,
//     isFeaturedProduct,
//     name,
//     "image":image.asset._ref
//   }`;
//   const products = await client.fetch(query);
//   return products;
// }

// const Shop = async () => {
//   const products = await fetchProducts();

//   return (
//     <div className="bg-gray-50">
//       <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
//         {/* Header Section */}
//         <div className="bg-[#faf4f4]">
//           <Header />
//         </div>

//         {/* Banner Section */}
//         <div className="relative text-black">
//           <Image
//             src="/shop.jpeg" // Replace with the correct image file path
//             alt="Shop Banner"
//             height={400}
//             width={1600}
//             className="w-full h-40 md:h-auto object-cover"
//           />
//           <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
//             Shop
//           </h1>
//           {/* Breadcrumb Section */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
//             <p className="text-gray-700 text-xs md:text-xl flex items-center">
//               <Link href="/" className="font-bold hover:underline">
//                 Home
//               </Link>
//               <span className="font-bold mx-2">{'>'}</span>
//               <Link href="/shop" className="hover:underline">
//                 Shop
//               </Link>
//             </p>
//           </div>
//         </div>

//         {/* Shop Line Section */}
//         <div className="my-6">
//           {/* <ShopLine /> */}
//         </div>

//         {/* Product List */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product: Product, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
//             >
//               {/* Product Image */}
//               <Image
//                 src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
//                 alt={product.name}
//                 height={300}
//                 width={300}
//                 className="h-[250px] w-full object-cover"
//               />
//               <div className="p-4 text-center">
//                 {/* Product Name */}
//                 <p className="text-lg font-medium text-gray-800">{product.name}</p>
//                 {/* Product Price */}
//                 <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Additional Sections */}
//         <div className="justify-center mx-auto">
//           {/* <Page /> */}
//         </div>
//         {/* <Field /> */}
//       </div>
//     </div>
//   );
// };

// export default Shop;



import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Product {
  category: string;
  _id: string;
  price: number;
  description: string;
  stockLevel: number;
  imagePath?: string;
  discountPercentage?: number;
  isFeaturedProduct?: number;
  name: string;
  image?: string; // Sanity image field
}

async function fetchProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    image
  }`;
const products = await client.fetch(query);
return products
  // try {
  //   return await client.fetch(query);
  // } catch (error) {
  //   console.error('Error fetching products:', error);
  //   return [];
  // }
}

const Shop = async () => {
  const products = await fetchProducts();

  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
        <div className="bg-[#faf4f4]">
          {/* <Header /> */}
        </div>
        <div className="relative text-black">
          <Image
            src="/shop.jpeg"
            alt="Shop Banner"
            height={400}
            width={1600}
            className="w-full h-40 md:h-auto object-cover"
          />
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl md:text-5xl font-semibold">
            Shop
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
            <p className="text-gray-700 text-xs md:text-xl flex items-center">
              <Link href="/" className="font-bold hover:underline">
                Home
              </Link>
              <span className="font-bold mx-2">{'>'}</span>
              <Link href="/shop" className="hover:underline">
                Shop
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <Image
                src={product.image ? urlFor(product.image).url() : '/fallback.jpg'}
                alt={`Image of ${product.name}`}
                height={300}
                width={300}
                className="h-[250px] w-full object-cover"
              />
              <div className="p-4 text-center">
                <p className="text-lg font-medium text-gray-800">{product.name}</p>
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  ${product.price}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
