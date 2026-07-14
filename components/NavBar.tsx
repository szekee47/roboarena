"use client";

import { useState } from "react";
import { navLinks, navRegisterCta, siteMeta } from "@/lib/event-config";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-2 font-heading text-lg font-bold tracking-wide text-white">
          <img
            src="/cr8-logo.jpg"
            alt="CR8 Setia Alam logo"
            className="h-9 w-9 rounded-full object-cover"
          />
          <span>
            ROBO<span className="text-electric"> ARENA</span> 2026
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-sm font-medium uppercase tracking-wider text-slate-300 transition-colors hover:text-electric"
            >
              {link.label}
            </a>
          ))}
          <a href={navRegisterCta.href} className="btn-primary !px-5 !py-2 text-xs">
            {navRegisterCta.label}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-navy-950 md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded px-2 py-3 font-heading text-sm font-medium uppercase tracking-wider text-slate-300 hover:bg-white/5 hover:text-electric"
              >
                {link.label}
              </a>
            ))}
            <a
              href={navRegisterCta.href}
              onClick={closeMenu}
              className="btn-primary mt-2 w-full"
            >
              {navRegisterCta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
