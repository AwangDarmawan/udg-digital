
import wanita from "../../assets/Endahs.png";
import pria from "../../assets/Alpir.png";
import {  FaInstagram } from "react-icons/fa";
import PotoBerdua from "./PotoBerdua";

function Pengantin() {
  const couples = [
    {
      name: "ALPI RAHMAN",
      role: "Putra Ke-5",
      parent1: "Bpk H.Agus Samsuri (alm)",
      parent2: "& ibu Ii Mulyati",
      instagram: "alpirahman",
      image: pria,
    },
    {
      name: "SITI SA'ADAH",
      role: "Putri Ke-3 ",
      parent1: "Bpk Asep Sulaeman",
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
      {/* <div className="max-w-6xl mx-auto"> */}
        {/* Heading */}
        {/* <h2  data-aos="zoom-in" className="text-5xl md:text-5xl font-bold mb-10 font-netflix" >
          COUPLE
        </h2> */}

         <div className="mx-auto max-w-6xl">
        
        
        {/* Heading */}
       <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            STARRING
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl text-white"
          >
            COUPLE
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {couples.map((person) => (
            
   <div
           
  key={person.name}
  className="flex flex-col h-full"
>
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
  <div className="mt-4 flex flex-col flex-1">
    <h3  data-aos="fade-down-right" className="font-bold text-lg sm:text-2xl min-h-[56px] font-playfair">
      {person.name}
    </h3>

    <p className="text-sm sm:text-base text-zinc-300 mt-2 min-h-[24px] font-netflix">
      {person.role}
    </p>

    <div className="min-h-[80px]">
      <p className="font-semibold text-sm sm:text-base  font-playfair">
        {person.parent1}
      </p>

      <p className="font-semibold text-sm sm:text-base  font-playfair">
        {person.parent2}
      </p>
    </div>

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
        mt-auto
        text-sm
        transition
        w-fit
        font-medium
        font-playfair
      "
       data-aos="fade-up"
    >
      
                  <FaInstagram className="text-xl text-white dark:text-red-500 "   />@{person.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PotoBerdua/>
    </section>
  );
}

export default Pengantin;
   
