function TurutMengundang() {
  return (
    <section
      id="family"
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
              shadow-[0_0_40px_rgba(220,38,38,0.15)]
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
             
              shadow-[0_0_40px_rgba(220,38,38,0.15)]
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
  data-aos="zoom-in-up"
  className="mt-12 flex justify-center px-2"
>
  <div
    className="
      relative
      overflow-hidden
      rounded-3xl

      w-full
      max-w-xs
      sm:max-w-lg
      md:max-w-2xl
      lg:max-w-3xl

      px-5
      py-6
      sm:px-8
      sm:py-8
      md:px-10
      md:py-10

      border border-white/10
      bg-gradient-to-br
       bg-zinc-900

      backdrop-blur-md
      shadow-[0_0_40px_rgba(220,38,38,0.15)]
    "
  >
    {/* Glow */}
    <div
      className="
        absolute
        -top-20
        left-1/2
        -translate-x-1/2
        w-56
        h-56
        bg-zinc-900
              border border-zinc-800
        blur-3xl
        rounded-full
      "
    />

    <p
      className="
        relative
        z-10

        font-netflix
        uppercase
        font-bold

        text-white

        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        xl:text-2xl

        leading-relaxed
        tracking-[0.15em]

        text-center
      "
    >
      Beserta Seluruh Keluarga Besar
      <br />
      Yang Turut Berbahagia
      <br />
      Atas Pernikahan Kami
    </p>

    <div className="flex justify-center mt-5">
      <div
        className="
          w-20
          sm:w-24
          h-[2px]
           bg-zinc-900
              border border-zinc-800
        "
      />
    </div>
  </div>
</div>

      
        </div>
      
    </section>
  );
}

export default TurutMengundang;