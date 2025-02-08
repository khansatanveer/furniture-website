import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";



async function getData() {
    const query = `*[_type == "product" && category ==  "Chair" ][0...2] | order(_createdAt desc) {
    _id,
    name,
    image
}`;

      const data = await client.fetch(query);

      return data;
}

export default async function products() {
    const data: Product[] = await getData();
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 py-12 h-auto gap-36">
                {data.map((product) => (
                    <div key={product._id}>
                        <div className="text-center flex flex-col items-center gap-4">
                            <Link href={`Products/${product._id}`}>
                                <Image
                                          src={urlFor(product.image).url()} // Convert ImageUrlBuilder to string URL
                                          alt={product.name}
                                          height={500} 
                                          width={500}
                                        className="h-[300px] w-[350px] object-cover hover:scale-105 transition-transform duration-300"
                                              />
                            </Link>
                            <h3 className="text-[20px] md:text-[35px] font-medium leading-[54px]">
                                {product.name}
                            </h3>
                            <a href="../Shop" rel="noopener noreferrer" aria-label="Profile">
              <button className="mt-[-24px] lg:mt-[-8px] text-[20px] sm:text-[26px]  lg:text-[28px] font-medium leading-[36px] hover:text-[24px] hover:sm:text-[30px]  hover:lg:text-[32px]">
                View More
                <hr className="mt-1  border border-black lg:w-[121px] w-[90px] mx-auto" />
              </button>
            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}