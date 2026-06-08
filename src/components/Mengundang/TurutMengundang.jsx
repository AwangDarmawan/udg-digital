function TurutMengundang() {
  return (
    <section
      id="turut-mengundang"
      className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            SPECIAL APPEARANCE
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl"
          >
            TURUT MENGUNDANG
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          
          {/* Pihak Pria */}
          <div
            data-aos="fade-right"
            className="
              bg-zinc-900
              border border-zinc-800
              rounded-3xl
              p-6
              sm:p-8
              shadow-xl
            "
          >
            <p className="text-red-500 text-xs tracking-[0.3em] mb-2 font-playfair">
              THE GROOM'S FAMILY
            </p>

            <h3 className="font-netflix text-3xl sm:text-4xl mb-6">
              PIHAK PRIA
            </h3>

            <div className="space-y-4 text-zinc-200 font-playfair">
               <p>Bpk. KH. Jaenal Abidin (Sesepuh Ponpes Nurul Huda)</p>
               <p>Bpk. Ust. Uus</p>
               <p>Bpk. Dadang Saputra (KADES Padajaya)</p>
               <p>Bpk. Aman (Ua)</p>
               <p>Bpk. Agus (Paman)</p>
               <p>Ibu Neng Alin (Kakak)</p>
               <p>Ibu Reni Restu Utami (Kakak)</p>
               <p>Ibu Ai Siti Rohaeti (Kakak)</p>
               <p>Ibu Eka Restu Senja (Kakak)</p>
            </div>
          </div>

          {/* Pihak Wanita */}
          <div
            data-aos="fade-left"
            className="
              bg-zinc-900
              border border-zinc-800
              rounded-3xl
              p-6
              sm:p-8
              shadow-xl
            "
          >
            <p className="text-red-500 text-xs tracking-[0.3em] mb-2 font-playfair">
              THE BRIDE'S FAMILY
            </p>

            <h3 className="font-netflix text-3xl sm:text-4xl mb-6">
              PIHAK WANITA
            </h3>

            <div className="space-y-4 text-zinc-200 font-playfair">
                 <p>Keluarga Besar Bapak Jeje (Alm.) & Ibu Lilis (Almh.)</p>
    <p>Keluarga Besar Bpk Ombi &  Ibu Umi Cucum (Almh.)</p>
    <p>Bpk Yayan Karnayan (Paman)</p>
    <p>Bpk Saefulloh (Paman)</p>
    <p>Endang Kamaludin (Kakak)</p>
    <p>M. Irfan Jafar Sidik (Kakak)</p>
    <p>Bpk H. Mamad M. Jaelani, S.Ag. (Kakek)</p>
    <p>Bpk H. Ujang Iskandar (Ua)</p>
    <p>Bpk Solihin (Paman)</p>
    <p>Keluarga Bpk Bunyamin & Ibu Didah</p>
    <p>Bpk Pepen (Paman)</p>
    <p>Bpk Ade (Paman)</p>
    <p>Bpk Imam Darmawan (Kakak)</p>
    <p>Bpk Deden Iskandar (Kakak)</p>
    <p>Bpk Dede (Paman)</p>
    <p>Bpk Muhidin (Paman)</p>
    <p>Bpk Permana Ruslandi (Paman)</p>
            </div>
          </div>
        </div>

        {/* Closing */}
        <div
          data-aos="fade-up"
          className="text-center mt-12"
        >
          <p className="text-zinc-400 text-sm sm:text-base font-playfair uppercase font-bold">
            Beserta seluruh keluarga besar yang turut berbahagia
            atas pernikahan kami.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TurutMengundang;