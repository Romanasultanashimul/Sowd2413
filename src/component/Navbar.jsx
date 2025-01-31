import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [menuShow, setMenuShow] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  const handleDropdown = () => {
    setDropdownShow(!dropdownShow);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="py-4 z-50 bg-white shadow-md">
      <div>
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <img src={Logo} alt="logo.png" />
            </div>
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex gap-10 items-center font-lato text-blue-950">
                <li
                  className="flex gap-2 items-center relative group"
                  onMouseEnter={() => setDropdownShow(true)}
                  onMouseLeave={() => setDropdownShow(false)}
                >
                  <Link to="/" className="flex items-center text-primary gap-2">
                    Home <FaAngleDown />
                  </Link>
                  <ul
                    className={`absolute z-30 top-6 left-0 ${dropdownShow ? "block opacity-100" : "hidden opacity-0"} group-hover:opacity-100 transition-all duration-300 ease-in-out text-primary shadow-md border bg-white`}
                  >
                    <li className="hover:bg-slate-300 px-4 py-2">
                    <Link to="#" onClick={() => scrollToSection("latest-products")} className="block">
                      Latest Products
                      </Link>
                    </li>
                    <li className="hover:bg-slate-300 px-4 py-2">
                      <Link>Featured</Link>
                    </li>
                    <li className="hover:bg-slate-300 px-4 py-2">
                      <Link>Offer</Link>
                    </li>
                    <li className="hover:bg-slate-300 px-4 py-2">
                      <Link>Blog</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="*" className="text-[#0D0E43]">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link to="*" className="text-[#0D0E43]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/Blog" className="text-[#0D0E43]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/Shop" className="text-[#0D0E43]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/Contact" className="text-[#0D0E43]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden lg:flex items-center">
              <input
                type="text"
                className="border-2 outline-none w-64 h-9 pl-4"
              />
              <button className="h-9 w-20 bg-pink-500 flex justify-center items-center">
                <CiSearch className="text-white text-[25px]" />
              </button>
            </div>


            <div onClick={handleMenu} className="lg:hidden">
              {menuShow ? (
                <RxCross1 className="text-[25px]" />
              ) : (
                <FaBars className="text-[25px]" />
              )}
            </div>
          </div>


          {menuShow && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col gap-4 items-start font-lato text-blue-950">
                <li className="flex flex-col gap-2 items-start relative">
                  <Link
                    to="/"
                    className="flex items-center text-primary gap-2"
                    onClick={handleDropdown}
                  >
                    Home <FaAngleDown />
                  </Link>
                  {dropdownShow && (
                    <ul className="mt-2 bg-white shadow-md border w-full">
                      <li className="hover:bg-slate-300 px-4 py-2">
                      <Link to="#" onClick={() => scrollToSection("latest-products")} className="block">
                     Latest Products
                       </Link>
                      </li>
                      <li className="hover:bg-slate-300 px-4 py-2">
                        <Link>Featured</Link>
                      </li>
                      <li className="hover:bg-slate-300 px-4 py-2">
                        <Link>Offer</Link>
                      </li>
                      <li className="hover:bg-slate-300 px-4 py-2">
                        <Link>Blog</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="*" className="text-[#0D0E43]">
                    Pages
                  </Link>
                </li>
                <li>
                  <Link to="*" className="text-[#0D0E43]">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="*" className="text-[#0D0E43]">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/ShopProducts" className="text-[#0D0E43]">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[#0D0E43]">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-4 flex justify-center">
                <input
                  type="text"
                  className="border-2 outline-none w-full max-w-md h-9 pl-4"
                  placeholder="Search..."
                />
                <button className="h-9 w-16 bg-pink-500 flex justify-center items-center">
                  <CiSearch className="text-white text-[25px]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
