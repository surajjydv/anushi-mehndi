import { BUSINESS_CONFIG } from "@/constants/businessConfig";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <aside aria-label="Announcement" className="bg-henna-950 text-champagne-100 text-xs sm:text-sm py-2 px-3 sm:px-4 border-b border-henna-800/80">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 bg-henna-800 text-champagne-100 px-2 py-0.5 rounded text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-champagne-300" />
            Special
          </span>
          <span className="text-stone-200">
            Both Hands Henna starting at just <strong className="text-white font-bold">₹600</strong> • Karwa Chauth & Wedding bookings open
          </span>
        </div>
        <Link
          href="/offers"
          className="hidden sm:inline-flex items-center gap-1.5 text-champagne-300 hover:text-white transition-colors font-medium ml-auto"
        >
          <span>View Festive Offers</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </aside>
  );
}
