import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const query = `*[_type == "product" && category == "Sofa"][0...1] | order(_createdAt desc) {
        _id,
        name,
        image
    }`;

    const data = await client.fetch(query);

    return data;
}

export default async function NewArrivals() {
    const data: Product[] = await getData();
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-8 gap-4 px-4 py-16">
            {data.map((product) => (
                <div key={product._id} className="flex flex-col md:flex-row items-center gap-8">
                    {/* Image on the left */}
                    <div className="md:w-[50%] h-auto flex justify-center">
                        <Link href={`Products/${product._id}`}>
                            <Image
                                src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                                alt={product.name}
                                height={700}
                                width={700}
                                className="max-w-full h-auto"
                            />
                        </Link>
                    </div>
                    {/* Text on the right */}
                    <div className="md:w-[50%] text-center md:text-left">
                        <h2 className="text-black font-[500] text-[17px] sm:text-[30px] lg:text-[36px] lg:px-10">
                            New Arrivals
                        </h2>
                        <h3 className="text-black font-extrabold text-[35px] md:text-[45px] ">
                            {product.name}
                        </h3>
                        <div className="px-9 mt-2">
                            <button className="h-[50px] lg:h-[70px] md:w-[200px] lg:w-[300px] w-[150px] border-2 border-black text-black hover:text-white  hover:bg-black text-[20px] 
                             sm:text-[23px]  font-medium leading-[36px]  mt-10 lg:mt-4 mb-10">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
