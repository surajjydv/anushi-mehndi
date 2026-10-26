"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Sparkles, Tag, Calculator, HeartHandshake } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const items = [
    { href: "/", label: "Home", icon: Home },
    { href: "/designs", label: "Designs", icon: Sparkles },
    { href: "/offers", label: "Offers", icon: Tag },
    { href: "/book", label: "Book", icon: Calculator },
    { href: "/makeup", label: "Makeup", icon: HeartHandshake },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-light/95 backdrop-blur-lg border-t border-stone-200/90 shadow-[0_-3px_12px_rgba(0,0,0,0.06)]"
    >
      <div className="grid grid-cols-5 h-16 max-w-md mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 transition-colors relative min-h-[48px] ${
                isActive ? "text-henna-800 font-bold" : "text-stone-500 hover:text-stone-800"
              }`}
            >
              {isActive && (
                <span className="absolute top-0 w-10 h-0.5 bg-henna-700 rounded-b" />
              )}
              <Icon className={`w-5 h-5 ${isActive ? "text-henna-700 stroke-[2.2]" : "stroke-[1.8]"}`} />
              <span className="text-xs tracking-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
