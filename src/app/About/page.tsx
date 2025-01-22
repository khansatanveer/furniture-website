import React from 'react'
import Arrow from '@/app/public/arrow-down.png'
import Bg from '@/app/public/Rectangle 1.png'
import Logo from '@/app/public/Meubel House_Logos-05.png'
import Link from "next/link";
import Image from 'next/image';
import Header from '@/app/components/header';
export default function pge() {
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
        <h1 className="text-[48px] font-medium text-black">About</h1>
        <p className="mt-1 mb-6 flex items-center text-[18px] px-12">
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
  
  <span className="font-extralight text-stone-800 ">About</span>
</p>

      </div>
    </div>
    </div>
</section>
    <div className='font-extrabold text-2xl text-center py-4 bg-gray-400'>
      HELLO I AM ABOUT PAGE
    </div>
    </div>
  )
}
