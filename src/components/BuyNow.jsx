import React from "react";
import Title from "./Title";
// import Card from "../Components/Card";
// import pic1 from "../assets/Features/pic1.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import fire from "../assets/offer/fire.png";
import bag from "../assets/offer/bag.png";
import pic1 from "../assets/buynow/pic1.png";
import pic2 from "../assets/buynow/pic2.png";
import pic3 from "../assets/buynow/pic3.png";
import pic4 from "../assets/buynow/pic4.png";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import CardBuyNow from "./CardBuyNow";

function BuyNow() {
  const ali = [
    {
      name: "ali",
      email: "ali@gmail.com",
    },
    { name: "ali", email: "" },
    { name: "", email: "asdk@gmail.com" },
  ];

  const [buyNow, setbuyNow] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://luxcars-backendservices.up.railway.app/api/v1/cars/get-all-cars/testing"
        );
        setbuyNow(response.data.data.cars); // Adjust based on the actual structure of the response
        console.log("one buy now", response);
        console.log("two buy", response.data);
        console.log("three buy", response.data.data);
        console.log("four buy", response.data.data.cars);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  //   const filteredAli = ali.filter(
  //     (item) => item.name !== "" && item.email !== ""
  //   );
  //   console.log("hello", filteredAli);
  // Function to filter out objects with empty properties
  //   const filteredAli = ali.filter((item) => item.email !== "");

  //   console.log(filteredAli);
  // {filteredAli.length > 0 ? (
  //     <div>
  //         <h1>Filtered Emails</h1>
  //         <ul>
  //             {filteredAli.map((item, index) => (
  //                 <li key={index}>
  //                     {item.name}: {item.email}
  //                 </li>
  //             ))}
  //         </ul>
  //     </div>
  // ) : (
  //     <div>No valid entries to display.</div>
  // )}
  const featuresCards = [
    {
      offerHeading: "Hyundai Sonata",
      img: pic1,
      titleOne: "",
      headingOne: "",
      parOne: "",
      paraTwo: "",
      paraThree: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      Creator: "SalvadorDali",
      CurrentBid: "750",
      price: "$6,000",
    },
    {
      offerHeading: "Cheverlot Crusie Limited Pomala",
      img: pic2,
      titleOne: "",
      headingOne: "",
      parOne: "",
      paraTwo: "",
      paraThree: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: bag,
      bitplace: "Bit place",
      Creator: "Trista Francis",
      CurrentBid: "750",
      price: "$22,000",
    },
    {
      offerHeading: "RAM 1500",
      img: pic3,
      titleOne: "",
      headingOne: "",
      parOne: "",
      paraTwo: "",
      paraThree: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      Creator: "Freddie Carpenter",
      CurrentBid: "1,350",
      price: "$13,000",
    },
    {
      offerHeading: "Toyota FJ",
      img: pic4,
      titleOne: "",
      headingOne: "",
      parOne: "",
      paraTwo: "",
      paraThree: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      Creator: "Tyler Covington",
      CurrentBid: "20,000",
      price: "$11,000",
    },
    {
      offerHeading: "Hyundai Sonata",
      img: pic1,
      titleOne: "",
      headingOne: "",
      parOne: "",
      paraTwo: "",
      paraThree: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      Creator: "Trista Francis",
      CurrentBid: "750",
      price: "$13,000",
    },
  ];
  return (
    <>
      <div className=" bg-[#F8F8F8]  pt-[64px] md:pt-[4.167vw] pb-[64px] md:pb-[6.875vw]">
        <Title title="Buy Now" />
        {/* <div className="w-[90%]  md:w-[73.438vw] flex-wrap gap-y-[30px]  gap-x-0 md:gap-x-[1.563vw] flex mx-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // This adds the scrollbar, set to false to hide it
            className="mySwiper"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: { slidesPerView: 1 },
              375: { slidesPerView: 1 },
              425: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
            }}
          >
            {featuresCards.map((data, id) => (
              <SwiperSlide>
                <Card data={data} key={id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}

        <Swiper
          modules={[Navigation, Pagination, A11y]} // Removed Scrollbar module
          spaceBetween={8}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={false} // Disable the scrollbar
          className="mySwiper w-[80%] bg-[#F8F8F8] mx-auto md:w-[70vw] lg:w-[73vw] xl:w-[73vw] "
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            320: { slidesPerView: 1 },
            375: { slidesPerView: 1 },
            425: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 4 },
          }}
        >
          {/* {featuresCards.map((data, id) => (
            <SwiperSlide key={id}>
              <Card data={data} key={id} />
            </SwiperSlide>
          ))} */}
          {buyNow.map((data, id) => (
            <SwiperSlide key={id}>
              <CardBuyNow data={data} />
            </SwiperSlide>
            // console.log('hi' , data)
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default BuyNow;
