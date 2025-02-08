import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function getData() {
    const query = `*[_type == "product" && category ==  "Table" ][0...4] | order(_createdAt desc) {
        _id,
        name,
        price,
        image
    }`;

    const data = await client.fetch(query);

    return data;
}

export default async function products() {
    const data: Product[] = await getData();
    return (
        <div>
            <div className="container mx-auto text-center px-4">
                <h2 className="text-[36px] sm:text-[40px] lg:text-[48px] font-medium mb-4 mt-5">Top Picks For You</h2>
                <p className="text-[#9F9F9F] text-[16px] sm:text-[18px] lg:text-[20px] mb-10 px-4">
                    Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((product) => (
                        <div key={product._id}>
                            <div className="text-center">
                                <Link href={`Products/${product._id}`}>
                                    <Image
                                        src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                                        alt={product.name}
                                        height={500}
                                        width={500}
                                        className="h-[300px] w-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                                <p className="mt-5 font-[400] text-[16px] sm:text-[18px] lg:text-[25px]">{product.name}</p>
                                <p className="font-[500] text-[24px] sm:text-[26px] lg:text-[28px]">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Centering the View More button */}
                <div className="flex justify-center mt-10">
                    <a href="../Shop" rel="noopener noreferrer" aria-label="Profile">
                        <button className="h-[50px] text-center text-[24px] sm:text-[26px] lg:text-[28px] text-black font-medium 
                        leading-[36px] hover:text-[24px] hover:sm:text-[30px] hover:lg:text-[32px]">
                            View More
                            <hr className="mt-2 lg:mt-3 border border-black w-[120px] mx-auto mb-8" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}
