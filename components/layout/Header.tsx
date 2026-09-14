"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-premium backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="#home" className="flex items-center gap-2">
            <span
              className={`font-display text-lg font-bold tracking-tight sm:text-xl ${
                isScrolled ? "text-navy-900" : "text-white"
              }`}
            >
              SDLC <span className="text-azure-500">Tech Academy</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-navy-600 hover:text-azure-600"
                    : "text-navy-100 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={siteConfig.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold ${
                isScrolled ? "text-navy-900" : "text-white"
              }`}
            >
              <Phone className="h-4 w-4 text-azure-500" />
              {siteConfig.phone}
            </a>
            <Link
              href="#contact"
              className="rounded-full bg-azure-500 px-5 py-2.5 text-sm font-semibold text-white shadow-premium transition-colors hover:bg-azure-400"
            >
              Talk to an Expert
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className={`inline-flex items-center justify-center rounded-full p-2 lg:hidden ${
              isScrolled ? "text-navy-900" : "text-white"
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden bg-white shadow-premium-lg lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 hover:text-azure-600"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3 border-t border-navy-100 pt-4">
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-center gap-2 px-3 text-sm font-semibold text-navy-900"
                >
                  <Phone className="h-4 w-4 text-azure-500" />
                  {siteConfig.phone}
                </a>
                <Link
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="mx-3 rounded-full bg-azure-500 px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Talk to an Expert
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
