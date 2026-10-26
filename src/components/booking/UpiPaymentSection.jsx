"use client";

import { useState } from "react";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";
import { Copy, Check, QrCode, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function UpiPaymentSection({ onCopied }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(BUSINESS_CONFIG.upiId);
    setCopied(true);
    if (onCopied) onCopied("UPI ID copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  const upiIntentUrl = `upi://pay?pa=${BUSINESS_CONFIG.upiId}&pn=${encodeURIComponent(
    BUSINESS_CONFIG.upiPayee
  )}&tn=${encodeURIComponent("Advance Mehndi Slot Booking")}&cu=INR`;

  return (
    <div className="bg-white rounded-2xl p-5 border border-stone-200/90 shadow-subtle">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
          <QrCode className="w-4 h-4" />
        </div>
        <h3 className="font-bold text-stone-900 text-sm sm:text-base">
          Lock Slot via UPI Advance (₹500)
        </h3>
      </div>

      <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed">
        To guarantee your date & time slot during wedding/festive season, pay ₹500 advance via Google Pay, PhonePe, Paytm, or BHIM.
      </p>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* UPI ID Display box */}
        <div className="flex-1 bg-stone-50 border border-stone-300 rounded-xl px-4 py-2.5 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-stone-500 font-bold block">
              Payee: {BUSINESS_CONFIG.upiPayee}
            </span>
            <span className="font-mono font-bold text-sm sm:text-base text-stone-900">
              {BUSINESS_CONFIG.upiId}
            </span>
          </div>

          <button
            onClick={handleCopy}
            className="text-stone-500 hover:text-stone-900 p-1.5 rounded transition-colors"
            title="Copy UPI ID"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-none text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 transition-colors"
          >
            {copied ? "Copied" : "Copy UPI"}
          </button>

          <a
            href={upiIntentUrl}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold px-4 py-3 rounded-xl bg-henna-700 hover:bg-henna-800 text-white transition-colors"
          >
            <span>Pay on App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-stone-500">
        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        <span>100% Direct Bank Transfer. Send screenshot on WhatsApp after payment.</span>
      </div>
    </div>
  );
}
