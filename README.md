# Anushka Yadav Bridal Mehndi Studio

Live Application: [mehn.vercel.app](https://mehn.vercel.app)

A modern, responsive Next.js web application built for **Anushka Yadav (@anushi_mehndi)**, a premier bridal henna artist and makeup professional based in Lucknow, India.

---

## Highlights

- **Multi-Page Architecture**: Dedicated routes for collections (`/designs`), festive promotions (`/offers`), live cost calculation & booking (`/book`), makeup artistry (`/makeup`), and studio background (`/about`).
- **Interactive Price Calculator**: Live estimation engine factoring base packages, guest headcounts, add-ons (bridal feet, clove steam kits, doorstep lighting), and instant promo code discounts.
- **Direct Checkout & Deep Linking**:
  - One-click formatted WhatsApp appointment request generator.
  - Direct UPI advance slot booking to `khusiet45@ybl` (Payee: Anushka Yadav) with deep links for PhonePe, GPay, Paytm, and BHIM.
- **Curated Collections**: Front-and-center budget packages from ₹600 for both hands alongside royal Rajasthani heritage jaal, figure portraits, and Arabic fusion.
- **Makeup Studio**: Dedicated department covering HD and luxury airbrush makeovers.
- **Mobile-First Experience**: High-contrast typography, native bottom navigation on smartphones, and responsive desktop layout.

---

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Library**: [React 18](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Henna Maroon and Champagne design tokens
- **Typography**: Playfair Display (Serif) & Plus Jakarta Sans via `next/font/google`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- Node.js 18.17+ or 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/surajjydv/anushi-mehndi.git
cd anushi-mehndi

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
├── public/                 # Static imagery, icons, and web manifest
├── src/
│   ├── app/                # Next.js App Router pages
│   │   ├── page.jsx        # Home portal
│   │   ├── designs/        # Mehndi designs showcase
│   │   ├── offers/         # Festive coupons & promotions
│   │   ├── book/           # Pricing wizard & slot booking
│   │   ├── makeup/         # Bridal makeup studio
│   │   ├── about/          # Studio info & Lucknow coverage
│   │   ├── layout.jsx      # Global root layout & font loading
│   │   └── globals.css     # Tailwind imports and base styles
│   ├── components/         # Modular feature components
│   │   ├── common/         # Navbar, BottomNav, AnnouncementBar, Toast
│   │   ├── home/           # HeroSection, HighlightsStrip, WhyChooseUs
│   │   ├── mehndi/         # MehndiDesigns
│   │   ├── offers/         # FestiveOffers
│   │   ├── booking/        # BookingWizard, UpiPaymentSection
│   │   └── footer/         # Footer
│   ├── constants/          # Business config, services, and coupons
│   ├── hooks/              # Custom calculator & UI hooks
│   └── utils/              # Formatter and WhatsApp link builders
├── tailwind.config.js      # Custom theme extensions
└── next.config.js          # Next.js configuration
```

---

## Production Build

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```
