"use client";

import { useState } from "react";
import Link from "next/link";
import { COUPONS_DATA } from "@/constants/couponsData";
import { Copy, Check, Sparkles, ArrowRight } from "lucide-react";

export default function FestiveOffers({ onCopied }) {
  const [copiedCode, setCopiedCode] = useState("");
  const coupons = Object.values(COUPONS_DATA);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    if (onCopied) onCopied(`Coupon code ${code} copied!`);
    setTimeout(() => setCopiedCode(""), 2500);
  };

  return (
    <div className="py-8 sm:py-12 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-wider text-henna-800 uppercase block mb-1">
            Exclusive Deals & Promos
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Festive Savings & Bridal Privileges
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Copy any promo code below to automatically claim discounts in your booking calculation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coupons.map((coupon) => {
            const isCopied = copiedCode === coupon.code;
            return (
              <div
                key={coupon.code}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 hover:border-champagne-400 shadow-subtle hover:shadow-lift transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-champagne-900 bg-champagne-100 px-2.5 py-1 rounded-md">
                      <Sparkles className="w-3.5 h-3.5 text-champagne-700" />
                      {coupon.badge}
                    </span>
                    <span className="font-serif text-sm sm:text-base font-bold text-henna-800">
                      {coupon.type === "percent" ? `${coupon.value}% OFF` : `Save ₹${coupon.value}`}
                    </span>
                  </div>

                  <h2 className="font-bold text-stone-900 text-base sm:text-lg">
                    {coupon.title}
                  </h2>

                  <p className="text-stone-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    {coupon.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <div className="bg-stone-50 border border-dashed border-stone-300 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-bold tracking-wider text-stone-800">
                    {coupon.code}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopy(coupon.code)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-700 transition-colors"
                      title="Copy promo code"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-stone-500" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/book?coupon=${coupon.code}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-2 rounded-lg bg-henna-700 hover:bg-henna-800 text-white transition-colors"
                    >
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
