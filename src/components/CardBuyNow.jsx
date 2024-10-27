import React from "react";
import pic1 from "../assets/Features/pic1.png";
import pic5 from "../assets/Features/pic5.png";
import { CiHeart } from "react-icons/ci";
import fire from "../assets/offer/fire.png";
import bag from "../assets/offer/bag.png";
import { Link } from "react-router-dom";

function CardBuyNow({ data }) {
  return (
    <>
      {/* <div className="border w-[20vw] h-[20vw] p-2">
        <img src={data.image} alt="" className="w-[18vw] h-[10vw] rounded-[.8vw]"/>
        <h1 className="">{data.title}</h1>
        <h3>vehicle_type : <b>{data.vehicle_type}</b></h3>
        <p>lot_id: <b>{data.lot_id}</b></p>
      </div> */}

      <div className="mb-24 md:mb-[5vw]">
        <div
          className="  w-[100%] md:w-[22vw] lg:w-[17.188vw] h-[540px] md:h-[30vw] lg:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]
    md:p-[1.042vw] p-[10px] categroyCard border relative"
        >
          <div className="absolute right-[35px] gap-x-1 md:gap-x-[.2vw] md:right-[1.4vw] top-[30px] md:top-[1.4vw] flex justify-center items-center  bg-[#1F1F2C] rounded-[8px] md:rounded-[0.417vw] text-white h-[28px] md:h-[1.458vw] w-[64px] md:w-[3.333vw]">
            <CiHeart className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
            <p className="font-[600] font-Urbanist text-[14px] md:text-[0.729vw] text-white">
              100
            </p>
          </div>
          <img
            src={data.image}
            className="md:w-[20vw] md:h-[18vw] lg:w-[15.104vw] md:rounded-lg lg:h-[15.104vw] w-[100%] h-[290px] md:mb-[1.094vw] mb-[21px]"
            alt=""
          />
          <div className="w-[145px] md:w-[7.552vw] lg:w-[8vw] md:h-[2.5vw] h-[48px] flex items-center justify-center bg-[#FFFFFF] rounded-[30px] md:rounded-[1.563vw] absolute top-[12vw] left-[4vw]">
            <img
              src={fire}
              alt=""
              className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
            />
            <p className="md:text-[0.781vw] font-[700] font-Urbanist text-[15px] text-[#1F1F2C]">
              01 : 16 : 25 : 45
            </p>
          </div>
          <div className="w-[145px] md:w-[7.552vw] md:h-[2.5vw] h-[48px] flex items-center justify-center bg-[#FFFFFF] rounded-[30px] md:rounded-[1.563vw] absolute top-32 left-24 md:top-[6vw] md:left-[4vw]">
            <img
              src={bag}
              alt=""
              className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
            />
            <p className="md:text-[0.781vw] font-[700] font-Urbanist text-[15px] text-[#1F1F2C]">
              bitplace
            </p>
          </div>
          {/* <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
              "{data.title}"
            </h2> */}

          <div className="flex items-center  justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
            <div>
              <p className="font-[700] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
                "{data.title}"
              </p>
            </div>
            <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
              BID
            </button>
          </div>

          {/*  */}
          <div className="flex  justify-between mt-[17px] md:mt-[0.885vw]">
            <div>
              <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                Creator
              </h2>
              <p className="font-[400] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                {data.vehicle_type}
              </p>
            </div>
            <div>
              <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                Current Bid
              </h2>
              <div className="flex justify-end gap-[8px] md:gap-[0.417vw]">
                {/* <img
                src={pic5}
                alt=""
                className="w-[20px] h-[20px] md:w-[1vw] md:h-[1vw]"
              /> */}
                <p className="font-[400] font-Urbanist text-[16px] md:text-[0.833vw] text-[#7A798A]">
                  $ 59000
                </p>
              </div>
            </div>
          </div>
          {/*  */}

          <Link to={`/VehicleDetails/${data.lot_id}`}>
            <button className="bg-[#7A798A] rounded-[8px] w-[100%] md:w-[15.052vw] mt-[19px] md:mt-[0.99vw] h-[44px] md:h-[2.292vw] md:rounded-[0.417vw] buttonShadowBuyNow flex justify-center items-center">
              <p className="font-[600] font-Urbanist text-[16px] md:text-[0.833vw]  text-white">
                Buy Now $670
              </p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CardBuyNow;
