import React from "react";
import { BiShoppingBag, BiLogoPlayStore } from "react-icons/bi";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaApple,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="container m-auto flex flex-col md:flex-row items-center justify-between p-6">
          <div className="col-1 grid">
            <div className="footer-brand flex mr-auto">
              <BiShoppingBag className="text-3xl text-gray-100 mr-2 bg-blue-500 rounded-md p-1" />
              <h1 className="text-blue-500 text-2xl mr-auto font-bold">
                Brand
              </h1>
            </div>
            <div className="text mt-4 mb-4">
              <p className="w-[60%]">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
            </div>
            <div className="icons flex">
              <FaFacebook className="text-xl text-gray-700 mr-4" />
              <FaTwitter className="text-xl text-gray-700 mr-4" />
              <FaLinkedin className="text-xl text-gray-700 mr-4" />
              <FaInstagram className="text-xl text-gray-700 mr-4" />
              <FaYoutube className="text-xl text-gray-700" />
            </div>
          </div>
          <div className="col-2 grid">
            <div className="link">
              <h2 className="text-2xl">About</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Find Store</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3 grid">
            <div className="link">
              <h2 className="text-2xl">Partnership</h2>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Find Store</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-4 grid">
            <div className="link">
              <h2 className="text-2xl">Information</h2>
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Money Refund</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-5 grid">
            <div className="link">
              <h2 className="text-2xl">For Users</h2>
              <ul>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">My Orders</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 grid">
            <div className="link">
              <h2 className="text-2xl">Get App</h2>
              <ul>
                <li className="mb-2">
                  <button className="bg-black text-white py-2 px-4 rounded flex justify-content-center items-center cursor-pointer">
                    <FaApple className="text-3xl" />
                    Download
                  </button>
                </li>
                <li>
                  <button className="bg-black text-white py-2 px-4 rounded flex justify-content-center items-center cursor-pointer">
                    <BiLogoPlayStore className="text-3xl" />
                    Download
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
