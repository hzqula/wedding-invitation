import React from "react";
import { SiGooglemaps } from "react-icons/si";
import { BsClock } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import divTop from "../assets/divider-top.png";
import divBottom from "../assets/divider-bottom.png";
import { PiFlowerTulipFill } from "react-icons/pi";
import { GiFireFlower } from "react-icons/gi";

const Detail = () => {
  return (
    <>
      <img src={divTop} alt="div-top" className="-my-1" />

      <div className="flex flex-col items-center justify-center py-12 text-center bg-slate-950">
        <h1 className="text-6xl text-yellow-500 font-romance">
          Informasi Acara
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center w-[90%] gap-4 md:gap-12 my-8">
          {/* akad */}
          <table className="w-full text-white border-2 border-separate border-white rounded-lg table-fixed bg-slate-500">
            <thead>
              <tr>
                <th className="py-4 border-b-2 border-white">
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="font-body">Akad</h1>{" "}
                    <PiFlowerTulipFill size={24} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-center gap-4 py-4 border-b-2 border-white">
                  <div className="flex flex-col items-center justify-center w-1/2 gap-2">
                    <BsClock size={24} />
                    <h2 className="text-sm font-body">07:30 - 11:00</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/2 gap-2">
                    <BiCalendar size={26} />
                    <h2 className="text-sm font-body">Rabu, 01 Januari 2025</h2>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-white">
                  <p className="text-xs font-body">
                    Saat acara akad, diharapkan untuk kondusif menjaga
                    kekhidmatan dan kekhusyuan seluruh prosesi
                  </p>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Resepsi */}
          <table className="w-full text-white border-2 border-separate border-white rounded-lg table-fixed bg-slate-500">
            <thead>
              <tr>
                <th className="py-4 border-b-2 border-white">
                  <div className="flex items-center justify-center gap-2">
                    <h1 className="font-body">Resepsi</h1>{" "}
                    <GiFireFlower size={24} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center justify-center gap-4 py-4 border-b-2 border-white">
                  <div className="flex flex-col items-center justify-center w-1/2 gap-2">
                    <BsClock size={24} />
                    <h2 className="text-sm font-body">11:00 - Selesai</h2>
                  </div>
                  <div className="flex flex-col items-center justify-center w-1/2 gap-2">
                    <BiCalendar size={26} />
                    <h2 className="text-sm font-body">Rabu, 01 Januari 2025</h2>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-white">
                  <p className="text-xs font-body">
                    Saat acara resepsi, diharapkan untuk kondusif menjaga
                    kekhidmatan dan kekhusyuan seluruh prosesi
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-[90%] gap-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.3646159603345!2d-0.18251044429501193!3d51.51474003870088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760554aafc5fc5%3A0xe1155e77002c360f!2sCleveland%20Square!5e0!3m2!1sid!2sid!4v1724762161130!5m2!1sid!2sid"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full border-2 border-green-500 md:w-1/2 h-96 rounded-xl"
          ></iframe>
          <div className="w-full text-white md:text-left md:w-1/2 md:flex md:flex-col md:gap-8">
            <div className="flex flex-col">
              <h1 className="font-body">
                <span className="font-bold text-yellow-500 font-body">
                  Tempat:
                </span>{" "}
                Kediaman Mempelai Wanita
              </h1>
              <h1 className="font-body">
                <span className="font-bold text-yellow-500">Alamat:</span> 15
                Cleveland Square, London W2 6DG, Inggris Raya
              </h1>
            </div>

            <a
              href="https://maps.app.goo.gl/EdUnwzk4UAwvNi4T8"
              target="_blank"
              className="items-center justify-center hidden w-full h-12 gap-2 pl-4 pr-8 text-base font-bold transition-all duration-300 bg-white border-2 border-yellow-500 rounded-lg text-lime-950 md:flex group hover:border-white hover:bg-lime-950 hover:text-white"
            >
              <SiGooglemaps
                className="transition-all duration-300 group-hover:fill-white"
                size={20}
                color="#1a2e05"
              />{" "}
              Lihat di Maps
            </a>
          </div>
          <a
            href="https://maps.app.goo.gl/SGvztBwkeRsREQww7"
            target="_blank"
            className="flex items-center justify-center w-full h-10 gap-2 pl-4 pr-8 text-xs font-bold transition-all duration-300 bg-white border-2 border-green-600 rounded-lg md:w-2/5 group md:text-base md:h-12 hover:border-white hover:bg-green-600 hover:text-white md:hidden"
          >
            <SiGooglemaps
              className="transition-all duration-300 group-hover:fill-white"
              size={20}
              color="green"
            />{" "}
            Lihat di Maps
          </a>
        </div>
      </div>
      <img src={divBottom} alt="div-bottom" className="-my-1 bg-slate-950" />
    </>
  );
};

export default Detail;
