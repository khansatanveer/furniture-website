import React, { useState } from 'react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, onPageChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-center items-center space-x-2 sm:space-x-4 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-[#fdf5da] text-black rounded-md"
      >
        Prev
      </button>
      {[...Array(pageCount)].map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md ${currentPage === index + 1 ? 'bg-[#FBEBB5]' : 'bg-[#fdf5da]'}`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === pageCount}
        className="px-4 sm:px-6 py-2 sm:py-3 bg-[#fdf5da] text-black rounded-md"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
