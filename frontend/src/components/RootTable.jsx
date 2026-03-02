import { Link } from "react-router-dom";

export default function RootTable({ roots }) {

  if (!roots || roots.length === 0) {
    return (
      <p className="text-gray-400 text-center py-6">
        No roots found.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="min-w-full bg-[#1a1a1a] rounded-xl shadow-2xl border border-[#2a2a2a] text-gray-300">
        
        {/* Table Header */}
        <thead className="bg-[#111] text-[#D4AF37] uppercase text-sm tracking-wide">
          <tr>
            <th className="py-4 px-6 text-left">Root</th>
            <th className="py-4 px-6 text-left">Lemmas</th>
            <th className="py-4 px-6 text-center">Frequency</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {roots.map((r, index) => (
            <tr
              key={index}
              className="border-b border-[#2a2a2a] hover:bg-[#111] transition"
            >
              {/* Root Column */}
              <td className="py-4 px-6">
                <Link
                  to={`/root/${r.root}`}
                  state={{ root: r }}
                  className="text-[#D4AF37] font-semibold hover:underline"
                >
                  {r.root}
                </Link>
              </td>

              {/* Lemmas Column */}
              <td className="py-4 px-6 text-gray-400">
                {r.lemmas && r.lemmas.length > 0
                  ? r.lemmas.join(", ")
                  : "—"}
              </td>

              {/* Frequency Column */}
              <td className="py-4 px-6 text-center text-white font-medium">
                {r.total_frequency}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}