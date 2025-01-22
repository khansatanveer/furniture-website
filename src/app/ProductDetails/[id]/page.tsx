import React from 'react'
import ProductDetailComponent from '@/app/components/ProductListing'
import { client } from '@/sanity/lib/client';

async function Product(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    category,
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
const ProductDetail = async () => {
    const products =await Product();
   return (
     <div>
       {<ProductDetailComponent  />}
     </div>
   )
 }
 export default ProductDetail
