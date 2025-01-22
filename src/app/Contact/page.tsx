'use client'
import React from "react";
import Header from '@/app/components/header';
import Vector from "@/app/public/Vector (2).png";
import Phone from "@/app/public/phone.png";
import Clock from "@/app/public/clock-fill.png";
import Image from "next/image";
import Link from "next/link";
import Bg from '@/app/public/Rectangle 1.png'
import Logo from '@/app/public/Meubel House_Logos-05.png'
import Arrow from '@/app/public/arrow-down.png'
const Contact = () => {
  return (
    <div>
      <div className="h-[100px]">
        <Header />
      </div>
      <section className="relative">
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
        <h1 className="text-[48px] font-medium text-black">Contact</h1>
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
  
  <span className="font-extralight text-stone-800 ">Contact</span>
</p>

      </div>
    </div>
    </div>
</section>
      {/* Contact Section */}
      <section className="md:w-[500px] ">
        <div className="container mx-auto sm:px-4    py-16">
          <h2 className="text-center  text-[36px]  md:ml-[220px] lg:mr-[-720px]  font-semibold">Get In Touch With Us</h2>
          <p className="text-center    md:mr-[-220px] lg:mr-[-550px] text mt-4 max-w-2xl sm:mx-auto lg:mx-auto text-[#9F9F9F]">
            For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-52 lg:gap-[100px] gap-14 sm:gap-[0px] sm:text-center md:text-left  mt-32">
            {/* Contact Details */}
            <div className="  w-full sm:w-[400px] md:h-[537px] md:w-[393px] lg:h-[550px] lg:w-[410px] mx-auto space-y-9 lg:ml-[190px]">
              <div className="flex items-start">
                <Image src={Vector}
                alt="" 
                className="lg:text-3xl md:text-2xl text-2xl mt-1 mr-8"/>
                <div >
                  <h1 className="lg:text-[24px] md:text-[22px] text-[20px]  font-medium text-black">Address</h1>
                  <p className="lg:text-[20px] md:text-[15px] text-[14px]">236 5th SE Avenue, New<br /> York NY10000, United <br />States</p>
                </div>
              </div>
              <div className="flex items-start">
                <Image src={Phone} alt=""
                 className="lg:text-3xl md:text-2xl text-2xl mt-1 mr-8"/>
                <div >
                  <h1 className="lg:text-[24px] md:text-[22px] text-[20px] font-medium text-black">Phone</h1>
                  <p className="lg:text-[20px] md:text-[15px] text-[14px]">Mobile: +(84) 546-6789<br />
                    Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start">
              <Image src={Clock} alt=""
                 className="lg:text-3xl md:text-2xl text-2xl mt-1 mr-8"/>

                <div >
                  <h1 className=" lg:text-[24px] md:text-[22px] text-[20px] font-medium text-black">Working Time</h1>
                  <p className="lg:text-[20px]md:text-[15px] text-[14px]"> Monday-Friday: 9:00 -<br /> 22:00<br />
                    Saturday-Sunday: 9:00 -<br /> 21:00</p>
                </div>
              </div>
            </div>

            {/* contact form */}
            <form className="w-full px-6  sm:mx-auto lg:ml-[350px] md:mr-[200px]">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[16px] font-medium text-black mb-4">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Abc"
                  className="px-6 border-[1px] text-[16px] font-normal text-[#9F9F9F] 
                 border-[#9F9F9F] rounded-[10px] lg:w-[490px] md:w-[300px] h-[65px] 
                 focus:outline-none focus:ring-1 focus:ring-[#9F9F9F]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-[16px] font-medium text-black mb-4">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Abc@def.com"
                  className="px-6 border-[1px] text-[16px] font-normal text-[#9F9F9F] 
                 border-[#9F9F9F] rounded-[10px] lg:w-[490px] md:w-[300px] h-[65px] 
                 focus:outline-none focus:ring-1 focus:ring-[#9F9F9F]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-[16px] font-medium text-black mb-4">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="This is an optional"
                  className="px-6 border-[1px] text-[16px] font-normal text-[#9F9F9F] 
                 border-[#9F9F9F] rounded-[10px] lg:w-[490px] md:w-[300px] h-[65px] 
                 focus:outline-none focus:ring-1 focus:ring-[#9F9F9F]"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[16px] font-medium text-black mb-4">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Hi! I’d like to ask about"
                  className="px-6 py-6 border-[1px] text-[16px] font-normal text-[#9F9F9F] 
                 border-[#9F9F9F] rounded-[10px] lg:w-[490px] md:w-[300px] w-[270px] h-[120px] 
                 focus:outline-none focus:ring-1 focus:ring-[#9F9F9F]"
                ></textarea>
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="border-[1px] border-black  rounded-[14px] w-[150px] h-[48px]  md:w-[200px] md:h-[48px] lg:w-[237px] lg:h-[48px]  text-black hover:bg-gray-100 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#FAF4F4] py-16 ">
        <div className="container mx-auto px-4 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-[25px]  lg:text-[30px] md:text-[25px] font-medium ">Free Delivery</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">For all orders over $50, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">90 Days Return</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">If goods have problems, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="text-[25px] md:text-[25px] font-medium">Secure Payment</h3>
            <p className="text-[16px] lg:text-[20px] md:text-[16px] font-normal mt-2 text-[#9F9F9F]">100% secure payment, consectetur adipiscing elit.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
