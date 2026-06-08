import { useNavigate } from "react-router-dom";
import introVideo from "../../assets/Musik/Netflix.mp4";

export default function IntroVideo() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black">
      <video
        autoPlay
        playsInline
        muted
        onEnded={() => navigate("/undangan")}
        className="
          w-full
          h-full
          object-cover
        "
      >
        <source src={introVideo} type="video/mp4" />
      </video>
    </div>
  );
}