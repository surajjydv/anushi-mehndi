import { Leaf, Award, Clock, Heart } from "lucide-react";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Leaf,
      title: "100% Organic Henna",
      desc: "Triple-filtered Sojat leaves infused with pure eucalyptus & tea tree oil. Completely free of PPD, chemicals, and artificial dyes.",
    },
    {
      icon: Award,
      title: "Signature Portrait Art",
      desc: "Masterful hand-drawn sketches capturing bride & groom portraits, royal palanquin, and personalized wedding dates.",
    },
    {
      icon: Clock,
      title: "Punctual Doorstep Service",
      desc: "We arrive equipped with artist lighting, comfortable seating cushions, and post-mehndi care kits across Lucknow.",
    },
    {
      icon: Heart,
      title: "Free Stain Booster Kit",
      desc: "Every bridal booking includes a complimentary clove steam kit and organic post-peel sealing balm for rich mahogany stain.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-surface-light border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold tracking-wider text-henna-800 uppercase block mb-1">
              The Anushka Yadav Promise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-snug">
              Heritage craftsmanship rooted in Lucknow tradition.
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Mehndi is more than a pre-wedding ritual; it is a sacred memory woven into your wedding story. With 8+ years of dedicated artistry and over 500 happy brides across Uttar Pradesh, our commitment is to provide unmatched attention to detail and a serene, celebratory experience.
            </p>

            <div className="pt-2">
              <span className="text-xs sm:text-sm font-bold text-stone-900 block mb-2">
                Doorstep Service Coverage Across Lucknow:
              </span>
              <div className="flex flex-wrap gap-2">
                {BUSINESS_CONFIG.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-stone-100 text-stone-800 px-3 py-1 rounded-lg border border-stone-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {points.map((pt, i) => {
              const Icon = pt.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-5 rounded-2xl border border-stone-200/90 hover:border-champagne-400 transition-colors shadow-subtle flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-henna-50 text-henna-700 flex items-center justify-center mb-3.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-stone-900">
                      {pt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
