import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import bgImage from "../assets/bg.jpg";

export default function Landing() {
  return (
    <div className="relative h-screen bg-[#231f20] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Bottom Right Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute bottom-0 right-0 w-[400px] md:w-[450px] object-contain pointer-events-none select-none"
      />

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          <span className="text-[#D4AF37]">Arabic</span> Morphological Research Engine
        </h1>

        <p className="mb-8 text-lg text-gray-300 leading-relaxed">
          Analyze Arabic text, extract roots, detect patterns,
          POS tagging and export professional research reports.
        </p>

        <Link
          to="/analyze"
          className="bg-[#D4AF37] hover:bg-[#c9a227] transition text-black font-semibold px-8 py-3 rounded-full flex items-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          Start Analysis <FaArrowRight />
        </Link>
      </div>

    </div>
  );
}