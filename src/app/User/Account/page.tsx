'use client';
import React from 'react';
import Arrow from '@/app/public/arrow-down.png'
import Bg from '@/app/public/Rectangle 1.png'
import Logo from '@/app/public/Meubel House_Logos-05.png'
import Link from "next/link";
import Image from 'next/image';
import Header from '@/app/components/header';

const AuthForm = () => {
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
        <h1 className="text-[48px] font-medium text-black">My account</h1>
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
  
  <span className="font-extralight text-stone-800 ">My account</span>
</p>

      </div>
    </div>
    </div>
</section>

<section>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen space-x-3 ">
      {/* Login Section */}
      <div className="w-full lg:w-1/2 p-6 max-w-[600px] border-hidden lg:mb-0 lg:mr-5">
        <h2 className="text-[36px] font-semibold mb-9 mt-24 ">Log In</h2>
        <form>
          {/* Username or Email */}
          <div className="mb-4">
            <label className="block text-[16px] font-medium mb-6">Username or email address</label>
            <input
              type="text"
              aria-label="Username or email address"
              className="border-[2px] border-[#9F9F9F] sm:w-[430px] sm:h-[75px] w-[265px] h-[65px] rounded-[12px] p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* Password */}
          <div className="mb-4">
            <label className="block text-[16px] font-medium py-6">Password</label>
            <input
              type="password"
              aria-label="Password"
              className=" border-[2px] border-[#9F9F9F] sm:w-[430px] sm:h-[75px] w-[265px] h-[65px] rounded-[12px] p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* Remember me */}
          <div className="flex items-center  space-x-6 py-8">
            <input type="checkbox" id="remember" className="w-[30px] h-[27px] border-[2px] border-[#9F9F9F]" />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
          </div>
          {/* Log In Button */}
          <div className="flex items-center justify-start mb-24">
  <button
    type="submit"
    className="text-[20px] font-medium border-[2px] border-black w-[215px] h-[64px] bg-white text-black rounded-[14px] hover:bg-gray-700 hover:text-white"
  >
    Log In
  </button>
  {/* for large */}
  <p className="text-[16px] font-light text-right cursor-pointer hover:text-gray-500 ml-4 hidden sm:block">
    Lost Your Password?
  </p>
</div>
{/* for small */}
<p className="text-[16px] font-light text-right cursor-pointer hover:text-gray-500 sm:hidden pr-[100px] mt-[-70px] mb-24">
    Lost Your Password?
  </p>
</form>
      </div>

      {/* Register Section */}
      <div className="w-[300px] sm:w-full lg:w-1/2 sm:p-10  p-4 max-w-[600px]  border-hidden    mb-6 lg:mb-0 lg:mr-0">
        <h2 className="text-[36px] font-semibold mb-9">Register</h2>
        <form>
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-[16px] font-medium mb-6">Email address</label>
            <input
              type="email"
              aria-label="Enter your email address"
              className="border-[2px] border-[#9F9F9F] sm:w-[430px] sm:h-[75px] w-[265px] h-[65px] rounded-[12px] p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
          {/* for large screen */}
          <p className="text-[16px] font-light text-black mb-7 tracking-widest sm:whitespace-nowrap hidden sm:block">
          A link to set a new password will be sent to your email <br/>address.
          </p>
          <p className="text-[16px] font-light text-black mb-4 tracking-widest sm:whitespace-nowrap  hidden sm:block">
          Your&nbsp;&nbsp;personal&nbsp;&nbsp;data&nbsp;&nbsp;will&nbsp;&nbsp;be&nbsp;&nbsp;&nbsp;used&nbsp;&nbsp;to&nbsp;&nbsp;support&nbsp;&nbsp;&nbsp;your
<br/>experience throughout this website, to manage access
<br/>to your account, and for other purposes described in our
<br/>

            <span className="font-bold cursor-pointer hover:underline">privacy policy.</span>
          </p>
          {/* for smalll screen */}
          <p className="text-[16px] font-light text-black mb-7 tracking-widest  sm:hidden ">
          A link to set a new password will be sent<br/> to your email address.
          </p>
          
          <p className="text-[16px] font-light text-black mb-4 tracking-widest  sm:hidden">
          Your personal data will<br/> be used to support your
experience throughout this website, to manage access
to your account, and for other purposes described in our<br/>


            <span className="font-bold cursor-pointer hover:underline">privacy policy.</span>
          </p>
          {/* Register Button */}
          <button
            type="submit"
            className="text-[20px] font-medium border-[2px] border-black w-[215px] h-[64px] bg-white text-black  rounded-[14px] hover:bg-gray-700 hover:text-white mt-10"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </section>

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
  );
};

export default AuthForm;
