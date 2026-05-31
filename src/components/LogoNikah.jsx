import logonikah from "../assets/Nikah.png";

export default function LogoNikah() {
  return (
    <img
      src={logonikah}
      alt="NikahFlix"
      className="
        w-[180px]
        sm:w-[240px]
        md:w-[320px]
        h-auto
        object-contain
        drop-shadow-[0_0_25px_rgba(229,9,20,.7)]
      "
    />
  );
}