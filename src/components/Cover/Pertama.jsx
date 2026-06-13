// import LogoNikah from "../DataKhusus/LogoNikah";
// import ProfileCard from "../DataKhusus/ProfileCard";
// import {  useParams } from 'react-router-dom';
// import { useState } from "react";
// import { Mail, MailOpen } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { TypeAnimation } from "react-type-animation";

// function Pertama() {
//    const navigate = useNavigate();
//   const { nama } = useParams();
//     const [hover, setHover] = useState(false);
    
//   return (
//     <>
//          <main className="min-h-screen bg-black text-white overflow-hidden">
//       <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">

//         {/* Background Glow */}
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

//         <div className="relative z-10 w-full max-w-5xl">

//           {/* Logo */}
//           <div className="flex justify-center mb-8 md:mb-12">
//             <LogoNikah />
//           </div>

//           {/* Title */}
//           <h2 className="text-center text-lg sm:text-xl md:text-2xl text-zinc-200 mb-8 md:mb-12  font-playfair">
            
//            <TypeAnimation
//     sequence={[
//       "Siapa Yang Menonton?",
//       2000,
//       "Keluarga",
//       2000,
//       "Sahabat",
//       2000,
//       "Teman Kerja",
//       2000,
//     ]}
//     speed={60}
//     deletionSpeed={60}
//     repeat={Infinity}
//   />
//           </h2>

//           {/* Profiles */}
//           <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 place-items-center  text-white font-netflix">

//             <ProfileCard
//               name="ALPI RAHMAN"
//               gradient="from-amber-400 to-amber-200"
//             />

//             <ProfileCard
//               name="SITI SA'ADAH"
//               gradient="from-red-600 to-red-300"
//             />

//           </div>

//           {/* Guest */}
//           <div className="text-center mt-12 md:mt-16">
//             <p className="text-zinc-400 text-md sm:text-base font-playfair">
//               Kepada Yth.
//             </p>

//             <h3 data-aos="fade-down" className="text-red-600 font-bold text-2xl sm:text-3xl md:text-4xl font-netflix mt-2">
//               {nama}
//             </h3>
//           </div>

//           {/* CTA */}

//           <div className="flex justify-center mt-10 md:mt-14">
//   <button
//     onClick={() => {
//       localStorage.setItem("playMusic", "true");
//       // navigate("/undangan");
//       navigate("/intro");
//     }}
//     onMouseEnter={() => setHover(true)}
//     onMouseLeave={() => setHover(false)}
//     data-aos="fade-up"
//     className="
//       px-6 py-3
//       sm:px-8 sm:py-4
//       md:px-10 md:py-4
//       lg:px-12 lg:py-5

//       border border-zinc-500
//       bg-red-600
//       hover:bg-red-700
//       hover:text-white

//       uppercase
//       tracking-wider
//       font-netflix

//       text-base
//       sm:text-lg
//       md:text-xl
//       lg:text-2xl

//       flex
//       items-center
//       gap-2
//       sm:gap-3

//       shadow-lg
//       transition-all
//       duration-300
//     "
//   >
//     {hover ? (
//       <MailOpen className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//     ) : (
//       <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
//     )}

//     BUKA UNDANGAN
//   </button>
// </div>
           
        

//         </div>
//       </section>
//     </main>
//     </>
//   )
// }

// export default Pertama
import LogoNikah from "../DataKhusus/LogoNikah";
import pria from "../../assets/Alpir.png";
import wanita from "../../assets/Endahs.png";

import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, MailOpen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

function Pertama() {
  const navigate = useNavigate();
  const { nama } = useParams();
  const [hover, setHover] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_60%)]" />

      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6 py-10">
        <div className="relative z-10 w-full max-w-5xl">
          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <LogoNikah />
          </div>

          {/* Title */}
          <h2
            className="
              text-center
              text-lg
              sm:text-xl
              md:text-2xl
              text-zinc-300
              mb-10
              font-playfair
              min-h-[40px]
            "
          >
            <TypeAnimation
              sequence={[
                "Siapa Yang Menonton?",
                2000,
                "Keluarga",
                2000,
                "Sahabat",
                2000,
                "Teman Kerja",
                2000,
              ]}
              speed={60}
              deletionSpeed={60}
              repeat={Infinity}
            />
          </h2>

          {/* Foto Pengantin */}
          <div
            className="
              flex
              justify-center
              items-center
              gap-5
              sm:gap-8
              md:gap-14
            "
          >
            {/* Alpi */}
            <div
              data-aos="fade-right"
              className="flex flex-col items-center"
            >
              <img
                src={pria}
                alt="Alpi Rahman"
                className="
                  w-28 h-28
                  sm:w-40 sm:h-40
                  md:w-52 md:h-52
                  lg:w-60 lg:h-60

                  rounded-full
                  object-cover

                  border-2
                  border-zinc-700

                  shadow-xl

                  transition-all
                  duration-300
                  hover:scale-105
                "
              />

              <h3
                className="
                  mt-4
                  font-netflix
                  text-sm
                  sm:text-lg
                  md:text-2xl
                  text-center
                "
              >
                ALPI RAHMAN
              </h3>
            </div>

            {/* Heart
            <div
              className="
                text-red-600
                text-2xl
                sm:text-4xl
                md:text-5xl
                animate-pulse
              "
            >
              ❤
            </div> */}

            {/* Endah */}
            <div
              data-aos="fade-left"
              className="flex flex-col items-center"
            >
              <img
                src={wanita}
                alt="Siti Sa'adah"
                className="
                  w-28 h-28
                  sm:w-40 sm:h-40
                  md:w-52 md:h-52
                  lg:w-60 lg:h-60

                  rounded-full
                  object-cover

                  border-2
                  border-zinc-700

                  shadow-xl

                  transition-all
                  duration-300
                  hover:scale-105
                "
              />

              <h3
                className="
                  mt-4
                  font-netflix
                  text-sm
                  sm:text-lg
                  md:text-2xl
                  text-center
                "
              >
                SITI SA'ADAH
              </h3>
            </div>
          </div>

          {/* Nama Tamu */}
          <div className="text-center mt-12 md:mt-16">
            <p
              className="
                text-zinc-400
                text-sm
                sm:text-base
                font-playfair
                tracking-wider
              "
            >
              Kepada Yth.
            </p>

            <h3
              data-aos="fade-down"
              className="
                mt-3
                text-red-600
                font-bold
                font-netflix

                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-5xl

                break-words
              "
            >
              {nama}
            </h3>
          </div>

          {/* Tombol */}
          <div className="flex justify-center mt-10 md:mt-14">
            <button
              onClick={() => {
                localStorage.setItem("playMusic", "true");
                navigate("/intro");
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              data-aos="fade-up"
              className="
                px-7 py-3
                sm:px-8 sm:py-4

                bg-red-600
                hover:bg-red-700

                rounded-full

                font-netflix
                uppercase
                tracking-widest

                text-sm
                sm:text-base
                md:text-lg

                flex
                items-center
                gap-2

                transition-all
                duration-300

                hover:scale-105
                shadow-lg
              "
            >
              {hover ? (
                <MailOpen className="w-5 h-5" />
              ) : (
                <Mail className="w-5 h-5" />
              )}

              BUKA UNDANGAN
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Pertama;