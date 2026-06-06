function PesanForm() {
  return (
    <form
      className="
        space-y-4
      "
    >
      <input
        type="text"
        placeholder="Nama"
        className="
          w-full
          rounded-md
          border
          border-stone-500
          bg-transparent
          px-4
          py-3
          text-sm
          outline-none
          focus:ring-2
          focus:ring-stone-400
        "
      />

      <textarea
        rows="4"
        placeholder="Ucapan"
        className="
          w-full
          resize-none
          rounded-md
          border
          border-stone-500
          bg-transparent
          px-4
          py-3
          text-sm
          outline-none
          focus:ring-2
          focus:ring-stone-400
        "
      />

      <select
        className="
          w-full
          rounded-md
          border
          border-stone-500
          bg-transparent
          px-4
          py-3
          text-sm
          outline-none
          focus:ring-2
          focus:ring-stone-400
          font-playfair
        "
      >
        <option>Konfirmasi Kehadiran</option>
        <option>Ya</option>
        <option>Mungkin</option>
        <option>Tidak</option>
      </select>

      <button
        type="submit"
        className="
          flex
          items-center
          gap-2
          rounded-md
          bg-red-600
          px-6
          py-3
          text-white
          text-sm
          transition
          hover:bg-red-800
          font-playfair
          font-bold
        "
      >
        ▶ Kirim
      </button>
    </form>
  );
}

export default PesanForm;