import React from "react";
import Horizontal01 from "../assets/Home/Horizontal01.png";
import { RiUserFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { CiSearch } from "react-icons/ci"; // Assuming CiSearch is from react-icons/ci
import { FaBell, FaUser } from "react-icons/fa"; // Assuming FaBell and FaUser are from react-icons/fa
import pic25 from "../assets/EditProfile/pic25.png";

function Navigation() {
 const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [isdropDown, setDropDown] = useState(false);

  const ToggleDropDown = () => {
    setDropDown(!isdropDown);
  };

  console.log(location.pathname, "pathname === >");
  return (
    <>
      <div className="relative">
        <div className="py-[19px] md:py-[0.781vw] w-[90%] md:w-[73.313vw]   mx-auto flex items-center justify-between relative">
          <div className="flex items-center justify-between  gap-x-[1.354vw]">
            <Link to="/">
              <img
                src={
                  location.pathname === "/"
                    ? Horizontal01
                    : "https://res.cloudinary.com/dqe7trput/image/upload/v1724846628/Horizontal_-_White0_2_haq83u.svg"
                }
                className=" w-[150px] md:w-[11.667vw]"
              />
            </Link>

            <ul className="hidden md:flex text-[#7A798A] gap-x-[0.781vw] font-Urbanist  font-[600] text-[0.938vw]">
              <Link
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <li>
                  <a href="#">How It Works</a>
                </li>
              </Link>
              <Link
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <li>
                  <a href="#">Fees</a>
                </li>
              </Link>{" "}
              <Link
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <li>
                  <a href="#">About</a>
                </li>
              </Link>
              <Link
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <li>
                  <a href="#">Help</a>
                </li>
              </Link>
              <Link
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <li>
                  <a href="#">Contact</a>
                </li>
              </Link>
            </ul>
          </div>
          {location?.pathname === "/ProfileLux" ? (
            <div className=" my-4 justify-center flex  items-center md:gap-[0.677vw] gap-[13px]">
              <CiSearch className="w-[16px] h-[16px] md:w-[0.833vw]  text-[#FFFFFF]   md:h-[0.833vw]" />
              <FaBell
                onClick={ToggleDropDown}
                className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]"
              />
              <FaUser className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]" />
            </div>
          ) : (
            <div className="hidden md:flex items-center text-[#7A798A] gap-x-[0.521vw] font-Urbanist  ">
              <Link
                to="/Login"
                className={
                  location.pathname === "/" ? "text-[#7A798A]" : "text-white"
                }
              >
                <RiUserFill className=" w-[1vw] h-[1vw]" />
              </Link>

              <ul className="flex gap-x-[0.26vw] text-[#7A798A] font-Urbanist  font-[600] text-[0.938vw]">
                <li>
                  <Link
                    to="/Login"
                    className={
                      location.pathname === "/"
                        ? "text-[#7A798A]"
                        : "text-white"
                    }
                  >
                    <a href="#"> Login</a>
                  </Link>
                </li>

                <li>
                  <Link
                    to="/Signup"
                    className={
                      location.pathname === "/"
                        ? "text-[#7A798A]"
                        : "text-white"
                    }
                  >
                    <a href="#">/</a>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Signup"
                    className={
                      location.pathname === "/"
                        ? "text-[#7A798A]"
                        : "text-white"
                    }
                  >
                    <a href="#">SignUp</a>
                  </Link>
                </li>
              </ul>
              <button className="bg-[#CA0000] px-[1.719vw] py-[0.725vw] rounded-[2.083vw]  font-[600] text-white text-[0.729vw]">
                Try Demo
              </button>
            </div>
          )}
          {isdropDown && (
            <div className="border editBoxShadow scroller   overflow-x-hidden text-left absolute top-[3vw] p-[20px] rounded-[8px] md:rounded-[0.417vw] bg-[#F8F8F8] md:p-[1.042vw] right-[2vw] h-[232px] md:h-[12.083vw] w-[320px] md:w-[16.667vw] ">
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
          <RxHamburgerMenu
            onClick={toggleVisibility}
            className="h-[20px] w-[20px] md:w-[1vw] md:h-[1vw] visible md:hidden"
          />
        </div>
        <hr className="hidden md:block h-[.2vw] text-[#8A8AA0] " />

        {isVisible && (
          <div className="border border-gray-400  visible md:hidden mobileNavBg bg-opacity-100 w-[100%] mx-auto h-[70%]  rounded shadow-lg absolute top-0">
            <div className="flex justify-between items-center px-7 py-3  ">
              <Link to="/">
                {/* <img src={Horizontal01} className=" w-[130px] h-[30px] text-white filter brightness-0 invert" /> */}
                <img
                  src="https://res.cloudinary.com/dqe7trput/image/upload/v1724846628/Horizontal_-_White0_2_haq83u.svg"
                  className=" w-[130px] h-[30px] "
                  alt=""
                />
              </Link>

              <ImCross
                className="w-[20px] h-[20px] text-white"
                onClick={toggleVisibility}
              />
            </div>
            <div>
              <hr className="block  h-[1px]  text-[#8A8AA0] " />
            </div>
            <ul className=" flex flex-col bg-[#333333] py-3 justify-center items-center gap-3 justify-center  text-[18px] text-white  font-Urbanist  font-[600] md:text-[0.938vw]">
              <li>
                <a href="#">How It Works</a>
              </li>
              <li>
                <a href="#">Fees</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Upload Vehical</a>
              </li>{" "}

 


              {location?.pathname === "/ProfileLux" ? (
            <div className=" my-4 justify-center flex  items-center md:gap-[0.677vw] gap-[13px]">
              <CiSearch className="w-[16px] h-[16px] md:w-[0.833vw]  text-[#FFFFFF]   md:h-[0.833vw]" />
              <FaBell
                onClick={ToggleDropDown}
                className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]"
              />
              <FaUser className="w-[16px] h-[16px] md:w-[0.833vw] text-[#FFFFFF]   md:h-[0.833vw]" />
            </div>
          ) : (<div className="text-center">
            <Link to="/Login">
              <li>
                <a href="#">login</a>
              </li>{" "}
            </Link>
            <Link to="/Signup">
              <li>
                <a href="#">Sign-up</a>
              </li>
            </Link>
            <button className="bg-[#CA0000] w-[128px] h-[46px] text-[14px]  font-[600] text-white rounded-[30px]">
              Try Demo
            </button>
          </div>)}


              
            </ul>
          </div>
        )}
      </div>
    </>
  );;
}

export default Navigation;
