import { useEffect, useState } from "react";

export default function Waktu() {
  const weddingDate = new Date("2026-07-05T00:08:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        menit: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        detik: Math.floor(
          (distance % (1000 * 60)) /
            1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const items = [
    {
      value: timeLeft.hari,
      label: "Hari",
    },
    {
      value: timeLeft.jam,
      label: "Jam",
    },
    {
      value: timeLeft.menit,
      label: "Menit",
    },
    {
      value: timeLeft.detik,
      label: "Detik",
    },
  ];

  return (
      <div
      className="
        grid
        grid-cols-4
        gap-2

        sm:gap-3
        md:gap-4
      "
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="
            min-w-[65px]
            sm:min-w-[80px]
            md:min-w-[90px]

            rounded-xl
            border
            border-white/40

            bg-black/20
            backdrop-blur-sm

            px-2
            py-2

            sm:px-4
            sm:py-3

            text-center
            text-white

            transition-all
            duration-300
            hover:bg-red-500/80
          "
        >
          <h3
            className="
              text-lg
              sm:text-2xl
              md:text-3xl

              font-bold
              font-playfair
            "
          >
            {String(item.value).padStart(2, "0")}
          </h3>

          <p
            className="
              mt-1
              text-[10px]
              sm:text-xs
              md:text-sm
              font-playfair
              uppercase
              tracking-wider
            "
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}