"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UtensilsIcon } from "./icons/CustomIcons";
import Button from "./ui/Button";

const menuItems = ["STRONA GŁÓWNA", "O NAS", "MENU", "WIDOK", "WYDARZENIA", "KONTAKT"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/92 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-3 lg:px-6">
        <Link href="/" className="relative h-[92px] w-[142px] shrink-0">
          <Image src="/logo.svg" alt="Logo Ręczna Robota 2.0 Wodnik" fill className="object-contain" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`marker-nav-link text-[11px] font-semibold tracking-[0.1em] text-navy-dark transition-colors duration-300 hover:text-red-accent ${
                index === 0 ? "marker-active" : ""
              }`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <Button href="#" className="hidden bg-navy-dark text-white lg:inline-flex">
          <UtensilsIcon className="mr-2 size-5" />
          ZOBACZ MENU
        </Button>

        <button
          aria-label="Otwórz menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-navy-dark text-navy-dark lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      <div
        className={`fixed right-0 top-0 h-full w-[80%] max-w-[360px] bg-white p-7 shadow-2xl transition-transform duration-300 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          aria-label="Zamknij menu"
          className="mb-7 inline-flex rounded-md border border-gray-light px-3 py-2 text-sm font-semibold text-navy-dark"
          onClick={() => setIsMenuOpen(false)}
        >
          Zamknij
        </button>
        <nav className="flex flex-col gap-5">
          {menuItems.map((item, index) => (
            <Link
              key={item}
              href="#"
              className={`text-sm font-semibold tracking-[0.08em] text-navy-dark ${
                index === 0 ? "text-red-accent" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Button href="#" className="mt-3 bg-navy-dark text-white">
            <UtensilsIcon className="mr-2 size-5" />
            ZOBACZ MENU
          </Button>
        </nav>
      </div>
    </header>
  );
}
