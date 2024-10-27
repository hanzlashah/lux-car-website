import React from "react";
import pic1 from "../assets/Features/pic1.png";
import pic5 from "../assets/Features/pic5.png";
import { CiHeart } from "react-icons/ci";

function Card({ data }) {
  console.log(data);
  return (
    <>
      {/*  titleOne headingOne  parOne */}
      <div className="mb-24 md:mb-[5vw]">
        <div
          className="  w-[100%] md:w-[22vw] lg:w-[17.188vw] h-[540px] md:h-[30vw] lg:h-[26.771vw] rounded-[20px] bg-white md:rounded-[1.042vw]
    md:p-[1.042vw] p-[10px] categroyCard relative"
        >
          <div className="absolute right-[35px] gap-x-1 md:gap-x-[.2vw] md:right-[1.4vw] top-[30px] md:top-[1.4vw] flex justify-center items-center  bg-[#1F1F2C] rounded-[8px] md:rounded-[0.417vw] text-white h-[28px] md:h-[1.458vw] w-[64px] md:w-[3.333vw]">
            <CiHeart className="w-[16px] h-[16px] md:w-[0.833vw] md:h-[0.833vw]" />
            <p className="font-[600] font-Urbanist text-[14px] md:text-[0.729vw] text-white">
              100
            </p>
          </div>
          {/* top-[48%] md:top-[13.6vw] left-24 md:left-[5vw]  */}

          <div className="flex justify-center">
            {data.time && data.time.length > 0 ? (
              <div className="absolute flex justify-center items-center top-60  md:top-32 lg:top-52 mx-auto  w-[151px] md:w-[7.865vw] h-[36px] md:h-[1.875vw] rounded-[13px] md:rounded-[0.677vw] bg-[#FFFFFF]">
                <img
                  src={data.fire}
                  alt=""
                  className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
                />
                <p className="md:text-[0.729vw] font-[700] font-Urbanist text-[14px] text-[#1F1F2C]">
                  {data.time}
                </p>
              </div>
            ) : (
              ""
            )}
          </div>

          {data.bitplace && data.bitplace.length > 0 ? (
            <div className="w-[145px] md:w-[7.552vw] md:h-[2.5vw] h-[48px] flex items-center justify-center bg-[#FFFFFF] rounded-[30px] md:rounded-[1.563vw] absolute top-32 left-24 md:top-[6vw] md:left-[4vw]">
              <img
                src={data.bagIcon}
                alt=""
                className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
              />
              <p className="md:text-[0.781vw] font-[700] font-Urbanist text-[15px] text-[#1F1F2C]">
                {data.bitplace}
              </p>
            </div>
          ) : (
            ""
          )}
          {/* <div className="w-[145px] md:w-[7.552vw] md:h-[2.5vw] h-[48px] flex items-center justify-center bg-[#FFFFFF] rounded-[30px] md:rounded-[1.563vw] absolute top-[7vw] left-[4vw]">
        <img
              src={data.fire}
              alt=""
              className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"
            />
            <p className="md:text-[0.781vw] font-[700] font-Urbanist text-[15px] text-[#1F1F2C]">
              {data.time}
            </p>
        </div> */}
          {/* <div className="absolute flex justify-center items-center top-[13.6vw] left-[5vw] w-[7.865vw] h-[1.875vw] rounded-[13px] md:rounded-[0.677vw] bg-[#FFFFFF]">
         <img src={data.fire} alt="" className="w-[20px] h-[20px] md:w-[1.042vw] md:h-[1.042vw]"/>
          <p className="md:text-[0.729vw] font-[700] font-Urbanist text-[14px] text-[#1F1F2C]">{data.time}</p>
        </div> */}
          <img
            src={data.img}
            className="md:w-[20vw] md:h-[18vw] lg:w-[15.104vw] lg:h-[15.104vw] w-[100%] h-[290px] md:mb-[1.094vw] mb-[21px]"
            alt=""
          />
          {data.titleOne.length > 0 ? (
            <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
              "{data.titleOne}”
            </h2>
          ) : (
            ""
          )}
          {/* <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
          "{data.titleOne}”
        </h2> */}
          {data.headingOne.length && data.parOne.length > 0 ? (
            <div className="flex items-center border-b-[.1vw] border-b-[#EBEBEB] justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
              <div>
                <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#7A798A]">
                  Lot: {data.headingOne}
                </h2>
                <p className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
                  VIN: {data.parOne}
                </p>
              </div>
              <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
                BID
              </button>
            </div>
          ) : (
            ""
          )}
          {/* <div className="flex items-center border-b-[.1vw] border-b-[#EBEBEB] justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
          <div>
            <h2 className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#7A798A]">
              Lot: {data.headingOne}
            </h2>
            <p className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
              VIN: {data.parOne}
            </p>
          </div>
          <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
            BID
          </button>
        </div> */}
          {/* <p>{data.offerHeading}</p> */}

          {data.offerHeading && data.offerHeading.length > 0 ? (
            <>
              <div className="flex items-center  justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
                <div>
                  <p className="font-[600] font-Urbanist text-[18px] md:text-[0.78vw] text-[#1F1F2C]">
                    "{data.offerHeading}"
                  </p>
                </div>
                <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
                  BID
                </button>
              </div>{" "}
            </>
          ) : (
            ""
          )}
          {/* {data.offerHeading.length > 0 ? (
          <div className="flex items-center  justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
            <div>
              <p className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
                VIN: {data.offerHeading}
              </p>
            </div>
            <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
              BID
            </button>
          </div>
        ) : (
          ""
        )} */}

          {/* <div className="flex items-center  justify-between pb-[17px] md:pb-[0.885vw] mt-[17px] md:mt-[0.885vw]">
         <div>
           
           <p className="font-[600] font-Urbanist text-[18px] md:text-[0.677vw] text-[#1F1F2C]">
             VIN: {data.parOne}
           </p>
         </div>
         <button className="font-[600] font-Urbanist text-[12px] md:text-[0.625vw] text-[#FFFFFF] bg-[#CA0000] rounded-[8px]  md:rounded-[0.417vw] h-[24px] md:h-[1.25vw] w-[43px] md:w-[2.24vw]">
           BID
         </button>
       </div> */}

          {data.paraTwo &&
          data.paraTwo.length &&
          data.paraThree &&
          data.paraThree.length ? (
            <div className="flex  justify-between mt-[17px] md:mt-[0.885vw]">
              <div>
                <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                  Estimated Bid
                </h2>
                <p className="font-[400] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                  {data.paraTwo}
                </p>
              </div>
              <div>
                <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                  Potential Savings
                </h2>
                <div className="flex justify-end gap-[8px] md:gap-[0.417vw]">
                  <img
                    src={pic5}
                    alt=""
                    className="w-[20px] h-[20px] md:w-[1vw] md:h-[1vw]"
                  />
                  <p className="font-[400] font-Urbanist text-[16px] md:text-[0.833vw] text-[#7A798A]">
                    {data.paraThree}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* <div className="flex  justify-between mt-[17px] md:mt-[0.885vw]">
          <div>
            <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
              Estimated Bid
            </h2>
            <p className="font-[400] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
              {data.paraTwo}
            </p>
          </div>
          <div>
            <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
              Potential Savings
            </h2>
            <div className="flex justify-end gap-[8px] md:gap-[0.417vw]">
              <img
                src={pic5}
                alt=""
                className="w-[20px] h-[20px] md:w-[1vw] md:h-[1vw]"
              />
              <p className="font-[400] font-Urbanist text-[16px] md:text-[0.833vw] text-[#7A798A]">
                {data.paraThree}
              </p>
            </div>
          </div>
        </div> */}

          {data.Creator &&
          data.Creator.length &&
          data.CurrentBid &&
          data.CurrentBid.length > 0 ? (
            <div className="flex  justify-between mt-[17px] md:mt-[0.885vw]">
              <div>
                <h2 className="font-[400] font-Urbanist text-[13px] md:text-[0.677vw] text-[#7A798A]">
                  Creator
                </h2>
                <p className="font-[400] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                  {data.Creator}
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
                    $ {data.CurrentBid}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {data.price && data.price.length > 0 ? (
            <button className="bg-[#7A798A] rounded-[8px] w-[100%] md:w-[15.052vw] mt-[19px] md:mt-[0.99vw] h-[44px] md:h-[2.292vw] md:rounded-[0.417vw] buttonShadowBuyNow flex justify-center items-center">
              <p className="font-[600] font-Urbanist text-[16px] md:text-[0.833vw]  text-white">
                Buy Now {data.price}
              </p>
            </button>
          ) : (
            ""
          )}
          {/* <button className="bg-[#7A798A] rounded-[8px] w-[100%] md:w-[15.052vw] mt-[19px] md:mt-[0.99vw] h-[44px] md:h-[2.292vw] md:rounded-[0.417vw] buttonShadowBuyNow flex justify-center items-center">
          <p className="font-[600] font-Urbanist text-[16px] md:text-[0.833vw]  text-white">
           Buy Now
          </p>
        </button> */}
        </div>
      </div>
    </>
  );
}

export default Card;
