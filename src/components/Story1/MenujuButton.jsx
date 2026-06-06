
import { Heart } from "lucide-react";
// import { FaPeopleGroup } from "react-icons/fa6";

export default function MenujuButton() {
  return (
    <>
     


    <div className="mt-6 flex gap-3">
      <button
        className="
        flex
        items-center
        gap-2
        rounded-md
        bg-red-600
        px-5
        py-3
        font-semibold
        transition
        hover:bg-red-700
      "
      >
          < Heart className="hover:bg-pink-500"/>
      </button>

      <button
        className="
        flex
        items-center
        gap-2
        rounded-md
        bg-white
        px-5
        py-3
        text-black
        font-semibold
        transition
        hover:bg-zinc-200
        font-netflix
      "
      >
        {/* < Heart /> */}
        Bersama Selama 1 Tahun
      </button>
    </div>
 
    </>
  )
}
