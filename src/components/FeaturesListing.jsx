import React from "react";
import Title from "./Title";
import pic1 from "../assets/Features/pic1.png";
// import pic5 from "../assets/Features/pic5.png";
// import { CiHeart } from "react-icons/ci";
import Card from "./Card";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
function FeaturesListing() {
  const featuresCards = [
    {
      img: pic1,
      titleOne: "2018 BMW X1 XDRIVE",
      headingOne: " 38498458",
      parOne: "WBHT3C3J3H",
      paraTwo: " $3,690 - $6,510",
      paraThree: " $3,500",
    },
    {
      img: pic1,
      titleOne: "2018 BMW X1 XDRIVE",
      headingOne: " 38498458",
      parOne: "WBHT3C3J3H",
      paraTwo: " $3,690 - $6,510",
      paraThree: " $3,500",
    },
    {
      img: pic1,
      titleOne: "2018 BMW X1 XDRIVE",
      headingOne: " 38498458",
      parOne: "WBHT3C3J3H",
      paraTwo: " $3,690 - $6,510",
      paraThree: " $3,500",
    },
    {
      img: pic1,
      titleOne: "2018 BMW X1 XDRIVE",
      headingOne: " 38498458",
      parOne: "WBHT3C3J3H",
      paraTwo: " $3,690 - $6,510",
      paraThree: " $3,500",
    },
    {
      img: pic1,
      titleOne: "2018 BMW X1 XDRIVE",
      headingOne: " 38498458",
      parOne: "WBHT3C3J3H",
      paraTwo: " $3,690 - $6,510",
      paraThree: " $3,500",
    },
  ];
  return (
    <div className="bg-[#F8F8F8] pt-[64px] md:pt-[4.167vw] pb-[64px] md:pb-[6.875vw]">
      <Title title="Featured Listings" />
      {/* <div className="w-[90%]  md:w-[73.438vw] flex-wrap gap-y-[30px]  gap-x-0 md:gap-x-[1.563vw] flex mx-auto "> */}
      {/* {featuresCards.map((data, id) => (
          <Card data={data} key={id} />
        ))} */}

      {/* <div
          className="w-[330px] md:w-[17.188vw] h-[514px] md:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]
    md:p-[1.042vw] p-[20px] categroyCard relative"
        >
          <div className="absolute right-[1.4vw] flex justify-center items-center  bg-[#1F1F2C] rounded-[8px] md:rounded-[0.417vw] text-white h-[28px] md:h-[1.458vw] w-[64px] md:w-[3.333vw]">
            <CiHeart className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
            <p className="font-[600] font-Urbanist text-[14px] md:text-[0.729vw] text-white">
              100
            </p>
          </div>
          <img
            src={pic1}
            className="md:w-[15.104vw] md:h-[15.104vw] w-[290px] h-[290px] md:mb-[1.094vw] mb-[21px]"
            alt=""
          />
          <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
            "2018 BMW X1 XDRIVE”
          </h2>
          <div className="flex items-center border-b-[.1vw] border-b-[#EBEBEB] justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
            <div>
              <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#7A798A]">
                Lot: 38498458
              </h2>
              <p className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
                VIN: WBHT3C3J3H
              </p>
            </div>
            <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24xp] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
              BID
            </button>
          </div>

          <div className="flex  justify-between mt-[17px] md:mt-[0.885vw]">
            <div>
              <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                Estimated Bid
              </h2>
              <p className="font-[400] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                $3,690 - $6,510
              </p>
            </div>
            <div>
              <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                Potential Savings
              </h2>
              <div className="flex justify-end gap-[8px] md:gap-[0.417vw]">
                <img
                  src={pic5}
                  alt=""
                  className="w-[20px] h-[20px] md:w-[1vw] md:h-[1vw]"
                />
                <p className="font-[400] font-Urbanist text-[16px] md:text-[0.833vw] text-[#7A798A]">
                  $3,500
                </p>
              </div>
            </div>
          </div>
        </div> */}

      {/* <div className="w-[330px] md:w-[17.188vw] h-[514px] md:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]"></div>
        <div className="w-[330px] md:w-[17.188vw] h-[514px] md:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]"></div>
        <div className="w-[330px] md:w-[17.188vw] h-[514px] md:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]"></div> */}

      {/* </div> */}

      {/* <div className="w-[90%]  md:w-[73.438vw] flex-wrap gap-y-[30px]  gap-x-0 md:gap-x-[1.563vw] flex mx-auto ">
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
        {featuresCards.map((data, id) => (
          <SwiperSlide key={id}>
            <Card data={data} key={id} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturesListing;
