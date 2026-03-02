import { useState } from "react";
import { analyzeText, exportPDF, exportWord } from "../api";
import RootTable from "../components/RootTable";
import StatsCard from "../components/StatsCard";
import { FaFilePdf, FaFileWord, FaSearch } from "react-icons/fa";
import bgImage from "../assets/bg.jpg";

export default function Analyze() {
  const [text, setText] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const result = await analyzeText(text);
      console.log("RAW RESULT:", result);

      // Convert roots object → array & sort by frequency
      const rootsArray = Object.values(result.roots || {})
        .sort((a, b) => b.total_frequency - a.total_frequency);

      setData({
        book_stats: result.book_stats,
        roots: rootsArray,
      });

    } catch (error) {
      console.error("Analyze Error:", error);
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen bg-[#231f20] overflow-x-hidden text-white">

      {/* Bottom Right Background Image */}
      <img
        src={bgImage}
        alt="background"
        className="absolute bottom-0 right-0 w-[420px] md:w-[420px] object-contain pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-10">

        {/* Page Heading */}
        <h1 className="text-2xl md:text-4xl font-bold mb-8 tracking-wide">
          <span className="text-[#D4AF37]">Text</span> Analysis
        </h1>

        {/* Input Section */}
        <div className="bg-[#1a1a1a] p-5 rounded-lg shadow-lg border border-[#2a2a2a]">
          <textarea
            className="w-full bg-[#111] border border-[#2a2a2a] rounded-md p-4 text-gray-300 focus:ring-2 focus:ring-[#D4AF37] outline-none"
            rows="5"
            placeholder="Enter Arabic text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 bg-[#D4AF37] hover:bg-[#c9a227] transition text-black font-semibold px-6 py-2 rounded-md flex items-center gap-2"
          >
            <FaSearch /> Analyze
          </button>

          {loading && (
            <p className="mt-3 text-[#D4AF37] font-medium text-sm">
              Processing...
            </p>
          )}
        </div>

        {data && (
          <>
            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              <StatsCard title="Tokens" value={data.book_stats.total_tokens} />
              <StatsCard title="Unique Words" value={data.book_stats.unique_words} />
              <StatsCard title="Unique Roots" value={data.book_stats.unique_roots} />
              <StatsCard title="Time (s)" value={data.book_stats.processing_time_sec} />
            </div>

            {/* Export Buttons */}
            <div className="mt-6 flex flex-wrap gap-4">
              <button
                onClick={exportPDF}
                className="bg-[#b91c1c] hover:bg-red-700 text-white px-5 py-2 rounded-md flex items-center gap-2"
              >
                <FaFilePdf /> Export PDF
              </button>

              <button
                onClick={exportWord}
                className="bg-[#1a1a1a] border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black px-5 py-2 rounded-md flex items-center gap-2"
              >
                <FaFileWord /> Export Word
              </button>
            </div>

            {/* Root Table */}
            <div className="bg-[#1a1a1a] mt-6 p-5 rounded-lg shadow-lg border border-[#2a2a2a]">
              <RootTable roots={data.roots} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}