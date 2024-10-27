import React from "react";
import Navigation from "./Navigation";
import { NavLink, useLocation } from "react-router-dom";
import TopNavigation from "./TopNavigation";

function OtherNavigation({ heroinfo }) {
  const location = useLocation();
  return (
    <>
      <TopNavigation />
      <div className="relative">
        {/* <TopNavigation /> */}

        <div className="">
          <div className={location.pathname === "/Login" ? "login" : "signup"}>
            <div className="shadowDiv">
              <div className="">
                <Navigation />
              </div>
              {/* <hr className="bg-[#8A8AA0] h-[0.052vw]  opacity-40  md:block hidden" /> */}
              <div className="mt-[3.125vw] hidden md:block text-center">
                <h3 className="text-[2.5vw]  font-Urbanist font-[700] text-[#FFFFFF] mb-[0.625vw]">
                  {/* Login */}
                  {heroinfo.title}
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
                    {/* Login */}
                    {heroinfo.para}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherNavigation;
