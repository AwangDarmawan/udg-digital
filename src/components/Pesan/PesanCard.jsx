
function PesanCard({ item }) {
      const tanggal = new Date(item.created_at).toLocaleDateString(
    "id-ID",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );
  const statusClass = {
  Ya: "bg-green-100 text-green-700",
  Mungkin: "bg-yellow-100 text-yellow-700",
  Tidak : "bg-red-100 text-red-700",
};
  return (
    <div
      className="
        border-t
        border-stone-300
        pt-4
      "
    >
         <div className="flex items-start justify-between gap-3">
      <h3
        className="
          font-semibold
          text-stone-700
          text-sm
          md:text-base
          font-playfair
        "
      >
        {item.nama}
      </h3>

       <span
      className={`
    px-2
    py-1
    rounded-full
    text-[10px]
    md:text-xs
    font-medium
    ${statusClass[item.kehadiran] || "bg-gray-100 text-gray-700"}
  `}
>
  {item.kehadiran}
</span>
      </div>


      <p
        className="
          mt-2
          text-stone-600
          leading-relaxed
          text-xs
          md:text-sm
          
        "
      >
        {item.pesan}
      </p>

      <span
        className="
          mt-2
          block
          text-[10px]
          md:text-xs
          text-stone-400
    
        "
      >
         {tanggal}
      </span>
    </div>
  );
}

export default PesanCard;