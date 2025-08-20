import React from "react";
import Banner from "../Components/Banner";
import Consumer from "../Components/Consumer";
import Offers from "../Components/Offers";
import Recommended from "../Components/Recommended";
import Services from "../Components/Services";
import Home_Outdoor from "../Components/Home_Outdoor";
import Quote from "../Components/Quote";
import Subscribe from "../Components/Subscribe";
const Home = () => {
  return (
    <>
      <Banner />
      <Offers />
      <Home_Outdoor />
      <Consumer />
      <Quote />
      <Recommended />
      <Services />
      <Subscribe />
    </>
  );
};

export default Home;
