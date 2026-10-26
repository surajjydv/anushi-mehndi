import Link from "next/link";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";
import { Instagram, MessageCircle, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-300 text-sm border-t border-stone-800 pt-12 pb-24 lg:pb-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3.5">
            <h3 className="font-serif text-xl font-bold text-white tracking-tight">
              Anushka Yadav <span className="text-champagne-300 font-sans font-normal text-sm">• Lucknow</span>
            </h3>
            <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
              Lucknow&apos;s premier bridal mehndi artist specializing in royal traditional figures, Marwari jaal, and budget packages starting from ₹600 for both hands.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={BUSINESS_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-champagne-400 text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 hover:border-emerald-500 text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-sm"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-stone-400 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/designs" className="hover:text-white transition-colors">
                  Mehndi Collections
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white transition-colors">
                  Festive Offers
                </Link>
              </li>
              <li>
                <Link href="/book" className="hover:text-white transition-colors">
                  Price Calculator & Book
                </Link>
              </li>
              <li>
                <Link href="/makeup" className="hover:text-white transition-colors">
                  Makeup Studio
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Anushka
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-2.5 text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-200">
              Lucknow Studio
            </h4>
            <p className="text-stone-400 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-henna-400 flex-shrink-0 mt-0.5" />
              <span>Gomti Nagar, Lucknow, Uttar Pradesh</span>
            </p>
            <p className="text-stone-400 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>{BUSINESS_CONFIG.phoneFormatted}</span>
            </p>
            <p className="text-xs text-stone-400 pt-1">
              Advance Slot UPI: <span className="font-mono text-champagne-300 font-bold">{BUSINESS_CONFIG.upiId}</span>
            </p>
          </div>

        </div>

        <div className="border-t border-stone-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} Anushka Yadav Bridal Studio. All rights reserved.</p>
          <p>
            Instagram:{" "}
            <a href={BUSINESS_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-champagne-300 hover:underline">
              {BUSINESS_CONFIG.instagramHandle}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
