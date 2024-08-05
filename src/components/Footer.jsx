import React from "react";
import divTop from "../assets/divider-top.png";
import couple from "../assets/couple.svg";
import love from "../assets/love.svg";
import bingkai from "../assets/bingkai.png";
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <img src={divTop} alt="div-top" className="-my-1 bg-lime-950" />
      <div className="relative flex flex-col items-center justify-center py-12 overflow-hidden text-center bg-lime-950">
        <div className="opacity-90">
          <img
            src={bingkai}
            alt=""
            className="absolute z-10 w-48 rotate-180 -bottom-8 -right-8"
          />
          <img
            src={bingkai}
            alt=""
            className="absolute z-10 w-48 -scale-y-100 -bottom-8 -left-8"
          />
        </div>
        <h1 className="text-6xl text-yellow-500 font-romance">Terima Kasih</h1>
        <div className="w-[90%] flex flex-col justify-center items-center gap-4 my-8">
          <p className="text-lg text-white font-body">
            Kami ucapkan kepada Bapak/Ibu/Saudara/i atas kehadirannya.
          </p>
          <img
            src={couple}
            alt="couple-silhouette"
            className="w-1/2 md:w-1/5"
          />
        </div>
        <div className="w-[90%] flex flex-col justify-center items-center gap-4 my-8">
          <h1 className="text-3xl font-bold text-yellow-500 font-body">
            Kami yang berbahagia
          </h1>
          <div className="flex flex-col items-center justify-center w-4/5 gap-4 mt-8 md:flex-row md:gap-8">
            <h2 className="text-5xl text-white font-romance">Tiara Novira</h2>

            {/* <FaHeart className="shadow-lg shadow-white" /> */}
            <img src={love} alt="love" className="w-12" />

            <h2 className="text-5xl text-white font-romance">Isma Wandi</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
