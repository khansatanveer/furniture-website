'use client';
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import ImageGallery from "@/app/components/ImageGallery"; // Import ImageGallery component
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Star, Tag, Truck } from "lucide-react";
import { use } from "react"; // Import use from React
import Header from "@/app/components/header";

// Fetch product details based on the ID
async function products(id: string) {
  const query = `*[ _type == "product" && _id == $id]{
    name,
    "id": _id,
    price,
    description,
    category,
    discountPercentage,
    "image": image.asset._ref
  }[0]`;

  const data = await client.fetch(query, { id });

  return data;
}

// The main ProductPage component
export default function ProductPageWrapper({
  params,
}: {
  params: Promise<{ id: string }>; // params is now a Promise
}) {
  const { id } = use(params); // Unwrapping params with React.use()
  
  return <ProductPageContent id={id} />;
}

function ProductPageContent({ id }: { id: string }) {
  const [data, setData] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const productData = await products(id);
      setData(productData);
      setSelectedImage(productData.image);
    }
    fetchData();
  }, [id]);

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-600">Loading...</h1>
      </div>
    );
  }

  return (
    <div>
    <div>
      <div>
        <Header/>
      </div>
      <div className="bg-white ">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2"> 

            {/* Image Gallery */}
            <div className="grid gap-4 lg:grid-cols-5 mt-5">
              <ImageGallery
                images={[data.image, data.image, data.image]} 
                selectedImage={selectedImage}
                onSelectImage={(img) => setSelectedImage(img)} 
              />
              <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
                <Image
                  src={selectedImage ? urlFor(selectedImage).url() : ''}
                  alt={data.name}
                  width={200}
                  height={200}
                  className="h-[570px] w-full object-cover object-center"
                />

                {/* Discount Badge + Tag Icon in Column */}
                <div className="absolute left-0 top-0 flex flex-row items-start">
                  <span className="rounded-br-lg bg-red-500 px-4 py-2 text-base uppercase tracking-wider text-white">
                    %{data.discountPercentage}
                  </span>
                  <Tag className="h-8 w-8 text-gray-900 mt-8" />
                </div>
              </div>
            </div>

            <div className="md:py-8 mt-8">
              <div className="mb-2 md:mb-3">
                <span className="mb-0.5 inline-block text-2xl text-gray-500 font-serif">
                  {data.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 ">
                  {data.name}
                </h2>
              </div>

              <div className="mb-6 flex items-center gap-3 md:mb-10">
                <button className='rounded-full gap-x-2 py-2 px-4 bg-red-200 '>
                  <span className="text-base flex flex-row gap-2 ">
                    4.2 
                    <Star className="h-5 w-5 bg"/>
                  </span>
                </button>
                <span className="text-base text-gray-500">
                  56 Ratings
                </span>
              </div>

              <div className="mb-4">
                <div className="flex items-end gap-2 ">
                  <span className="text-2xl font-bold text-gray-800 md:text-3xl font-serif">
                    ${data.price}
                  </span>
                  <span className="mb-0.5 text-red-500 line-through text-xl">
                    ${data.price % 7}
                  </span>
                </div>
                <span className="text-base text-gray-500">
                  Incl. Vat plus shipping 
                </span>
              </div>

              <div className="mb-6 flex items-center gap-2 text-gray-500">
                <Truck className="w-6 h-6 "/>
                <span className="text-base">4-6 Day Shipping</span>
              </div>

              <p className="mt-8 mb-8 text-2xl text-gray-900 tracking-wide font-semibold font-serif">{data.description}</p>

              <div className="flex gap-2.5 font-serif">
                <button
                  className="px-5 py-3 text-lg font-semibold text-black bg-gray-300 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none">
                  AddToCart
                </button> 
                <button
                  className="px-5 py-3 text-lg font-semibold text-black bg-gray-300 rounded-lg shadow-lg hover:bg-gray-400 focus:ring-4 focus:ring-gray-200 focus:outline-none">
                  CheckOut Now
                </button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  );
}
