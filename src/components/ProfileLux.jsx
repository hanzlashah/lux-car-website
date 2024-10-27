import React, { useState } from "react";
import Footer from "./Footer";
import PortFolioNavigation from "./PortFolioNavigation";
import pic26 from "../assets/EditProfile/pic26.png";
import { FaFile } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

function ProfileLux() {
  return (
    <>
      <PortFolioNavigation />
      <div className="mt-[80px] md:mt-[4.167vw]">
        <div className="w-[95%] md:w-[73.462vw] mx-auto ">
          <div className="w-[100%] md:w-[73.462vw] rounded-tl-[8px] rounded-tr-[8px] md:rounded-tl-[0.417vw] md:rounded-tr-[0.417vw] portFolioHeroBg  md:flex justify-between md:h-[15vw] px-[40px] md:px-[2.083vw] pt-5 md:pt-[2.083vw]">
            <div className="md:flex w-auto  md:w-[40.625vw] gap-[40px] md:gap-[2.083vw]">
              <img
                className="w-[340px] h-[274px] md:w-[15.26vw] md:h-[15.26vw]"
                src={pic26}
                alt=""
              />
              <div>
                <h2 className="text-[36px] md:text-[1.875vw] text-[#FFFFFF] font-Urbanist font-[700]">
                  Joshua Paul
                </h2>
                <p className="md:text-[0.938vw] text-[18px] font-[400] text-[#EBEBEB]">
                  @oshuapaul68
                </p>
                <p className="text-[14px] md:text-[0.729vw] font-[400] text-[#EBEBEB]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laborum obcaecati dignissimos quae quo ad iste ipsum officiis
                  deleniti asperiores sit.
                </p>
                <button className="text-[#7A798A] mt-[26px] md:mt-[1.354vw] rounded-[50px] md:rounded-[2.604vw] text-[13px] md:text-[0.677vw] flex bg-[#EBEBEB] h-[36px] items-center justify-center md:h-[1.875vw] w-[190px] md:w-[9.896vw]">
                  Bidding Power: $0/$0{" "}
                  <FaFile className="text-[#7A798A] h-[0.833vw] w-[0.833vw]" />
                </button>
              </div>
            </div>
            <div className="md:last:flex gap-[32px] md:gap-[1.667vw]">
              <div className="flex gap-[12px] md:gap-[0.625vw] py-5 md:py-[0vw]">
                <div className="rounded-[8px] flex justify-center items-center md:rounded-[0.417vw] bg-[#EBEBEB] w-[40px] h-[40px] md:w-[2.083vw] md:h-[2.083vw]">
                  <FaFacebookF className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
                </div>
                <div className="rounded-[8px] flex justify-center items-center md:rounded-[0.417vw] bg-[#EBEBEB] w-[40px] h-[40px] md:w-[2.083vw] md:h-[2.083vw]">
                  <RiTwitterXLine className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
                </div>
                <div className="rounded-[8px] flex justify-center items-center md:rounded-[0.417vw] bg-[#EBEBEB] w-[40px] h-[40px] md:w-[2.083vw] md:h-[2.083vw]">
                  <FaGoogle className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
                </div>
                <div className="rounded-[8px] flex justify-center items-center md:rounded-[0.417vw] bg-[#EBEBEB] w-[40px] h-[40px] md:w-[2.083vw] md:h-[2.083vw]">
                  <FaLinkedinIn className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]" />
                </div>
              </div>

              <button className="text-[#FFFFFF] mb-5 md:mb-[0vw] text-[14px] md:text-[0.729vw] font-Urbanist font-[700]  rounded-[30px] w-[97px] h-[40px] md:h-[2.083vw] md:w-[5.052vw]  md:rounded-[1.563vw] border-[1.5px] md:border-[0.078vw] border-[#FFFFFF]">
                Create Bid
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] w-[95%]  md:w-[73.462vw] mx-auto  py-[24px] md:py-[1.25vw] mb-[60px] md:mb-[3.125vw]">
        <div className="w-[100%] md:w-[47.292vw] md:ml-[25vw] text-center   flex overflow-auto flex-row gap-8 md:gap-[4.635vw]">
          <Link to={"/ProfileLux/Bits"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist ">
              ALL BIDS
            </p>
          </Link>
          <Link to={"/ProfileLux/Funds"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist">
              FUNDS
            </p>
          </Link>

          <Link to={"/ProfileLux/Order"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist">
              ORDERS
            </p>
          </Link>

          <Link to={"/ProfileLux/Offers"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist">
              OFFERS
            </p>
          </Link>
          <Link to={"/ProfileLux/Parts"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist">
              PARTS
            </p>
          </Link>
          <Link to={"/ProfileLux/MyProfile"}>
            <p className="text-[#1F1F2C] text-[20px] text-nowrap  md:text-[1.042vw] font-[700] font-Urbanist">
              My Profile
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default ProfileLux;
