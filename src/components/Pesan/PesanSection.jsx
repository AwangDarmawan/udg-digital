import PesanForm from "./PesanForm";
import PesanCard from "./PesanCard";

import Poto1 from "../../assets/1.png";
import { useEffect, useState } from "react";
import {  GetPesan } from "../../services/Api";
// import { toast } from "react-toastify";


function PesanSection() {
    const [datas, setDatas] = useState([]);

  

  
 
  async function fetchPesan() {
    try {
      

      const result = await GetPesan();
     console.log("resul1",result)
      setDatas(result);
      console.log("resul2",result)
    } catch (error) {
      console.error(error.message);
    } 
  }
   useEffect(() => {
    fetchPesan();
  }, []);



 
  return (
    <section
    id="rsvp"
      className="
        w-full
        py-12 px-4
      "
    >
         <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            YOUR RESPONSE
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl text-white"
          >
            RSVP
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>
      <div
        className="
          mx-auto
          w-full
          max-w-md
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-xl

          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl
          xl:max-w-4xl
        "
      >
        {/* Cover */}
        <div
          className="
            aspect-[4/3]
            w-full
            overflow-hidden
          "
        >
          <img
            src={Poto1}
            alt="Wedding"
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>

        {/* Content */}
        <div
          className="
            p-5

            md:p-8
            lg:p-10
          "
        >
          <h2
            className="
              text-center   
              text-2xl
              md:text-3xl
              text-stone-700
              font-playfair
            "
          >
            Berikan Ucapan & Doa
          </h2>

          <p
            className="
              mt-4
              mb-6
              text-lg
              text-stone-500
              font-playfair
              font-bold
            "
          >
            {datas.length} Komentar
          </p>

          <PesanForm PropfetchPesan={fetchPesan} />

          <div
            className="
              mt-8
              space-y-6
            "
          >
             {datas.map((item) => (
              <PesanCard
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default PesanSection;