import poto2 from "../../assets/PotoBerdua.png"
export default function PotoBerdua() {
  return (
    <section   className="bg-black py-10">
      <div className="mx-auto max-w-5xl px-5">
        <div
          className="
            relative
            overflow-hidden
            rounded-[28px]
            aspect-[16/10]
            shadow-[0_25px_60px_rgba(0,0,0,0.5)]
          "
        >
          <img
            src={poto2}
            alt="Alpi Dan Ndan"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
          />
        </div>
      </div>
    </section>
  );
}