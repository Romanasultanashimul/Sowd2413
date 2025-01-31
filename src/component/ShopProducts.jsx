import React, { useContext, useEffect, useState } from 'react';
import { apiData } from './ContextApi';

const ShopProducts = () => {
  const data = useContext(apiData);
  console.log(data);

  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);
  const [sortOption, setSortOption] = useState('best'); // Default sorting option

  useEffect(() => {
    if (data && data.length > 0) {
      setCategory([...new Set(data.map((item) => item.category))]);
    } else {
      console.error('No data available in context');
    }
    setLoading(false);
  }, [data?.length]);

  const handleNextPage = () => {
    if (data && currentPage < Math.ceil(data.length / perPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const lastItemIndex = currentPage * perPage;
  const firstItemIndex = lastItemIndex - perPage;
  const currentPageProducts = loading ? [] : data?.slice(firstItemIndex, lastItemIndex) || [];

  // Sorting logic
  const sortedProducts = [...currentPageProducts].sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    return 0; // Default: Best Match (No Sorting)
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-[#1F1A7E]">
          Ecommerce Accessories & Fashion Item
        </h1>
        <p className="text-gray-500 text-sm">About {data ? data.length : 0} results</p>
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">Per Page:</span>
          <input
            type="number"
            defaultValue={perPage}
            className="border rounded px-2 py-1 w-16 ml-2"
            onChange={(e) => setPerPage(Number(e.target.value))}
          />
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center">
          <span className="text-sm text-gray-700">Sort By:</span>
          <select
            className="border rounded p-1 ml-2"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="best">Best Match</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid grid-cols-3 gap-6 mt-5">
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <div key={product.id} className="bg-white border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-josef font-bold text-gray-800">
                      {product.name}
                    </h3>
                    <div className="flex justify-center gap-x-2 pb-3">
                      <div className="clr w-5 h-1 rounded-full bg-[#05E6b7]"></div>
                      <div className="clr w-5 h-1 bg-[#F701A8]"></div>
                      <div className="clr w-5 h-1 bg-[#00009D] group-hover:bg-white"></div>
                    </div>
                    <div className="flex gap-1">
                      <p className="text-xl text-blue-600 font-bold">${product.price}</p>
                      <p className="text-sm text-red-600 font-semibold line-through">
                        $100
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No products available</p>
            )}
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handlePrevPage}
              className="border px-4 py-2 text-base text-blue-600"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="border px-4 py-2 text-base text-blue-600"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShopProducts;
