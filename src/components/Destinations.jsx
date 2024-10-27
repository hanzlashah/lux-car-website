import React from "react";
import Title from "./Title";
import pic11 from "../../src/assets/destination/pic11.png";
import pic13 from "../../src/assets/destination/pic13.png";

function Destinations() {
  const btnTitle = [
    { title: "Abaco" },
    { title: "Freeport" },
    { title: "Bimini" },
    { title: "Nassau" },
    { title: "Eluthera" },
    { title: "Exuma" },
    { title: "Long Island" },
    { title: "Andros" },
    { title: "Chub Cay" },
    { title: "Rum Cay" },
  ];
  return (
    <div className=" pt-[64px] md:pt-[4.167vw] pb-[64px] md:pb-[6.875vw]">
      <Title title="Destinations" />
      <div className="w-[90%]  md:w-[73.438vw] mx-auto ">
        <div className="md:flex gap-x-7 flex justify-center  flex-col mb-3 items-center p-3 ">
          <p className="w-auto w-[100%] mb-4 md:mb-[0vw] md:w-[51.458vw] text-[#7A798A] font-[400] font-Urbanist md:text-[0.938vw] text-[18px]">
            Lorem ipsum dolor sit amet. Vel aliquid reiciendis et molestias
            dignissimos quo eligendi eaque eum iusto explicabo et incidunt
            cupiditate. Est nemo delectus est quia Quis vel pariatur autem et
            veniam Quis id vero blanditiis. Ut esse commodi et nulla ullam qui
            laudantium consequatur est rerum deserunt est Quis nobis qui velit
            doloribus.
          </p>
          <button className="text-[14px]  md:text-[0.729vw] text-[#CA0000] font-[700] font-Urbanist outline-[#CA0000] outline outline-[2px] rounded-[30px] h-[46px] w-[150px] md:w-[7.813vw] md:h-[2.396vw] md:rounded-[1.563vw] md:outline-[.1vw]  border-none">
            How It Works?
          </button>
        </div>

        <div className="boxShadowDestinition bg-white w-[90%] rounded-[30px] md:rounded-[1.042vw]   md:w-[73.438vw] mx-auto p-[20px] md:p-[1.042vw] relative">
          <img
            src={pic11}
            alt=""
            className=" rounded-[20px] md:rounded-[1.094vw] h-[899px] object-cover md:h-[21.563vw]"
          />
          <div className=" absolute top-8  flex-col gay-y-1 md:flex-row flex gap-y-3 md:gap-x-[.5vw]  md:top-[18vw]  ml-3 md:ml-[1vw]  w-[68vw] ">
            {/* <div className="w-[101.43px] h-[36px] md:h-[1.875vw] md:w-[5.283vw] border rounded-[13px] md:rounded-[0.677vw]">

                <button className="w-[101.43px] flex h-[36px] md:h-[1.875vw] md:w-[5.283vw] border rounded-[13px] md:rounded-[0.677vw]">
                    <img src={pic12} alt="" />
                    Abaco</button>
                </div> */}

            {btnTitle.map((data, id) => (
              <button
                key={id}
                className="w-[110px] hover:bg-[#CA0000] hover:text-white text-[#1F1F2C]  bg-white justify-center items-center gap-3 md:gap-[.3vw] flex h-[36px] md:h-[1.875vw]  md:w-[6vw] border rounded-[13px] md:rounded-[0.677vw]"
              >
                <img
                  src={pic13}
                  alt=""
                  className="w-[15.43px] md:w-[0.804vw] h-[20px] md:h-[1.042vw]"
                />
                <span className="font-[700]  font-Urbanist text-[14px]  md:text-[0.729vw]">
                  {" "}
                  {data.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destinations;
