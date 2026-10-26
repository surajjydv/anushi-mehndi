import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BUSINESS_CONFIG } from "@/constants/businessConfig";

export const metadata = {
  title: "About Anushka Yadav | Lucknow Bridal Henna Artist",
  description: "Learn about Anushka Yadav, Lucknow's premier bridal henna artist with 8+ years of heritage craftsmanship and doorstep service.",
};

export default function AboutPage() {
  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <WhyChooseUs />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-16 text-center">
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-10 border border-stone-800 shadow-lift">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-champagne-200">
              Ready to create your bridal henna memories?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-lg mx-auto">
              Dates during wedding season fill fast. Calculate your package rate online or speak directly with Anushka on WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 bg-henna-700 hover:bg-henna-800 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={BUSINESS_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base px-6 py-3 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
