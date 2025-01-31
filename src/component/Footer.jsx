import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (

<footer className='bg-[#EEEFFB] text-[#1D3178] '>

<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h1 className="text-2xl font-bold mb-4 font-josef mt-4">Hekto</h1>
          <div className="mb-2 flex">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="px-4 py-2 rounded-md border border-gray-300"
            />
            <button className="md:w-auto bg-pink-500 text-white px-2 py-0 mt-0 md:ml-2 rounded-md">
              Sign Up
            </button>
          </div>
          <div className='font-lato text-[#8A8FB9]'>
            <p className="text-sm">Contact Info</p>
            <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h2 className="font-bold text-lg mb-4 mt-4 font-josef">Categories</h2>
          <ul className="space-y-2 text-sm font-lato text-[#8A8FB9]">
            <li>Laptops & Computers</li>
            <li>Cameras & Photography</li>
            <li>Smart Phones & Tablets</li>
            <li>Video Games & Consoles</li>
            <li>Waterproof Headphones</li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h2 className="font-bold text-lg mb-4 mt-4 font-josef">Customer Care</h2>
          <ul className="space-y-2 text-sm font-lato text-[#8A8FB9]">
            <li>My Account</li>
            <li>Discount</li>
            <li>Returns</li>
            <li>Orders History</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h2 className="font-bold text-lg mb-4 mt-4 font-josef">Pages</h2>
          <ul className="space-y-2 text-sm font-lato text-[#8A8FB9]">
            <li>Blog</li>
            <li>Browse the Shop</li>
            <li>Category</li>
            <li>Pre-Built Pages</li>
            <li>Visual Composer Elements</li>
            <li>WooCommerce Pages</li>
          </ul>
        </div>
      </div>

  <div className="bg-[#E7E4F8] mt-auto py-4 flex ">  
    
    <div className="container mx-auto flex justify-between items-center">
    <div className="flex items-center text-sm text-[#9DA0AE]">
    <AiOutlineCopyrightCircle className='text-[#9DA0AE]'/>
    <p className='font-lato text-center text-[66%]'>Webecy - All Rights Reserved</p>
    </div>


  </div>
  <div className="flex space-x-1 mt-4 mr-8 md:mt-auto">
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-600" />
            <FaInstagramSquare className="text-xl cursor-pointer hover:text-pink-500" />
            <FaTwitterSquare className="text-xl cursor-pointer hover:text-blue-400" />
          </div>
          
</div>

</footer>

)
}

export default Footer
