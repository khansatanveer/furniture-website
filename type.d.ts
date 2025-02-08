interface Product {
    category: string;
    _id: string;
    price: number;
    description: string;
    stockLevel: number;
    imagePath?: string; // Optional
    discountPercentage?:number; // Optional
    isFeaturedProduct?: number; // Changed to boolean (likely it's not a number)
    name: string;
    image: string; 
    images: string[];
    quantity?: number;// Can also be a File if it's a file object
  }


  
