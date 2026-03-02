import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
      <nav className="bg-[#0f0f0f]/95 backdrop-blur-md text-white shadow-lg border-b border-[#1f1f1f] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="font-bold text-xl tracking-wide">
            <span className="text-[#D4AF37]">Arabic</span>
            <span className="text-white">MorphEngine</span>
          </h1>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#D4AF37]"
            onClick={() => setOpen(true)}
          >
            <FaBars size={22} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-gray-300">
            <Link to="/" className="flex items-center gap-2 hover:text-[#D4AF37] transition">
              <FaHome /> Home
            </Link>

            <Link to="/analyze" className="flex items-center gap-2 hover:text-[#D4AF37] transition">
              <FaSearch /> Analyze
            </Link>

            <Link to="/about" className="flex items-center gap-2 hover:text-[#D4AF37] transition">
              <FaInfoCircle /> About
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔥 FULL SCREEN MOBILE OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-[#231f20] z-50 flex flex-col items-center justify-center text-white">

          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-[#D4AF37] text-2xl"
            onClick={() => setOpen(false)}
          >
            <FaTimes />
          </button>

          <div className="space-y-8 text-2xl tracking-wide">
            <Link to="/" onClick={() => setOpen(false)} className="block hover:text-[#D4AF37] transition">
              Home
            </Link>

            <Link to="/analyze" onClick={() => setOpen(false)} className="block hover:text-[#D4AF37] transition">
              Analyze
            </Link>

            <Link to="/about" onClick={() => setOpen(false)} className="block hover:text-[#D4AF37] transition">
              About
            </Link>
          </div>
        </div>
      )}
    </>
  );
}