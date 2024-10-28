import React from "react";
import letter_e1 from "../assets/Home/letter_e1.png";
import Shape from "../assets/Home/Shape.png";
import Vector from "../assets/Home/Vector.png";
import Logo from "../assets/Home/Logo.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Ellipse3 from "../assets/Home/Ellipse3.png";
import Ellipse2 from "../assets/Home/Ellipse2.png";
import Ellipse4 from "../assets/Home/Ellipse4.png";
import { IoSearch } from "react-icons/io5";
import { TbCalendarSearch } from "react-icons/tb";
import { MdKeyboardArrowDown } from "react-icons/md";

function Hero() {
  return (
    <>
      {/* hidden md:block  */}
      {/* for tablet and laptop section */}
      <div className=" bg-hero-section w-[100%]  md:w-[70.313vw]  mx-auto  ">
        {/* <div className="pb-[16px] md:pb-[0.56vw] "></div> */}
        {/* <hr className="w-auto md:w-[98.313vw] -mx-56 absolute" /> */}
        {/* <hr className="-ml-[14.583vw] -mr-[14.583vw] bg-[#8A8AA0]" /> */}
        <div className="md:flex justify-between mt-[1.563vw]">
          <div className="left  text-center md:text-left pl-[20px] md:px-[0vw]  w-[100%] md:w-[21vw] ">
            <h2 className="text-[44px] md:text-[2.917vw] text-stroke font-Urbanist  font-[600] mb-[25px] md:mb-[0vw] ">
              Bid, Buy, Drive
            </h2>
            <h3 className="text-[42px] md:text-[2.917vw] font-[600] font-Urbanist leading-[13vw]  md:leading-[3vw]  mb-[30px] md:mb-[0vw]">
              Online Car <br />
              Auctions with <br />
              Home Delivery!
            </h3>
            {/* <h3 className="text-[46px] md:text-[2.917vw] font-[600] font-Urbanist">
              {" "}
              Online Car{" "}
            </h3>
            <h3 className="text-[46px] md:text-[2.917vw] font-[600] font-Urbanist">
              {" "}
              Auctions with{" "}
            </h3>
            <h3 className="text-[40px] md:text-[2.917vw] font-[600] font-Urbanist">
              Home Delivery!
            </h3> */}
            {/* <p className="text-[#8A8AA0] font-Urbanist text-[0.938vw]">
              Lorem ipsum dolor sit amet. Ea similique <br />
              aliquam ut maxime necessitatibus est <br />
              nemo error sed vero sapiente cum quae
              <br />
              temporibus sed quaerat{" "}
            </p> */}
            <p className="text-[#8A8AA0] font-Urbanist text-[16px] md:text-[0.938vw] mb-[20px] md:mb-[0vw]">
              Lorem ipsum dolor sit amet. Ea similique <br />
              aliquam ut maxime necessitatibus est <br />
              nemo error sed vero sapiente cum quae <br />
              temporibus sed quaerat <br />
            </p>
            {/* <p className="text-[#8A8AA0] font-Urbanist text-[16px] md:text-[0.938vw]">
              Lorem ipsum dolor sit amet. Ea similique <br />
            </p>
            <p className="text-[#8A8AA0] font-Urbanist text-[16px] md:text-[0.938vw]">
              aliquam ut maxime necessitatibus est <br />
            </p>
            <p className="text-[#8A8AA0] font-Urbanist text-[16px] md:text-[0.938vw] font-[400]">
              nemo error sed vero sapiente cum quae
            </p>
            <p className="text-[#8A8AA0] font-Urbanist text-[16px] md:text-[0.938vw] mb-[1.094vw]">
              temporibus sed quaerat
            </p> */}
            <button
              className="bg-[#DF4949] rounded-[26.51px] md:rounded-[1.667vw] text-[16px] md:text-[0.833vw] py-[8px] md:py-[0.521vw] px-[21px] md:px-[1.354vw] font-Urbanist font-[500] text-[#FFFFFF] md:mb-[2.344vw]
            mb-[40px]"
            >
              Start Bidding
            </button>
            <div className="flex justify-center md:justify-start gap-[15px] md:gap-x-[0.833vw]">
              <img
                src={letter_e1}
                className="h-[15px] w-[15px] md:w-[0.781vw] md:h-[0.781vw]"
              />
              <img
                src={Shape}
                className="h-[15px] w-[15px] md:w-[0.781vw] md:h-[0.781vw]"
              />
              <img
                src={Vector}
                className="h-[15px] w-[15px] md:w-[0.781vw] md:h-[0.781vw]"
              />
              <img
                src={Logo}
                className="h-[15px] w-[15px] md:w-[0.781vw] md:h-[0.781vw]"
              />
            </div>
          </div>
          <div className="center block md:hidden bg-hero-section-sm "></div>
          <div className="right border bg-white w-[50%]  md:w-[13vw] rounded-[20.006px] md:rounded-[1.042vw] p-[1.042vw] ml-[10px] md:ml-[0vw]  md:h-[20vw] mt-[0px] md:mt-[4vw] shadow ">
            <div className="flex md:justify-start justify-center mb-[24px] md:mb-[1.25vw]">
              <img
                src={Ellipse3}
                className="md:w-[3.125vw] w-[60px] h-[60px] md:h-[3.125vw]"
              />
              <img
                src={Ellipse2}
                className="md:w-[3.125vw] w-[60px] h-[60px] md:h-[3.125vw] -mx-[10px] md:-mx-[0.521vw]"
              />
              <img
                src={Ellipse4}
                className="md:w-[3.125vw] w-[60px] h-[60px] md:h-[3.125vw] -mx-[10px] md:-mx-[0.104vw]"
              />
            </div>
            <div>
              <h3 className="text-[20px] md:text-left text-center text-[ #14141F]  md:text-[1.042vw] font-[600] font-Urbanist">
                12.5K+ People
              </h3>
              <p className="text-[13px] md:text-left text-center text-[ #14141F] font-[400] md:text-[0.729vw] opacity-[60%] mb-[15px] md:mb-[0.781vw]">
                has used our services such <br />
                as selling, buying, or even <br />
                buying their parts.
              </p>
            </div>
            <div className="flex justify-center md:justify-start  gap-x-[13px] md:gap-x-[0.729vw] mb-[15px] md:mb-[0.833vw]">
              <button className="border-[#DF4949] border-[.1vw] py-[10px] px-[20px] md:py-[0.521vw] md:px-[1.354vw] rounded-[32px] md:rounded-[1.667vw] text-[15px] md:text-[0.833vw] font-[600] font-Urbanist text-[#DF4949]">
                Bid
              </button>
              <button className="border-[#DF4949] border-[.1vw]  py-[10px] px-[20px] md:py-[0.521vw] md:px-[1.354vw] rounded-[32px] text-[15px] md:text-[0.833vw] font-[600] font-Urbanist text-[#DF4949]">
                Buy
              </button>
            </div>
            <div className="flex justify-center md:justify-start  gap-x-[0.729vw]">
              <button className="border-[#DF4949] border-[.1vw]  py-[10px] px-[20px] md:py-[0.521vw] md:px-[1.354vw] rounded-[32px] text-[15px] md:text-[0.833vw] font-[600] font-Urbanist text-[#DF4949]">
                Sell
              </button>
              <button className="border-[#DF4949] border-[.1vw]  py-[10px] px-[20px] md:py-[0.521vw] md:px-[1.354vw] rounded-[32px] text-[15px] md:text-[0.833vw] font-[600] font-Urbanist text-[#DF4949]">
                Consult
              </button>
            </div>
            <p className="flex items-center justify-center md:justify-start  gap-x-[32px] md:gap-x-[1.667vw]">
              <span className="text-[16px] md:text-[0.833vw] font-[600] text-[ #14141F]">
                Learn more
              </span>
              <LiaLongArrowAltRightSolid className="text-[ #14141F] w-[48px] h-[48px] md:w-[2.5vw] md:h-[2.5vw] " />
            </p>
          </div>
        </div>
        <div className="relative  ">
          {/* lg */}
          <div className="absolute flex flex-col justify-center   items-center right-[40px] -top-[580px] md:-top-[24vw]  md:right-[20vw] lg:-top-[20vw] lg:right-[21vw]  rounded-[10px] md:rounded-[1.042vw] shadow md:w-[7.813vw] w-[90px] h-[90px] md:h-[7.813vw] px-[30.01px]  md:px-[1.563vw] py-[9.6px]  md:py-[.5vw]">
            <h3 className="text-[23.63px] md:text-[2.5vw] font-[500] font-Urbanist text-center text-[ #14141F]">
              50+
            </h3>
            <p className="text-[12px] md:text-[0.729vw] font-[400] font-Urbanist text-center text-[ #14141F] opacity-[70%]">
              Categories <br />
              Available
            </p>
          </div>
          <div
            className="absolute   shadow rounded-tr-[16.6px] md:rounded-tr-[1.042vw] rounded-br-[16.6px] md:rounded-br-[1.042vw] rounded-bl-[16.6px] md:rounded-bl-[1.042vw]  -bottom-[110px] md:-bottom-[6.5vw] lg:-bottom-[6.5vw] background-white-shadow w-[35%]
           md:w-[60vw] lg:w-[55vw] h-auto md:h-[6vw] lg:h-[5.313vw] p-[20px] md:p-[1.042vw] right-3"
          >
            <div className="md:flex items-center justify-between">
              <div className="border-b-2 md:border-b-0 md:border-r-2 py-[20px] md:py-[0vw] md:px-[1vw]">
                <h3 className=" text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  VIN/Lot
                </h3>
                <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                  Type Here...
                </p>
              </div>
              <div className="border-b-2 md:border-b-0 md:border-r-2  py-[20px] md:py-[0vw] md:px-[1vw]">
                <h3 className=" text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Car Type
                </h3>
                <div className="flex items-end gap-[10px]  md:gap-x-[1vw]">
                  <p className="text-[12px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                    All Vehicles
                  </p>
                  <MdKeyboardArrowDown className="text-[ #14141F] w-[12px] h-[12px] md:w-[1.5vw] md:h-[1.5vw]   " />
                </div>
              </div>

              <div className="border-b-2 md:border-b-0 md:border-r-2  py-[20px] md:py-[0vw] md:px-[1vw]">
                <h3 className=" text-[#14141F] text-[12px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Model
                </h3>
                <div className="flex items-end gap-[10px] md:gap-x-[1vw]">
                  <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%] flex items-end">
                    All Models
                  </p>
                  <MdKeyboardArrowDown className="text-[ #14141F] w-[12px] h-[12px] md:w-[1.5vw] md:h-[1.5vw]   " />
                </div>
              </div>
              <div className="border-b-2 md:border-b-0 md:border-r-2  py-[20px] md:py-[0vw] md:px-[1vw]">
                <h3 className=" text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Source
                </h3>
                <div className="flex items-end  gap-[10px] md:gap-x-[1vw]">
                  <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%] flex items-end">
                    COPART
                  </p>
                  <MdKeyboardArrowDown className="text-[ #14141F] w-[12px] h-[12px] md:w-[1.5vw] md:h-[1.5vw]   " />
                  {/* <MdKeyboardArrowDown className="text-[ #14141F] w-[12px] h-[12px] md:w-[1.5vw] md:h-[1.5vw]   "/> */}
                </div>
              </div>

              <div className=" md:border-b-0  py-[20px] md:py-[0vw] md:px-[1vw]">
                <h3 className=" text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Date
                </h3>
                <div className="flex items-end gap-x-[1vw] overflow-auto">
                  <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%] flex gap-x-1 items-center">
                    <TbCalendarSearch className="text-[ #14141F] w-[28px] h-[28px] md:w-[1.5vw] md:h-[1.5vw]   " />
                    <span>09/01/2024</span>
                  </p>
                  -
                  <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%] flex gap-x-1 items-center">
                    <TbCalendarSearch className="text-[ #14141F] w-[28px] h-[28px] md:w-[1.5vw] md:h-[1.5vw]   " />
                    <span>09/01/2024</span>
                  </p>
                </div>
              </div>
              <div className=" px-[20px] py-[20px] w-[50px] h-[50px] md:w-[4vw] md:h-[3.5vw] md:px-[1vw] md:py-[1vw] bg-[#DF4949] rounded-[20px] md:rounded-[1vw] flex items-center justify-center ">
                <button>
                  <IoSearch className="text-[ #14141F] w-[28px] h-[28px] md:w-[1.5vw] md:h-[1.5vw]   text-white" />
                </button>
              </div>
            </div>
            {/* <div className="md:flex  justify-between items-center">
              <div className="border-b-[1px] md:border-r-[.04vw] pb-[20px] flex flex-col gap-[5px] md:block md:pb-[0vw] md:pr-[1vw]">
                <h3 className=" text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  VIN/Lot
                </h3>
                <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                  Type Here...
                </p>
              </div>
              <div className="border-b-[1px]  md:border-b-[0vw] md:border-r-[.04vw] pb-[20px] md:pb-[0vw] px-[1vw]">
                <h3 className="text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Car Type
                </h3>
                <p className="text-[13px]   md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                  All Vehicles
                </p>
              </div>
              <div className="border-b-[1px]  md:border-b-[0vw] md:border-r-[.04vw] pb-[20px] md:pb-[0vw] px-[1vw]">
                <h3 className="text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Model
                </h3>
                <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                  All Models
                </p>
              </div>
              <div className="border-b-[1px] md:border-b-[0vw] md:border-r-[.04vw] pb-[20px] md:pb-[0vw] px-[1vw]">
                <h3 className="text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Source
                </h3>
                <p className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580] opacity-[95%]">
                  COPART
                </p>
              </div>
              <div className="border-b-[1px]   md:border-b-[0vw] overflow-x-auto w-[100%] md:border-r-[.04vw] pb-[20px] md:pb-[0vw] px-[1vw] mr-[1vw]">
                <h3 className="text-[#14141F] text-[14px] md:text-[0.938vw] font-[600] font-Urbanist">
                  Date
                </h3>
                <div className="flex">
                  <p className="flex text-[#19182580] opacity-[95%] gap-x-[.7vw]">
                    <TbCalendarSearch className="text-[ #14141F] w-[1vw] h-[1vw] " />
                    <span className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580]">
                      {" "}
                      09/01/2024 -{" "}
                    </span>
                  </p>
                  <p className="flex text-[#19182580] opacity-[95%]  gap-x-[.7vw]">
                    <TbCalendarSearch className="text-[ #14141F] w-[1vw] h-[1vw] " />
                    <span className="text-[13px] md:text-[0.833vw] font-[400] font-Urbanist text-[#19182580]">
                      {" "}
                      09/01/2024
                    </span>
                  </p>
                </div>
              </div>

              <div className=" flex items-center justify-center bg-[#DF4949] w-[44px] md:w-[2.344vw] h-[44px] md:h-[2.344vw] rounded-[12px] md:rounded-[0.781vw]">
                <IoSearch className="text-[ #14141F] w-[28px] h-[28px] md:w-[1.5vw] md:h-[1.5vw] text-white" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* for  mobile section  */}
    </>
  );
}

export default Hero;

// font-Urbanist  font-[700]
// background: #14141F;

// text-[17px] background: #7A798A;

// border: 1px solid #DF4949

// width: Hug (75px)px;
// height: Fixed (39.04px)px;
// padding: 10px 26px 10px 26px;
// gap: 10px;
// border-radius: 32px 0px 0px 0px;
// border: 1px 0px 0px 0px;
// opacity: 0px;
