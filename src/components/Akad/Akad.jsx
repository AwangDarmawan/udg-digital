import { MapPin, Heart } from "lucide-react";
import { Clapperboard } from "lucide-react";
export default function Akad({
  title,
  date,
  time,
  location,
  mapsLink,
}) {
  return (
    <div
      data-aos="fade-up"
      className="
        relative
        overflow-hidden
        rounded-[60px]
        md:rounded-[80px]
        bg-transparent
        text-white
        shadow-2xl
        px-6
        py-12
        md:px-12
        md:py-16
      "
    >
      {/* Decoration */}
      <div className="absolute inset-0 opacity-10 text-red-600">
  <Clapperboard className="absolute top-8 left-8 w-10 h-10 " />
  <Clapperboard className="absolute top-8 right-8 w-10 h-10" />
  <Clapperboard className="absolute bottom-8 left-8 w-10 h-10" />
  <Clapperboard className="absolute bottom-8 right-8 w-10 h-10" />
</div>

      <div className="relative z-10 text-center">
        <h2
          className="
            font-bold
            text-3xl
            md:text-5xl
            text-red-600
            font-netflix
          "
        >
          {title}
        </h2>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 my-6">
          <div className="h-[1px] w-20 md:w-28 bg-white" />
          <Heart className="text-red-600"/>
          <div className="h-[1px] w-20 md:w-28 bg-white" />
        </div>

        <p className="font-semibold text-sm md:text-lg font-playfair">
          {date}
        </p>

        <p className="mt-3 font-bold text-base md:text-xl font-playfair">
          {time}
        </p>

        <p className="mt-4 font-semibold text-sm md:text-base font-playfair">
          Kediaman Mempelai Wanita
        </p>

        <p
          className="
            mt-3
            text-sm
            md:text-base
            max-w-lg
            mx-auto
            leading-relaxed
            font-playfair
            font-semibold
          "
        >
          {location}
        </p>

        <a
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex
            items-center
            gap-2
            mt-8
            border-2
            border-white
            rounded-full
            px-5
            py-2
            hover:bg-red-600
            hover:text-white
            transition-all
            font-playfair
          "
        >
          <MapPin />
          Lihat Lokasi
        </a>
      </div>
    </div>
  );
}