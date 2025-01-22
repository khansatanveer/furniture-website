import Image from 'next/image'
import React from 'react'
import Header from '../components/header'
import Link from "next/link";
import Bg from '@/app/public/Rectangle 1.png'
import Logo from '@/app/public/Meubel House_Logos-05.png'
import Arrow from '@/app/public/arrow-down.png'
const page = () => {
  return (
    <div>
      {/* header Section */}
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
        <h1 className="text-[48px] font-medium text-black">Checkout</h1>
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
  
  
  <span className="font-extralight text-stone-800 ">Checkout</span>
</p>

      </div>
    </div>
    </div>
</section>

            {/* Billing Section */}
<div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
    <div className="w-full lg:w-1/2 md:mx-20">
        <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName" className="block my-4">First Name</label>
                <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
            </div>
            <div>
                <label htmlFor="lastName" className="block my-4">Last Name</label>
                <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
            </div>
        </div>

        <div className="mt-4">
            <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
            <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="mt-4">
            <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
            <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="mt-4">
            <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
            <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="gap-4 mt-4">
            <div>
                <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
                <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
            </div>
            <div>
                <label htmlFor="province" className="block my-4 mt-6">Province</label>
                <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
            </div>
        </div>

        <div className="mt-4">
            <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
            <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="mt-4">
            <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
            <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="mt-4">
            <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
            <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
        </div>

        <div className="mt-4">
            <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
        </div>
    </div>

    {/* Order Summary */}
    <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
        <div className="mt-4">
            <table className="w-full table-auto">
                <thead>
                    <tr>
                        <th className="py-2 text-left text-xl">Product</th>
                        <th className="py-2 text-right text-xl">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
                        <td className="py-2 text-right">Rs: 250,000.00</td>
                    </tr>
                    <tr>
                        <td className="py-2 font-semibold">Subtotal</td>
                        <td className="py-2 text-right">Rs: 250,000.00</td>
                    </tr>
                    <tr className="border-b font-semibold">
                        <td className="py-2">Total</td>
                        <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* Payment Method */}
        <div className="flex items-center mt-4">

            <label htmlFor="bankTransfer" className="text-md"><span className='font-extrabold text-5xl'>.</span>Direct Bank Transfer</label>
        </div>
        <p className="text-sm text-gray-400 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
        <div className="flex items-center mt-4 text-gray-400">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Direct Bank Transfer</label>
        </div>
        <div className="flex items-center mt-4 text-gray-400">
            <input type="radio" id="cod" name="payment" className="mr-2" />
            <label htmlFor="cod" className="text-md">Cash On Delivery</label>
        </div>
        <p className="text-sm text-gray-600 mt-6">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
<div className='justify-center items-center'>
        <button className="mt-6 border border-black  hover:bg-black py-3 px-14 rounded-xl hover:text-white">Place Order</button>
    </div>
</div>
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

export default page

