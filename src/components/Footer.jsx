import { FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative my-10 mx-3 ">
      {/* Animated Border */}
  

      {/* Content */}
      <div
        className="
          relative
          text-center
          py-6
          px-5
          text-white
          rounded-xl
         
          
        
        "
      >
         <h1 data-aos="fade-up-right" className="text-sm font-playfair font-semibold">
          Made By
        </h1>
        <h1 data-aos="fade-down-left" className="text-sm font-playfair font-semibold">
          Awang Darmawan
        </h1>

        <a
        data-aos="flip-left"
          href="https://wa.me/6283125307355"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-green-400 transition font-playfair font-semibold"
        >
          <FaWhatsapp className="text-2xl my-1 " />
          +6283125307355
        </a>

        <a
        data-aos="flip-left"
          href="https://instagram.com/awng_drmwn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 hover:text-red-700 hover:font-bold transition font-playfair font-semibold"
        >
          <FaInstagram className="text-2xl my-1" />
          @awng_drmwn
        </a>
      </div>
    </div>
  );
}

export default Footer;