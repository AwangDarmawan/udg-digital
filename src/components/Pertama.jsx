import LogoNikah from "../components/LogoNikah";
import ProfileCard from "./ProfileCard";
import { Link, useParams } from 'react-router-dom';

function Pertama() {
  const { nama } = useParams();
  return (
    <>
         <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

        <div className="relative z-10 w-full max-w-5xl">

          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <LogoNikah />
          </div>

          {/* Title */}
          <h2 className="text-center text-lg sm:text-xl md:text-2xl text-zinc-200 mb-8 md:mb-12">
            Who's watching?
          </h2>

          {/* Profiles */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 place-items-center">

            <ProfileCard
              name="ALPI RAHMAN"
              gradient="from-amber-400 to-amber-200"
            />

            <ProfileCard
              name="SITI SA'ADAH"
              gradient="from-red-600 to-red-300"
            />

          </div>

          {/* Guest */}
          <div className="text-center mt-12 md:mt-16">
            <p className="text-zinc-400 text-md sm:text-base">
              Kepada Yth.
            </p>

            <h3 className="text-red-600 font-bold text-2xl sm:text-3xl md:text-4xl">
              {nama}
            </h3>
          </div>

          {/* CTA */}
           
          <div className="flex justify-center mt-10 md:mt-14">
            <Link to="/undangan">
            <button
              className="
                px-6 py-3
                md:px-10 md:py-4
                border border-zinc-500
                uppercase
                tracking-wider
                text-sm md:text-base
                transition-all duration-300
                hover:bg-white
                hover:text-black
              "
            >
              Buka Undangan
            </button>
             </Link>
          </div>

        </div>
      </section>
    </main>
    </>
  )
}

export default Pertama
// import LogoNikah from "../components/LogoNikah";
// import ProfileCard from "./Profile";
// import { Link, useParams } from 'react-router-dom';
// import Alpi from "../assets/Alpi.png";
// import Ndah from "../assets/Ndah.png";

// function Pertama() {
//     const { nama } = useParams();
//   return (
//     <main className="min-h-screen bg-black text-white overflow-hidden">
//       <section className="relative flex min-h-screen flex-col items-center justify-center px-4 sm:px-6">

//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />

//         <div className="relative z-10 w-full max-w-5xl">

//           <div className="flex justify-center mb-8 md:mb-12">
//             <LogoNikah />
//           </div>

//           <h2 className="text-center text-lg sm:text-xl md:text-2xl text-zinc-200 mb-8 md:mb-12">
//             Who's watching?
//           </h2>

//           <div className="grid grid-cols-2 gap-4 sm:gap-8 md:gap-12 place-items-center">

//             <ProfileCard
//               name="ALPI RAHMAN"
//               image={Alpi}
//             />

//             <ProfileCard
//               name="SITI SA'ADAH"
//               image={Ndah}
//             />

//           </div>

//          {/* Guest */}
//           <div className="text-center mt-12 md:mt-16">
//             <h3 className="text-zinc-400 text-sm sm:text-base">
//               Kepada Yth.
//             </h3>

//             <h3 className="text-red-600 font-bold text-2xl sm:text-3xl md:text-4xl">
//               {nama}
//             </h3>
//           </div>

//           {/* CTA */}
//           <Link to="/undangan">
//           <div className="flex justify-center mt-10 md:mt-14">
//             <button
//               className="
//                 px-6 py-3
//                 md:px-10 md:py-4
//                 border border-zinc-500
//                 uppercase
//                 tracking-wider
//                 text-sm md:text-base
//                 transition-all duration-300
//                 hover:bg-white
//                 hover:text-black
//               "
//             >
//               Buka Undangan
//             </button>
//           </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// }

// export default Pertama;