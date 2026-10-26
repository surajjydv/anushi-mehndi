import Image from "next/image";
import Link from "next/link";
import { MAKEUP_SERVICES } from "@/constants/servicesData";
import { Check, ArrowRight } from "lucide-react";

export default function MakeupStudio() {
  return (
    <div className="py-8 sm:py-12 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-left max-w-2xl mb-8">
          <span className="text-xs font-bold tracking-wider text-rose-700 uppercase block mb-1">
            Sub-Department & Bridal Makeovers
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Bridal Makeup Studio
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Professional HD and luxury airbrush makeovers tailored for Lucknow weddings, engagements, and receptions.
          </p>
        </div>

        {/* Makeup Services Grid with readable cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MAKEUP_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lift hover:border-rose-300 transition-all duration-300"
            >
              <div>
                <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-stone-950/80 backdrop-blur-md text-rose-200 text-xs font-semibold px-2.5 py-1 rounded-md border border-white/10">
                      {service.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-stone-900 text-sm sm:text-base font-serif font-bold px-3 py-1 rounded-lg shadow-sm border border-stone-100">
                    ₹{service.price.toLocaleString("en-IN")}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs font-medium text-stone-400 mb-1.5">
                    Estimated Time: {service.time}
                  </div>
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-stone-900 leading-snug">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 border-t border-stone-100 pt-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-stone-600">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/book?service=${service.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white font-semibold text-sm py-2.5 px-4 rounded-xl shadow-subtle transition-all"
                >
                  <span>Book in Calculator</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
