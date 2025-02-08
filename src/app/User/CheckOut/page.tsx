// import Image from 'next/image'
// import React from 'react'
// import Header from '../components/header'
// import Link from "next/link";
// import Bg from '@/app/public/Rectangle 1.png'
// import Logo from '@/app/public/Meubel House_Logos-05.png'
// import Arrow from '@/app/public/arrow-down.png'
// const page = () => {
//   return (
//     <div>
//       {/* header Section */}
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
//         <h1 className="text-[48px] font-medium text-black">Checkout</h1>
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
  
  
//   <span className="font-extralight text-stone-800 ">Checkout</span>
// </p>

//       </div>
//     </div>
//     </div>
// </section>

//             {/* Billing Section */}
// <div className="flex flex-col lg:flex-row mx-10 gap-6 mt-8">
//     <div className="w-full lg:w-1/2 md:mx-20">
//         <h3 className="font-semibold text-2xl mt-10 mb-8">Billing Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//                 <label htmlFor="firstName" className="block my-4">First Name</label>
//                 <input type="text" id="firstName" className="w-full border border-gray-500 rounded p-3" />
//             </div>
//             <div>
//                 <label htmlFor="lastName" className="block my-4">Last Name</label>
//                 <input type="text" id="lastName" className="w-full border border-gray-500 rounded p-3" />
//             </div>
//         </div>

//         <div className="mt-4">
//             <label htmlFor="companyName" className="block my-4 mt-6">Company Name (Optional)</label>
//             <input type="text" id="companyName" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="country" className="block my-4 mt-6">Country / Region</label>
//             <input type="text" id="country" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="address" className="block my-4 mt-6">Street Address</label>
//             <input type="text" id="address" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="gap-4 mt-4">
//             <div>
//                 <label htmlFor="town" className="block my-4 mt-6">Town / City</label>
//                 <input type="text" id="town" className="w-full border-gray-500 rounded border p-3" />
//             </div>
//             <div>
//                 <label htmlFor="province" className="block my-4 mt-6">Province</label>
//                 <input type="text" id="province" className="w-full border-gray-500 rounded border p-3" />
//             </div>
//         </div>

//         <div className="mt-4">
//             <label htmlFor="zip" className="block my-4 mt-6">ZIP Code</label>
//             <input type="text" id="zip" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="phone" className="block my-4 mt-6">Phone</label>
//             <input type="text" id="phone" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <label htmlFor="email" className="block my-4 mt-6">Email Address</label>
//             <input type="text" id="email" className="w-full border-gray-500 rounded border p-3" />
//         </div>

//         <div className="mt-4">
//             <input type="text" id="additionalInfo" placeholder="Additional Information" className="w-full border-gray-500 my-4 mt-6 rounded border p-3" />
//         </div>
//     </div>

//     {/* Order Summary */}
//     <div className="w-full lg:w-1/2 md:mx-20 mt-4 lg:mt-0">
//         <div className="mt-4">
//             <table className="w-full table-auto">
//                 <thead>
//                     <tr>
//                         <th className="py-2 text-left text-xl">Product</th>
//                         <th className="py-2 text-right text-xl">Subtotal</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td className="py-2 text-gray-500">Asgaard Sofa x 1</td>
//                         <td className="py-2 text-right">Rs: 250,000.00</td>
//                     </tr>
//                     <tr>
//                         <td className="py-2 font-semibold">Subtotal</td>
//                         <td className="py-2 text-right">Rs: 250,000.00</td>
//                     </tr>
//                     <tr className="border-b font-semibold">
//                         <td className="py-2">Total</td>
//                         <td className="py-2 text-yellow-700 text-right text-xl">Rs: 250,000.00</td>
//                     </tr>
//                 </tbody>
//             </table>
//         </div>

//         {/* Payment Method */}
//         <div className="flex items-center mt-4">

//             <label htmlFor="bankTransfer" className="text-md"><span className='font-extrabold text-5xl'>.</span>Direct Bank Transfer</label>
//         </div>
//         <p className="text-sm text-gray-400 mt-2">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
//         <div className="flex items-center mt-4 text-gray-400">
//             <input type="radio" id="cod" name="payment" className="mr-2" />
//             <label htmlFor="cod" className="text-md">Direct Bank Transfer</label>
//         </div>
//         <div className="flex items-center mt-4 text-gray-400">
//             <input type="radio" id="cod" name="payment" className="mr-2" />
//             <label htmlFor="cod" className="text-md">Cash On Delivery</label>
//         </div>
//         <p className="text-sm text-gray-600 mt-6">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
// <div className='justify-center items-center'>
//         <button className="mt-6 border border-black  hover:bg-black py-3 px-14 rounded-xl hover:text-white">Place Order</button>
//     </div>
// </div>
// </div>
// {/* Benefits Section */}
// <section className="bg-[#FAF4F4] py-16 ">
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
//     </div>
//   )
// }

// export default page




"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "@/app/action/action";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import { FaUser, FaMapMarkerAlt, FaCity, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";


export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stockLevel,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handlePlaceOrder = async () => {

  Swal.fire({
    title: ' Processing Order...!',
    text: 'Please wait a moment..',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Order Proceed',
    
  }).then(( result) => {
    if ( result.isConfirmed){
      if (validateForm()) {
        localStorage.removeItem('appliedDiscount');
        Swal.fire(
          'Success!',
          'Yourr Order Has Been Successfully Processed!',
          'success',
        );
      } 
      else {
        Swal.fire(
          'Error',
          'Please fill  the Fields before Processed.',
          'error'
        );
      }
    }
  });



    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      // toast.success("Order placed successfully!");
    } else {
      // toast.error("Please fill in all the fields.");
    }



 const orderData = {
  _type : 'order',
  firstName : formValues.firstName,
  lastName : formValues.lastName,
  address : formValues.address,
  city : formValues.city,
  zipcode: formValues.zipCode,
  phone : formValues.phone,
  email : formValues.email,
  cartItems : cartItems.map(item => ({
    _type : 'reference', 
    _ref : item._id
  })),
  total : total,
  discount : discount,
  orderDate : new Date().toISOString(),
 };

  console.log("Order Data:", orderData); // ✅ Debugging Step

  try {
    const response = await client.create(orderData);
    console.log("Order Created Successfully:", response); // ✅ Check response from Sanity
    Swal.fire("Success!", "Your order has been placed!", "success");
    localStorage.removeItem("appliedDiscount");
  } catch (error) {
    console.error("Failed to create order:", error);
    Swal.fire("Error", "Failed to process order. Please try again.", "error");
  }
};

  return (
    <div className={`min-h-screen bg-gray-50`}>
      {/* Breadcrumb */}
      <div className="mt-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 py-4">
            <Link
              href="/User/Cart"
              className="text-[#666666] hover:text-black transition text-sm"
            >
              Cart
            </Link>
            <CgChevronRight className="w-4 h-4 text-[#666666]" />
            <span className="text-sm">Checkout</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white border rounded-lg p-6 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 py-3 border-b"
                >
                  <div className="w-16 h-16 rounded overflow-hidden">
                    {item.image && (
                      <Image
                        src={urlFor(item.image).url()}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-500">
                      Quantity: {item.stockLevel}
                    </p>
                  </div>
                  <p className="text-sm font-medium">
                    ${item.price * item.stockLevel}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-500">Your cart is empty.</p>
            )}
            <div className="text-right pt-4">
              <p className="text-sm">
                Subtotal: <span className="font-medium">${subtotal}</span>
              </p>
              <p className="text-sm">
                Discount: <span className="font-medium">-${discount}</span>
              </p>
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Billing Information */}

<div className="bg-white border rounded-xl p-8 shadow-lg max-w-lg mx-auto space-y-6">
  <h2 className="text-2xl font-semibold text-gray-800 text-center">Billing Information</h2>

  {/* Name Fields */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="relative">
      <FaUser className="absolute left-3 top-3 text-gray-400" />
      <input
        id="firstName"
        placeholder="First Name"
        value={formValues.firstName}
        onChange={handleInputChange}
        className={`w-full border rounded-md p-2 pl-10 ${formErrors.firstName ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
      />
      {formErrors.firstName && <p className="text-sm text-red-500">Required</p>}
    </div>

    <div className="relative">
      <FaUser className="absolute left-3 top-3 text-gray-400" />
      <input
        id="lastName"
        placeholder="Last Name"
        value={formValues.lastName}
        onChange={handleInputChange}
        className={`w-full border rounded-md p-2 pl-10 ${formErrors.lastName ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
      />
      {formErrors.lastName && <p className="text-sm text-red-500">Required</p>}
    </div>
  </div>

  {/* Address */}
  <div className="relative">
    <FaMapMarkerAlt className="absolute left-3 top-3 text-gray-400" />
    <input
      id="address"
      placeholder="Address"
      value={formValues.address}
      onChange={handleInputChange}
      className={`w-full border rounded-md p-2 pl-10 ${formErrors.address ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
    />
    {formErrors.address && <p className="text-sm text-red-500">Required</p>}
  </div>
  {/* City */}
  <div className="relative">
  <FaCity className="absolute left-3 top-3 text-gray-400" />
  <input
    id="city"
    placeholder="City"
    value={formValues.city}
    onChange={handleInputChange}
    list="city-suggestions"
    className={`w-full border rounded-md p-2 pl-10 ${
      formErrors.city ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"
    }`}
  />
  {formErrors.city && <p className="text-sm text-red-500">Required</p>}

  {/* City Suggestions */}
  <datalist id="city-suggestions">
    <option value="Karachi" />
  </datalist>
</div>

  {/* Phone */}
  <div className="relative">
    <FaPhone className="absolute left-3 top-3 text-gray-400" />
    <input
      id="phone"
      placeholder="Phone"
      value={formValues.phone}
      onChange={handleInputChange}
      className={`w-full border rounded-md p-2 pl-10 ${formErrors.phone ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
    />
    {formErrors.phone && <p className="text-sm text-red-500">Required</p>}
  </div>

  {/* Zip Code */}
  <div className="relative">
    <FaLock className="absolute left-3 top-3 text-gray-400" />
    <input
      id="zipCode"
      placeholder="Zip Code"
      value={formValues.zipCode}
      onChange={handleInputChange}
      className={`w-full border rounded-md p-2 pl-10 ${formErrors.zipCode ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
    />
    {formErrors.zipCode && <p className="text-sm text-red-500">Required</p>}
  </div>

  {/* Email */}
  <div className="relative">
    <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
    <input
      id="email"
      placeholder="Email"
      value={formValues.email}
      onChange={handleInputChange}
      className={`w-full border rounded-md p-2 pl-10 ${formErrors.email ? "border-red-500" : "focus:ring-2 focus:ring-blue-400"}`}
    />
    {formErrors.email && <p className="text-sm text-red-500">Required</p>}
  </div>

  {/* Place Order Button */}
  
  <button
    className="w-full h-12 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white font-medium rounded-lg transition duration-300 shadow-md"
    onClick={handlePlaceOrder}
  >
    Place Order
  </button>
</div>

        </div> 
      </div>
    </div>
  );
}