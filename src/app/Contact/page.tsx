'use client'
import React from "react";
import Header from '@/app/components/header';
import Image from "next/image";
import Link from "next/link";
import Benefits from "../components/Benefits";

const Contact = () => {
  return (
    <div className="overflow-x-hidden w-full">
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
            <h1 className="text-[48px] font-medium text-black">Contact</h1>
            <p className="mt-1 mb-6 flex items-center text-[18px] px-3">
              <Link href="/Home" className="font-medium text-black">Home</Link>
              <Image
                src='/arrow-down.png'
                alt=''
                width={20}
                height={20}
                className="mx-2 text-black font-normal mt-2"
              />
              <span className="font-extralight text-stone-800">Contact</span>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-center text-[36px] font-semibold">Get In Touch With Us</h2>
        <p className="text-center max-w-2xl mx-auto text-gray-500 mt-4">
          For More Information About Our Product & Services. Please Feel Free To Drop Us<br />
          An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24 mt-16">
          {/* Contact Details */}
          <div className="w-full space-y-9 mx-auto">
            {[
              { icon: '/Vector (2).png', title: 'Address', text: '236 5th SE Avenue, New York NY10000, United States' },
              { icon: '/phone.png', title: 'Phone', text: 'Mobile: +(84) 546-6789\nHotline: +(84) 456-6789' },
              { icon: '/clock-fill.png', title: 'Working Time', text: 'Monday-Friday: 9:00 - 22:00\nSaturday-Sunday: 9:00 - 21:00' }
            ].map((item, index) => (
              <div key={index} className="flex items-start">
                <Image src={item.icon} width={20} height={20} alt="" className="mt-1 mr-4" />
                <div>
                  <h1 className="text-[24px] font-medium text-black">{item.title}</h1>
                  <p className="text-[18px] text-gray-700 whitespace-pre-line">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form className="w-full max-w-lg mx-auto">
            {[
              { label: 'Your name', id: 'name', type: 'text', placeholder: 'Abc' },
              { label: 'Email address', id: 'email', type: 'email', placeholder: 'Abc@def.com' },
              { label: 'Subject', id: 'subject', type: 'text', placeholder: 'This is an optional' }
            ].map((field, index) => (
              <div key={index} className="mb-6">
                <label htmlFor={field.id} className="block text-[16px] font-medium text-black mb-2">{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500"
                />
              </div>
            ))}

            <div className="mb-6">
              <label htmlFor="message" className="block text-[16px] font-medium text-black mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Hi! I’d like to ask about"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-gray-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 border border-black text-xl font-medium rounded-lg text-black hover:text-white hover:bg-black focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />
    </div>
  );
};

export default Contact;
