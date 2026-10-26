"use client";

import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import FestiveOffers from "@/components/offers/FestiveOffers";
import Toast from "@/components/common/Toast";
import { useToast } from "@/hooks/useToast";

export default function OffersPage() {
  const { toast, showToast, hideToast } = useToast();

  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <FestiveOffers onCopied={(msg) => showToast(msg, "success")} />
      </main>
      <Footer />
      <BottomNav />
      <Toast toast={toast} onClose={hideToast} />
    </div>
  );
}
