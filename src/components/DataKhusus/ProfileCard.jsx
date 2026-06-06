export default function ProfileCard({
  name,
  gradient,
}) {
  return (
    <button className="group flex flex-col items-center">

      <div  data-aos="fade-up-right"
        className={`
          bg-gradient-to-b ${gradient}
          rounded-2xl
          border-2 border-transparent
          flex items-center justify-center
          text-white
          transition-all duration-300

          w-[120px]
          h-[120px]

          sm:w-[160px]
          sm:h-[160px]

          md:w-[220px]
          md:h-[220px]

          lg:w-[260px]
          lg:h-[260px]

          group-hover:border-white
          group-hover:scale-105
        `}
      >
        <svg
          width="60%"
          height="60%"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
        >
          <circle cx="30" cy="35" r="5" fill="currentColor" />
          <circle cx="70" cy="35" r="5" fill="currentColor" />
          <path d="M30 60C40 70 60 70 70 60" />
        </svg>
      </div>

      <span className="mt-3 md:mt-5 text-base md:text-xl">
        {name}
      </span>

    </button>
  );
}
