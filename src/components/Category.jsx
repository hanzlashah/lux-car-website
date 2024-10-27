import React from "react";
import Title from "./Title";
import pic1 from "../assets/Category/pic1.png";
import pic2 from "../assets/Category/pic2.png";
import pix3 from "../assets/Category/pic3.png";
import pic4 from "../assets/Category/pic4.png";
import pic5 from "../assets/Category/pic5.png";
import pic6 from "../assets/Category/pic6.png";
import pic7 from "../assets/Category/pic7.png";
import pic8 from "../assets/Category/pic8.png";
// import IMG (1) from ".."

function Category() {
  const CategoryCard = [
    { img: pic1, title: "Automobiles", para: "See All" },
    { img: pic2, title: "Super Cars", para: "See All" },
    { img: pix3, title: "Motorcycles", para: "See All" },
    { img: pic4, title: "ATVs", para: "See All" },
    { img: pic5, title: "Bus", para: "See All" },

    { img: pic6, title: "Truck", para: "See All" },
    { img: pic7, title: "Trailer", para: "See All" },
    { img: pic8, title: "Motor Home", para: "See All" },
  ];
  return (
    <div className=" pt-[150px] md:pt-[4.167vw] pb-[64px] md:pb-[6.875vw]">
      <Title title="Top Categories" />

      <div className="flex justify-center    md:justify-start gap-x-0 md:gap-x-[1.406vw] md:gap-y-[2.083vw] gap-y-[20px] flex-wrap w-[95%] md:w-[73.438vw]  mx-auto">
        {/* 
        {CategoryCard?.map((data, id) =>
        
          (
            
            <>
              <div
                key={id}
                className="flex pl-[16px] md:pl-[.8vw] pt-[16px] md:pt-[.8vw]  w-[90%] md:w-[17.188vw] h-[100px] md:h-[5.208vw] bg-white 
        shadow rounded-[90px] md:rounded-[5.208vw] categroyCard"
              >
                <img
                  src={data.img}
                  alt=""
                  className="w-[74px] h-[74px] md:w-[3.854vw] md:h-[3.854vw]"
                />
                <div className="pl-[10px] md:pl-[.5vw]">
                  <h2 className="font-[700] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                    {data.title}
                  </h2>
                  <p className="font-[600] font-Urbanist text-[14px] md:text-[0.729vw] text-[#7A798A]">
                    {data.para}
                  </p>
                </div>
              </div>
            </>
          )
        )} */}

        {CategoryCard &&
          CategoryCard?.map((data, id) => (
            <div
              key={id}
              className=" border rounded-[90px] md:rounded-[5.208vw] flex pl-[16px] md:pl-[.8vw] pt-[16px] md:pt-[.8vw]  w-[90%] md:w-[17.188vw] h-[100px] md:h-[5.208vw] bg-white "
            >
              <img
                src={data.img}
                alt=""
                className="w-[74px] h-[74px] md:w-[3.854vw] md:h-[3.854vw]"
              />
              <div className="pl-[10px] md:pl-[.5vw]">
                <h2 className="font-[700] font-Urbanist text-[18px] md:text-[0.938vw] text-[#1F1F2C]">
                  {data.title}
                </h2>
                <p className="font-[600] font-Urbanist text-[14px] md:text-[0.729vw] text-[#7A798A]">
                  {data.para}
                </p>
              </div>
            </div>
          ))}

        {/* <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div>
        <div className="w-[17.188vw] h-[5.208vw] bg-pink-400 rounded-[5.208vw]"></div> */}
      </div>
      <div className="flex justify-center mb-[40px] md:mb-[3.125vw]">
        <button className="w-[153px] h-[54px] md:w-[7.969vw] md:h-[2.813vw] bg-[#F3F3F6] mt-[40px] md:mt-[2.083vw] rounded-[30px] md:rounded-[1.563vw] text-[#CA0000]  font-[600] font-Urbanist text-[15px] md:text-[0.9vw]">
          Load More
        </button>
      </div>
    </div>
  );
}

export default Category;
