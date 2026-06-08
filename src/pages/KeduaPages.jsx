import HeroWedding from "../components/Awal/HeroWedding";
import NavbarTamu from "../components/Navbar/NavbarTamu";
import Pengantin from "../components/Couple/Pengantin";
import HariH from "../components/Story1/HariH";
import AkadSection from "../components/Akad/AkadSection";
import Gallery from "../components/Gallery/Gallery";
import PesanSection from "../components/Pesan/PesanSection";
import { useEffect, useRef, useState } from "react";
import Lagu from "../assets/Musik/lagu.mp3"
import { Volume2, VolumeX } from "lucide-react";
import GiftSection from "../components/Gift/GiftSection";
import Footer from "../components/Footer";
import TurutMengundang from "../components/Mengundang/TurutMengundang";





export default function KeduaPages() {
      const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);
// state swipe all
// const [scrollDirection, setScrollDirection] = useState("down");


useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);


// swipe all
// useEffect(() => {
//   const handleScroll = () => {
//     const scrollTop = window.scrollY;
//     const documentHeight =
//       document.documentElement.scrollHeight - window.innerHeight;

//     if (scrollTop > documentHeight * 0.5) {
//       setScrollDirection("up");
//     } else {
//       setScrollDirection("down");
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

// const handleScrollPage = () => {
//   if (scrollDirection === "down") {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: "smooth",
//     });
//   } else {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   }
// };

  return (
    <>
      <HeroWedding/>
      {/* <Waktu/> */}
      <NavbarTamu/>
      <Pengantin/>
      <HariH/>
      <AkadSection/>

      <Gallery/>
      <PesanSection />
      <GiftSection/>
      <TurutMengundang/>

      <Footer/>
  
  {/* BUTTON SWIPE */}
{/* <button
  onClick={handleScrollPage}
  className="
    fixed
    bottom-20
    right-5
    z-50

    w-12
    h-12

    rounded-full
    bg-white
    text-red-600

    border
    border-red-600

    flex
    items-center
    justify-center

    shadow-lg
    transition-all
    duration-300
    hover:scale-110
  "
>
  {scrollDirection === "down" ? (
    <ChevronDown size={24} />
  ) : (
    <ChevronUp size={24} />
  )}
</button> */}
    <button
  onClick={() => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }}
  


  


  className="
     fixed
    bottom-6
    right-5
    z-50
    w-12
    h-12
    rounded-full
    border
  border-red-600
  bg-red-600
  text-white
    flex
    items-center
    justify-center
      shadow-[0_4px_15px_rgba(62,92,147,0.5)]
    
"
>
  {isPlaying ? (
     <Volume2 size={22} />
  ) : (
   
       <VolumeX size={22} />
   
     )}
</button>

     {/* musik */}
     <audio ref={audioRef} loop>
  <source src={Lagu} type="audio/mp3" />
   </audio>

    </>
  )
}
