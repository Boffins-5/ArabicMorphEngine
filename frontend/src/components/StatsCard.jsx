import { FaChartBar } from "react-icons/fa";

export default function StatsCard({ title, value }) {
  return (
    <div className="bg-[#1a1a1a] rounded-2xl shadow-2xl p-6 border border-[#2a2a2a] hover:border-[#D4AF37] transition text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-gray-400 text-xs uppercase tracking-widest">
          {title}
        </h3>
        <FaChartBar className="text-[#D4AF37]" />
      </div>

      <p className="text-3xl font-bold text-[#D4AF37] mt-4">
        {value}
      </p>
    </div>
  );
}