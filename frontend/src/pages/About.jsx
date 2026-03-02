import { FaServer, FaReact, FaBrain, FaCode } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-black bg-black/80">

      <h1 className="text-4xl font-bold mb-6">
        <span className="text-[#D4AF37]">About</span> ArabicMorphEngine
      </h1>

      <p className="text-gray-400 text-lg leading-relaxed mb-10">
        ArabicMorphEngine is an NLP-based research system designed to perform 
        advanced Arabic morphological analysis including root extraction, 
        POS tagging, and pattern detection for academic and linguistic research.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-[#1a1a1a] shadow-xl rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#D4AF37] transition">
          <FaServer className="text-[#D4AF37] text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2 text-[#f5d76e]">Backend</h3>
          <p className="text-gray-400">
            FastAPI for high-performance NLP API services.
          </p>
        </div>

        <div className="bg-[#1a1a1a] shadow-xl rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#D4AF37] transition">
          <FaReact className="text-[#D4AF37] text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2 text-[#f5d76e]">Frontend</h3>
          <p className="text-gray-400">
            React + Tailwind CSS for responsive modern UI.
          </p>
        </div>

        <div className="bg-[#1a1a1a] shadow-xl rounded-2xl p-6 border border-[#2a2a2a] hover:border-[#D4AF37] transition">
          <FaBrain className="text-[#D4AF37] text-3xl mb-4" />
          <h3 className="font-bold text-lg mb-2 text-[#f5d76e]">NLP Library</h3>
          <p className="text-gray-400">
            CAMeL Tools for Arabic morphological processing.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-[#111] rounded-2xl p-8 border border-[#2a2a2a]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-[#D4AF37]">
          <FaCode />
          Research Purpose
        </h2>

        <p className="text-gray-400 leading-relaxed">
          This system is designed for computational linguistics researchers,
          students, and developers who require structured Arabic morphological
          analysis with exportable results and visualization support.
        </p>
      </div>

    </div>
  );
}