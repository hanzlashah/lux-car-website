import React from "react";
// import "./App.css";
function TopNavigation() {
  return (
    <div>
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
    </div>
  );
}

export default TopNavigation;
