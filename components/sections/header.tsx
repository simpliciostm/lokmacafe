"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-sand-100/25 bg-olive-950/70 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link href="#home" className="font-display text-2xl tracking-wide text-sand-50">
          Noura Atelier
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.1em] text-sand-50/90 transition-colors duration-300 hover:text-gold-300"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="https://wa.me/5514990000000"
            className="rounded-full border border-gold-300/60 px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-gold-300 transition-all duration-300 hover:bg-gold-300 hover:text-olive-950"
          >
            Reservar mesa
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-100/30 text-sand-50 lg:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] bg-olive-950/95 px-5 pb-12 pt-8 backdrop-blur-2xl lg:hidden"
          >
            <Container className="flex h-full flex-col justify-between">
              <div className="space-y-5">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      className="block border-b border-sand-50/10 py-4 text-2xl font-display text-sand-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                href="https://wa.me/5514990000000"
                className="inline-flex w-full items-center justify-center rounded-full bg-gold-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-olive-950"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar via WhatsApp
              </Link>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
