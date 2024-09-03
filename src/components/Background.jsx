import React from "react";
import AboutCard from "./AboutCard";
import GallaryCard from "./GallaryCard";

const Background = () => {
  return (
    <div className=" relative w-[1700px] h-[876px] mx-auto rounded-[28px] bg-gradient-to-b from-[#2f3439] to-[#191B1F] shadow-[10px_10px_40px_10px_rgba(0,0,0,0.5)]">
      <div className=" absolute top-20 right-32">
        <AboutCard />
      </div>
      <div className="bg-custom-gradient w-[612px] h-[4px] shadow-custom absolute top-[433px] right-[190px]"></div>
      <div className="absolute bottom-20 right-32">
        <GallaryCard />
      </div>
      <div className="bg-custom-gradient w-[612px] h-[4px] shadow-custom absolute bottom-12 right-[190px]"></div>
    </div>
  );
};

export default Background;
