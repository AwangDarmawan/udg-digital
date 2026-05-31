
import wedding from "../assets/potowedding.png";
import Nikah from "../assets/Nikah.png";

export default function HeroWedding() {
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
        <h1
          className="
            text-white
            font-bold
            mt-2
            text-xl
            sm:text-2xl
            md:text-4xl
            lg:text-5xl
            drop-shadow-lg
          "
        >
          ALPI & NDAH
        </h1>

        {/* Sub Judul */}
        <p
          className="
            text-white
            mt-2
            text-xs
            sm:text-sm
            md:text-base
            max-w-md
            drop-shadow-md
          "
        >
          Menuju Hari Bahagia
        </p>
      </div>
    </section>
  );
}