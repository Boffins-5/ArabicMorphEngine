export default function RootTree({ words }) {
  if (!words?.length) return null;

  return (
    <div className="mt-12 text-white">
      <h2 className="text-2xl font-bold mb-8 text-[#D4AF37] tracking-wide">
        Derived Forms
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {words.map((w, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] shadow-xl rounded-xl p-6 border border-[#2a2a2a] hover:border-[#D4AF37] transition"
          >
            <p className="text-xl font-bold text-[#D4AF37] tracking-wider">
              {w.word}
            </p>

            <div className="mt-4 text-gray-400 text-sm space-y-2">
              <p><span className="text-[#f5d76e] font-semibold">POS:</span> {w.pos}</p>
              <p><span className="text-[#f5d76e] font-semibold">Pattern:</span> {w.pattern}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}