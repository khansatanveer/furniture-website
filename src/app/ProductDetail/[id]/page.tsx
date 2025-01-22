import React from 'react'
import ProductDetails from '@/app/components/ProductListing'
import { client } from '@/sanity/lib/client';

type Product = {
  category: string;
  _id: string;
  price: number;
  description: string;
  stockLevel: number;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  name: string;
  image: string;
};

async function Products(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
    description,
    _id,
    price,
 const products = await fetchProducts();
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    image
  }`;

  const products = await client.fetch(query);
return products
};
const ProductDetail = async (params:{_id:string}) => {
   const products = await Products();
  return (
    <div>
      {
        products.map((product:Product)=>(
        <ProductDetails product={product} key={product._id}/>
        ))
      }
    </div>
  )
}

export default ProductDetail ({_id:""})
