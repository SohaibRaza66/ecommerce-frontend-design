import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="top-0 z-40 border-b border-b-gray-400 bg-white">
        <div className="navbar-container flex items-center justify-between w-full container m-auto pt-4 pb-4 px-4">
          <div className="flex items-center">
            <button
              className="lg:hidden text-2xl mr-2 rounded-md p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center">
              <Link to={"/products"}>
                <li className="mx-4 cursor-pointer">All Categories</li>
              </Link>
              <li className="mx-4 cursor-pointer">Hot Offers</li>
              <li className="mx-4 cursor-pointer">Gift Boxes</li>
              <li className="mx-4 cursor-pointer">Projects</li>
              <li className="mx-4 cursor-pointer">Menu Item</li>
              <li className="mx-4 cursor-pointer">
                Help <MdKeyboardArrowDown className="inline" />
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="language hidden lg:block">
              <p>
                English, USD <MdKeyboardArrowDown className="inline" />
              </p>
            </div>
            <div className="ship ms-2 hidden lg:block">
              <p>
                Ship to <img src="DE@2x.jpg" className="inline w-8" alt="" />
              </p>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-white border-t border-gray-200 shadow transition-all ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col px-6 py-4 gap-2">
            <Link to={"/products"}>
              <li className="py-2 cursor-pointer border-b">All Categories</li>
            </Link>
            <li className="py-2 cursor-pointer border-b">Hot Offers</li>
            <li className="py-2 cursor-pointer border-b">Gift Boxes</li>
            <li className="py-2 cursor-pointer border-b">Projects</li>
            <li className="py-2 cursor-pointer border-b">Menu Item</li>
            <li className="py-2 cursor-pointer border-b">
              Help <MdKeyboardArrowDown className="inline" />
            </li>
            <li className="py-2 cursor-pointer border-b">
              English, USD <MdKeyboardArrowDown className="inline" />
            </li>
            <li className="py-2 cursor-pointer">
              Ship to <img src="DE@2x.jpg" className="inline w-8" alt="" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;