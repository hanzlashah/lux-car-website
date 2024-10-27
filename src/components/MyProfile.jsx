import React from "react";
import pic31 from "../assets/EditProfile/pic31.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import pic32 from "../assets/EditProfile/pic32.png";
import pic33 from "../assets/EditProfile/pic33.png";
import pic34 from "../assets/EditProfile/pic34.png";
import { RiDeleteBinFill } from "react-icons/ri";
function MyProfile() {
  return (
    <>
      <div className="w-[95%] md:w-[73.462vw] mx-auto mb-[80px] md:mb-[4.167vw]">
        <h2 className="text-[#1F1F2C] mb-[36px] md:mb-[1.875vw]  text-[36px]  md:text-[1.875vw] font-[700] font-Urbanist">
          Profile Info
        </h2>
        <div className="md:flex  gap-[54px] md:gap-[2.813vw]">
          <div>
            <div className="flex  flex-col md:flex-row mb-[24px] md:mb-[1.25vw] gap-[27px] md:gap-[1.406vw]">
              <input
                type="text"
                placeholder="Full Name"
                className="MyProfileInput outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[95%] md:w-[26.458vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
              />
              <input
                type="text"
                placeholder="Email"
                className="MyProfileInput  outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[95%] md:w-[26.458vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
              />
            </div>

            <div className="flex  mb-[24px] flex-col md:flex-row md:mb-[1.25vw] gap-[27px] md:gap-[1.406vw]">
              <div className="relative w-[100%] md:w-auto">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="MyProfileInput outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[95%] md:w-[26.458vw] pl-[40px] md:pl-[4vw] lg:pl-[3.5vw] xl:pl-[2.5vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
                />
                <p className="absolute flex items-center left-2 top-3 lg:top-[1vw] lg:left-[1vw] xl:left-[.5vw] xl:top-[.5vw]  text-[#8A8AA0] text-[16px] md:text-[0.833vw] font-[400]">
                  US{" "}
                  <MdOutlineKeyboardArrowDown className="text-[#8A8AA0] h-[10px] md:h-[1.042vw] w-[10px] md:w-[1.042vw]" />
                </p>
                <IoIosHelpCircleOutline className="text-[#8A8AA0] top-5 right-11 md:right-[1vw]  md:top-[1.5vw] lg:top-[1vw] lg:right-[1vw] xl:top-[.5vw] xl:right-[1vw]  absolute h-[15px] md:h-[1.042vw] w-[15px] md:w-[1.042vw]" />
              </div>
              <input
                type="text"
                placeholder="Address"
                className="MyProfileInput   outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[95%] md:w-[26.458vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
              />
            </div>
            <div className="flex gap-[24px] md:gap-[1.25vw]">
              <div className="bg-[#C4C4C4] rounded-[10px] md:w-[4.583vw] md:h-[4.583vw]  flex justify-center items-center w-[88px] h-[88px] md:rounded-[0.521vw]">
                <img
                  src={pic34}
                  alt=""
                  className="w-[24px] h-[24px] md:w-[1.25vw] md:h-[1.25vw]"
                />
              </div>
              <div>
                <div className="flex gap-[18px] md:gap-[0.938vw] mb-[10px] md:mb-[0.521vw]">
                  <button className="bg-[#343444] text-[#FFFFFF] text-[16px] md:text-[0.833vw] font-[500] font-Urbanist w-[96px] md:w-[5vw] h-[35px] rounded-[45px] md:rounded-[2.344vw] md:h-[1.823vw]">
                    Upload
                  </button>
                  <button className="flex items-center  gap-[10px] md:gap-[0.521vw] ">
                    <RiDeleteBinFill className="w-[18px] h-[18px] md:h-[1.042vw] md:w-[1.042vw] text-[#CA0000]" />{" "}
                    <span className="text-[16px] font-[500] font-Urbanist md:text-[0.833vw] text-[#050023]">
                      {" "}
                      Delete
                    </span>
                  </button>
                </div>
                <p className="text-[#737A99] mb-[15px] md:mb-[0vw] text-[14px] md:text-[0.729vw] font-[400] opacity-[50%]">
                  Images must be .png or .jpg format. Min size <br />
                  120x120px (avatar)
                </p>
              </div>
            </div>
          </div>
          {/* <div>
            <input
              type="text"
              placeholder="Full Name"
              className="MyProfileInput md:mb-[24px] mb-[1.25vw] outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[508px] md:w-[29vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="MyProfileInput md:mb-[24px] mb-[1.25vw] outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[508px] md:w-[29vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="MyProfileInput md:mb-[24px] mb-[1.25vw] outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[508px] md:w-[29vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
            />
            <input
              type="text"
              placeholder="Address"
              className="MyProfileInput md:mb-[24px] mb-[1.25vw] outline-none rounded-[8px] md:rounded-[0.417vw] md:h-[2.396vw] h-[46px] w-[508px] md:w-[29vw] pl-[20px] md:pl-[1.042vw] py-[12px] md:py-[0.625vw] text-[14px] md:text-[0.729vw] text-[#7A798A]  font-[400]"
            />
          </div> */}
          <div className="h-[192px] md:h-[12vw] w-[100%] mx-auto md:w-[16.327vw] rounded-[10.45px] md:rounded-[0.544vw]  border">
            <div className=" pt-[37.52px] md:pt-[1.954vw] pl-[25px] md:pl-[1.354vw]">
              <div className="flex gap-[25px] md:gap-[1.302vw] mb-[30px] md:mb-[1.563vw]">
                <div className="w-[59.02px] h-[59.02px] rounded-[50%] md:rounded-[50vw] flex justify-center items-center md:w-[3.074vw] md:h-[3.074vw] bg-[#DF4949]">
                  <img
                    src={pic31}
                    className="h-[22.13px] md:h-[1.153vw] w-[24.59px] md:w-[1.281vw]"
                    alt=""
                  />
                </div>

                <div>
                  {" "}
                  <p className="text-[#9698AB]  text-[15.67px] md:text-[0.816vw]  font-[500] font-Urbanist">
                    Documentation
                  </p>
                  <h3 className="text-[#343444] text-[20.9px] md:text-[1.089vw] font-[700] font-Urbanist">
                    Lorem Ipsum
                  </h3>
                </div>
              </div>
              <div>
                <input
                  type="range"
                  id="price-range"
                  class="w-[90%] md:w-[13vw] accent-[#DF4949]"
                  min="0"
                  max="1000"
                  value="700"
                />
              </div>
              <div className="flex justify-between w-[95%] md:w-[13.77vw]">
                <div className="flex items-center gap-[12.29px] md:gap-[0.64vw]">
                  <img
                    src={pic32}
                    alt=""
                    className="w-[29.52px] md:w-[1.538vw] h-[17.22px] md:h-[0.897vw]"
                  />
                  <p className="md:text-[1.024vw] text-[19.67px] text-[#DF4949]">
                    + 15 %
                  </p>
                </div>
                <img
                  src={pic33}
                  alt=""
                  className="w-[24.59px] h-[24.59px] md:w-[1.281vw] md:h-[1.281vw]"
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-[#F3F3F6] text-[#CA0000] text-[16px] md:text-[0.833vw] font-[500] font-Urbanist mt-[36px] md:mt-[1.875vw] w-[178px] md:w-[9.271vw]  rounded-[45px] md:rounded-[2.344vw] h-[54px] md:h-[2.813vw]">
          Update Profile
        </button>
      </div>
    </>
  );
}

export default MyProfile;
