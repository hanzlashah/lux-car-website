import React from "react";
import Horizontal01 from "../assets/Home/Horizontal01.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Footer() {
  return (
    <div className="bg-[#f8f8f8]">
      {/* border: 1px solid #8A8AA0 */}
      {/* border-b-[0.007vw] border-b-[#8A8AA0] */}
      <div className="border-b-[0.001vw] border-b-[#8A8AA0] border-opacity-25 ">
        <div className=" md:flex  items-center md:gap-[7.5vw] justify-between gap-[144px]   md:w-[73vw] mx-auto w-[90%] pb-[35px] md:pb-[4vw] pt-[35px] md:pt-[4vw]">
          <div className="w-[246px] md:w-[12.813vw]">
            <img
              src={Horizontal01}
              alt=""
              className="w-[157.06px] md:w-[11.667vw] md:h-[2.377vw] h-[32px] mb-[12px] md:mb-[0.625vw]"
            />
            <p className="text-[#1F1F2C] text-[14px]  font-[400] font-Urbanist md:text-[0.729vw] md:mb-[1.458vw] mb-[28px]">
              Trust in the Lord with all your heart, And lean not on your own
              understanding;?In all your ways acknowledge Him,?And He shall
              direct your paths.?~ Proverbs 3:5-6
            </p>
          </div>
          <div className="md:flex   gap-x-[110px] md:gap-x-[4vw]">
            <div className=" ">
              <h3 className="text-[#1F1F2C] md:text-[0.938vw] text-[18px] font-[700] mb-[28px] font-Urbanist md:mb-[1.25vw]">
                Shipping Destinations
              </h3>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                Nassau
              </p>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                Freeport
              </p>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                Abaco
              </p>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                Bimini
              </p>
            </div>

            <div className="flex  gap-[36px] md:gap-[1.875vw]">
              <div className=" ">
                <h3 className="text-[#1F1F2C] md:text-[0.938vw] text-[18px] font-[700] mb-[28px] font-Urbanist md:mb-[1.25vw]">
                  Useful Links
                </h3>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Influencer Partners
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Privacy Policies
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Terms & Conditions
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Fees
                </p>
              </div>

              <div className=" ">
                <h3 className="text-[#1F1F2C] md:text-[0.938vw] text-[18px] font-[700] mb-[28px] font-Urbanist md:mb-[1.25vw]">
                  Company
                </h3>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  About Us
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Contact Us
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  My Account
                </p>
                <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                  Discover
                </p>
              </div>
            </div>

            <div className=" ">
              <h3 className="text-[#1F1F2C] md:text-[0.938vw] text-[18px] font-[700] mb-[28px] font-Urbanist md:mb-[1.25vw]">
                Subscribe
              </h3>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[10px] md:mb-[0.833vw]">
                HeadQuarters: Abaco, Bahamas
              </p>
              <p className="font-Urbanist font-[400] text-[14px] md:text-[0.729vw] mb-[16px] md:mb-[0.833vw]">
                Ph no.: +12428259510{" "}
              </p>
              {/* <label
              htmlFor=""
              className="border relative border-[#EBEBEB] md:rounded-[0.521vw] rounded-[10px] w-[80%] md:w-[13.542vw] h-[45px] md:h-[4vw]"
            >
              <input
                type="text"
                placeholder="Info@yourgmail.com"
                className="bg-transparent  p-4 border-none outline-none  w-[80%]  md:w-[13.542vw] h-[45px] md:h-[1.823vw]"
              />
              <div className="absolute right-0 top-0 bg-red-500 h-[20px] w-[20px] xl:w-[1vw] xl:h-[1vw] lg:w-[2vw] lg:h-[2vw]">
                <FaArrowCircleRight className=" text-red-400  h-[20px] w-[20px]  bg-white lg:w-[2vw] lg:h-[2vw] xl:w-[1vw] xl:h-[1vw]" />
              </div>
            </label> */}

              <form className="">
                <div className="flex items-center  rounded-xl">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-[75%] md:w-[10.417vw] h-[46px] md:h-[4vw] lg:h-[2.396vw] outline-none rounded-l-[10px]  md:rounded-l-[0.521vw] pl-2 text-[4vw] md:text-[1.5vw] lg:text-[1vw]"
                    placeholder="Info@yourgmail.com"
                  />
                  <div className="flex h-[46px]  w-[50px] md:h-[4vw] md:w-[4vw]  lg:h-[2.396vw] lg:w-[2.396vw]  justify-center items-center rounded-r-[10px]  md:rounded-r-[0.521vw] bg-red-700">
                    <IoSend
                      color="white"
                      className="w-[15px] h-[15px] md:w-[2vw] md:h-[2vw] lg:w-[1.4vw] lg:h-[1.4vw]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[30px] md:py-[1.563vw]">
        <p className="font-[400] text-center md:text-[0.729vw] text-[14px] font-Urbanist text-[#1F1F2C]">
          ©2024 LUX® First Choice Cars. All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
