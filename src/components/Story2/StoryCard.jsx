export default function StoryCard({ image, title, title2,date, description }) {
  return (
    <article
      className="
        rounded-3xl
       
       
        bg-tranparent
        shadow-md
        overflow-hidden
        h-full
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          aspect-[4/3]
          object-cover
        "
      />

      <div className="p-5">
        <span
  className="
    inline-flex
    items-center
    rounded-xl
    bg-red-600/10
    border
    border-red-600/20
    px-4
    py-1.5
    text-lg
    font-semibold
    text-red-600
    tracking-wide
    font-playfair
  "
>
  {title}
</span>
         <h3
          className="
             text-lg
            font-playfair
            font-bold
            text-white
          "
        >
          {title2}
        </h3>

        <p className="mt-1 text-slate-500 font-medium font-playfair">
          {date}
        </p>

        <div className="mt-4 border-t pt-4">
          <p className="leading-7 font-netflix text-white">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}