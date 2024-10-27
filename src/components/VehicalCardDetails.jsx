// import React from "react";
import React, { useRef } from "react";
// import { HiUserCircle, HiAdjustments } from "react-icons/hi";
// import { MdDashboard } from "react-icons/md";
import pic15 from "../assets/VehicalCards/pic15.png";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import pic16 from "../assets/VehicalCards/pic16.png";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import pic18 from "../assets/VehicalCards/pic18.png";
// import Icon from "../assets/VehicalCards/Icon.png";
import Icon from "../assets/VehicalCards/IMG.png"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import pic17 from "../assets/VehicalCards/pic17.png";
import { HiOutlineArrowDownTray } from "react-icons/hi2";
import file from "../assets/VehicalCards/file.png";
// import pic17 from "../assets/VehicalCards/pic17.png";
import pic19 from "../assets/VehicalCards/pic19.png";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import pic20 from "../assets/VehicalCards/pic20.png";
import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const images = [pic17, pic19, pic20, pic17]; // Replace with your actual images

function VehicalCardDetails() {
  const { id } = useParams();
  const swiper = useState();
  console.log(id);
  const [buyNow, setbuyNow] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const swiperRef = useRef(null)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          `https://luxcars-backendservices.up.railway.app/api/v1/cars/get-car-by-lot-id?lot_id=${id}`
        );
        setbuyNow(response.data.data); // Adjust based on the actual structure of the response
        console.log("one", response);
        console.log("two ", response.data);
        console.log("two ", response.data.data);
        // console.log("three buy", response.data.data);
        // console.log("four buy", response.data.data.cars);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (data) => {
    setSelectedImage(data);
    console.log(data);
  };

  // Define your tabs dynamically
  // font-Urbanist font-[400] text-[14px] md:text-[0.729vw]
  const tabs = [
    {
      title: "Vehicle Info",
      content: (
        <div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="right">
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Engine :{" "}
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  4.3L V6
                </p>
              </div>
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Drivetrain :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Rear-Wheel Drive
                </p>
              </div>
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Transmission :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Manual
                </p>
              </div>
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Odometer :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  255,936 mi (411,889 km)
                </p>
              </div>
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Condition :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Normal Wear, Minor Dent/Scratches
                </p>
              </div>

              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Start Code :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Run and Drive
                </p>
              </div>

              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Airbag Checked :{" "}
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Driver, Passenger, Left, Right
                </p>
              </div>
            </div>
            <div className="left">
              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  From
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Kansas City, KS
                </p>
              </div>

              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  To :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Houston, TX
                </p>
              </div>

              <div className="flex items-center gap-[2px] md:gap-[0.104vw] mb-[15px] md:mb-[0.833vw]">
                <p className="text-[#7A798A] font-[400] font-Urbanist text-[13px] md:text-[0.677vw]">
                  Date : :
                </p>
                <p className="text-[#1F1F2C] font-[700] font-Urbanist text-[15px] md:text-[0.781vw]">
                  Monday, May 13, 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Bid History",
      content: (
        <>
          <div className="h-[150px] md:h-[10vw] scroller overflow-x-hidden">
            <div className="md:auto w-[100%] mx-auto ">
              <div className="md:w-[28vw] flex justify-between">
                <div className="flex md:gap-[0.625vw] gap-[12px]">
                  <img
                    src={pic18}
                    alt=""
                    className="w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw] ">
                      <p className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </p>
                      <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                        bid accepted
                      </p>
                    </div>
                    <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                      8 hours ago
                    </p>
                  </div>
                </div>
                <p className="text-[#1F1F2C] font-Urbanist font-[700]  text-[14px] md:text-[0.729vw]">
                  $123
                </p>
              </div>
              <div className="flex justify-end">
                <hr className="md:w-[28vw] bg-[#EBEBEB] h-[1px] md:h-[0.052vw] text-end mb-[12px] md:mb-[0.625vw] mt-[12px] md:mt-[0.625vw]" />
              </div>
            </div>

            <div className="md:auto w-[100%] mx-auto ">
              <div className="md:w-[28vw]  flex justify-between">
                <div className="flex md:gap-[0.625vw] gap-[12px]">
                  <img
                    src={pic18}
                    alt=""
                    className="w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw] ">
                      <p className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </p>
                      <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                        bid accepted
                      </p>
                    </div>
                    <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                      8 hours ago
                    </p>
                  </div>
                </div>
                <p className="text-[#1F1F2C] font-Urbanist font-[700]  text-[14px] md:text-[0.729vw]">
                  $123
                </p>
              </div>
              <div className="flex justify-end">
                <hr className="md:w-[28vw] bg-[#EBEBEB] h-[1px] md:h-[0.052vw] mb-[12px] md:mb-[0.625vw] text-end mt-[12px] md:mt-[0.625vw]" />
              </div>
            </div>

            <div className=" md:auto w-[100%] mx-auto">
              <div className="md:w-[28vw]  flex justify-between">
                <div className="flex md:gap-[0.625vw] gap-[12px]">
                  <img
                    src={pic18}
                    alt=""
                    className="w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw] ">
                      <p className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </p>
                      <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                        bid accepted
                      </p>
                    </div>
                    <p className="md:text-[0.677vw] font-Urbanist font-[400] text-[13px] text-[#7A798A]">
                      8 hours ago
                    </p>
                  </div>
                </div>
                <p className="text-[#1F1F2C] font-Urbanist font-[700]  text-[14px] md:text-[0.729vw]">
                  $123
                </p>
              </div>
              <div className="flex justify-end">
                <hr className="md:w-[28vw] bg-[#EBEBEB] h-[1px] md:h-[0.052vw] mb-[12px] md:mb-[0.625vw] text-end mt-[12px] md:mt-[0.625vw]" />
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Calculator",
      content: <div>This is Calculator content for Tab 3.</div>,
    },
    {
      title: "Get Report",
      content: <div>This is Get Report content for Tab 3.</div>,
    },
    {
      title: "Help",
      content: <div>This is Help content for Tab 3.</div>,
    },
    // Add more tabs as needed
  ];

  // Set initial active tab
  const [activeTab, setActiveTab] = useState(tabs[0].title);
  return (
    <>
      {/* 73.542vw
     md:w-[30vw] md:h-[33.073vw] */}

      {/* for tablet screen and laptop screen device start  */}
      {/* font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw] */}
      <div className="w-[73.542vw] hidden md:block  mx-auto md:py-[4.167vw] ">
        <div className="md:flex justify-between md:gap-[5.156vw] ">
          {/* left section start  */}
          <div className="  w-[36vw]">
            {/* <img
              src={pic15}
              className="rounded-[.4vw] md:w-[36vw] md:h-[33.073vw]"
              alt=""
            /> */}

            {selectedImage && (
              <img
                src={selectedImage}
                className="rounded-[.7vw] md:w-[36vw] md:h-[33.073vw]"
                alt=""
              />
            )}

            <div>
              <div className="md:my-[1.563vw] my-[30px] relative">
                <Swiper
                  modules={[Navigation, Pagination, A11y]} // Removed Scrollbar module
                  spaceBetween={8}
                  ref={swiperRef}
                  slidesPerView={4}
                  navigation={false} // Disable navigation arrows
                  pagination={false} // Disable pagination dots
                  scrollbar={false} // Disable the scrollbar
                  className="mySwiper w-[80%]  mx-auto md:w-[35vw]  "
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    375: { slidesPerView: 1 },
                    425: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 3 },
                    1440: { slidesPerView: 3 },
                  }}
                >
                  {/* <SwiperSlide>hello</SwiperSlide> */}

                  {/* <SwiperSlide>hello</SwiperSlide> */}
                  {/* {buyNow.cost_priced.link_img_small.map((data,index)=>(console.log(data)))} */}
                  {/* {buyNow &&
                  buyNow?.link_img_hd?.map((data, index) => console.log(data))} */}
                  {buyNow &&
                    buyNow?.link_img_hd?.map((data, index) => (
                      <SwiperSlide>
                        <div className="mb-[3vw]" key={index}>
                          {" "}
                          <img
                            src={data}
                            className="h-[131px] md:h-[6.823vw] md:w-[12.292vw] w-[236px] rounded-[.7vw]"
                            alt={`Slide image ${index + 1}`}
                            onClick={() => handleImageClick(data)}
                          />
                        </div>
                      </SwiperSlide>
                    ))}

                  {/* <SwiperSlide>
                  <div className="mb-[3vw]">
                    {" "}
                    <img
                      src={pic17}
                      className="h-[131px] md:h-[6.823vw] md:w-[12.292vw] w-[236px]"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-[3vw]">
                    {" "}
                    <img
                      src={pic17}
                      className="h-[131px] md:h-[6.823vw] md:w-[12.292vw] w-[236px]"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="mb-[3vw]">
                    {" "}
                    <img
                      src={pic17}
                      className="h-[131px] md:h-[6.823vw] md:w-[12.292vw] w-[236px]"
                      alt=""
                    />
                  </div>
                </SwiperSlide> */}
                </Swiper>
                <button className="arrow-left arrow absolute top-9 left-3 z-10 " onClick={() => swiper.slidePrev()}>
                  <IoIosArrowDropleft
                    size={35}
                    className="text-[#ca0000] hover:bg-[#ca0000] rounded-full hover:text-white duration-150"
                  />
                </button>
                <button
                  className="z-10 arrow-right arrow absolute top-9 right-3"
                  onClick={() => swiper.slideNext()}
                >
                  <IoIosArrowDropright
                    size={35}
                    className=" text-[#ca0000] hover:bg-[#ca0000] rounded-full  hover:text-white duration-150"
                  />
                </button>
              </div>
            </div>

            <div className="py-[10px] md:h-[2.292vw] md:w-[35vw] rounded-[8px] md:rounded-[0.417vw] h-[44px] flex justify-between px-[14px] md:px-[0.729vw] buttonShadow md:py-[0.521vw]">
              <div className="flex gap-[8px] md:gap-[0.417vw]">
                <img
                  src={file}
                  alt=""
                  className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
                />
                <p className="font-Urbanist font-[500] text-[16px] md:text-[0.833vw] text-[#1F1F2C]">
                  Get Report
                </p>
              </div>
              <HiOutlineArrowDownTray className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
            </div>
          </div>
          {/* left section end  */}

          {/* right section is start  */}
          <div className="    md:w-[33vw]">
            {/* first section start  */}
            <div className=" flex items-center md:gap-[5.052vw] gap-[97px]  justify-between ">
              <div className="flex items-center gap-[10px] md:gap-[0.521vw]">
                <img
                  src={pic16}
                  alt=""
                  className="h-[32.29px] md:h-[1.682vw] w-[48px] md:w-[2.5vw]"
                />
                <p className="flex text-white justify-center items-center text-center h-[28px] bg-[#47A432] rounded-[50%] md:text-[1.5vw] lg:rounded-[2.604vw] md:w-[2vw] md:h-[2vw] lg:h-[1.458vw] w-[26px] lg:w-[1.354vw]">
                  R
                </p>
                {/* md:text-[1.563vw] */}
                <p className="font-Urbanist font-[700] text-[30px]  md:text-[1.3vw]">
                  {/* Chevrolet GMT-400 */}
                  {buyNow.title}
                </p>
              </div>
              <div className="flex gap-[12px] md:gap-[0.625vw]">
                <span className="flex gap-[5px] rounded-[40px] md:rounded-[2.083vw] md:gap-[0.26vw] items-center justify-center bg-[#F8F8F8] h-[36px] md:h-[1.875vw] w-[75px] md:w-[3.906vw]">
                  <CiHeart className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
                  <p className="font-Urbanist text-[#1F1F2C] font-[700] text-[14px] md:text-[0.729vw]">
                    225
                  </p>
                </span>
                <span className="flex gap-[5px] rounded-[40px] md:rounded-[2.083vw] md:gap-[0.26vw] items-center justify-center bg-[#F8F8F8] h-[36px] md:h-[1.875vw] w-[75px] md:w-[3.906vw]">
                  <FaRegEye className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
                  <p className="font-Urbanist text-[#1F1F2C] font-[700] text-[14px] md:text-[0.729vw]">
                    100
                  </p>{" "}
                </span>
              </div>
            </div>
            {/* first section end  */}

            {/* second section start  */}
            <div className="my-[20px] flex justify-between  md:my-[1.042vw]">
              <div className="w-[295px] gap-[0.781vw] items-center flex bg-[#F3F3F3] p-[10px] md:p-[0.521vw]  rounded-[15px] md:rounded-[0.781vw] md:w-[15.365vw]">
                <div className="w-[35px] h-[35px] bg-[#DF4949] md:w-[1.823vw] md:h-[1.823vw] flex items-center justify-center rounded-[0.521vw]">
                  <FaUser className="w-[15px] text-white h-[15px] md:w-[0.781vw] md:h-[0.781vw]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.781vw]  font-Urbanist font-[400] text-[#7A798A]">
                    Owner Buy
                  </span>
                  <span className="text-[0.781vw]  font-Urbanist font-[700] text-[#1F1F2C] ">
                    Non-Insurance Company
                  </span>
                </div>
              </div>
              <div className="w-[295px] gap-[0.781vw] items-center flex bg-[#F3F3F3] p-[10px] md:p-[0.521vw]  rounded-[15px] md:rounded-[0.781vw] md:w-[15.365vw]">
                <div className="w-[35px] h-[35px] bg-[#DF4949] md:w-[1.823vw] md:h-[1.823vw] flex items-center justify-center rounded-[0.521vw]">
                  <FaUser className="w-[15px] text-white h-[15px] md:w-[0.781vw] md:h-[0.781vw]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[0.781vw]  font-Urbanist font-[400] text-[#7A798A]">
                    Owner Buy
                  </span>
                  <span className="text-[0.781vw]  font-Urbanist font-[700] text-[#1F1F2C] ">
                    Non-Insurance Company
                  </span>
                </div>
              </div>
            </div>
            {/* second section end  */}
            {/* thired section start  */}
            <p className="text-[#7A798A] text-[0.781vw]  font-Urbanist font-[400] md:pt-[1.302vw] pt-[25]">
              Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
              ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed
              ipsum vitae malesuada. Habitant sollicitudin faucibus cursus
              lectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbi
              fringilla urna amet sed ipsum vitae malesuada.
              {/* {buyNow.description} */}
            </p>
            {/* thired section end  */}

            {/* fourth section start  */}
            <div className="flex md:gap-[1.51vw] justify-between mt-[20px] md:mt-[1.042vw]">
              <div className="w-[300px] bg-[#F8F8F8] md:w-[16.146vw] py-[12px] md:py-[0.625vw] pl-[16px] md:pl-[0.833vw]">
                <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
                  <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                    Lot :
                  </p>
                  <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                    1-51188714
                  </p>
                </div>
                <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
                  <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                    VIN :
                  </p>
                  <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                    {/* 1GCDC14Z2KE266021 */}
                    {buyNow.sku}
                  </p>
                </div>

                <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
                  <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                    Year/Make/Model :
                  </p>
                  <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                    1989 GMT
                  </p>
                </div>

                <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
                  <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                    Estimated Final Price:{" "}
                  </p>
                  <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                    $450 - $700
                  </p>
                </div>
              </div>
              <div className="w-[300px] md:w-[16.146vw]">
                {/* <div className=" py-[12px] md:py-[0.625vw] px-[16px] bg-[#F8F8F8]  md:px-[0.833vw]">
                    </div> */}

                <div className="flex md:rounded-[0.417vw] rounded-[8px] justify-between py-[12px] md:py-[0.625vw] px-[16px] bg-[#F8F8F8]  md:px-[0.833vw] md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
                  <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                    Current Bid
                  </p>
                  <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                    $ {buyNow.cost_priced}
                  </p>
                </div>
                <div className="p-[16px] flex items-center md:gap-[0.625vw] gap-[12px] bg-[#F8F8F8]  md:p-[0.833vw]">
                  <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                    <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                      40
                    </span>{" "}
                  </div>
                  <span className="text-[#8A8AA0] text-[1.5vw]">:</span>

                  <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                    <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                      12
                    </span>{" "}
                  </div>
                  <span className="text-[#8A8AA0] text-[1.5vw]">:</span>

                  <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                    <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                      35
                    </span>{" "}
                  </div>
                  <span className="text-[#8A8AA0] text-[1.5vw]">:</span>

                  <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                    <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                      44
                    </span>{" "}
                  </div>
                  {/* <span className="text-[#8A8AA0] text-[1.5vw]">:</span> */}
                </div>
              </div>
            </div>
            {/* fourth section end  */}

            {/* five share icon start  */}
            <div className="flex md:gap-[0.835vw] gap-[16px] mt-[20px] mb-[40px] md:mb-[2.083vw] md:mt-[1.042vw]">
              <p className="text-[#1F1F2C] font-Urbanist font-[400] text-[16.04px] md:text-[0.835vw]">
                Share:
              </p>

              <div className="flex">
                <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
                <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
                <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
                <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
              </div>
              <p className="text-[#1F1F2C] font-Urbanist font-[400] text-[16.04px] md:text-[0.835vw]">
                More
              </p>
            </div>
            {/* five share icon end  */}

            {/* six button start  */}
            <button className="font-Urbanist flex justify-center items-center gap-[8px] md:gap-[0.417vw] font-[700] text-[15px] md:text-[0.781vw] text-[#CA0000] md:h-[2.5vw] h-[48px] md:rounded-[2.917vw] rounded-[56px] customBtn md:w-[33vw] w-[620px]">
              <img
                src={Icon}
                alt=""
                className="w-[16.67px] h-[16.67px] md:w-[0.868vw] md:h-[0.868vw]"
              />
              Place Max bid
            </button>
            {/* six button end  */}
            {/* seven react tab start  */}
            {/* <p> asda</p>   <p> asda</p>   <p> asda</p>   <p> asda</p>   <p> asda</p> 
            className="overflow-x-auto"
            
            aria-label="Full width tabs"
                variant="fullWidth"
                className="bg-red-500"
            */}
            <div>
              <div className="flex border-b md:w-[31vw] mt-[40px] md:mt-[2.083vw] justify-between">
                {tabs.map((tab) => (
                  <div
                    key={tab.title}
                    onClick={() => setActiveTab(tab.title)}
                    className={`flex items-center px-4 py-2 cursor-pointer  text-nowrap font-Urbanist font-[400] text-[15px] md:text-[0.781vw]
              ${
                activeTab === tab.title
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
                  >
                    {tab.title}
                  </div>
                ))}
              </div>
              <div className="mt-[21px] md:mt-[1.094vw] py-4 md:py-[0.833vw] px-6 md:px-[1.25vw]">
                {tabs.map(
                  (tab) =>
                    activeTab === tab.title && (
                      <div key={tab.title}>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {tab.content}
                        </span>
                      </div>
                    )
                )}
              </div>
            </div>

            {/* seven react tab end  */}

            {/* eight section is start  */}
            <div className="mt-[40px] flex justify-between md:mt-[2.083vw]">
              <div className="w-[15.417vw]  bg-[#F8F8F8] pl-[16px] md:pl-[0.833vw] py-[12px] md:py-[0.625vw]">
                <h2 className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C] mb-[16px] md:mb-[0.833vw]">
                  Penalties and Additional Fees:
                </h2>
                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Custom Clearance Total :{" "}
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    €736
                  </p>
                </div>
                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Estimated Total Price{" "}
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    €4,434
                  </p>
                </div>

                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Estimated Final Price:{" "}
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    $450 - $700
                  </p>
                </div>
              </div>
              <div className="w-[15.417vw]   bg-[#F8F8F8] pl-[16px] md:pl-[0.833vw] py-[12px] md:py-[0.625vw]">
                <h2 className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C] mb-[16px] md:mb-[0.833vw]">
                  Additional Services :
                </h2>
                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Hazardous Cargo :
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    $0
                  </p>
                </div>
                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Oversized Vehicle :{" "}
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    $250-$600
                  </p>
                </div>

                <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
                  <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                    Estimated Final Price:{" "}
                  </p>
                  <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                    $450 - $700
                  </p>
                </div>
              </div>
            </div>

            {/* eight section is end  */}
          </div>

          {/* right section end  */}
        </div>
      </div>
      {/* for tablet screen and laptop screen device end  */}

      {/* for mobile  screen device start  */}
      <div className="md:hidden block w-[95%] mt-[64px]  mx-auto">
        {/* first section start  */}
        <div className=" flex  gap-[8px]  flex-col ">
          <div className="flex items-center gap-[10px] md:gap-[0.521vw]">
            <img
              src={pic16}
              alt=""
              className="h-[32.29px] md:h-[1.682vw] w-[48px] md:w-[2.5vw]"
            />
            <p className="flex text-white justify-center items-center text-center h-[28px] bg-[#47A432] rounded-[50%] md:rounded-[2.604vw] md:h-[1.458vw] w-[26px] md:w-[1.354vw]">
              R
            </p>
            <div className="flex gap-[12px] md:gap-[0.625vw]">
              <span className="flex gap-[5px] rounded-[40px] md:rounded-[2.083vw] md:gap-[0.26vw] items-center justify-center bg-[#F8F8F8] h-[36px] md:h-[1.875vw] w-[75px] md:w-[3.906vw]">
                <CiHeart className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
                <p className="font-Urbanist text-[#1F1F2C] font-[700] text-[14px] md:text-[0.729vw]">
                  225
                </p>
              </span>
              <span className="flex gap-[5px] rounded-[40px] md:rounded-[2.083vw] md:gap-[0.26vw] items-center justify-center bg-[#F8F8F8] h-[36px] md:h-[1.875vw] w-[75px] md:w-[3.906vw]">
                <FaRegEye className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
                <p className="font-Urbanist text-[#1F1F2C] font-[700] text-[14px] md:text-[0.729vw]">
                  100
                </p>{" "}
              </span>
            </div>
          </div>
          <p className="font-Urbanist font-[700] text-[30px] md:text-[1.563vw]">
            {/* Chevrolet GMT-400 */}
            {buyNow.title}
          </p>
        </div>
        {/* first section end  */}

        {/* second section start  */}
        <div className="my-[20px] flex  flex-col gap-[8px] md:my-[1.042vw]">
          <div className="w-[295px] gap-[7px] items-center flex bg-[#F3F3F3] p-[10px] md:p-[0.521vw]  rounded-[15px] md:rounded-[0.781vw] md:w-[15.365vw]">
            <div className="w-[35px] h-[35px] bg-[#DF4949] md:w-[1.823vw] md:h-[1.823vw] flex items-center justify-center rounded-[8px] md:rounded-[0.521vw]">
              <FaUser className="w-[15px] text-white h-[15px] md:w-[0.781vw] md:h-[0.781vw]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px]  font-Urbanist font-[400] text-[#7A798A]">
                Owner Buy
              </span>
              <span className="text-[15px]  font-Urbanist font-[700] text-[#1F1F2C] ">
                Non-Insurance Company
              </span>
            </div>
          </div>
          <div className="w-[295px] gap-[7px] items-center flex bg-[#F3F3F3]  p-[10px] md:p-[0.521vw]  rounded-[15px] md:rounded-[0.781vw] md:w-[15.365vw]">
            <div className="w-[35px] h-[35px] bg-[#DF4949] md:w-[1.823vw] md:h-[1.823vw] flex items-center justify-center rounded-[8px] md:rounded-[0.521vw]">
              <FaUser className="w-[15px] text-white h-[15px] md:w-[0.781vw] md:h-[0.781vw]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px]  font-Urbanist font-[400] text-[#7A798A]">
                Owner Buy
              </span>
              <span className="text-[15px]  font-Urbanist font-[700] text-[#1F1F2C] ">
                Non-Insurance Company
              </span>
            </div>
          </div>
        </div>
        {/* second section end  */}
        {/* thired section start  */}
        <p className="text-[#7A798A] text-[14px]  font-Urbanist font-[400] md:pt-[1.302vw] pt-[25]">
          {/* Habitant sollicitudin faucibus cursus lectus pulvinar dolor non
          ultrices eget. Facilisi lobortisal morbi fringilla urna amet sed ipsum
          vitae malesuada. Habitant sollicitudin faucibus cursus lectus pulvinar
          dolor non ultrices eget. Facilisi lobortisal morbi fringilla urna amet
          sed ipsum vitae malesuada. */}
          {buyNow.description}
        </p>
        {/* thired section end  */}

        {/* image section start  */}

        {selectedImage && (
          <img
            src={selectedImage}
            className="md:rounded-[.4vw] md:w-[36vw] w-[95%] mx-auto h-[381px] md:h-[33.073vw] mt-[36px] mb-[12px] rounded-[8px]"
            alt=""
          />
        )}
        {/* <img
          src={pic15}
          className="md:rounded-[.4vw] md:w-[36vw] md:h-[33.073vw] mt-[36px] mb-[12px] rounded-[8px]"
          alt=""
        /> */}
        {/* image section end  */}
        {/* swipper section start  */}
        <div className="md:my-[1.563vw] my-[30px]">
          <Swiper
            modules={[Navigation, Pagination, A11y]} // Removed Scrollbar module
            spaceBetween={8}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={false} // Disable the scrollbar
            className="mySwiper w-[100%]  mx-auto md:w-[35vw]  "
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            breakpoints={{
              320: { slidesPerView: 3 },
              375: { slidesPerView: 3 },
              425: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1440: { slidesPerView: 3 },
            }}
          >
            {/* <SwiperSlide>hello</SwiperSlide> */}

            {/* <SwiperSlide>hello</SwiperSlide> */}

            {images.map((data, index) => (
              <SwiperSlide>
                <div className="mb-[35px]" key={index}>
                  {" "}
                  <img
                    src={data}
                    className="rounded-[8px]  md:h-[6.823vw] md:w-[12.292vw] w-[118px] h-[65.5px]"
                    alt=""
                    onClick={() => handleImageClick(data)}
                  />
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="mb-[35px]">
                {" "}
                <img
                  src={pic17}
                  className="rounded-[8px]  md:h-[6.823vw] md:w-[12.292vw] w-[118px] h-[65.5px]"
                  alt=""
                />
              </div>
            </SwiperSlide> */}
            {/* <SwiperSlide>
              <div className="35px">
                {" "}
                <img
                  src={pic17}
                  className="rounded-[8px]  md:h-[6.823vw] md:w-[12.292vw]  w-[118px] h-[65.5px]"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="35px">
                {" "}
                <img
                  src={pic17}
                  className="rounded-[8px]  md:h-[6.823vw] md:w-[12.292vw]  w-[118px] h-[65.5px]"
                  alt=""
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="35px">
                {" "}
                <img
                  src={pic17}
                  className=" rounded-[8px] md:h-[6.823vw] md:w-[12.292vw]  w-[118px] h-[65.5px]"
                  alt=""
                />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
        {/* swipper section end  */}

        <div className="py-[10px] md:h-[2.292vw] md:w-[35vw] rounded-[8px] md:rounded-[0.417vw] h-[44px] flex justify-between px-[14px] md:px-[0.729vw] buttonShadow md:py-[0.521vw]">
          <div className="flex gap-[8px] md:gap-[0.417vw]">
            <img
              src={file}
              alt=""
              className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
            />
            <p className="font-Urbanist font-[500] text-[16px] md:text-[0.833vw] text-[#1F1F2C]">
              Get Report
            </p>
          </div>
          <HiOutlineArrowDownTray className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
        </div>

        {/* fourth section start  */}
        <div className="flex md:w-auto  flex-col px-[23px] md:gap-[1.51vw] justify-between mt-[20px] md:mt-[1.042vw]">
          <div className="w-[100%]  bg-[#F8F8F8] md:w-[16.146vw] py-[12px] md:py-[0.625vw] pl-[16px] md:pl-[0.833vw]">
            <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
              <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                Lot :
              </p>
              <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                1-51188714
              </p>
            </div>
            <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
              <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                VIN :
              </p>
              <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                {/* 1GCDC14Z2KE266021 */}
                {buyNow.sku}
              </p>
            </div>

            <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
              <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                Year/Make/Model :
              </p>
              <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                1989 GMT
              </p>
            </div>

            <div className="flex md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
              <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                Estimated Final Price:{" "}
              </p>
              <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                $450 - $700
              </p>
            </div>
          </div>
          <div className="w-[100%] mt-[12px] md:w-[16.146vw]">
            {/* <div className=" py-[12px] md:py-[0.625vw] px-[16px] bg-[#F8F8F8]  md:px-[0.833vw]">
                    </div> */}

            <div className="flex md:rounded-[0.417vw] rounded-[8px] justify-between py-[12px] md:py-[0.625vw] px-[16px] bg-[#F8F8F8]  md:px-[0.833vw] md:gap-[0.885vw] gap-[17px] md:mb-[0.833vw] mb-[16px]">
              <p className="text-[#7A798A]  font-Urbanist font-[400] text-[15px] md:text-[0.781vw]">
                Current Bid
              </p>
              <p className="text-[#1F1F2C]  font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                {/* $650 */}${buyNow.price}
              </p>
            </div>
            <div className="p-[16px] flex items-center justify-between md:gap-[0.625vw] gap-[12px] bg-[#F8F8F8]  md:p-[0.833vw]">
              <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                  40
                </span>{" "}
              </div>
              <span className="text-[#8A8AA0] text-[15px] md:text-[1.5vw]">
                :
              </span>

              <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                  12
                </span>{" "}
              </div>
              <span className="text-[#8A8AA0] text-[15px] md:text-[1.5vw]">
                :
              </span>

              <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                  35
                </span>{" "}
              </div>
              <span className="text-[#8A8AA0]  text-[15px] md:text-[1.5vw]">
                :
              </span>

              <div className="md:h-[3.021vw] h-[58px] w-[44px] md:w-[2.292vw] rounded-[6px] bg-[#DF4949] md:rounded-[0.313vw] flex justify-center items-center">
                <span className="text-[#FFFFFF] font-Urbanist font-[400] text-[20px] md:text-[1.042vw]">
                  44
                </span>{" "}
              </div>
              {/* <span className="text-[#8A8AA0] text-[1.5vw]">:</span> */}
            </div>
          </div>
        </div>
        {/* fourth section end  */}

        {/* five share icon start  */}
        <div className="flex md:gap-[0.835vw] justify-center gap-[16px] mt-[20px] mb-[40px] md:mb-[2.083vw] md:mt-[1.042vw]">
          <p className="text-[#1F1F2C] font-Urbanist font-[400] text-[16.04px] md:text-[0.835vw]">
            Share:
          </p>

          <div className="flex">
            <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
            <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
            <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
            <TiSocialFacebook className="w-[24.22px] h-[24.22px] md:w-[1.261vw] md:h-[1.261vw]" />
          </div>
          <p className="text-[#1F1F2C] font-Urbanist font-[400] text-[16.04px] md:text-[0.835vw]">
            More
          </p>
        </div>
        {/* five share icon end  */}

        {/* six button start  */}
        <button className="font-Urbanist text-center flex justify-center items-center gap-[8px] md:gap-[0.417vw] font-[700] text-[15px] md:text-[0.781vw] text-[#CA0000] md:h-[2.5vw] h-[48px] md:rounded-[2.917vw] rounded-[56px] customBtn md:w-[33vw] w-[95%]">
          <img
            src={Icon}
            alt=""
            className="w-[16.67px] h-[16.67px] md:w-[0.868vw] md:h-[0.868vw]"
          />
          Place Max bid
        </button>
        {/* six button end  */}
        {/* seven react tab start  */}
        <div>
          <div className="flex w-[100%] mx-auto flex-wrap border-b md:w-[31vw] mt-[40px] md:mt-[2.083vw] justify-between">
            {tabs.map((tab) => (
              <div
                key={tab.title}
                onClick={() => setActiveTab(tab.title)}
                className={`flex items-center px-4 py-2 cursor-pointer  text-nowrap font-Urbanist font-[400] text-[15px] md:text-[0.781vw]
              ${
                activeTab === tab.title
                  ? "border-b-2 border-blue-500 text-blue-500"
                  : "text-gray-500"
              }`}
              >
                {tab.title}
              </div>
            ))}
          </div>
          <div className="mt-[21px] md:mt-[1.094vw] py-4 md:py-[0.833vw] px-6 md:px-[1.25vw]">
            {tabs.map(
              (tab) =>
                activeTab === tab.title && (
                  <div key={tab.title}>
                    <span className="font-medium text-gray-800 dark:text-white">
                      {tab.content}
                    </span>
                  </div>
                )
            )}
          </div>
        </div>

        {/* seven react tab end  */}

        {/* eight section is start  */}
        <div className="mt-[40px] flex flex-col gap-[12px] justify-between w-[100%]  md:mt-[2.083vw]">
          <div className="w-[88%] mx-auto  rounded-[8px] bg-[#F8F8F8] pl-[16px] md:pl-[0.833vw] py-[12px] md:py-[0.625vw]">
            <h2 className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C] mb-[16px] md:mb-[0.833vw]">
              Penalties and Additional Fees:
            </h2>
            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Custom Clearance Total :{" "}
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                €736
              </p>
            </div>
            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Estimated Total Price{" "}
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                €4,434
              </p>
            </div>

            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Estimated Final Price:{" "}
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                $450 - $700
              </p>
            </div>
          </div>
          <div className="w-[88%] mx-auto  rounded-[8px] bg-[#F8F8F8] pl-[16px] md:pl-[0.833vw] py-[12px] md:py-[0.625vw]">
            <h2 className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C] mb-[16px] md:mb-[0.833vw]">
              Additional Services :
            </h2>
            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Hazardous Cargo :
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                $0
              </p>
            </div>
            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Oversized Vehicle :{" "}
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                $250-$600
              </p>
            </div>

            <div className="flex gap-[17px] md:gap-[0.885vw] mb-[16px] md:mb-[0.833vw]">
              <p className="font-Urbanist font-[400] text-[15px] md:text-[0.781vw] text-[#7A798A]">
                Estimated Final Price:{" "}
              </p>
              <p className="font-Urbanist font-[700] text-[15px] md:text-[0.781vw] text-[#1F1F2C]">
                $450 - $700
              </p>
            </div>
          </div>
        </div>

        {/* eight section is end  */}
      </div>
      {/* for mobile screen device end  */}
    </>
  );
}

export default VehicalCardDetails;
