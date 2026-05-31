
import wanita from "../assets/wanita.png";
import pria from "../assets/pria.png";
import {  FaInstagram } from "react-icons/fa";

function Pengantin() {
  const couples = [
    {
      name: "ALPI RAHMAN",
      role: "Putra Bungsu dari",
      parent1: "ABCV",
      parent2: "& IbuSSS",
      instagram: "alpirahman",
      image: pria,
    },
    {
      name: "SITI SA'ADAH",
      role: "Putri Dari ",
      parent1: "Bapak Asep ",
      parent2: "& Ibu Ecin Kuraesin",
      instagram: "ndah",
      image: wanita,
    },
  ];

  return (
    <section
      id="pengantin"
      className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          BRIDE & GROOM
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {couples.map((person) => (
            <div key={person.name}>
              {/* Photo */}
              <div className="overflow-hidden rounded-3xl bg-zinc-800">
                <img
                  src={person.image}
                  alt={person.name}
                  className="
                    w-full
                    aspect-[3/4]
                    object-cover
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h3 className="font-bold text-lg sm:text-2xl">
                  {person.name}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 mt-2">
                  {person.role}
                </p>

                <p className="font-semibold text-sm sm:text-base">
                  {person.parent1}
                </p>

                <p className="font-semibold text-sm sm:text-base">
                  {person.parent2}
                </p>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${person.instagram}`}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-red-600
                    hover:bg-red-700
                    px-4
                    py-2
                    rounded-md
                    mt-4
                    text-sm
                    transition
                  "
                >
                  <FaInstagram className="text-2xl text-white dark:text-gold " />@{person.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pengantin;
   
