import React from "react";
import Navigation from "./Navigation";
// import Navigation from "./Navigation"
import Footer from "./Footer";
import OtherNavigation from "./OtherNavigation";

function Login() {
  const heroInfo = { title: "Login", para: "Login" };

  return (
    <div>
      {/* <div className="bg-[#1F1F2C] hidden md:block h-auto  md:h-[2vw] lg:h-[1.563vw] w-auto text-white">
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
      <div className=" VehicleDetails ">
       
        <Navigation />
       
        <div className="mt-[3.125vw] hidden md:block text-center">
          <h3 className="text-[2.5vw]  font-Urbanist font-[700] text-[#FFFFFF] mb-[0.625vw]">
            Login
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
              Login
            </p>
          </div>
        </div>
      </div> */}

      <OtherNavigation heroinfo={heroInfo} />

      <div className=" w-[90%]  md:w-[50vw]  lg:w-[35.938vw] mx-auto py-[80px] md:py-[4.167vw]">
        <div>
          <h2 className="text-[36px] md:text-[1.875vw] text-center   font-Urbanist font-[700] text-[#1F1F2C] mb-[40px] md:mb-[2.083vw]">
            Login to LUX CARS
          </h2>
          <form action="" className="flex gap-[24px] flex-col md:gap-[1.25vw]">
            <input
              type="text"
              placeholder="Your Email Address"
              className="md:h-[3.5vw] lg:h-[2.5vw] text-[14px] md:text-[0.729vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />
            <input
              type="text"
              placeholder="Your Email Address"
              className="md:h-[3.5vw] text-[14px] md:text-[0.729vw] lg:h-[2.5vw] md:w-[50vw] lg:w-[35.938vw] formBorder rounded-[8px] md:rounded-[0.417vw] pl-[20px] md:pl-[1.042vw] outline-none py-[13px] md:py-[0.677vw]"
            />
            <div>
              <div className="flex justify-between mb-[39px] md:mb-[2.031vw]">
                <div className="flex gap-[8px] md:gap-[0.417vw]">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="formBorder w-[20px] h-[20px] md:w-[1.042vw] rounded-[4px] md:rounded-[0.208vw] md:h-[1.042vw]"
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
                Login
              </button>
            </div>
            <p className="text-[#7A798A]  text-[14px] md:text-[0.729vw]   font-Urbanist font-[400] text-center">
              Don’t have an account?{" "}
              <span className="text-[#DF4949]">Sign Up</span>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;
