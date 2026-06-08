
import StorySection from "../Story2/StorySection";
import MenujuButton from "./MenujuButton";
import MenujuQuote from "./MenujuQuote";
import MenujuVideo from "./MenujuVideo";
export default function HariH() {
  return (
    <section id="story" className="min-h-screen bg-black text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        
        
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            data-aos="fade-up"
            className="text-red-500 tracking-[0.3em] text-sm mb-2 font-playfair"
          >
            FEATURED MOMENTS
          </p>

          <h2
            data-aos="zoom-in"
            className="font-netflix text-4xl sm:text-5xl md:text-6xl"
          >
            STORY
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-4 rounded-full" />
        </div>
        
        {/* <h2
          data-aos="zoom-in"
          className="mb-10 text-5xl font-bold font-netflix"
        >
          LIVE STORY
        </h2> */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-8
            lg:gap-12
            items-start
          "
        >
          {/* Video */}
          <div  className="w-full md:w-[45%]">
            <MenujuVideo />
          </div>

          {/* Content */}
          <div className="w-full md:w-[55%]">
            <h1    data-aos="fade-up-right"
              className="
                text-3xl
                md:text-4xl
                lg:text-5xl
                font-bold
                leading-tight
                font-playfair
              "
            >
              Alpi & Ndah:
              <br data-aos="fade-down-left"/>
              Menuju Hari H
            </h1>

            <MenujuButton />

            <MenujuQuote />
          </div>
        </div>
       {/* //StorySection */}
       <StorySection/>
      </div>
    </section>
  );
}