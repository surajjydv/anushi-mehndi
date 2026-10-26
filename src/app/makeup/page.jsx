import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import MakeupStudio from "@/components/makeup/MakeupStudio";

export const metadata = {
  title: "Bridal Makeup Studio Lucknow | HD & Airbrush Packages",
  description: "Luxury airbrush and HD bridal makeovers by Anushka Yadav Studio in Lucknow. Complete makeup, hair styling, and draping.",
};

export default function MakeupPage() {
  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <MakeupStudio />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
