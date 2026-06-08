import { useState } from "react";
import { toast } from "react-toastify"
import { CreatePesan } from "../../services/Api";


function PesanForm({ PropfetchPesan }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    nama: "",
    pesan: "",
    kehadiran: "",
  });
      const handleChange = (e) => {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    };
  
      const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!form.nama.trim()) {
        return toast.error("Nama wajib diisi");
      }
  
      if (!form.pesan.trim()) {
        return toast.error("Ucapan wajib diisi");
      }
  
      if (!form.kehadiran) {
        return toast.error("Pilih konfirmasi kehadiran");
      }
  
      try {
        setLoading(true);
  
        await CreatePesan(form);
        await PropfetchPesan()
  
        toast.success("Ucapan berhasil dikirim");
  
        setForm({
          nama: "",
          pesan: "",
          kehadiran: "",
        });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
   
   
  return (
    <form
     onSubmit={handleSubmit}
      className="
        space-y-4
      "
    >
           {/* Nama */}
      <div>
        <label
          htmlFor="nama"
          className="
            block
            mb-2
            text-sm
            md:text-base
            font-semibold
            font-playfair
            text-stone-500
          "
        >
          Nama
        </label>
      <input
        id="nama"
        type="text"
        name="nama"
        value={form.nama}
        onChange={handleChange}
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
             font-playfair
             font-semibold
        "
      />
      </div>

       <div>
        <label
          htmlFor="pesan"
          className="
            block
            mb-2
            text-sm
            md:text-base
            font-semibold
            font-playfair
            text-stone-500
            
          "
        >
          Ucapan
        </label>
      <textarea
       id="pesan"
        name="pesan"
        rows="4"
        placeholder="Ucapan Anda"
         value={form.pesan}
          onChange={handleChange}
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
          font-semibold
          font-playfair
        "
      />
      </div>

      {/* <select
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
      </select> */}

      {/* Kehadiran */}
      <div>
        <p
          className="
            mb-3
            text-sm
            md:text-base
            font-semibold
            font-playfair
            text-stone-500
          "
        >
          Kehadiran
        </p>

        <div
          className="
            flex
         
            gap-3

            sm:flex-row
            sm:flex-wrap
          "
        >
          <label className="flex items-center gap-2 cursor-pointer   text-stone-500 font-bold
              ">
            <input
              type="radio"
              name="kehadiran"
              value="Ya"
              checked={form.kehadiran === "Ya"}
              onChange={handleChange}
            
            />
            Ya
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-stone-500 font-bold">
            <input
              type="radio"
              name="kehadiran"
              value="Mungkin"
              checked={form.kehadiran === "Mungkin"}
              onChange={handleChange}
            />
            Mungkin
          </label>

          <label className="flex items-center gap-2 cursor-pointer text-stone-500 font-bold">
            <input
              type="radio"
              name="kehadiran"
              value="Tidak"
              checked={form.kehadiran === "Tidak"}
              onChange={handleChange}
            />
            Tidak 
          </label>
        </div>
      </div>

      <button
        type="submit"
          disabled={loading}
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
        {loading ? "Mengirim..." : "▶ Kirim"}
      </button>
    </form>
  );
}

export default PesanForm;