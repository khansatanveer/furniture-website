import React, { useState } from 'react';

interface SearchFilterProps {
  products: Product[];
  onFilterChange: (filteredProducts: Product[]) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ products, onFilterChange }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');

  const categories = Array.from(new Set(products.map((product) => product.category)));
  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: '$0 - $50', min: 0, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: '$200 - $500', min: 200, max: 500 },
    { label: '$500+', min: 500, max: Infinity },
  ];

  const handleFilter = () => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

      const priceRange = priceRanges.find((range) => range.label === selectedPriceRange);
      const matchesPrice =
        priceRange && product.price >= priceRange.min && product.price <= priceRange.max;

      return matchesSearch && matchesCategory && matchesPrice;
    });

    onFilterChange(filtered);
  };

  const resetFilters = () => {
    setSearchText('');
    setSelectedCategory('');
    setSelectedPriceRange('');
    onFilterChange(products);
  };

  return (
    <div className="bg-[#FAF4F4] py-4 px-6 flex flex-wrap items-center gap-4 shadow-md rounded-md">
      {/* Search Input */}
      <div className="flex-grow">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search products..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
      </div>

      {/* Category Dropdown */}
      <div>
        <label htmlFor="category-select" className="sr-only">Category</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range Dropdown */}
      <div>
        <label htmlFor="price-range-select" className="sr-only">Price Range</label>
        <select
          id="price-range-select"
          value={selectedPriceRange}
          onChange={(e) => setSelectedPriceRange(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {priceRanges.map((range) => (
            <option key={range.label} value={range.label}>
              {range.label}
            </option>
          ))}
        </select>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleFilter}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Apply
        </button>
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchFilter;
