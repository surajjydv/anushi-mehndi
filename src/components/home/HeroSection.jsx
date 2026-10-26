import Image from "next/image";
import Link from "next/link";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";
import { ShieldCheck, MapPin, MessageCircle, Star, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 overflow-hidden">
      {/* Organic glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-champagne-200/35 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-henna-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Larger, crisp headline & primary actions */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-stone-900 leading-[1.18]">
              Authentic Bridal Artistry,{" "}
              <span className="italic text-henna-800 font-medium block sm:inline">
                crafted with heritage precision.
              </span>
            </h1>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-xl">
              From signature couple portrait sketches and royal Marwari jaal to budget-friendly floral henna starting at just{" "}
              <strong className="text-stone-900 font-bold">₹600</strong> for both hands. Doorstep service across Lucknow with guaranteed deep, dark natural stain.
            </p>

            {/* Quick Action CTA Bar with larger buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center justify-center bg-henna-700 hover:bg-henna-800 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-xl shadow-subtle transition-all duration-200"
              >
                <span>Calculate Price & Book</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <a
                href={`https://wa.me/91${BUSINESS_CONFIG.phone}?text=${encodeURIComponent("Hi Anushka, I would like to check mehndi availability in Lucknow.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base px-5 py-3 rounded-xl shadow-subtle transition-all duration-200 gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/designs"
                className="inline-flex items-center justify-center bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-semibold text-sm sm:text-base px-5 py-3 rounded-xl shadow-sm transition-all"
              >
                View Collections
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-stone-200 max-w-lg text-xs sm:text-sm text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Triple Filtered Sojat</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-henna-700 flex-shrink-0" />
                <span>Doorstep in Lucknow</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-500 fill-amber-400 flex-shrink-0" />
                <span>500+ Happy Brides</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Large Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lift ring-1 ring-stone-900/10 group">
                <Image
                  src="/images/hero_bridal_mehndi.jpg"
                  alt="Royal Bridal Mehndi Artistry"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 440px"
                  priority
                />
                
                {/* Floating Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-stone-950/85 backdrop-blur-md text-white p-4 rounded-xl border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-champagne-200 text-sm sm:text-base">Royal Bridal Signature</p>
                    <p className="text-xs text-stone-300">Intricate elbow-length traditional henna</p>
                  </div>
                  <span className="font-serif font-bold text-champagne-300 text-base sm:text-lg">₹6,500</span>
                </div>
              </div>

              {/* Secondary Floating Thumbnail */}
              <div className="absolute -top-4 -right-4 sm:-right-5 w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden shadow-lift ring-4 ring-white hidden sm:block">
                <Image
                  src="/images/figure_mehndi.jpg"
                  alt="Couple Portrait Detail"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
