import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navba() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-950 text-white font-extrabold">
      <div className="flex justify-between items-center container mx-auto px-3 py-2">
        {/* Logo */}
        <div className="w-[40px] bg-amber-50 rounded-full h-[40px]">
          <img src="./SE.png" alt="Logo" className="mt-0.5" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#address">Address</a>
        </div>

        {/* Mobile Burger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden text-2xl focus:outline-none"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden flex flex-col items-center space-y-3 pb-4">
          <a href="#home" onClick={() => setOpen(false)}>Home</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a href="#address" onClick={() => setOpen(false)}>Address</a>
        </div>
      )}
    </nav>
  );
}
