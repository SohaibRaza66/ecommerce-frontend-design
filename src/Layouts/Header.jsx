import React from "react";
import { BiHeart, BiShoppingBag, BiCart } from "react-icons/bi";
import { MdPerson } from "react-icons/md";
import { PiChatTextFill } from "react-icons/pi";
const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-b-gray-400 bg-white">
        <div className="header-container flex items-center justify-center-safe w-full container m-auto">
          <div className="header-brand flex mr-auto">
            <BiShoppingBag className="text-3xl text-gray-100 mr-2 bg-blue-500 rounded-md p-1" />
            <h1 className="text-blue-500 text-2xl mr-auto font-bold">Brand</h1>
          </div>
          <div className="input flex w-full max-w-xl">
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
          <div className="header-icons flex items-center ms-auto">
            <div className="profile ms-5 grid place-items-center">
              <MdPerson className="text-2xl text-gray-700 mr-2" />
              <p>Profile</p>
            </div>
            <div className="message ms-5 grid place-items-center">
              <PiChatTextFill className="text-2xl text-gray-700 mr-2" />
              <p>Messages</p>
            </div>
            <div className="order ms-5 grid place-items-center">
              <BiHeart className="text-2xl text-gray-700 mr-2" />
              <p>Orders</p>
            </div>
            <div className="cart ms-5 grid place-items-center">
              <BiCart className="text-2xl text-gray-700" />
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
