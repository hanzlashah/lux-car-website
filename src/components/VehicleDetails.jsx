import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import Horizontal01 from "../assets/Home/Horizontal01.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import VehicalCardDetails from "./VehicalCardDetails"
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";   

function VehicleDetails() {
  const [isVisibleVehical, setIsVisibleVehical] = useState(false);

  const toggleVisibilityVehical = () => {
    setIsVisibleVehical(!isVisibleVehical);
  };
  return (
    <>
      {/* font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw] */}
      {/* for tablet or laptop screen  */}
      <div className="bg-[#1F1F2C] hidden md:block h-auto  md:h-[2vw] lg:h-[1.563vw] w-auto text-white">
        <div className="w-[73vw]  md:h-[2vw] lg:h-[1.563vw] mx-auto  md:flex items-center justify-between md:py-[1vw] lg:py-[0.365vw]">
          <p className="text-[12px] md:text-[0.938vw] text-center   font-Urbanist font-[700] pb-2 md:pb-[0vw]">
            BMW XYZ 2018 IS GOING LIVE FOR AUCTION IN 5 MINUTES!!
          </p>
          <div className="flex items-center justify-between  gap-[12px] md:gap-[0.625vw]">
            <select
              name=""
              id=""
              className="w-[6vw] text-[12px] font-Urbanist   md:text-[0.625vw]  border-[.1vw] outline-none bg-black  md:p-[0.1vw] rounded-[3.38px] md:rounded-[0.176vw]"
            >
              <option
                value=""
                className="text-[12px] font-Urbanist   md:text-[0.625vw]"
              >
                (UTC+00:00) UTC
              </option>
              <option value="">(UTC+00:00) UTC</option>
              {/* <option value="">(UTC+00:00) UTC</option> */}
            </select>

            <select
              name=""
              id=""
              className="text-[12px] md:text-[0.625vw] border-[.1vw] outline-none bg-black p-[6.2px] md:p-[0.1vw] rounded-[3.38px] md:rounded-[0.176vw]"
            >
              <option value="" className="text-[12px] md:text-[0.625vw]">
                English
              </option>
              <option value="" className="text-[12px] md:text-[0.625vw]">
                Urdu
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className=" VehicleDetails ">
        <div className=" md:p-[0.833vw]    mx-auto md:w-[73.229vw] flex items-center justify-between">
          <div className="hidden md:flex md:gap-[1.302vw] gap-[25px] items-center">
            <img
              src={Horizontal01}
              alt=""
              className="h-[46px] md:h-[2.396vw] w-[225px] md:w-[11.719vw]"
            />
            <div className="flex gap-[21px] md:gap-[1.094vw]  font-Urbanist font-[700] text-black md:text-[#FFFFFF] text-[18px] md:text-[0.938vw]">
              <a href="#">How It Works</a>
              <a href="#">Fees</a>
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="hidden md:flex items-center md:gap-[0.677vw] gap-[13px]">
            <CiSearch className="w-[16px] h-[16px] md:w-[0.833vw] text-black md:text-[#FFFFFF]   md:h-[0.833vw]" />
            <FaBell className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]" />
            <FaUser className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]" />
          </div>
        </div>
        <hr className="bg-[#8A8AA0] h-[0.052vw]  opacity-40  md:block hidden" />
        <div className="mt-[3.125vw] hidden md:block text-center">
          <h3 className="text-[2.5vw]  font-Urbanist font-[700] text-[#FFFFFF] mb-[0.625vw]">
            Vehicle Details
          </h3>
          <div className="hidden md:flex justify-center gap-[0.625vw]">
            <p className="font-Urbanist  text-[#8A8AA0] font-[400]  text-[0.938vw]">
              Home
            </p>{" "}
            <span className="font-Urbanist  text-[#8A8AA0] font-[400]  text-[0.938vw]">
              {" "}
              /
            </span>
            <p className="font-Urbanist font-[400] text-[#FFFFFF] text-[0.938vw]">
              Vhicle Details
            </p>
          </div>
        </div>
      </div>

      {/* for mobile screen  */}

     
     <div>
     <div className=" p-[16px] w-[90%] border-b-[1px] border-b-[#F3F3F3F3]  flex justify-between items-center mx-auto md:hidden mb-[12px]">
        <img src={Horizontal01} className="w-[157.06px] h-[32px]"/>
        <RxHamburgerMenu  className="w-[24px] h-[24px]" onClick={toggleVisibilityVehical}/>
        
      </div>

      {isVisibleVehical && (
        <>
        <div className="w-[90%]  mx-auto">
        <div className="flex md:hidden flex-col  w-[90%] mx-auto gap-[21px] justify-center  text-center font-Urbanist font-[700] text-black md:text-[#FFFFFF] text-[18px]">
              <a href="#">How It Works</a>
              <a href="#">Fees</a>
              <a href="#">About</a>
              <a href="#">Help</a>
              <a href="#">Contact</a>
            </div>
        <div className="md:hidden flex items-center justify-center text-center py-[12px]   gap-[13px]">
            <CiSearch className="w-[16px] h-[16px]  text-black   " />
            <FaBell className="w-[16px] h-[16px]  text-black " />
            <FaUser className="w-[16px] h-[16px] text-black   " />
          </div>
        </div>
        </>
      )}
      
     </div>


< VehicalCardDetails />
    </>
  );
}

export default VehicleDetails;
