import React from 'react'
import { CiMail} from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaAngleDown, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
      <header className='bg-[#7E33E0] text-white py-3 font-josef'>  
      <div className="container mx-auto">
      <div className="flex justify-between">
        <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
                  <CiMail/>
                  <p>mhhasanul@gmail.com</p>
            </div>
            <div className="flex items-center gap-2">
            <IoIosCall />
            <p>(12345)67890</p>
            </div>
        </div>
        <div className="">
         <ul className='flex items-center gap-5'>
            <li className='flex items-center gap-2'> 
                <select name="" id="" className='bg-transparent'>
                    <option classNam="bg-primary" value="">English <FaAngleDown /></option>
                    <option classNam="bg-primary" value="">Bangla <FaAngleDown /></option>
                    <option classNam="bg-primary" value="">Arabic <FaAngleDown /></option>
                </select></li>
            <li className='flex items-center gap-2'>
                <select name="" id="" className='bg-transparent'>
                    <option classNam="bg-[#7E33E0] font-black" value="">USD <FaAngleDown /></option>
                    <option classNam="bg-[#7E33E0] font-black" value="">BDT <FaAngleDown /></option>
                    <option classNam="bg-[#7E33E0] font-black" value="">Riyal<FaAngleDown /></option>
                </select>
            </li>
            <li className='flex items-center gap-2'><Link to="/LogIn"> Login</Link><FaRegUser /> </li>
            <li className='flex items-center gap-2'>Wishlist <FaRegHeart /></li>
            <li className='flex items-center gap-2'><IoCart className='font={100px] font-bold'/></li>
         </ul>
        </div>
      </div>
      
    </div>
    </header>
  )
}

export default Header
