import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport = {
  themeColor: "#6d1c10",
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://mehn.vercel.app"),
  title: "Anushka Yadav | Premier Bridal Mehndi Artist Lucknow (@anushi_mehndi)",
  description:
    "Book Lucknow's top Bridal Mehndi Artist Anushka Yadav. Budget henna starting at ₹600 for both hands, Royal Bridal Mehndi, couple portraits & Karwa Chauth offers.",
  keywords: [
    "Mehndi artist Lucknow",
    "600 rs mehndi Lucknow",
    "anushi_mehndi",
    "Bridal Mehndi Lucknow",
    "Anushka Yadav",
    "Couple Portrait Henna",
    "Karwa Chauth Mehndi",
  ],
  authors: [{ name: "Anushka Yadav" }],
  openGraph: {
    title: "Anushka Yadav | Bridal Mehndi Artistry Lucknow (@anushi_mehndi)",
    description:
      "Authentic bridal henna, figure portraits, and budget packages from ₹600 for both hands in Lucknow. Instant online booking.",
    images: ["/icons/icon-512.png"],
    type: "website",
  },
  icons: {
    icon: "/icons/icon-192.png",
    apple: "/icons/icon-192.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-surface-light text-stone-900 antialiased selection:bg-henna-200 selection:text-henna-900">
        {children}
      </body>
    </html>
  );
}
