import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { AddToCard } from '@/app/action/action';
import Swal from 'sweetalert2';


const ProductListing = ({product} : {product:Product}) => {
  const handleAddToCart = (e: React.MouseEvent, product:Product) => {
    e.preventDefault()
    AddToCard(product)
    Swal.fire({
      title: `${product.name} added to cart`,
      position: 'top-right',
      icon: 'success',
      showConfirmButton: false
    });
  }


  return (

    <div
      className="flex flex-col items-center  shadow-md rounded-lg overflow-hidden bg-slate-200 ">
      <Link href={`Products/${product._id}`}>
        <Image
          src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
          alt={product.name}
          height={500} 
          width={500}
          className="h-[250px] w-screen object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>
      {/* Product Details */}
      <div className="p-4 text-center">
        {/* Product Name */}
        <p className="text-lg font-medium text-gray-800">{product.name}</p>
        {/* Product Price */}
        <h3 className="text-xl font-semibold text-gray-900 mt-2">${product.price}</h3>
        <button
        onClick={(e) => handleAddToCart(e, product)}
        className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
      >
        Add to Cart
      </button>
      
      </div>
    </div>
  )
}

export default ProductListing;