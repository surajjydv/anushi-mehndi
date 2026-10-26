import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/home/HeroSection";
import HighlightsStrip from "@/components/home/HighlightsStrip";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Check, Tag } from "lucide-react";
import { MEHNDI_SERVICES } from "@/constants/servicesData";

export default function HomePage() {
  const featured = MEHNDI_SERVICES.slice(0, 3);

  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Highlights Strip */}
        <HighlightsStrip />

        {/* Featured Collections Teaser Section */}
        <section className="py-12 sm:py-16 bg-surface-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold tracking-wider text-henna-800 uppercase block mb-1">
                  Featured Artistry
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
                  Signature Bridal & Festive Collections
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-1.5 max-w-xl">
                  Handcrafted with pure organic Sojat henna. Explore our top requested bridal & budget designs.
                </p>
              </div>

              <Link
                href="/designs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-henna-800 hover:text-henna-950 transition-colors"
              >
                <span>View All Collections</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between hover:shadow-lift hover:border-henna-300 transition-all duration-300 group"
                >
                  <div className="relative aspect-[16/11] bg-stone-100 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 380px"
                    />
                    <div className="absolute top-3 left-3 bg-stone-950/80 backdrop-blur-md text-champagne-200 text-xs font-semibold px-2.5 py-1 rounded-md">
                      {item.badge}
                    </div>
                    <div className="absolute bottom-3 right-3 bg-white/95 text-stone-900 text-sm sm:text-base font-serif font-bold px-3 py-1 rounded-lg shadow-sm border border-stone-100">
                      ₹{item.price.toLocaleString("en-IN")}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-henna-800 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-stone-600 text-sm mt-1.5 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <Link
                        href={`/book?service=${item.id}`}
                        className="text-xs sm:text-sm font-bold text-henna-800 hover:text-henna-950 flex items-center gap-1"
                      >
                        <span>Book Slot</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href="/designs"
                        className="text-xs font-semibold text-stone-500 hover:text-stone-800"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Festive Deals Teaser Banner */}
        <section className="bg-henna-950 text-white py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-left">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne-300 bg-henna-900/90 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                  <Tag className="w-3.5 h-3.5" />
                  Seasonal Offers
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-champagne-100">
                  Karwa Chauth & Diwali Festive Slots
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2.5 leading-relaxed">
                  Save up to ₹1,000 on group bookings and royal bridal packages. Special pocket discount code <strong>BUDGET50</strong> for everyday henna.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/offers"
                  className="bg-champagne-100 hover:bg-champagne-200 text-champagne-950 font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all"
                >
                  View Promo Codes
                </Link>
                <Link
                  href="/book"
                  className="bg-henna-800 hover:bg-henna-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl border border-henna-600 transition-all"
                >
                  Calculate Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About & Trust Section */}
        <WhyChooseUs />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}
