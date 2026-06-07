import HeroWedding from "../components/Awal/HeroWedding";
import Navigation from "../components/Navigation";
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





export default function KeduaPages() {
      const audioRef = useRef(null);
const [isPlaying, setIsPlaying] = useState(false);


useEffect(() => {
  const shouldPlay = localStorage.getItem("playMusic");

  if (shouldPlay === "true") {
    audioRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  }
}, []);
  return (
    <>
      <HeroWedding/>
      {/* <Waktu/> */}
      <Navigation/>
      <Pengantin/>
      <HariH/>
      <AkadSection/>

      <Gallery/>
      {/* <main
      className="
        min-h-screen
        
        px-4
        py-10

        md:px-6
        lg:px-8
      "
    >
      <PesanSection /> */}
      <GiftSection/>

      <Footer/>
    {/* </main> */}
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
    bottom-5
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
