import AnnouncementBar from "@/components/common/AnnouncementBar";
import Navbar from "@/components/common/Navbar";
import BottomNav from "@/components/common/BottomNav";
import Footer from "@/components/footer/Footer";
import MehndiDesigns from "@/components/mehndi/MehndiDesigns";

export const metadata = {
  title: "Mehndi Designs & Collections | Anushka Yadav Lucknow",
  description: "Browse Lucknow's finest bridal henna, couple portrait designs, Marwari jaal, and budget packages starting from ₹600 for both hands.",
};

export default function DesignsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <MehndiDesigns />
      </main>
      <Footer />
      <BottomNav />
    </div>
  );
}
