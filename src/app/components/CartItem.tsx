// components/CartItems.tsx
import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';


type CartItemsProps = {
  cartItems: Product[];
  handleRemoveItem: (id: string) => void;
  handleIncrement: (id: string) => void;
  handledecrement: (id: string) => void;
}

const CartItems: React.FC<CartItemsProps> = ({ cartItems, handleRemoveItem, handleIncrement, handledecrement }) => {
  return (
    <div className="flex-1 space-y-6">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex flex-col md:flex-row items-center bg-gray-100 shadow-md rounded-lg p-4"
        >
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.name}
              width={500}
              height={500}
              className="w-16 h-16 object-cover rounded-lg"
            />
          )}
          <div className="flex-1 md:ml-4 text-center md:text-left">
            <h2 className="text-lg font-semibold mb-1">{item.name}</h2>
            <p className="text-gray-600 mb-2">Price: ${item.price}</p>
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <button
                onClick={() => handledecrement(item._id)}
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                -
              </button>
              <span className="font-bold text-lg">{item.stockLevel}</span>
              <button
                onClick={() => handleIncrement(item._id)}
                className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
              >
                +
              </button>
            </div>
          </div>
          <button
            onClick={() => handleRemoveItem(item._id)}
            className="mt-4 md:mt-0 md:ml-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
