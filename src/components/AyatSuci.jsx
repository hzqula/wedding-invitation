import React from "react";
import bismillah from "../assets/bismillah.svg";
import divTop from "../assets/divider-top.png";
import divBottom from "../assets/divider-bottom.png";

const AyatSuci = () => {
  return (
    <>
      <img src={divTop} alt="div-top" className="-my-1" />
      <div className="flex flex-col items-center justify-center pt-12 text-center bg-slate-950">
        <div className="flex flex-col items-center justify-center w-4/5">
          <img
            src={bismillah}
            alt="bismillah"
            className="h-16 mb-4 fill-white"
          />

          <p className="mb-4 text-2xl leading-[4rem] md:leading-[4rem] text-white font-arabic md:w-4/5 md:text-3xl">
            وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا
            لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ
            إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
          <p className="flex items-center justify-center mb-4 text-left text-white md:text-center font-body">
            “Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
            untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu
            cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya
            diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian
            itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.”
          </p>
          <p className="flex items-center justify-center mb-8 font-bold text-center text-white md:mx-40 font-body">
            (QS Ar-Rum : 21)
          </p>
        </div>
      </div>
      <img src={divBottom} alt="div-bottom" className="-my-1 bg-slate-950" />
    </>
  );
};

export default AyatSuci;
