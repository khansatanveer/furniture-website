// components/OrderSummary.tsx
import React from 'react';

type OrderSummaryProps = {
  total: number;
  handleProceed: () => void;
};

const OrderSummary: React.FC<OrderSummaryProps> = ({ total, handleProceed }) => {
  return (
    <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <div className="text-lg mb-2">Total: <span className="font-bold">${total.toFixed(2)}</span></div>
      <button
        onClick={handleProceed}
        className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
