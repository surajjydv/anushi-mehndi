import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

export default function HighlightsStrip() {
  const highlights = [
    {
      id: "budget-both-hands",
      tag: "Everyday Henna",
      title: "Both Hands Floral",
      price: "₹600",
      desc: "Front palms floral & bel art with rich dark stain",
    },
    {
      id: "bridal-traditional",
      tag: "Full Bridal",
      title: "Royal Elbow Henna",
      price: "₹6,500",
      desc: "Elbow-length with Kalash, Shehnai & peacock motifs",
    },
    {
      id: "figure-portrait",
      tag: "Portrait Art",
      title: "Couple Figures Work",
      price: "₹9,000",
      desc: "Hand-sketched bride & groom portraits, custom dates",
    },
    {
      id: "karwachauth-sringaar",
      tag: "Festive Star",
      title: "Karwa Chauth Sringaar",
      price: "₹1,499",
      desc: "Moon motif + free clove steam kit & sealing balm",
    },
  ];

  return (
    <section className="bg-surface-muted border-y border-stone-200/80 py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-henna-800 block mb-1">
              Popular Packages at a Glance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Honest, Transparent Pricing
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1">
              Zero hidden fees. Complete doorstep service across Lucknow.
            </p>
          </div>
          
          <Link
            href="/designs"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-henna-800 hover:text-henna-950 transition-colors"
          >
            <span>Browse All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <Link
              key={item.id}
              href={`/book?service=${item.id}`}
              className="text-left bg-white p-4 sm:p-5 rounded-xl border border-stone-200/90 hover:border-henna-400 hover:shadow-lift transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-henna-800 bg-henna-50 px-2 py-0.5 rounded text-xs">
                    {item.tag}
                  </span>
                  <span className="font-serif font-bold text-base sm:text-lg text-stone-900 group-hover:text-henna-700 transition-colors">
                    {item.price}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-stone-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-henna-800 group-hover:text-henna-950">
                <span>Calculate & Book</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
