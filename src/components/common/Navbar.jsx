"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";
import { MessageCircle, Instagram } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/designs", label: "Designs" },
    { href: "/offers", label: "Offers" },
    { href: "/book", label: "Pricing & Book" },
    { href: "/makeup", label: "Makeup Studio" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface-light/95 backdrop-blur-md border-b border-stone-200/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3 lg:gap-4">
        
        {/* Brand - strictly single line, no text wrapping */}
        <Link href="/" className="flex items-center gap-2.5 group text-left flex-shrink-0 whitespace-nowrap">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-1.5 ring-champagne-300 shadow-subtle flex-shrink-0">
            <Image
              src="/icons/icon-192.png"
              alt="Anushka Yadav"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 leading-tight">
              <span className="font-serif font-bold text-base sm:text-lg text-henna-900 group-hover:text-henna-700 transition-colors whitespace-nowrap">
                Anushka Yadav
              </span>
              <span className="text-[11px] font-semibold bg-champagne-100 text-champagne-900 px-1.5 py-0.2 rounded border border-champagne-200 hidden sm:inline-block whitespace-nowrap">
                Lucknow
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-500 font-sans tracking-wide leading-tight whitespace-nowrap">
              Bridal & Festive Henna
            </p>
          </div>
        </Link>

        {/* Desktop Navigation Links - strictly single line and balanced spacing */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 flex-shrink-0">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm px-3 py-1.5 rounded-lg transition-all whitespace-nowrap leading-none ${
                  isActive
                    ? "text-henna-950 bg-henna-100/80 font-bold"
                    : "text-stone-700 hover:text-stone-950 hover:bg-stone-100 font-medium"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs - strictly single line */}
        <div className="flex items-center gap-2 flex-shrink-0 whitespace-nowrap">
          <a
            href={BUSINESS_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-lg text-stone-700 hover:text-rose-600 hover:bg-rose-50 transition-colors border border-stone-200"
          >
            <Instagram className="w-4 h-4" />
          </a>

          <Link
            href="/book"
            className="hidden md:inline-flex items-center justify-center bg-henna-700 hover:bg-henna-800 text-white text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-lg shadow-subtle transition-all whitespace-nowrap leading-tight"
          >
            Book Slot
          </Link>

          <a
            href={BUSINESS_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-lg shadow-subtle font-medium transition-all whitespace-nowrap leading-tight"
          >
            <MessageCircle className="w-4 h-4 flex-shrink-0" />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </header>
  );
}
