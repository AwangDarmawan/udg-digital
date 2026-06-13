
import Berdua from "../../assets/PotoBerdua.png";
// import NikahFlix from "../../assets/NikahFlix.png";
import { TypeAnimation } from "react-type-animation";
import LogoNikah from "../DataKhusus/LogoNikah";
import Waktu from "./Waktu";

export default function HeroWedding() {

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      
      {/* Background */}
      <img
        src={Berdua}
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
   
        
        <LogoNikah/>

        {/* Judul */}
        <div
  className="
    mt-2
    flex
    flex-cols
    items-center
    text-white
    font-playfair
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
     font-playfair
    
    "
  >
    ALPI 
  </h1>
  <span data-aos="zoom-in"
  className="text-2xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl font-playfair"
  > 
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
      font-playfair
    "
  >
    NDAH
  </h1>
</div>
      
   
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
   font-playfair
    
  "
>
       <TypeAnimation
    sequence={[
       ` 05 Juli 2026 `,
      2000,
      "",
      500,
    ]}
    speed={60}
    deletionSpeed={60}
    repeat={Infinity}
  />
</p>
      </div>

       {/* Countdown
  <div className=" absolute
    bottom-6
    left-1/2
    -translate-x-1/2
    z-10
    flex
    gap-2
    sm:gap-4">
      
    <div className="   font-playfair border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.days}<br /> H
    </div>
    <div className="   font-playfair border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.hours} <br /> D
    </div>
    <div className="   font-playfair border hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.minutes} <br /> M
    </div>
    <div className="   font-playfair border  hover:bg-red-500 py-2 px-4 mx-2 rounded-xl text-white text-xl font-semibold">
    {timeLeft.seconds} <br /> S
    </div>
  </div> */}
    {/* Countdown */}
        <div className=" absolute
    bottom-6
    sm:bottom-8
    md:bottom-10

    left-1/2
    -translate-x-1/2

    z-10
    w-full
    max-w-xs

    sm:max-w-md
    md:max-w-lg

    px-4">
          <Waktu />
        </div>
    </section>
  );
}