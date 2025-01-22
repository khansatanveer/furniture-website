// import React, { useState } from 'react';
// import Image from 'next/image';
// // import Filter from '/path/to/filter/icon'; // replace with your filter icon path
// // import Round from '/path/to/round/icon'; // replace with your round view icon path
// // import View from '/path/to/view/icon'; // replace with your view icon path

// const FilterBar = () => {
//   const [itemsPerPage, setItemsPerPage] = useState(8);
//   const [sortOption, setSortOption] = useState('Default');

//   return (
//     <div className="flex flex-wrap items-center justify-between gap-4 mt-10 h-[90px] md:px-8 bg-[#FAF4F4] text-black">
//       {/* Left Section */}
//       <div className="flex items-center md:gap-4 mt-5 md:mt-0 gap-2 sm:gap-3">
//         {/* Filter Button */}
//         <button
//           onClick={() => alert('Filter modal opened!')}
//           className="flex md:ml-12 sm:ml-4 items-center text-sm md:gap-6 gap-2 font-medium"
//         >
//           <Image
//             src='/filter.png'
//             alt="filter"
//             width={20}
//             height={20}
//             className="text-black md:w-7 w-5"
//           />
//           <span className="font-medium text-[16px] sm:text-[17px] md:text-[20px]">Filter</span>
//         </button>

//         {/* View Toggle Buttons */}
//         <div className="flex sm:space-x-2">
//           {/* Grid View */}
//           <Image
//             src='/big-round.png'
//             alt="round view"
//             width={40}
//             height={40}
//             className="w-5 md:w-full"
//           />

//           {/* List View */}
//           <Image
//             src='/view-list.png'
//             alt="view list"
//             width={40}
//             height={40}
//             className="w-5 md:w-full"
//           />
//         </div>

//         {/* Divider (hidden on small screens) */}
//         <div className="ml-1 sm:hidden w-[2px] h-5 bg-[#9F9F9F]" />

//         {/* Divider (hidden on large screens) */}
//         <div className="hidden sm:block w-[3px] h-9 bg-[#9F9F9F]" />

//         {/* Showing Results Text */}
//         <p className="text-black sm:text-[14px] md:text-[16px] font-normal hidden sm:block">
//           Showing 1–{itemsPerPage} of 32 results
//         </p>
//       </div>

//       {/* Small Screen Results Text */}
//       <p className="text-[14px] text-black sm:hidden w-full mt-[-50px] text-right">
//         Showing 1–{itemsPerPage} of 32 results
//       </p>

//       {/* Right Section */}
//       <div className="flex items-center mt-[-20px] sm:mt-[0px] md:mt-[0px]">
//         {/* Items Per Page Dropdown */}
//         <div className="flex items-center sm:mb-[-20px] md:mb-[0px] sm:mr-[175px] md:mr-0">
//           <label htmlFor="itemsPerPage" className="md:text-[20px] text-[15px] font-normal">
//             Show
//           </label>
//           <select
//             id="itemsPerPage"
//             value={itemsPerPage}
//             onChange={(e) => setItemsPerPage(Number(e.target.value))}
//             className="md:w-16 md:h-14 w-10 h-8 border-hidden rounded text-[#9F9F9F] text-center focus:outline-none"
//           >
//             <option value={8}>8</option>
//             <option value={16}>16</option>
//           </select>
//         </div>
//       </div>

//       {/* Sort By Dropdown */}
//       <div className="flex items-center ml-32 sm:mt-[-90px] sm:ml-[470px] md:ml-0 mt-[-60px] md:mt-[0px] lg:mr-12">
//         <label htmlFor="itemsPerPage" className="md:text-[20px] text-[15px] font-normal">
//           Sort by
//         </label>
//         <select
//           id="itemsPerPage"
//           value={sortOption}
//           onChange={(e) => setSortOption(e.target.value)}
//           className="md:w-44 md:h-14 w-24 h-8 border-hidden rounded text-[#9F9F9F] md:text-left px-2 focus:outline-none"
//         >
//           {['Default', 'Price: Low to High', 'Price: High to Low', 'Popularity', 'Rating'].map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default FilterBar;
import React, { useState } from 'react';
import Image from 'next/image';

interface FilterBarProps {
  onFilterChange: (itemsPerPage: number, sortOption: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const [sortOption, setSortOption] = useState('Default');

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value);
    setItemsPerPage(value);
    onFilterChange(value, sortOption);
  };

  const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSortOption(value);
    onFilterChange(itemsPerPage, value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mt-10 h-[90px] md:px-8 bg-[#FAF4F4] text-black">
      {/* Left Section */}
      <div className="flex items-center md:gap-4 mt-5 md:mt-0 gap-2 sm:gap-3">
        {/* Filter Button */}
        <button
          onClick={() => alert('Filter modal opened!')}
          className="flex md:ml-12 sm:ml-4 items-center text-sm md:gap-6 gap-2 font-medium"
        >
          <Image
           src='/filter.png'
                       alt="filter"
                       width={20}
                       height={20}
            className="text-black md:w-7 w-5"
          />
          <span className="font-medium text-[16px] sm:text-[17px] md:text-[20px]">Filter</span>
        </button>

        {/* View Toggle Buttons */}
        <div className="flex sm:space-x-2">
          <Image
             src='/big-round.png'
            alt="round view"
            width={20}
                       height={20}
            className="w-5 md:w-full"
          />
          <Image
            src='/view-list.png'
            alt="view list"
            width={20}
                       height={20}
            className="w-5 md:w-full"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center mt-[-20px] sm:mt-[0px] md:mt-[0px]">
        {/* Items Per Page Dropdown */}
        <div className="flex items-center sm:mb-[-20px] md:mb-[0px] sm:mr-[175px] md:mr-0">
          <label htmlFor="itemsPerPage" className="md:text-[20px] text-[15px] font-normal">
            Show
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="md:w-16 md:h-14 w-10 h-8 border-hidden rounded text-[#9F9F9F] text-center focus:outline-none"
          >
            <option value={8}>8</option>
            <option value={16}>16</option>
          </select>
        </div>

        {/* Sort By Dropdown */}
        <div className="flex items-center ml-32 sm:mt-[-90px] sm:ml-[470px] md:ml-0 mt-[-60px] md:mt-[0px] lg:mr-12">
          <label htmlFor="itemsPerPage" className="md:text-[20px] text-[15px] font-normal">
            Sort by
          </label>
          <select
  aria-label="Sort by"
  value={sortOption}
  onChange={handleSortOptionChange}
  className="md:w-44 md:h-14 w-24 h-8 border-hidden rounded text-[#9F9F9F] md:text-left px-2 focus:outline-none"
>
            {['Default', 'Price: Low to High', 'Price: High to Low', 'Popularity', 'Rating'].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
