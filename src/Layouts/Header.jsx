import React, { useState } from "react";
import { BiHeart, BiShoppingBag, BiCart } from "react-icons/bi";
import { MdPerson } from "react-icons/md";
import { Link } from "react-router";
import { PiChatTextFill } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-b-gray-400 bg-white w-full">
        <div className="header-container flex flex-wrap items-center justify-between w-full container m-auto px-4 py-2">
          <div className="header-brand flex items-center mr-auto">
            <BiShoppingBag className="text-3xl text-gray-100 mr-2 bg-blue-500 rounded-md p-1" />
            <h1 className="text-blue-500 text-2xl font-bold">Brand</h1>
          </div>
          <button
            className="lg:hidden ms-auto text-2xl text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <FiMenu />
          </button>
          <div className="input hidden lg:flex w-full max-w-xl mx-6">
            <input
              type="search"
              className="border border-blue-300 p-2 rounded-l-md outline-0 w-full h-auto"
              name="search"
              id="search"
              placeholder="Search"
            />
            <select
              name="category"
              id="category"
              className="border-t border-b border-blue-300 p-2 outline-0 w-40"
              style={{ borderLeft: "none", borderRadius: 0 }}
            >
              <option value="">All category</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home</option>
            </select>
            <button
              className="bg-blue-500 text-white p-2 rounded-r-md w-28"
              type="submit"
            >
              Search
            </button>
          </div>
          <div
            className={`header-icons flex-col lg:flex-row flex items-center ms-auto gap-2 lg:gap-0 ${
              menuOpen ? "flex" : "hidden"
            } lg:flex bg-white lg:bg-transparent absolute lg:static top-full left-0 w-full lg:w-auto shadow lg:shadow-none py-4 lg:py-0`}
          >
            <div className="profile ms-5 grid place-items-center">
              <MdPerson className="text-2xl text-gray-700 mr-2" />
              <p className="text-xs lg:text-base">Profile</p>
            </div>
            <div className="message ms-5 grid place-items-center">
              <PiChatTextFill className="text-2xl text-gray-700 mr-2" />
              <p className="text-xs lg:text-base">Messages</p>
            </div>
            <div className="order ms-5 grid place-items-center">
              <BiHeart className="text-2xl text-gray-700 mr-2" />
              <p className="text-xs lg:text-base">Orders</p>
            </div>
            <div className="cart ms-5 grid place-items-center">
              <Link to="/cart">
                <BiCart className="text-2xl text-gray-700" />
                <p className="text-xs lg:text-base">My Cart</p>
              </Link>
            </div>
          </div>
          {/* Mobile Search Input */}
          <div className="input w-full mt-2 lg:hidden">
            <input
              type="search"
              className="border border-blue-300 p-2 rounded-l-md outline-0 w-2/3 h-auto"
              name="search"
              id="search-mobile"
              placeholder="Search"
            />
            <select
              name="category"
              id="category-mobile"
              className="border-t border-b border-blue-300 p-2 outline-0 w-auto"
              style={{ borderLeft: "none", borderRadius: 0 }}
            >
              <option value="">All category</option>
              <option value="clothing">Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="home">Home</option>
            </select>
            <button
              className="bg-blue-500 text-white p-2 rounded-r-md w-24"
              type="submit"
            >
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;