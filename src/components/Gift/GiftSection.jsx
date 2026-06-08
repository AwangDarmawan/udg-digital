import { Copy, Gift } from "lucide-react";
import { toast } from "react-toastify";
import { Gift as GiftData } from "./Gift";

export default function GiftSection() {
  const handleCopy = (rekening) => {
    navigator.clipboard.writeText(rekening);
    toast.success("Nomor rekening berhasil disalin");
  };

  return (
    <section 
    id="gift"
    className="w-full px-4 py-16">
      {/* <div className="mx-auto max-w-6xl"> */}
        {/* Title */}
        {/* <h2
          data-aos="zoom-in"
          className="
            mb-10
            text-5xl
            font-bold
            font-netflix
            text-white
          "
        >
          GIFT
        </h2> */}
         <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            WEDDING SPECIAL
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl text-white"
          >
            GIFT
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Container */}
        <div
          className="
            rounded-3xl
              bg-zinc-900
              border border-zinc-800
            backdrop-blur-sm
            shadow-2xl
            p-6
            md:p-10
            lg:p-12
          "
        >
          {/* Header */}
          <div className="text-center">
            <Gift
              className="
                mx-auto
                h-12
                w-12
               text-red-600
                md:h-14
                md:w-14
              "
            />

        

            <p
              className="
                mx-auto
                mt-4
                max-w-2xl
                text-sm
                md:text-base
               text-white
                leading-7
                italic
                font-playfair
              "
            >
              Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
              Namun jika memberi adalah ungkapan tanda kasih, Anda dapat
              memberikan hadiah melalui rekening berikut.
            </p>
          </div>

          {/* List Rekening */}
          <div
            className="
              mt-12
              grid
              grid-cols-1
              md:grid-cols-2
              gap-8
            "
          >
            {GiftData.map((item, index) => (
              <div
                key={item.id}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-duration="1200"
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-md
                  flex
                  flex-col
                  items-center
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* Logo Bank */}
                <img
                  src={item.bank}
                  alt={item.name}
                  className="
                    h-12
                    sm:h-14
                    md:h-16
                    lg:h-20
                    w-auto
                    object-contain
                  "
                />

                {/* Nama */}
                <h3
                  className="
                    mt-5
                    text-xl
                    md:text-2xl
                    font-bold
                     text-stone-700
                    font-playfair
                     italic
                  "
                >
                  {item.name}
                </h3>

                {/* Rekening */}
                <p
                  className="
                    mt-2
                    text-sm
                    md:text-base
                    tracking-wider
                     text-stone-700
                    font-semibold
                  "
                >
                  {item.number}
                </p>

                {/* Tombol Copy */}
                <button
                  onClick={() => handleCopy(item.number)}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-red-600
                    px-5
                    py-3
                    text-white
                    font-semibold
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-red-700
                    hover:scale-105
                    font-playfair
                  "
                >
                  <Copy size={18} />
                  Salin Rekening
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}