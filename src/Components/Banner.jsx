import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container bg-white md:flex grid m-auto p-5 mt-4 rounded-md">
        <div className="banner-item md:w-2/12 w-full p-4">
          <ul>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Automobiles
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Clothes and Wear
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Home interiors
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Computer and Tech
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Tools , Equipment
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Sports and Outdoor
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Animal and Pets
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              Machinery Tools
            </li>
            <li className="mt-4 hover:bg-blue-200 cursor-pointer">
              More Category
            </li>
          </ul>
        </div>
        <div className="banner-item relative md:w-7/12 w-full p-4 grid justify-center items-center">
          <img src="Banner.png" alt="Banner" className="relative h-full" />
          <p className="text absolute top-10 start-20 md:text-2xl">
            Latest Trending
          </p>
          <p className="text absolute top-25 start-20 md:text-3xl font-bold">
            Electronic Items
          </p>
          <button className="absolute top-40 start-20 bg-gray-200 p-2 rounded-md cursor-pointer">
            Learn More
          </button>
        </div>
        <div className="banner-item md:w-3/12 w-full p-4">
        <div className="user bg-blue-200 p-4 rounded-md">
          <div className="usr flex">
          <img src="Avatar.png" alt="User" className="h-auto" />
          <div className="txt">
          <p className="text">Hi , User</p>
          <p className="text">Let's get Started</p>
          </div>
          </div>
          <div className="btns grid">
          <button className="bg-blue-500 p-2 rounded-md cursor-pointer mt-2 text-white">Join Now</button>
          <button className="bg-gray-100 p-2 rounded-md cursor-pointer mt-2 text-blue-500">Login</button>
          </div>
        </div>
        <div className="text rounded-md bg-orange-400 p-5 mt-5 text-white">
          <p className="text w-1/3">Get US $10 off with a new supplier</p>
        </div>
        <div className="text rounded-md bg-teal-400 p-5 mt-5 text-white">
          <p className="text w-1/3">Send quotes with supplier preferences</p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
