import { useParams, useLocation } from "react-router-dom";
import RootTree from "../components/RootTree";
import { FaLanguage, FaHashtag } from "react-icons/fa";

export default function RootDetail() {
  const { rootId } = useParams();
  const location = useLocation();
  const rootData = location.state?.root;

  if (!rootData) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-lg">No data available for this root.</p>
      </div>
    );
  }

  const letters = rootId.split("");

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-white">

      {/* Root Header */}
      <div className="bg-[#1a1a1a]/90 backdrop-blur-md shadow-2xl rounded-2xl p-8 border border-[#2a2a2a] mb-10">

        <h1 className="text-4xl font-bold mb-8 text-center tracking-widest">
          {letters.map((l, i) => (
            <span key={i} className="mx-2 text-[#D4AF37]">
              {l}
            </span>
          ))}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">

          <div className="bg-[#111]/80 p-6 rounded-xl border border-[#2a2a2a] hover:border-[#D4AF37] transition">
            <FaLanguage className="mx-auto text-2xl text-[#D4AF37] mb-3" />
            <h3 className="font-semibold text-[#f5d76e]">Meaning</h3>
            <p className="text-gray-400 mt-2">
              {rootData.meaning}
            </p>
          </div>

          <div className="bg-[#111]/80 p-6 rounded-xl border border-[#2a2a2a] hover:border-[#D4AF37] transition">
            <FaHashtag className="mx-auto text-2xl text-[#D4AF37] mb-3" />
            <h3 className="font-semibold text-[#f5d76e]">Frequency</h3>
            <p className="text-gray-300 mt-2 text-xl font-bold">
              {rootData.frequency}
            </p>
          </div>

        </div>
      </div>

      <RootTree words={rootData.words} />
    </div>
  );
}