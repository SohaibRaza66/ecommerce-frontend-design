import React from "react";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-b-gray-400 bg-white">
        <div className="navbar-container flex items-center justify-between w-full container m-auto pt-4 pb-4">
          <div className="flex items-center">
            <FaBars className="text-2xl mr-2 rounded-md p-1" />
            <ul className="flex items-center">
              <Link to={"/products"}><li className="mx-4">All Categories</li></Link>
              <li className="mx-4">Hot Offers</li>
              <li className="mx-4">Gift Boxes</li>
              <li className="mx-4">Projects</li>
              <li className="mx-4">Menu Item</li>
              <li>
                Help <MdKeyboardArrowDown className="inline" />
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="language">
              <p>
                English, USD <MdKeyboardArrowDown className="inline" />
              </p>
            </div>
            <div className="ship ms-2">
              <p>
                Ship to <img src="DE@2x.jpg" className="inline w-8" alt="" />
              </p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
