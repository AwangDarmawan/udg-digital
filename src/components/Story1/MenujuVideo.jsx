

import { useRef, useState } from "react";
import vdpasangan from "../../assets/Musik/vdpasangan.mp4";

export default function MenujuVideo() {
  const videoRef = useRef(null);
  const [isVd, setIsVd] = useState(true);

  const handleVideo = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVd(true);
    } else {
      videoRef.current.pause();
      setIsVd(false);
    }
  };

  return (
    <div
      data-aos="fade-down"
      className="overflow-hidden rounded-xl bg-zinc-900 shadow-xl"
    >
      <div className="relative aspect-[9/16] w-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src={vdpasangan} type="video/mp4" />
        </video>

        <button
          onClick={handleVideo}
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-16
            w-16
            -translate-x-1/2
            -translate-y-1/2
            items-center
            justify-center
            rounded-full
            bg-white/20
            backdrop-blur-md
          "
        >
          <span className="text-2xl">
            {isVd ? "⏸" : "▶"}
          </span>
        </button>
      </div>
    </div>
  );
}