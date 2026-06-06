


export default function MenujuVideo() {
  return (
    <>
       <div data-aos="fade-down"
      className="
      overflow-hidden
      rounded-xl
      bg-zinc-900
      shadow-xl
      
    "
    >
      <div
        className="
        relative
        aspect-[9/16]
        w-full
      "
      >
        <img
          src="/cover.jpg"
          alt="VIDEO BELUM DI UPLOAD"
          className="
            h-full
            w-full
            object-cover

          "
        />

        {/* Play Button */}
        <button
          className="
          absolute
          left-1/2
          top-1/2
          flex
          h-16
          w-16
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-white/20
          backdrop-blur-md
        "
        >
          <span className="text-2xl">▶</span>
        </button>
      </div>

      {/* Bottom Info */}
      <div className="flex items-center gap-3 p-3">
        <span className="text-green-500 text-sm font-netflix">
          100% Match
        </span>

        <span className="text-sm text-zinc-400 font-netflix">
          02.02.2025
        </span>

        <span
          className="
          rounded
          border
          border-zinc-500
          px-2
          text-xs
        "
        >
          4K
        </span>

        <span
          className="
          rounded
          border
          border-zinc-500
          px-2
          text-xs
        "
        >
          HD
        </span>
      </div>
    </div>
    </>
  )
}

