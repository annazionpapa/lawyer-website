"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "사무소 소개" },
  { href: "/practice", label: "업무분야" },
  { href: "/team", label: "구성원 소개" },
  { href: "/cases", label: "성공사례" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
              <svg
                className="w-6 h-6 text-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  isScrolled ? "text-navy" : "text-white"
                }`}
              >
                정의법률사무소
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? isScrolled
                      ? "text-navy bg-navy/5"
                      : "text-gold"
                    : isScrolled
                    ? "text-gray-600 hover:text-navy hover:bg-gray-50"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gold text-white text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors"
            >
              무료 상담신청
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-2 bg-navy"
                    : isScrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0"
                    : isScrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
              <span
                className={`w-full h-0.5 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-2 bg-navy"
                    : isScrolled
                    ? "bg-navy"
                    : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 bg-white shadow-xl" : "max-h-0"
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-navy bg-navy/5"
                  : "text-gray-600 hover:text-navy hover:bg-gray-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 px-4 py-3 bg-gold text-white text-center text-sm font-semibold rounded-lg"
          >
            무료 상담신청
          </Link>
        </nav>
      </div>
    </header>
  );
}
