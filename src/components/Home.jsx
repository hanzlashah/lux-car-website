import React from "react";
import TopNavigation from "./TopNavigation";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero from "./Hero";
import Category from "./Category";
import FeaturesListing from "./FeaturesListing";
import LocalOffer from "./LocalOffer";
import BuyNow from "./BuyNow"
import Destinations from "./Destinations"
// import "./App.css";

const Home = () => {
  return (
    <>
      <TopNavigation />
      <Navigation />
      <Hero />
      <Category />
      <FeaturesListing />
      <LocalOffer />
      <BuyNow />
      <Destinations />
      <Footer />
    </>
  );
};

export default Home;
