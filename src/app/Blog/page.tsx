'use client';
import React from 'react';
import Bg from '@/app/public/Rectangle 1.png'
import Logo from '@/app/public/Meubel House_Logos-05.png'
import Link from "next/link";
import Image from 'next/image';
import Header from '@/app/components/header';
import Pic1 from '@/app/public/pic1.png'
import Pic2 from '@/app/public/pic2.png'
import Pic3 from '@/app/public/pic3.png'
import Pic4 from '@/app/public/pic4.png'
import Pic5 from '@/app/public/pic5.png'
import Pic6 from '@/app/public/pic7.png'
import Pic7 from '@/app/public/pic8.png'
import Pic9 from '@/app/public/pic9.png'
import Arrow from '@/app/public/arrow-down.png'
import Icon from "@/app/public/icons_search .png";
export default function BlogLayout() {
  const posts = [
    { src:Pic4 , title: "Going all-in with millennial design", date: "03 Aug 2022" },
    { src: Pic5 , title: "Exploring new ways of decorating", date: "03 Aug 2022" },
    { src:Pic6, title: "Handmade pieces that took time to make", date: "03 Aug 2022" },
    { src: Pic7, title: "Modern home in Milan", date: "03 Aug 2022" }, 
    { src:Pic9, title: "Colorful office redesign", date: "03 Aug 2022" },
  ];
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative ">
    <div className="">
          <Image
            src={Bg}
            alt="Background"
            className="object-cover w-full h-[400px]"
          />
          
    <div className="absolute inset-0   flex flex-col items-center justify-center">
      {/* Logo */}
      <div className="mb-[-20px] ">
        <Image
          src={Logo} 
          alt="Logo"
          width={90} 
          height={35}
        />
        
      </div>
      {/* Title and Breadcrumb */}
      <div className="text-center ">
        <h1 className="text-[48px] font-medium text-black">Shop</h1>
        <p className="mt-1 mb-6 flex items-center text-[18px] px-3">
  <Link
    href="/Home"
    className="font-medium  text-black"
  >
    Home
  </Link>
  <Image
  src={Arrow} 
  alt=''
  className="mx-2 text-black font-normal mt-2"/>
  
  <span className="font-extralight text-stone-800 ">Shop</span>
</p>

      </div>
    </div>
    </div>
</section>
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    {/* Left Side: Blog Posts Section */}
    <div className="lg:col-span-3 space-y-12">
      {/* Post 1 */}
      <div>
        <Image
          src={Pic1}
          alt="Going On"
          
          className="w-[750px] md:h-[500px] h-[300px] object-cover rounded-lg"
        />
        <h1 className="text-2xl md:text-[30px] font-bold mt-4">
          Going all-in with millennial design
        </h1>
        <p className="text-[#9F9F9F] md:text-[15px] font-normal mt-7 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>
        dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin<br/>
         aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis<br/>
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque<br/> elit
           ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <button className=" mt-7  text-[16px] sm:text-[16px] lg:text-[16px] font-medium leading-[36px] hover:text-[20px] hover:sm:text-[20px]  hover:lg:text-[20px]">
               Read More
              <hr className="mt-1 lg:border-2 border-1 border-black  w-[90px] mx-auto" />
            </button>
            </a>
      </div>

      {/* Post 2 */}
      <div>
        <Image
          src={Pic2}
          alt="Exploring New Ways"
          className="w-[750px] md:h-[500px] h-[300px] object-cover rounded-lg"
        />
        <h1 className="text-2xl md:text-[30px] font-bold mt-4">
          Exploring New Ways of Decorating
        </h1>
        <p className="text-[#9F9F9F] md:text-[15px] font-normal mt-7 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>
        dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin<br/>
         aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis<br/>
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque<br/> elit
           ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <button className=" mt-7  text-[16px] sm:text-[16px] lg:text-[16px] font-medium leading-[36px] hover:text-[20px] hover:sm:text-[20px]  hover:lg:text-[20px]">
               Read More
              <hr className="mt-1 lg:border-2 border-1 border-black  w-[90px] mx-auto" />
            </button>
            </a>
      </div>

      {/* Post 3 */}
      <div>
        <Image
          src={Pic3}
          alt="Handmade Pieces"
          className="w-[750px] md:h-[500px] h-[300px] object-cover rounded-lg"
        />
        <h1 className="text-2xl md:text-[30px] font-bold mt-4">
          Handmade Pieces That Took Time to Make
        </h1>
        <p className="text-[#9F9F9F] md:text-[15px] font-normal mt-7 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>
        dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin<br/>
         aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis<br/>
          in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque<br/> elit
           ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <a href=""  rel="noopener noreferrer" aria-label="Profile">
            <button className=" mt-7  text-[16px] sm:text-[16px] lg:text-[16px] font-medium leading-[36px] hover:text-[20px] hover:sm:text-[20px]  hover:lg:text-[20px]">
               Read More
              <hr className="mt-1 lg:border-2 border-1 border-black  w-[90px] mx-auto" />
            </button>
            </a>
      </div>
    </div>

    {/* Right Side: Sidebar */}
    <div className="lg:col-span-1 space-y-8 ">
      {/* Search Bar */}
      <div className="relative">
  <input
    type="password"
    aria-label="Password"
    className="border-[2px] border-[#9F9F9F] sm:w-[280px] sm:h-[60px] w-[265px] h-[65px] rounded-[13px] p-2 pl-10 focus:outline-none" 
  />
 
  <Image 
  src={Icon}
  alt=''
  className="absolute left-3 top-1/2 transform -translate-y-1/2 "
  ></Image>
</div>


      {/* Categories */}
      <div >
        <h3 className="md:text-[24px] font-medium mb-6">Categories</h3>
        <ul className="space-y-10 text-[#9F9F9F] md:text-[15px] font-normal">
          <li className="hover:underline cursor-pointer">Crafts (2)</li>
          
          <li className="hover:underline cursor-pointer">Design (8)</li>
          
          <li className="hover:underline cursor-pointer">Handmade (7)</li>
          <li className="hover:underline cursor-pointer">Interior (1)</li>
          <li className="hover:underline cursor-pointer ">Wood (6)</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="md:text-[24px] font-medium mb-6">Recent Posts</h3>



<div className="space-y-14">
  {posts.map((post, index) => (
    
    <div key={index} className="flex items-center space-x-4">
    <Image
      src={post.src}
      alt={`Recent Post ${index + 1}`}
      width={80}
      height={80}
      className="object-cover rounded-lg"
    />
    <div className="flex flex-col">
      <h3 className="text-[14px] font-normal">{post.title}</h3>
      <p className="text-[12px] text-[#9F9F9F]">{post.date}</p> {/* Date below the title */}
    </div>
  </div>
))}
</div>
</div>
</div>
</div>
</div>

       {/* Pagination Section */}
       <div className="flex justify-center gap-1 sm:gap-4 py-16">
          <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
            <span className='text-[20px] font-normal'>1</span>
            </button>
          <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
          <span className='text-[20px] font-normal'>2</span>
            </button>
          <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
          <span className='text-[20px] font-normal'>3</span>
            </button>
          <button className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 mx-2 rounded-[10px] hover:bg-[#FBEBB5]">
          <span className='text-[20px] font-normal'>Next</span>
            </button>
        </div>
      {/* Benefits Section */}
      <section className="bg-[#FAF4F4] py-16 ">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[25px]  lg:text-[30px] md:text-[25px] font-medium ">Free Delivery</h3>
            <p className="text-[16px]  lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">For all oders over $50, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">90 Days Return</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">If goods have problems, consectetur adipim scing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">Secure Payment</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">100% secure payment, consectetur adipim scing elit.</p>
          </div>
        </div>
      </section>
    </div>
  )
}



