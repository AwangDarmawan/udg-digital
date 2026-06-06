import Akad from "./Akad";

export default function AkadSection() {
  return (
    <section
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
        
        <h2  data-aos="zoom-in" className=" text-white relative text-5xl md:text-5xl font-bold mb-10 font-netflix" >
         TIME LOCATION
        </h2>
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
          className="
            rounded-xl
            border
            border-zinc-800
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
          className="
            rounded-xl
            border
            border-zinc-800
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
    </section>
  );
}