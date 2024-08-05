import React from "react";
import divBottom from "../assets/divider-bottom.png";
import divTop from "../assets/divider-top.png";
import ring from "../assets/ring.png";
import bunga from "../assets/flower.png";
import bride from "../assets/bride.jpg";
import groom from "../assets/groom.jpg";

const Mempelai = () => {
  return (
    <>
      <img src={divTop} alt="div-top" className="-my-1 bg-lime-950" />
      <div className="flex flex-col items-center justify-center py-12 bg-lime-950">
        <div className="flex flex-col items-center justify-center mb-4 md:flex-row">
          <img
            src={bunga}
            alt="bunga"
            className="hidden w-24 md:mx-8 md:pt-3 md:block"
          />
          <h1 className="-mb-6 text-6xl text-yellow-500 font-romance">
            Bride & Groom
          </h1>
          <img
            src={bunga}
            alt="bunga"
            className="w-32 md:w-24 md:mx-8 md:pt-3"
          />
        </div>
        <p className="flex items-center justify-center mx-10 mb-4 text-left text-white md:mx-20 md:text-center font-body">
          Yaa Allah, Engkau yang telah menciptakan kami berpasang-pasangan.
          Dengan rahmat-Mu, izinkanlah kami mengikat tali kasih sayang antara
          kami. Dengan ini kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada
          acara pernikahan kami:
        </p>

        <div className="flex flex-col items-center justify-center w-4/5 mt-8 md:flex-row">
          <div className="flex self-start justify-start gap-4 md:gap-0 md:justify-center md:flex-col md:items-center">
            <img
              src={bride}
              alt="bride"
              className="w-32 my-2 border-4 border-white rounded-full"
            />
            <div className="flex flex-col justify-center md:items-center">
              <h2 className="text-5xl text-left text-white font-romance">
                Tiara Novira
              </h2>
              <h3 className="text-base text-white md:text-sm md:text-center font-body">
                Putri dari Bapak Muhrizal dan Ibu Fauziah
              </h3>
            </div>
          </div>
          <img src={ring} alt="cincin" className="w-24 my-2 md:w-32" />

          {/* mobile breakpoint */}
          <div className="flex items-center self-end justify-center gap-4 md:hidden">
            <div className="flex flex-col items-end justify-center">
              <h2 className="text-5xl text-right text-white font-romance">
                Isma Wandi
              </h2>
              <h3 className="text-base text-right text-white font-body">
                Putra dari Bapak Rusli (Alm) dan Ibu Asni (Almh)
              </h3>
            </div>
            <img
              src={groom}
              alt="groom"
              className="w-32 my-4 border-4 border-white rounded-full"
            />
          </div>

          {/* medium breakpoint */}
          <div className="hidden md:flex md:flex-col md:items-center md:justify-center">
            <img
              src={groom}
              alt="groom"
              className="w-32 my-2 border-4 border-white rounded-full"
            />
            <h2 className="text-5xl text-white font-romance">Isma Wandi</h2>
            <h3 className="text-base text-white md:text-sm md:text-center font-body">
              Putra dari Bapak Rusli (Alm) dan Ibu Asni (Almh)
            </h3>
          </div>
        </div>
      </div>
      <img src={divBottom} alt="div-bottom" className="-my-1 bg-lime-950" />
    </>
  );
};

export default Mempelai;
