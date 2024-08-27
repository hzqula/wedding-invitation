import React from "react";
import { IoMail } from "react-icons/io5";
import bungaKanan from "../assets/leaves-right.png";
import bungaKiri from "../assets/leaves-left.png";
import bingkai from "../assets/bingkai.png";

const Inviting = ({ changeInvited, guest }) => {
  const setGuest = (name) => {
    guest(name);
  };

  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
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
        <div className="absolute top-0 bottom-0 left-0 right-0 z-0 bg-top bg-cover opacity-50 bg-invitingPotrait md:bg-inviting filter blur-sm">
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-lime-950 opacity-30 filter blur-sm"></div>
        </div>

        <div className="relative z-[1] px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center content-center justify-center gap-4 mb-6 md:flex-row md:gap-8">
            <img
              src={bungaKiri}
              alt="bunga"
              className="hidden w-24 mb-4 md:block md:w-36 lg:w-44 md:mb-8"
            />
            <div className="flex flex-col items-center justify-center">
              <h2 className="mb-2 text-4xl font-bold text-center text-white md:mb-4 md:text-4xl font-body">
                Undangan Pernikahan
              </h2>
              <div className="flex gap-4 mt-4">
                <img
                  src={bungaKiri}
                  alt="bunga"
                  className="w-12 mb-4 md:hidden md:w-36 lg:w-44 md:mb-8"
                />
                <h2 className="mb-2 text-6xl text-center text-white md:mb-4 md:text-6xl lg:text-8xl font-romance">
                  Fulanah & Fulan
                </h2>
                <img
                  src={bungaKanan}
                  alt="bunga"
                  className="w-12 mb-4 md:hidden md:w-36 lg:w-44 md:mb-8"
                />
              </div>
              <h3 className="text-base font-semibold text-center text-white md:text-lg font-body">
                ~ Rabu, 01 Januari 2025 ~
              </h3>
            </div>
            <img
              src={bungaKanan}
              alt="bunga"
              className="hidden w-24 mb-4 md:block md:w-36 lg:w-44 md:mb-8"
            />
          </div>
          <div className="flex flex-col w-full gap-4 px-8 py-4 border-2 border-white bg-lime-950 md:px-16 md:py-8 rounded-xl">
            <h1 className="my-4 text-lg font-semibold text-center text-white font-body">
              Daftar tamu
            </h1>
            <input
              type="text"
              onChange={(e) => {
                setGuest(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  changeInvited(false);
                }
              }}
              className="h-16 text-xl tracking-wide text-center capitalize rounded-lg md:h-20 lg:h-24 md:text-2xl lg:text-4xl placeholder:text-slate-400 font-romance"
              placeholder="Masukkan nama Anda"
            />
            <button
              className="flex items-center justify-center h-10 gap-2 text-xs font-bold transition-all duration-300 bg-white border-2 rounded-lg font-body border-lime-950 md:text-base md:h-12 hover:border-white hover:bg-yellow-500 hover:text-white"
              onClick={() => {
                changeInvited(false);
              }}
            >
              <IoMail size={24} /> Lihat undangan
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inviting;
