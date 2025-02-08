import React from 'react'
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { RiDeleteBinLine } from 'react-icons/ri';

type SidebarProps = {
    cartItems: Product[];
    handleRemoveItem: (id: string) => void;
    handleIncrement: (id: string) => void;
    handledecrement: (id: string) => void;
    total: number;
    handleProceed: () => void;
    Cartopen: boolean;
    setCartopen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const CartItems: React.FC<SidebarProps> = ({ 
    cartItems,
     handleRemoveItem,
      handleIncrement,
       handledecrement,
       total, 
       handleProceed
       
     }) => {
  return (
    <div>
    <div className="flex-1 space-y-6">
      {cartItems.map((item) => (
        <div
          key={item._id}
          className="flex flex-start justify-between py-4 boder-b"
        >
            <div className='flex items-start'>
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.name}
              width={100}
              height={100}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
          )}
          <div className="flex-1 md:ml-4 text-center md:text-left">
            <h2 className="text-xl font-semibold ">{item.name}</h2>
            <p className="text-gray-500 mb-2  ">Price: ${item.price}</p>
            <div className="flex items-center mt-2">
              <button
                onClick={() => handledecrement(item._id)}
                className="px-2 py-1 border  rounded text-xl font-medium"
              >
                -
              </button>
              <span className="mx-4 text-lg">{item.stockLevel}</span>
              <button
                onClick={() => handleIncrement(item._id)}
                className="px-2 py-1 border  rounded text-xl font-medium"
              >
                +
              </button>
              <button
            title="Remove item"
            onClick={() => handleRemoveItem(item._id)}
            
          >
            <RiDeleteBinLine
            className=" w-7 h-7 text-red-600 ml-2"/>
          </button>
            </div>
          </div> 
          </div>
       </div>
      ))}
    </div>
    {/* Checkout section */}
    <div className="p-5 bg-slate-300 sticky bottom-0 ">
      <h2 className="text-xl font-bold mb-2 text-center">ORDER SUMMARY</h2>
      <div className="text-lg mb-1">Total: <span className="font-bold">${total.toFixed(2)}</span></div>
      <button
        onClick={handleProceed}
        className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
      >
        Proceed to Checkout
      </button>
      <p className="text-sm tracking-tighter text-gray-600 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
    </div>
</div>
  );
};

export default CartItems;
