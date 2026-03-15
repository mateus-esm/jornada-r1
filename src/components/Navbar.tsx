"use client";

import { useState } from "react";

const navLinks = [
  { label: "A Jornada", href: "#jornada" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Mentor", href: "#mentor" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Aplicação", href: "#aplicacao" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black">
      {/* Announcement bar */}
      <div className="border-b border-[#1a1a1a] py-2 px-5 flex items-center justify-center gap-4 max-md:hidden">
        <span className="text-white text-sm font-medium">
          Vagas limitadas para a próxima turma da Jornada do R1
        </span>
        <a
          href="#aplicacao"
          className="text-white text-sm font-semibold border border-[#FF5319] rounded-lg px-4 py-2 hover:bg-[rgba(255,83,25,0.15)] transition-colors"
        >
          Garantir minha vaga
        </a>
      </div>

      {/* Main navbar */}
      <div className="max-w-[1200px] mx-auto px-4 h-[70px] flex items-center justify-between">
        <a href="#" className="text-white font-bold text-xl tracking-tight">
          <span className="text-[#E8630C]">JORNADA</span> DO R1
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#7A7A7A] text-sm font-semibold hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#aplicacao"
          className="hidden md:inline-flex bg-[#E8630C] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#c9530a] transition-colors"
        >
          Começar agora
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-black border-t border-[#1a1a1a] px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#7A7A7A] text-base font-semibold hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#aplicacao"
            onClick={() => setMenuOpen(false)}
            className="bg-[#E8630C] text-white text-base font-semibold px-5 py-3 rounded-lg text-center hover:bg-[#c9530a] transition-colors"
          >
            Começar agora
          </a>
        </nav>
      )}
    </header>
  );
}
