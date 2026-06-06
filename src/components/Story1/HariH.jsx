

// import MenujuButton from "./MenujuButton";
// import MenujuQuote from "./MenujuQuote";
// import MenujuVideo from "./MenujuVideo";

// export default function HariH() {
//   return (
//     <section className="min-h-screen bg-black text-white">
//       <div className="mx-auto max-w-md px-4 py-6">
        
//          {/* Story */}
        
//         <h2  data-aos="zoom-in" className="text-5xl md:text-5xl font-bold mb-10 font-netflix" >
//          LIVE STORY
//         </h2>
      
       
 

//         <MenujuVideo/>
       


    
//         <h1
//           className="
//           mt-5
//           text-3xl
//           font-bold
//           leading-tight
//           md:text-4xl 
//            font-playfair
//         "
//         >
//           Alpi & Ndah:
//           <br />
//           Menuju Hari H
//         </h1>

//         <MenujuButton />

//         <MenujuQuote />
//       </div>
    
    
//     </section>
//   );
// }

import StorySection from "../Story2/StorySection";
import MenujuButton from "./MenujuButton";
import MenujuQuote from "./MenujuQuote";
import MenujuVideo from "./MenujuVideo";
export default function HariH() {
  return (
    <section className="min-h-screen bg-black text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        
        
        <h2
          data-aos="zoom-in"
          className="mb-10 text-5xl font-bold font-netflix"
        >
          LIVE STORY
        </h2>

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