"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work-with-me", label: "Work With Me" },
  { href: "/beneath-the-surface", label: "Beneath the Surface" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf8f5]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span
            className={`font-[family-name:var(--font-cormorant)] text-xl font-light tracking-wider transition-colors duration-300 ${
              scrolled ? "text-[#1a3410]" : "text-white"
            }`}
          >
            Lindsey Lang
          </span>
          <span
            className={`font-[family-name:var(--font-inter)] text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
              scrolled ? "text-[#6b3fa0]" : "text-white/80"
            }`}
          >
            Life Coaching
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`font-[family-name:var(--font-inter)] text-sm tracking-wide transition-colors duration-200 relative group ${
                    scrolled
                      ? active
                        ? "text-[#4a1a7a]"
                        : "text-[#1a1a1a] hover:text-[#4a1a7a]"
                      : active
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    } ${scrolled ? "bg-[#6b3fa0]" : "bg-white"}`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/work-with-me"
          className={`hidden lg:inline-flex items-center px-6 py-2.5 text-sm tracking-widest uppercase font-[family-name:var(--font-inter)] transition-all duration-300 border ${
            scrolled
              ? "border-[#4a1a7a] text-[#4a1a7a] hover:bg-[#4a1a7a] hover:text-white"
              : "border-white text-white hover:bg-white hover:text-[#4a1a7a]"
          }`}
        >
          Book a Call
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-px w-6 transition-all duration-300 origin-center ${
              scrolled ? "bg-[#1a3410]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-[#1a3410]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 origin-center ${
              scrolled ? "bg-[#1a3410]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#faf8f5] border-t border-[#e8e0d5] overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map(({ href, label }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`font-[family-name:var(--font-cormorant)] text-2xl font-light transition-colors ${
                        active ? "text-[#4a1a7a]" : "text-[#1a3410] hover:text-[#4a1a7a]"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
              <li className="pt-2">
                <Link
                  href="/work-with-me"
                  className="inline-block px-8 py-3 bg-[#4a1a7a] text-white text-sm tracking-widest uppercase font-[family-name:var(--font-inter)]"
                >
                  Book a Call
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
