'use client'
import React, { useState, useEffect } from 'react';
import Pro from '../components/ProductListing';
import SearchFilter from '../components/SearchAndFilter';
import Pagination from '@/app/components/Pagination';
import Benefits from '../components/Benefits';
import { client } from '@/sanity/lib/client';
import Header from '../components/header';
import Image from 'next/image';
import Link from 'next/link';

async function fetchProducts(): Promise<{ allProducts: Product[] }> {
  const allProductsQuery = `*[_type == "product"]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    image,
  }`;

  const [allProducts] = await Promise.all([
    client.fetch(allProductsQuery)
  ]);

  return { allProducts };
}

const Shop = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetchProducts().then(({ allProducts}) => {
      setAllProducts(allProducts);
      setFilteredProducts(allProducts);
    });
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="bg-gray-50 w-full overflow-x-hidden">
      {/* Header Section */}
      <div className="bg-white ">
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
            <h1 className="text-[48px] font-medium text-black">Shop</h1>
            <p className="mt-1 mb-6 flex items-center text-[18px] px-3">
              <Link href="/Home" className="font-medium text-black">Home</Link>
              <Image
                src='/arrow-down.png'
                alt=''
                width={20}
                height={20}
                className="mx-2 text-black font-normal mt-2"
              />
              <span className="font-extralight text-stone-800">Shop</span>
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="py-4">
          <SearchFilter products={allProducts} onFilterChange={setFilteredProducts} />
        </div>
        
        {/* Product Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {currentProducts.map((product) => (
            <div key={product._id}>
              <Pro product={product} />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <section className="py-12">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredProducts.length}
            onPageChange={handlePageChange}
          />
        </section>

        
      
      </div>
      {/* Benefits Section */}
        
      <Benefits />
    </div>
  );
};

export default Shop;
