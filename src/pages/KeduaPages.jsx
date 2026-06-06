import HeroWedding from "../components/Awal/HeroWedding";
import Navigation from "../components/Navigation";
import Pengantin from "../components/Bridge/Pengantin";
import HariH from "../components/MenujuHari/HariH";
import AkadSection from "../components/Akad/AkadSection";
import Gallery from "../components/Gallery/Gallery";
import PesanSection from "../components/Pesan/PesanSection";





export default function KeduaPages() {
    
  return (
    <>
      <HeroWedding/>
      {/* <Waktu/> */}
      <Navigation/>
      <Pengantin/>
      <HariH/>
      <AkadSection/>

      <Gallery/>
      <main
      className="
        min-h-screen
        
        px-4
        py-10

        md:px-6
        lg:px-8
      "
    >
      <PesanSection />
    </main>

    </>
  )
}
