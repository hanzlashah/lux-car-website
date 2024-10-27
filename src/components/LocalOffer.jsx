import React from "react";
import Title from "./Title";
import Card from "./Card";
import pic1 from "../assets/offer/pic1.png";
import pic2 from "../assets/offer/pic2.png";
import pic3 from "../assets/offer/pic3.png";
import pic4 from "../assets/offer/pic4.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import fire from "../assets/offer/fire.png";
import bag from "../assets/offer/bag.png";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
function LocalOffer() {
  const featuresCards = [
    {
      img: pic1,
      titleOne: "",
      headingOne: " ",
      parOne: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: "",
      bitplace: "",
      offerHeading: "Hyundai Sonata",
      paraTwo: "",
      paraThree: " ",
      Creator: "SalvadorDali",
      CurrentBid: "750",
    },
    {
      img: pic2,
      titleOne: "",
      headingOne: " ",
      parOne: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: bag,
      bitplace: "Bit place",
      offerHeading: "Cheverlot Crusie Limited Pomala",
      paraTwo: "",
      paraThree: "",
      Creator: "Trista Francis",
      CurrentBid: "750",
    },
    {
      img: pic3,
      titleOne: "",
      headingOne: " ",
      parOne: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: "",
      bitplace: "",
      offerHeading: "RAM 1500",
      paraTwo: "",
      paraThree: "",
      Creator: "Freddie Carpenter",
      CurrentBid: "1,350",
    },
    {
      img: pic4,
      titleOne: "",
      headingOne: " ",
      parOne: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: "",
      bitplace: "",
      offerHeading: "Toyota FJ",
      paraTwo: "",
      paraThree: "",
      Creator: "Tyler Covington",
      CurrentBid: "20,000",
    },
    {
      img: pic1,
      titleOne: "",
      headingOne: "",
      parOne: "",
      fire: fire,
      time: "05 : 12 : 07 : 45",
      bagIcon: "",
      bitplace: "",
      offerHeading: "Hyundai Sonata",
      paraTwo: "",
      paraThree: "",
      Creator: "Trista Francis",
      CurrentBid: "750",
    },
  ];

 

 

  return (
    <>
      <div className=" bg-[#FFFFFF]  pt-[64px] md:pt-[4.167vw] pb-[64px] md:pb-[6.875vw]">
        <Title title="Local Offers" />
        {/* <div className="w-[90%]  md:w-[73.438vw] flex-wrap gap-y-[30px]  gap-x-0 md:gap-x-[1.563vw] flex mx-auto">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
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

      
      <div>
      <Swiper
          modules={[Navigation, Pagination, A11y]} // Removed Scrollbar module
          spaceBetween={8}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          scrollbar={false} // Disable the scrollbar
          className="mySwiper w-[80%] bg-white mx-auto md:w-[70vw] lg:w-[73vw] xl:w-[73vw] "
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
          {featuresCards.map((data, id) => (
            <SwiperSlide key={id}>
              <Card data={data} key={id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </>
  );
}

export default LocalOffer;
