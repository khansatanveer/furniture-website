'use client';
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Header from '@/app/components/header';
import Benefits from '../components/Benefits';

export default function BlogLayout() {
  const posts = [
    { src: '/pic4.png', title: "Going all-in with millennial design", date: "03 Aug 2022" },
    { src: '/pic5.png', title: "Exploring new ways of decorating", date: "03 Aug 2022" },
    { src: '/pic7.png', title: "Handmade pieces that took time to make", date: "03 Aug 2022" },
    { src: '/pic8.png', title: "Modern home in Milan", date: "03 Aug 2022" },
    { src: '/pic9.png', title: "Colorful office redesign", date: "03 Aug 2022" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Header Section */}
      <div className="bg-white">
        <Header />
      </div>

      {/* Banner Section */}
      <section className="relative">
        <Image
          src='/Rectangle 1.png'
          alt="Background"
          width={1600}
          height={400}
          className="object-cover w-full h-[400px]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-[-20px]">
            <Image
              src='/Meubel House_Logos-05.png'
              alt="Logo"
              width={90} 
              height={35}
            />
          </div>
          {/* Title and Breadcrumb */}
          <div className="text-center">
            <h1 className="text-[48px] font-medium text-black">Blog</h1>
            <p className="mt-1 mb-6 flex items-center text-[18px] px-3">
              <Link href="/Home" className="font-medium text-black">Home</Link>
              <Image
                src='/arrow-down.png'
                alt=''
                width={20}
                height={20}
                className="mx-2 text-black font-normal mt-2"
              />
              <span className="font-extralight text-stone-800">Blog</span>
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section  */}
      <div className="container mx-auto px-4 py-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Side: Blog Posts Section */}
          <div className="lg:col-span-3 space-y-12">
            {[
              { src: '/pic1.png', title: "Going all-in with millennial design" },
              { src: '/pic2.png', title: "Exploring New Ways of Decorating" },
              { src: '/pic3.png', title: "Handmade Pieces That Took Time to Make" }
            ].map((post, index) => (
              <div key={index}>
                <Image
                  src={post.src}
                  alt={post.title}
                  width={750}
                  height={500}
                  className="w-full max-w-[750px] h-auto md:h-[500px] object-cover rounded-lg"
                />
                <h1 className="text-2xl md:text-[30px] font-bold mt-4">
                  {post.title}
                </h1>
                <p className="text-gray-500 md:text-[15px] font-normal mt-7 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br />
                dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin<br />
                aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis<br />
                in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque<br /> elit
                ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
                <a href="#" rel="noopener noreferrer" aria-label="Profile">
                  <button className="mt-7 text-[16px] font-medium leading-[36px] hover:text-[20px]">
                    Read More
                    <hr className="mt-1 border-1 border-black w-[90px] mx-auto" />
                  </button>
                </a>
              </div>
            ))}
          </div>

          {/* Right Side: Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                aria-label="Search"
                className="border-2 border-[#9F9F9F] w-full sm:w-[280px] h-[60px] rounded-[13px] p-2 pl-10 focus:outline-none"
              />
              <Image
                src='/icons_search .png'
                alt=''
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="md:text-[24px] font-medium mb-6">Categories</h3>
              <ul className="space-y-3 text-gray-500 md:text-[15px]">
                {["Crafts (2)", "Design (8)", "Handmade (7)", "Interior (1)", "Wood (6)"].map((category, index) => (
                  <li key={index} className="hover:underline cursor-pointer">
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div>
              <h3 className="md:text-[24px] font-medium mb-6">Recent Posts</h3>
              <div className="space-y-5">
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
                      <p className="text-[12px] text-[#9F9F9F]">{post.date}</p>
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
        {[1, 2, 3, "Next"].map((item, index) => (
          <button key={index} className="bg-[#fdf5da] sm:px-6 px-4 sm:py-4 py-2 rounded-[10px] hover:bg-[#FBEBB5]">
            <span className="text-[20px] font-normal">{item}</span>
          </button>
        ))}
      </div>

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
}
