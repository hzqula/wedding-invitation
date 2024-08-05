import bunga from "../assets/bunga.png";
import Timer from "./Timer";
import Backsound from "./Backsound";
import divBottom from "../assets/divider-bottom.png";
import bingkai from "../assets/bingkai.png";

const Hero = ({ guest }) => {
  return (
    <>
      <Backsound />
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden md:h-auto">
        <div className="opacity-90">
          <img
            src={bingkai}
            alt=""
            className="absolute z-10 w-48 -top-8 -left-8"
          />

          <img
            src={bingkai}
            alt=""
            className="absolute z-10 w-48 rotate-180 -scale-y-100 -top-8 -right-8"
          />
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-top bg-cover opacity-50 bg-heroPotrait md:bg-hero filter blur-sm">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-green-600 opacity-30 filter blur-sm"></div>
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          <div className="w-auto mx-auto">
            <h2 className="-mb-4 text-4xl font-extrabold text-center text-white md:text-5xl font-body">
              Save the Date of
            </h2>
            <h2 className="mb-2 text-4xl text-yellow-500 md:mb-4 md:text-4xl font-romance">
              Our Wedding Day!!
            </h2>
          </div>
          <div className="relative z-[1] px-4 md:px-8 lg:px-16">
            <div className="flex flex-col items-center content-center justify-center gap-4 mb-6 md:flex-row md:gap-8">
              <div className="flex flex-col items-center justify-center">
                <h2 className="mb-2 text-6xl text-center text-white md:mb-4 md:text-6xl lg:text-8xl font-romance">
                  Tiara & Andi
                </h2>
                <h3 className="text-base font-semibold text-center text-white md:text-lg font-body">
                  ~ Sabtu, 10 Agustus 2024 ~
                </h3>
                <Timer />
              </div>
            </div>
            <div className="flex flex-col w-full gap-4 px-8 pt-4 pb-8 bg-white border-2 border-white md:px-16 md:pt-8 md:pb-12 rounded-xl">
              <h3 className="text-xs font-semibold text-center text-slate-600 md:text-sm font-body">
                Kepada Yang Terhormat, Bapak/Ibu/Saudara/i
              </h3>
              <p className="text-4xl text-center capitalize font-romance">
                {guest}
              </p>
            </div>
          </div>
          <img
            src={bunga}
            alt="bunga"
            className="absolute w-56 bottom-16 sm:bottom-6 sm:w-48 sm:right-1/3 right-1/4 md:right-1/3 lg:-bottom-8"
          />
        </div>
        <img
          src={divBottom}
          alt="div-bottom"
          className="absolute md:relative -bottom-1"
        />
      </div>
    </>
  );
};

export default Hero;
