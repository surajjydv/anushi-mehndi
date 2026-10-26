"use client";

import { Suspense } from "react";
import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import BookingWizard from "@/components/booking/BookingWizard";
import Toast from "@/components/common/Toast";
import { useToast } from "@/hooks/useToast";
import { useBookingCalculator } from "@/hooks/useBookingCalculator";

function BookingContent() {
  const { toast, showToast, hideToast } = useToast();
  const calculator = useBookingCalculator();

  return (
    <>
      <BookingWizard
        calculator={calculator}
        onNotify={(msg, type) => showToast(msg, type)}
      />
      <Toast toast={toast} onClose={hideToast} />
    </>
  );
}

export default function BookPage() {
  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="p-12 text-center text-sm text-stone-500">Loading booking calculator...</div>}>
          <BookingContent />
        </Suspense>
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
