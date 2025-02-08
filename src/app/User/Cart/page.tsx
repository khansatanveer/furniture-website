// pages/cart.tsx or CartPage.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { getCartItems, removeFromCart, updateCartQuantity } from '../../action/action'
import Swal from 'sweetalert2';
import CartItems from '@/app/components/CartItem';
import OrderSummary from '@/app/components/OrderSummary'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemoveItem = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this item!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!!'
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id)
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Your item has been removed.', 'success')
      }
    });
  }

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems())
  }

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.stockLevel + 1);
    }
  }

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.stockLevel > 1) {
      handleQuantityChange(id, product.stockLevel - 1);
    }
  }

  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.stockLevel, 0);
  }

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to Checkout?',
      text: "Please review your cart before checkout!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success!', 'Your items have been successfully processed.', 'success')
      }
    });
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-5xl font-bold text-center mb-8">Shopping Cart</h1>

      {cartItems.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-8">
          <CartItems
            cartItems={cartItems}
            handleRemoveItem={handleRemoveItem}
            handleIncrement={handleIncrement}
            handledecrement={handleDecrement}
          />

          <OrderSummary
            total={calculatedTotal()}
            handleProceed={handleProceed}
          />
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty. Start shopping now!</p>
      )}
    </div>
  )
}

export default CartPage;
