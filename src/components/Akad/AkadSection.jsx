import Akad from "./Akad";

export default function AkadSection() {
  return (
    <section
     id="time"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-4
        py-10
        md:px-8
        lg:px-12
      "
    >
        {/* Story */}
         {/* <div className="max-w-6xl mx-auto">
        <h2  data-aos="zoom-in" className=" text-white relative text-5xl md:text-5xl font-bold mb-10 font-netflix" >
         TIME LOCATION
        </h2> */}
         {/* Heading */}
           <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            SPECIAL EVENT
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl text-white"
          >
            TIME LOCATION 
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>
        
      <div
        className="
          mx-auto
          max-w-7xl
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        "
      >
        <div
        data-aos="fade-down-right"
          className="
            rounded-xl
            
            bg-zinc-900
              border border-zinc-800
            overflow-hidden
          "
        >
          <Akad
            title="Akad Nikah"
            date="Kamis, 04 Juni 2026"
            time="10.00 WIB s/d Selesai"
            location="Kp. Halimun, RT003/RW004, Desa Warudoyong, Kec. Cikalongkulon, Kab. Cianjur"
            mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388&z=17&hl=id"
          />
        </div>

        <div
         data-aos="fade-up-left"
          className="
            rounded-xl
             bg-zinc-900
              border border-zinc-800
            overflow-hidden
          "
        >
          <Akad
            title="Resepsi"
            date="Minggu, 05 Juli 2026"
            time="08.00 WIB s/d Selesai"
            location="Kp. Halimun, RT003/RW004, Desa Warudoyong, Kec. Cikalongkulon, Kab. Cianjur"
            mapsLink="https://www.google.com/maps?q=-6.7095556,107.2343388&z=17&hl=id"
          />
        </div>
      </div>
      </div>
    </section>
  );
}