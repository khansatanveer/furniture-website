import { IoMdClose } from 'react-icons/io';
import Sidebar from './sidebarContent';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '@/app/action/action';

type SidebarCartProps = {
  Cartopen: boolean;
  setCartopen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SidebarCart: React.FC<SidebarCartProps> = ({ Cartopen, setCartopen }) => {
  const toggleCartOpen = () => {
    setCartopen(!Cartopen);
  };

  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  useEffect(() => {
    if (Cartopen) {
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowX = 'auto';
    }
  }, [Cartopen]);

  const handleRemoveItem = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this item!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Your item has been removed.', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  };

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  };

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout?',
      text: 'Please review your cart before checkout!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Your items have been successfully processed.', 'success');
      }
    });
  };

  return (
    <div
      className={`fixed top-0 right-0 max-w-[90vw] sm:max-w-[18rem] md:max-w-[25rem] w-full h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 overflow-hidden 
        ${Cartopen ? 'translate-x-0' : 'translate-x-full'}`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={toggleCartOpen} title="Close">
          <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
      </div>

      {/* Cart Content */}
      <h2 className="text-2xl text-center font-extrabold mb-4 font-serif">YOUR CART</h2>
      <div className="flex-grow p-6 overflow-y-auto">
        
        {/* Render the SidebarContent component here */}
        <Sidebar
          cartItems={cartItems}
          handleRemoveItem={handleRemoveItem}
          handleIncrement={handleIncrement}
          handledecrement={handleDecrement}
          total={calculatedTotal()}
          handleProceed={handleProceed}
          Cartopen={Cartopen}
          setCartopen={setCartopen}
        />
      </div>
    </div>
  );
};

export default SidebarCart;
