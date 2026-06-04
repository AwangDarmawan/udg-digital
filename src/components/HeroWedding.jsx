
import wedding from "../assets/potowedding.png";
import Nikah from "../assets/Nikah.png";
import { useState,useEffect } from "react";

export default function HeroWedding() {
  const targetDate = new Date("2026-07-07T00:00:00").getTime();
    
         // Set initial state for the countdown
         const [timeLeft, setTimeLeft] = useState({
           days: 0,
           hours: 0,
           minutes: 0,
           seconds: 0
         });
       
         useEffect(() => {
           const interval = setInterval(() => {
             const now = new Date().getTime();
             const distance = targetDate - now;
       
             if (distance < 0) {
               clearInterval(interval);
               setTimeLeft({
                 days: 0,
                 hours: 0,
                 minutes: 0,
                 seconds: 0
               });
             } else {
               // Calculate the time remaining
               setTimeLeft({
                 days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                 hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                 minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                 seconds: Math.floor((distance % (1000 * 60)) / 1000)
               });
             }
           }, 1000);
       
           return () => clearInterval(interval);
         }, [targetDate]);
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background */}
      <img
        src={wedding}
        alt="Wedding"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Atas Tengah */}
      <div
        className="
          absolute
          top-[30%]
          sm:top-[20%]
          md:top-[20%]
          lg:top-[10%]
          left-1/2
          -translate-x-1/2
          z-10
          flex
          flex-col
          items-center
          text-center
          w-full
          px-4
        "
      >
        {/* Logo Nikahflix */}
        <img
          src={Nikah}
          alt="Nikahflix"
          className="
            w-32
            sm:w-44
            md:w-56
            lg:w-72
            xl:w-80
          "
        />

        {/* Judul */}
        <div
  className="
    mt-2
    flex
    flex-cols
    items-center
    text-white
    font-netflix
    font-bold
    drop-shadow-lg
    tracking-wide
    gap-1
  "
>
  <h1
    data-aos="fade-right"
    className="
      text-2xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl
      leading-none
      text-white
      -mt-2
     font-netflix 
    "
  >
    ALPI 
  </h1>
  <span data-aos="zoom-in"
  text-1xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl> 
    &
  </span>

  <h1
    data-aos="fade-left"
    className="
      text-2xl
      sm:text-5xl
      md:text-6xl
      lg:text-7xl
      text-white
      leading-none
      -mt-2
    "
  >
    NDAH
  </h1>
</div>
        <span
        className="
          bg-red-600
          px-3 py-1
          sm:px-4 sm:py-2
          text-xs sm:text-sm
          rounded
          text-white
          font-netflix
          
        "
      >
        Coming Soon
      </span>
   
  </div>
  
  {/* Alamat & Tanggal */}
      <div
        className="
          absolute
          bottom-36
          sm:bottom-40
          md:bottom-44
          left-1/2
          -translate-x-1/2
          z-10
          text-center
          text-white
          px-4
          w-full
         
        "
      >
        <div className="w-20 h-px bg-white/50 mx-auto mb-4" />

        {/* <p
          className="
            text-sm
            sm:text-base
            md:text-lg
            font-bold
          "
        >
          Jl. Kp. Halimun RT 003 RW 004
        </p> */}

       <p 
       data-aos="flip-right"
  className="
    mt-2
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    font-semibold
    tracking-[0.2em]
    whitespace-nowrap
    text-white
    font-netflix
    
  "
>
  07 JULI 2026
</p>
      </div>

       {/* Countdown */}
  <div className=" absolute
    bottom-6
    left-1/2
    -translate-x-1/2
    z-10
    flex
    gap-2
    sm:gap-4">
      
    <div className=" border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.days}<br /> H
    </div>
    <div className=" border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.hours} <br /> D
    </div>
    <div className=" border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.minutes} <br /> M
    </div>
    <div className=" border  hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.seconds} <br /> S
    </div>
  </div>
    </section>
  );
}