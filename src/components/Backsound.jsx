import React, { useState, useEffect } from "react";
import backsound from "../assets/backsound.mp3";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Backsound = () => {
  const [playing, toggle] = useAudio(backsound);

  return (
    <div className="fixed z-50 bottom-4 left-4">
      <button
        onClick={toggle}
        className="flex items-center justify-center w-12 h-12 bg-yellow-500 border-2 border-white rounded-full shadow-lg"
      >
        {playing ? (
          <FaPause size={16} className="fill-white" />
        ) : (
          <FaPlay className="ml-[2px] fill-white" size={16} />
        )}
      </button>
    </div>
  );
};

export default Backsound;
