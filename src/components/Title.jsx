import React from "react";
import pic1 from "../assets/Features/pic1.png";
import pic5 from "../assets/Features/pic5.png";
import { CiHeart } from "react-icons/ci";
function Title({ title }) {
  return (
    <div className=" w-[90%6] md:w-[73.438vw] mx-auto mb-[36px] md:mb-[2.083vw]">
      <h1 className="text-center font-[600] font-Urbanist text-[36px] md:text-[1.875vw] text-[#1F1F2C] mb-[15px] md:mb-[0.781vw]">
        {title}
      </h1>
      <hr className="bg-[#CA0000] h-[3px] w-[80px] md:h-[0.26vw] md:w-[3.125vw] mx-auto" />
    </div>
  );
}

export default Title;
