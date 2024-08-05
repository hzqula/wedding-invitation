import React, { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("08/10/2024 7:30:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex justify-center w-full gap-4 mx-auto my-8">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-lime-950">
          <h1 className="text-xl font-bold text-center text-white">
            {days} <p className="-mt-1 text-sm text-white md:text-lg">Hari</p>
          </h1>
        </div>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-lime-950">
          <h1 className="text-xl font-bold text-center text-white">
            {hours} <p className="-mt-1 text-sm text-white md:text-lg">Jam</p>
          </h1>
        </div>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-lime-950">
          <h1 className="text-xl font-bold text-center text-white">
            {minutes}{" "}
            <p className="-mt-1 text-sm text-white md:text-lg">Menit</p>
          </h1>
        </div>
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-lime-950">
          <h1 className="text-xl font-bold text-center text-white">
            {seconds}{" "}
            <p className="-mt-1 text-sm text-white md:text-lg">Detik</p>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Timer;
