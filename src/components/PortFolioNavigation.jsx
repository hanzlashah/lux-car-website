// import OtherNavigation from "./OtherNavigation";
import Navigation from "./Navigation";
import Horizontal01 from "../assets/Home/Horizontal01.png";
import { CiSearch } from "react-icons/ci"; // Assuming CiSearch is from react-icons/ci
import { FaBell, FaUser } from "react-icons/fa"; // Assuming FaBell and FaUser are from react-icons/fa

import pic25 from "../assets/EditProfile/pic25.png";
import { ImCross } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import React, { useState } from "react";
// import Navigation from "./Navigation"
import TopNavigation from "./TopNavigation";

function PortFolioNavigation() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isdropDown, setDropDown] = useState(false);

  const ToggleDropDown = () => {
    setDropDown(!isdropDown);
  };
 
  return (
    <>
      <div className="relative EditProfile">
        <div className="shadowDiv">
          <TopNavigation />
          <Navigation />
          <div className="mt-[3.125vw] relative hidden md:block text-center">
            <h3 className="text-[2.5vw]  font-Urbanist font-[700] text-[#FFFFFF] mb-[0.625vw]">
              Account
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
                User Account
              </p>
            </div>
            {isdropDown && (
              <div className="border editBoxShadow scroller   overflow-x-hidden text-left absolute -top-3 p-[20px] rounded-[8px] md:rounded-[0.417vw] bg-[#F8F8F8] md:p-[1.042vw] right-[10vw] h-[232px] md:h-[12.083vw] w-[320px] md:w-[16.667vw] ">
                <div className="border-b-[#EBEBEB] gap-[0.625vw] flex border-b-[0.052vw] pb-[12px] mb-[12px] md:pb-[0.625vw] md:mb-[0.625vw]   h-[56px] md:h-[2.917vw] md:w-[14vw]">
                  <img
                    src={pic25}
                    className="rounded-[0.625vw] w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                    alt=""
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw]">
                      <h3 className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </h3>
                      <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                        offered bid
                      </p>
                    </div>
                    <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                      at 06/10/2021, 3:20 AM
                    </p>
                  </div>
                </div>

                <div className="border-b-[#EBEBEB] gap-[0.625vw] flex border-b-[0.052vw] pb-[12px] mb-[12px] md:pb-[0.625vw] md:mb-[0.625vw]   h-[56px] md:h-[2.917vw] md:w-[14vw]">
                  <img
                    src={pic25}
                    className="rounded-[0.625vw] w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                    alt=""
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw]">
                      <h3 className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </h3>
                      <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                        offered bid
                      </p>
                    </div>
                    <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                      at 06/10/2021, 3:20 AM
                    </p>
                  </div>
                </div>

                <div className="border-b-[#EBEBEB] gap-[0.625vw] flex border-b-[0.052vw] pb-[12px] mb-[12px] md:pb-[0.625vw] md:mb-[0.625vw]   h-[56px] md:h-[2.917vw] md:w-[14vw]">
                  <img
                    src={pic25}
                    className="rounded-[0.625vw] w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                    alt=""
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw]">
                      <h3 className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </h3>
                      <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                        offered bid
                      </p>
                    </div>
                    <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                      at 06/10/2021, 3:20 AM
                    </p>
                  </div>
                </div>

                <div className=" gap-[0.625vw] flex  pb-[12px] mb-[12px] md:pb-[0.625vw] md:mb-[0.625vw]   h-[56px] md:h-[2.917vw] md:w-[14vw]">
                  <img
                    src={pic25}
                    className="rounded-[0.625vw] w-[44px] h-[44px] md:w-[2.292vw] md:h-[2.292vw]"
                    alt=""
                  />
                  <div>
                    <div className="flex gap-[8px] md:gap-[0.417vw]">
                      <h3 className="text-[#1F1F2C] font-Urbanist font-[700] text-[15px] md:text-[0.781vw]">
                        Mason Woodward
                      </h3>
                      <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                        offered bid
                      </p>
                    </div>
                    <p className=" text-[13px] md:text-[0.677vw] font-Urbanist font-[400] text-[#7A798A]">
                      at 06/10/2021, 3:20 AM
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PortFolioNavigation;
