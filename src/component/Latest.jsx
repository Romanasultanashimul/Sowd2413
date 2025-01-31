import React, { useState, useContext } from 'react';
import { apiData } from './ContextApi';
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";

const Latest = () => {
    const data = useContext(apiData);
    const [category, setCategory] = useState("NewArrival"); // Initialize to show "New Arrival" by default

    // Handle category change
    const handleCategoryClick = (categoryName) => {
        setCategory(categoryName);
    };

    // Select products based on the category or default to New Arrivals
    const selectedCategory = data?.[category]?.slice(0, 6) || []; // Display only up to 6 products

    return (
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className="font-josef text-[46px] font-bold text-[#1A0B5B]">Latest Products</h2>
            </div>

            {/* Category buttons */}
            <div className="pb-12 flex justify-center">
                <div 
                    onClick={() => handleCategoryClick("NewArrival")} 
                    className={`text-[18px] font-lato px-5 hover:underline ${category === "NewArrival" ? "text-primary" : "text-[#3F509E]"}`}
                >
                    New Arrival
                </div>
                <div
                    onClick={() => handleCategoryClick("BestSeller")} 
                    className={`text-[18px] font-lato px-5 hover:underline ${category === "BestSeller" ? "text-primary" : "text-[#3F509E]"}`}
                >
                    Best Seller
                </div>
                <div 
                    onClick={() => handleCategoryClick("Featured")} 
                    className={`text-[18px] font-lato px-5 hover:underline ${category === "Featured" ? "text-primary" : "text-[#3F509E]"}`}
                >
                    Featured
                </div>
                <div 
                    onClick={() => handleCategoryClick("SpecialOffer")} 
                    className={`text-[18px] font-lato px-5 hover:underline ${category === "SpecialOffer" ? "text-primary" : "text-[#3F509E]"}`}
                >
                    Special Offer
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {selectedCategory.map((product) => (
                    <div key={product.id} className="bg-white p-4 shadow-md rounded-md text-center relative">
                        <div className="relative">
                            <img src={product.image} alt={product.name} className="w-full rounded-md" />
                            {product.sale && (
                                <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs font-bold">
                                    Sale
                                </span>
                            )}
                            {/* Action Icons */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                <FiShoppingCart className="text-xl cursor-pointer text-gray-600" />
                                <FaRegHeart className="text-xl cursor-pointer text-gray-600" />
                                <LuZoomIn className="text-xl cursor-pointer text-gray-600" />
                            </div>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-[#1D3178]">{product.name}</h3>
                        <div className="flex justify-center space-x-2 mt-2">
                            <p className="text-[#1D3178] font-bold">${product.price}</p>
                            {product.oldPrice && (
                                <p className="text-red-500 line-through">${product.oldPrice}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Latest;
