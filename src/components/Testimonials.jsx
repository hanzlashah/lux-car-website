import React from "react";
import Title from "./Title";
import pic15 from "../assets/testimonal/pic15.png";
import TestimonalCard from "../Components/TestimonalCard";
import pic16 from "../assets/testimonal/pic16.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
function Testimonials() {
  const testimonialInfo = [
    {
      img: pic15,
      para:
        "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget1",
      auth: "Jody Andrews",
      job: "Project Manager",
    },
    {
      img: pic16,
      para:
        "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget2",
      auth: "Jody Andrews",
      job: "Project Manager",
    },
    {
      img: pic15,
      para:
        "Augue Sed viverra nulla Interdum mia bibendum velit sapien scelerisqu ictum quam tincidunt nec feugiat augue tincidunt. Etiam pretium diam rhoncus. gida turpis cursus. Nuncsed fringilla tortor iaculis eget",
      auth: "Jody Andrews",
      job: "Project Manager",
    },
  ];

  return (
    <>
      <div className=" bg-[#F8F8F8] pb-[100px] md:pb-[5.508vw] pt-[75px] md:pt-[4vw] pr-[24px] md:pr-[0vw]">
        <Title title="Testimonials" />

        <>
          <Swiper
            modules={[Navigation, Pagination, A11y]} // Removed Scrollbar module
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={false} // Disable the scrollbar
            className="mySwiper w-[80%]  md:w-[60vw] lg:w-[63.5vw]"
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: { slidesPerView: 1 },
              375: { slidesPerView: 1 },
              425: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1440: { slidesPerView: 2 },
            }}
          >
            {testimonialInfo.map((data, id) => (
              <SwiperSlide key={id}>
                <TestimonalCard data={data} />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </>
  );
}

export default Testimonials;
