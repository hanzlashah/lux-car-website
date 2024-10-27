import React from "react";
import OtherNavigation from "./OtherNavigation";
import Footer from "./Footer";

function SignUp() {
  const heroInfo = { title: "Sign Up", para: "Sign Up" };
  return (
    <div>
      <OtherNavigation heroinfo={heroInfo} />
      <div className=" w-[90%]  md:w-[50vw]  lg:w-[35.938vw] mx-auto py-[80px] md:py-[4.167vw]">
        <div>
          <h2 className="text-[36px] md:text-[1.875vw] text-center   font-Urbanist font-[700] text-[#1F1F2C] mb-[40px] md:mb-[2.083vw]">
            Register to LUX CARS
          </h2>
          <form action="" className="flex gap-[24px] flex-col md:gap-[1.25vw]">
            <input
              type="text"
              placeholder="Your Full Name*"
              className="md:h-[3.5vw] lg:h-[2.5vw] text-[14px] md:text-[0.729vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />
            <input
              type="text"
              placeholder="Your Email Address"
              className="md:h-[3.5vw] text-[14px] md:text-[0.729vw] lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />

            <select
              name=""
              id=""
              className="border text-[14px] md:text-[0.729vw] outline-none lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] px-[20px] md:px-[1.042vw]  py-[13px] md:py-[0.5vw]"
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="" selected>
                pak
              </option>
              <option value="">usa</option>
              <option value="">uk</option>
            </select>
            <input
              type="text"
              placeholder="Enter Your Password*"
              className="md:h-[3.5vw] text-[14px] md:text-[0.729vw] lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />

            <input
              type="text"
              placeholder="Confirm Password*"
              className="md:h-[3.5vw] text-[14px] md:text-[0.729vw] lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />
            <div>
              <div className="flex justify-between mb-[39px] md:mb-[2.031vw]">
                <div className="flex gap-[8px] md:gap-[0.417vw]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className=" w-[20px] h-[20px] md:w-[1.042vw] border-none custom-background  outline-none rounded-[4px] md:rounded-[0.208vw] md:h-[1.042vw]"
                  />
                  <p className="text-[#1F1F2C] text-[14px] md:text-[0.729vw]   font-Urbanist font-[400] ">
                    Remember me
                  </p>
                </div>
                <p className="text-[#1F1F2C] text-[15px] md:text-[0.781vw]    font-Urbanist font-[700] ">
                  Forgot Password ?
                </p>
              </div>
              {/* md:h-[3.5vw] lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw]  */}
              <button className="rounded-[56px] md:rounded-[2.917vw] custom-background h-[54px]  w-[100%]  md:h-[3.5vw] lg:h-[2.813vw]  md:w-[50vw] lg:w-[35.938vw] text-[#CA0000] text-[15px] md:text-[0.781vw]    font-Urbanist font-[700]">
                Sign Up
              </button>
            </div>
            <p className="text-[#7A798A]  text-[14px] md:text-[0.729vw]   font-Urbanist font-[400] text-center">
              Don’t have an account?{" "}
              <span className="text-[#DF4949]">Login</span>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default SignUp;
