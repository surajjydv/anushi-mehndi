# Anushka Yadav Bridal Mehndi Studio

Live application: [https://mehn.vercel.app](https://mehn.vercel.app)

A mobile-first web application and progressive web app (PWA) for Anushka Yadav, a bridal and festive henna artist based in Lucknow, India.

## Features

- **Mobile-First Experience**: Optimized layout for smartphone viewports with persistent bottom navigation, responsive header controls, and touch-friendly booking wizards.
- **Direct UPI Payments**: Integrated UPI advance payment to `khusiet45@ybl` (Payee: Anushka Yadav) with one-click clipboard copying and direct `upi://pay` deep linking for Google Pay, PhonePe, Paytm, and BHIM.
- **Clear Tiered Pricing**: Accessible packages starting at ₹299 (single hand palm) and ₹600 (both hands floral), alongside royal bridal henna (₹6,500), portrait sketch figures (₹9,000), and Rajasthani jaal (₹7,500).
- **Instagram Portfolio**: Direct integration with [@anushi_mehndi](https://www.instagram.com/anushi_mehndi?rpxt=bHRrcGp1ZGg4dnNu) across all design showcases.
- **Dedicated Makeup Studio**: Sub-department for HD airbrush and traditional bridal makeover packages.
- **Festive Promotions**: Automated coupon system for Karwa Chauth (`KARWACHAUTH`) and Diwali (`DIWALI50`).
- **Instant WhatsApp Booking**: Generates formatted booking requests sent directly to Anushka via WhatsApp with selected packages, dates, and locations.
- **Lucknow Doorstep Service**: Coverage across Gomti Nagar, Hazratganj, Alambagh, Indira Nagar, Ashiyana, and surrounding areas.

## Architecture

```
├── vercel.json      # Routing and cache-control headers
├── index.html       # Semantic single-page application structure
├── styles.css       # Mobile-first CSS tokens, media queries, and responsive components
├── app.js           # Client-side router, price calculator, and UPI clipboard handler
├── manifest.json    # Web App Manifest for Android/iOS home screen installation
├── sw.js            # Service worker caching static assets for offline use
├── images/          # Compressed high-resolution design photography
└── icons/           # Progressive web app launcher icons
```

## Setup

Run the project locally using any static file server:

```bash
# Python 3
python -m http.server 8085
```

Open `http://localhost:8085` in any browser or test responsive breakpoints via developer tools.

## Deployment

Deploy changes to Vercel production:

```bash
npx vercel --prod --yes
```

## Usage

1. **Select Package**: Choose from budget designs (₹600 both hands), festive specials, or royal bridal collections.
2. **Calculate Total**: Pick doorstep add-ons or apply seasonal discount codes (`KARWACHAUTH`, `DIWALI50`).
3. **Lock Slot**: Pay a ₹500 advance via UPI (`khusiet45@ybl`) or confirm directly on WhatsApp.
