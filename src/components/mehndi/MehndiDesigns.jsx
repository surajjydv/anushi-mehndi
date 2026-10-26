"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MEHNDI_SERVICES } from "@/constants/servicesData";
import { Clock, Check, ArrowRight } from "lucide-react";

export default function MehndiDesigns() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "bridal", label: "Signature Bridal" },
    { id: "budget", label: "Budget Henna (from ₹299)" },
    { id: "festive", label: "Festive Specials" },
    { id: "fusion", label: "Arabic & Fusion" },
  ];

  const filteredServices = activeCategory === "all"
    ? MEHNDI_SERVICES
    : MEHNDI_SERVICES.filter((s) => s.category === activeCategory);

  return (
    <div className="py-8 sm:py-12 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold tracking-wider text-henna-800 uppercase block mb-1">
              Curated Henna Portfolio
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Mehndi Collections & Artistry
            </h1>
            <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-xl">
              From everyday pooja designs to royal wedding heirlooms, each stroke is drawn with 100% natural chemical-free Sojat henna.
            </p>
          </div>

          {/* Filter Tabs with readable font sizes */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-sm">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl font-medium transition-all text-xs sm:text-sm ${
                  activeCategory === cat.id
                    ? "bg-stone-900 text-white shadow-subtle font-semibold"
                    : "bg-white text-stone-700 hover:text-stone-900 border border-stone-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Non-Generic Grid with clear readability */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col hover:border-henna-400 hover:shadow-lift transition-all duration-300 group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 380px"
                />
                
                {/* Badge Overlay */}
                <div className="absolute top-3 left-3">
                  <span className="bg-stone-950/80 backdrop-blur-md text-champagne-200 text-xs font-semibold px-2.5 py-1 rounded-lg border border-white/10">
                    {service.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm text-stone-900 text-sm sm:text-base font-serif font-bold px-3 py-1 rounded-lg shadow-sm border border-stone-200">
                  ₹{service.price.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {service.time}
                    </span>
                    <span>•</span>
                    <span className="capitalize">{service.category} Collection</span>
                  </div>

                  <h2 className="font-serif font-bold text-lg sm:text-xl text-stone-900 leading-snug group-hover:text-henna-800 transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/book?service=${service.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-henna-700 hover:bg-henna-800 text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-subtle transition-all"
                  >
                    <span>Book or Calculate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
