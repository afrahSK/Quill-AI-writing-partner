import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["Features", "Pricing", "FAQ"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-12 transition-all duration-500
      ${scrolled ? "py-4 bg-[#080C14]/90 backdrop-blur-md border-b border-[#1E2D40]" : "py-7 bg-transparent"}`}
    >
      {/* Logo */}
      <div className="font-display text-xl font-semibold tracking-tight text-[#E8EEF7] flex items-center gap-2">
        <span className="text-[#4F8EF7]">✦</span> Quill
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-10 list-none">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="font-body text-sm text-[#8B9BB4] hover:text-[#E8EEF7] transition-colors duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="#"
          className="font-body text-sm text-[#8B9BB4] hover:text-[#E8EEF7] transition-colors duration-300"
        >
          Log in
        </a>
        <a
          href="#startfree"
          className="font-body text-sm px-5 py-2.5 bg-[#4F8EF7] text-white rounded-full hover:bg-[#3a7ae8] transition-all duration-300"
        >
          Start Free →
        </a>
      </div>

      {/* Hamburger */}
      <div
        className="md:hidden flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="w-6 h-px bg-[#E8EEF7] block" />
        <span className="w-6 h-px bg-[#E8EEF7] block" />
        <span className="w-6 h-px bg-[#E8EEF7] block" />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#080C14] flex flex-col justify-center items-center gap-10 z-40">
          <div
            className="absolute top-8 right-12 text-4xl cursor-pointer text-[#8B9BB4]"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </div>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-display text-4xl text-[#E8EEF7] hover:text-[#4F8EF7] transition-colors duration-300 no-underline"
            >
              {link}
            </a>
          ))}
          <a
            href="#pricing"
            className="font-body text-sm px-8 py-3 bg-[#4F8EF7] text-white rounded-full mt-4"
          >
            Start Free →
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;