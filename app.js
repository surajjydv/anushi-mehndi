/* ===================================================================
   ANUSHKA YADAV - BRIDAL MEHNDI ARTIST LUCKNOW
   CORE CLIENT APPLICATION LOGIC
   =================================================================== */

// Constants & Business Config
const BUSINESS_CONFIG = {
  name: "Anushka Yadav",
  title: "Bridal Mehndi Artist",
  city: "Lucknow, Uttar Pradesh",
  phone: "7905687796",
  phoneFormatted: "+91 7905687796",
  instagramUrl: "https://www.instagram.com/anushi_mehndi?rpxt=bHRrcGp1ZGg4dnNu",
  instagramHandle: "@anushi_mehndi",
  whatsappUrl: "https://wa.me/917905687796",
  whatsappGroupUrl: "https://chat.whatsapp.com/JU4ZQHlxqONKavk6mxJOgc?s=cl&p=i&mlu=4&ilr=4&iam=0",
  upiId: "khusiet45@ybl",
  upiPayee: "Anushka Yadav",
  basePrices: {
    // Budget-Friendly Everyday Henna (Front & Center)
    "budget-both-hands": 600,
    "single-hand-palm": 299,
    "backhand-mandala": 450,
    "festive-both-hands": 999,

    // Signature Bridal Mehndi Services
    "bridal-traditional": 6500,
    "figure-portrait": 9000,
    "marwari-rajasthani": 7500,
    "arabic-fusion": 3500,
    "feet-mehndi": 2000,
    "sangeet-family": 3999,

    // Festive Specials (Karwa Chauth & Diwali)
    "karwachauth-sringaar": 1499,
    "diwali-squad": 3999,

    // Separate Makeup Studio Services
    "bridal-airbrush": 16000,
    "bridal-hd": 11000,
    "engagement-glam": 6500,
    "reception-regal": 7500,
    "haldi-dewy": 4500,
    "party-guest": 3000,

    // Special Combos
    "royal-bridal-combo": 18500,
    "duo-sister-pack": 14000
  },
  coupons: {
    "KARWACHAUTH": { type: "flat", value: 500, label: "₹500 Karwa Chauth Sringaar Discount" },
    "DIWALI50": { type: "flat", value: 1000, label: "₹1,000 Diwali Shubh Henna Dhamaka" },
    "DIWALIDHAMAKA": { type: "percent", value: 30, label: "30% Diwali Family Squad Off" },
    "BUDGET50": { type: "flat", value: 50, label: "₹50 Special Pocket Discount" },
    "ROYAL25": { type: "percent", value: 25, label: "25% Off Royal Combo" },
    "LUCKNOWBRIDE": { type: "flat", value: 1500, label: "₹1,500 Off Bridal Booking" },
    "EARLYBIRD15": { type: "percent", value: 15, label: "15% Advance Booking Discount" },
    "FESTIVE500": { type: "flat", value: 500, label: "₹500 Festive Coupon" }
  }
};

// Gallery Data with 100% Unique Photography for Every Item
const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Simple Floral Both Hands Henna (₹600)",
    category: "mehndi",
    tag: "Budget Friendly",
    image: "images/budget_mehndi_both_hands.jpg",
    description: "Graceful floral trails and bell patterns covering palms on both hands. Ideal for pooja, festive family functions, and sisters."
  },
  {
    id: 2,
    title: "Royal Traditional Full Bridal Henna (₹6,500)",
    category: "mehndi",
    tag: "Signature Bridal",
    image: "images/hero_bridal_mehndi.jpg",
    description: "Elbow-to-fingertips intricate bridal henna with Shehnai, Kalash, peacock, and delicate lace net filling."
  },
  {
    id: 3,
    title: "Hand-Drawn Couple Portrait Figure Work (₹9,000)",
    category: "mehndi",
    tag: "Portrait Art",
    image: "images/figure_mehndi.jpg",
    description: "Detailed hand-sketched bride & groom portraits on palms with customized wedding dates, vows, and love journey milestones."
  },
  {
    id: 4,
    title: "Marwari & Rajasthani Heritage Jaal (₹7,500)",
    category: "mehndi",
    tag: "Heritage Art",
    image: "images/marwari_rajasthani_mehndi.jpg",
    description: "Dense, symmetry-perfect heritage patterns with dancing peacocks, palace jharokhas, elephant motifs, and micro-jaal artwork."
  },
  {
    id: 5,
    title: "Arabic Floral & Flowing Vines Henna (₹3,500)",
    category: "mehndi",
    tag: "Arabic Henna",
    image: "images/arabic_mehndi_hand.jpg",
    description: "Bold shaded Arabic floral trails with deep mahogany stain, ideal for engagement, roka, and bridesmaids."
  },
  {
    id: 6,
    title: "Bridal Feet & Lotus Payal Henna (₹2,000)",
    category: "mehndi",
    tag: "Bridal Feet",
    image: "images/feet_mehndi.jpg",
    description: "Auspicious lotus blooms and traditional payal anklet motifs adorning the bridal feet."
  },
  {
    id: 7,
    title: "Karwa Chauth Sringaar Henna (₹1,499)",
    category: "mehndi",
    tag: "Karwa Chauth Special",
    image: "images/karwachauth_special_mehndi.jpg",
    description: "Auspicious Karwa Chauth design with moon and sieve motifs, deep dark stain guaranteed with free clove steam kit."
  },
  {
    id: 8,
    title: "Sangeet & Family Squad Celebration (₹3,999)",
    category: "mehndi",
    tag: "Group Squad",
    image: "images/sangeet_party_mehndi.jpg",
    description: "Celebration squad package covering sisters, mother, and relatives at your Sangeet ceremony with coordinated artists."
  },
  {
    id: 9,
    title: "Luxury Airbrush Bridal Makeup (₹16,000)",
    category: "makeup",
    tag: "Airbrush HD",
    image: "images/bridal_makeup_portrait.jpg",
    description: "Flawless 18-hour sweatproof porcelain base with champagne eye shimmer, lashes, and double dupatta draping."
  }
];

// App State
const state = {
  activePage: "home",
  selectedService: "budget-both-hands",
  activeCoupon: null,
  activeFilter: "all",
  deferredPrompt: null
};

// Router: Manage SPA Hash Pages
function navigateTo(pageId) {
  if (!pageId) pageId = "home";
  
  pageId = pageId.replace("#", "").trim();
  const validPages = ["home", "mehndi", "makeup", "offers", "gallery", "book"];
  if (!validPages.includes(pageId)) {
    pageId = "home";
  }

  state.activePage = pageId;

  // Toggle visible page
  document.querySelectorAll(".page-view").forEach((section) => {
    if (section.id === `page-${pageId}`) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });

  // Update nav links
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("data-page") === pageId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Update mobile bottom nav
  document.querySelectorAll(".mobile-nav-item").forEach((item) => {
    if (item.getAttribute("data-page") === pageId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update mobile top options strip
  document.querySelectorAll(".mobile-strip-item").forEach((item) => {
    if (item.getAttribute("data-page") === pageId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Service Selector & Price Engine
function calculatePrice() {
  const serviceSelect = document.getElementById("bookingService");
  const peopleCount = parseInt(document.getElementById("bookingPeople")?.value || 1, 10);
  
  const serviceKey = serviceSelect ? serviceSelect.value : state.selectedService;
  const baseRate = BUSINESS_CONFIG.basePrices[serviceKey] || 600;
  
  let subtotal = baseRate;
  if (serviceKey === "sangeet-family" || serviceKey === "party-guest") {
    subtotal = baseRate * Math.max(1, peopleCount);
  }

  // Calculate optional add-ons
  let addonsTotal = 0;
  const selectedAddonNames = [];
  document.querySelectorAll(".addon-checkbox:checked").forEach((cb) => {
    const val = parseInt(cb.getAttribute("data-price") || 0, 10);
    addonsTotal += val;
    selectedAddonNames.push(cb.getAttribute("data-title") || "Addon");
  });
  subtotal += addonsTotal;

  let discountAmount = 0;
  if (state.activeCoupon) {
    if (state.activeCoupon.type === "percent") {
      discountAmount = Math.round((subtotal * state.activeCoupon.value) / 100);
    } else if (state.activeCoupon.type === "flat") {
      discountAmount = Math.min(subtotal, state.activeCoupon.value);
    }
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Update Summary DOM
  const subtotalElem = document.getElementById("summarySubtotal");
  const discountElem = document.getElementById("summaryDiscount");
  const totalElem = document.getElementById("summaryTotal");
  const couponNotice = document.getElementById("couponNotice");

  if (subtotalElem) subtotalElem.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
  if (discountElem) discountElem.textContent = discountAmount > 0 ? `-₹${discountAmount.toLocaleString("en-IN")}` : "₹0";
  if (totalElem) totalElem.textContent = `₹${finalTotal.toLocaleString("en-IN")}`;
  
  if (couponNotice) {
    if (state.activeCoupon) {
      couponNotice.textContent = `Coupon Applied: ${state.activeCoupon.code} (${state.activeCoupon.label})`;
      couponNotice.style.color = "var(--whatsapp-dark)";
      couponNotice.style.fontWeight = "700";
    } else {
      couponNotice.textContent = "No coupon applied";
      couponNotice.style.color = "var(--text-faint)";
      couponNotice.style.fontWeight = "normal";
    }
  }

  return { subtotal, discountAmount, finalTotal, serviceKey, selectedAddonNames };
}

// Apply Coupon Handler
function applyCouponCode(code) {
  if (!code) {
    const input = document.getElementById("couponInput");
    code = input ? input.value.trim().toUpperCase() : "";
  }
  
  code = code.toUpperCase();
  const coupon = BUSINESS_CONFIG.coupons[code];

  if (coupon) {
    state.activeCoupon = { ...coupon, code };
    calculatePrice();
    showToast(`✓ Coupon '${code}' Applied! ${coupon.label}`);
    const input = document.getElementById("couponInput");
    if (input) input.value = code;
  } else {
    showToast(`✕ Invalid coupon code`);
  }
}

// Copy Code to Clipboard helper
function copyCoupon(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast(`✓ Copied '${code}'! Applying to booking...`);
    applyCouponCode(code);
    navigateTo("book");
  }).catch(() => {
    applyCouponCode(code);
    navigateTo("book");
  });
}

// Copy UPI ID to Clipboard Handler
function copyUpiId() {
  const upiId = BUSINESS_CONFIG.upiId || "khusiet45@ybl";
  const btnText = document.getElementById("copyUpiText");
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(upiId).then(() => {
      if (btnText) {
        btnText.textContent = "✓ Copied!";
        setTimeout(() => { btnText.textContent = "Copy UPI ID"; }, 2500);
      }
      showToast(`✓ UPI ID '${upiId}' copied! Open your UPI app (GPay/PhonePe/Paytm) to pay.`);
    }).catch(() => {
      fallbackCopy(upiId, btnText);
    });
  } else {
    fallbackCopy(upiId, btnText);
  }
}

function fallbackCopy(text, btnText) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
    if (btnText) {
      btnText.textContent = "✓ Copied!";
      setTimeout(() => { btnText.textContent = "Copy UPI ID"; }, 2500);
    }
    showToast(`✓ UPI ID '${text}' copied!`);
  } catch (err) {
    showToast(`UPI ID: ${text}`);
  }
  document.body.removeChild(textArea);
}

// Instant Pre-fill & Redirect to Booking
function selectAndBook(serviceKey) {
  state.selectedService = serviceKey;
  const selectElem = document.getElementById("bookingService");
  if (selectElem) {
    selectElem.value = serviceKey;
  }
  navigateTo("book");
  calculatePrice();
  setTimeout(() => {
    document.getElementById("bookingForm")?.scrollIntoView({ behavior: "smooth" });
  }, 200);
}

// 1-Click WhatsApp Booking for Any Design Card
function bookDesignOnWhatsApp(designName, price) {
  const priceInfo = price ? ` (Rate: ${price})` : "";
  const text = `Hi Anushka! I loved this mehndi design: "${designName}"${priceInfo} on your website. I want to check availability and book for my date in Lucknow. (Instagram: @anushi_mehndi)`;
  window.open(`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank");
  showToast("Opening WhatsApp to book " + designName + "...");
}

// Quick 30-Second Hero Booking Form Handler
function quickHeroBook(event) {
  if (event) event.preventDefault();
  const service = document.getElementById("heroService")?.value || "Bridal Mehndi";
  const date = document.getElementById("heroDate")?.value || "Upcoming Function";
  const locality = document.getElementById("heroLocality")?.value || "Lucknow";
  
  const text = 
`🌿 *MEHNDI INQUIRY FOR ANUSHKA YADAV* 🌿
📍 *Area:* ${locality}, Lucknow
📅 *Function Date:* ${date}
✨ *Mehndi Style:* ${service}
📸 *Insta Handle:* @anushi_mehndi

Hi Anushka, please check your availability for this date and share booking details!`;

  window.open(`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank");
  showToast("Opening WhatsApp with your booking details...");
}

// WhatsApp Booking Message Generator
function sendWhatsAppBooking(event) {
  if (event) event.preventDefault();

  const name = document.getElementById("clientName")?.value.trim() || "Client";
  const phone = document.getElementById("clientPhone")?.value.trim() || "";
  const date = document.getElementById("functionDate")?.value || "Flexible";
  const timeSlot = document.getElementById("timeSlot")?.value || "Morning";
  const locality = document.getElementById("bookingLocality")?.value || "Lucknow";
  const address = document.getElementById("venueAddress")?.value.trim() || "Lucknow (Home Service)";
  const people = document.getElementById("bookingPeople")?.value || "1";
  const notes = document.getElementById("clientNotes")?.value.trim() || "No specific notes";
  const joinVip = document.getElementById("joinVipCheckbox")?.checked;

  const { finalTotal, serviceKey, discountAmount, selectedAddonNames } = calculatePrice();
  const serviceName = document.getElementById("bookingService")?.selectedOptions[0]?.text || serviceKey;
  const addonsText = selectedAddonNames && selectedAddonNames.length > 0 
    ? `\n✨ *Add-Ons:* ${selectedAddonNames.join(", ")}` 
    : "";
  const couponText = state.activeCoupon 
    ? `\n🎁 *Coupon Applied:* ${state.activeCoupon.code} (-₹${discountAmount})` 
    : "";
  const vipText = joinVip 
    ? "\n🟢 *VIP Community:* Please add me to Lucknow Brides WhatsApp Group!" 
    : "";

  const text = 
`👑 *NEW APPOINTMENT BOOKING* 👑
👤 *Bride / Client:* ${name}
📞 *Contact:* ${phone}
📍 *Lucknow Area:* ${locality}
🏠 *Address:* ${address}
📅 *Date:* ${date}
⏰ *Preferred Time:* ${timeSlot}
👥 *People:* ${people}

💅 *Selected Package:* ${serviceName}${addonsText}${couponText}
💰 *Estimated Total:* ₹${finalTotal.toLocaleString("en-IN")}
💳 *UPI Slot Advance:* Token advance payable to khusiet45@ybl
📝 *Special Notes:* ${notes}${vipText}
📸 *Instagram:* @anushi_mehndi

Hi Anushka, please confirm this booking slot!`;

  window.open(`${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent(text)}`, "_blank");
  showToast("✓ Booking generated! Sending to Anushka on WhatsApp...");
}

// Client Review Submission Handler
function submitClientReview(event) {
  if (event) event.preventDefault();

  const name = document.getElementById("reviewName")?.value.trim() || "Lucknow Bride";
  const locality = document.getElementById("reviewLocality")?.value.trim() || "Lucknow";
  const service = document.getElementById("reviewService")?.value || "Bridal Mehndi";
  const rating = document.getElementById("reviewRating")?.value || "5";
  const text = document.getElementById("reviewComment")?.value.trim();

  if (!text) {
    showToast("Please enter your feedback comments.");
    return;
  }

  const newReview = {
    name,
    locality,
    service,
    rating: parseInt(rating, 10),
    text,
    date: new Date().toLocaleDateString("en-IN")
  };

  try {
    const reviews = JSON.parse(localStorage.getItem("anushka_client_reviews") || "[]");
    reviews.unshift(newReview);
    localStorage.setItem("anushka_client_reviews", JSON.stringify(reviews));
  } catch (e) {}

  // Append directly into testimonials container
  const container = document.getElementById("testimonialsGrid");
  if (container) {
    const card = document.createElement("div");
    card.className = "testi-card";
    card.innerHTML = `
      <div class="testi-stars">${"★".repeat(newReview.rating)}</div>
      <p class="testi-text">"${newReview.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar-placeholder">${newReview.name.substring(0, 2).toUpperCase()}</div>
        <div class="testi-meta">
          <h4>${newReview.name} <span style="font-size: 0.7rem; color: #1ea959;">(Verified Client)</span></h4>
          <p>${newReview.service} • ${newReview.locality}</p>
        </div>
      </div>
    `;
    container.insertBefore(card, container.firstChild);
  }

  document.getElementById("reviewForm")?.reset();
  showToast("✓ Thank you! Your review has been published.");
}

// Gallery Render & Filter Logic
function renderGallery(filter = "all") {
  const container = document.getElementById("galleryGrid");
  if (!container) return;

  const filtered = filter === "all" 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  container.innerHTML = filtered.map((item) => `
    <div class="gallery-item" onclick="openGalleryModal(${item.id})">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <div class="gallery-overlay">
        <span class="gallery-category-tag">${item.tag}</span>
        <p class="gallery-caption">${item.title}</p>
      </div>
    </div>
  `).join("");
}

// Gallery Modal Controls
function openGalleryModal(id) {
  const item = GALLERY_ITEMS.find((it) => it.id === id);
  if (!item) return;

  const modal = document.getElementById("galleryModal");
  const modalBody = document.getElementById("modalBodyContent");
  
  if (modalBody) {
    modalBody.innerHTML = `
      <img src="${item.image}" alt="${item.title}" style="width: 100%; max-height: 400px; object-fit: cover;">
      <div style="padding: 22px;">
        <span style="font-size: 0.75rem; color: var(--gold-primary); text-transform: uppercase; font-weight: 700;">${item.tag}</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.35rem; margin: 4px 0 10px; color: var(--henna-primary);">${item.title}</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 18px; line-height: 1.5;">${item.description}</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <a href="${BUSINESS_CONFIG.whatsappUrl}?text=${encodeURIComponent('Hi Anushka, I loved this design: ' + item.title + ' on your website. I want to check availability and book.')}" target="_blank" class="btn-card-whatsapp" style="padding: 10px 18px; font-size: 0.9rem;">
            💬 Book on WhatsApp
          </a>
          <button class="btn-card-book" style="padding: 10px 18px; font-size: 0.9rem;" onclick="closeGalleryModal(); selectAndBook('${item.category === "makeup" ? "bridal-hd" : "bridal-traditional"}')">
            📅 Book Online
          </button>
          <a href="${BUSINESS_CONFIG.instagramUrl}" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; border: 1px solid var(--border-gold); padding: 10px 14px; border-radius: var(--radius-full); font-size: 0.85rem; font-weight: 600; color: var(--henna-primary);">
            📸 View on Instagram
          </a>
        </div>
      </div>
    `;
  }
  
  if (modal) modal.classList.add("show");
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (modal) modal.classList.remove("show");
}

// Toast Notification
function showToast(text, duration = 3000) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

// Initialize PWA cleanly without cluttering top header
function initPWA() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    state.deferredPrompt = e;
  });
}

function triggerPWAInstall() {
  if (state.deferredPrompt) {
    state.deferredPrompt.prompt();
    state.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        showToast("✓ Anushka Yadav Studio App installed!");
      }
      state.deferredPrompt = null;
    });
  } else {
    showToast("Tip: Tap browser menu ⋮ and choose 'Add to Home screen' or 'Install App'");
  }
}

// Accordion FAQ initializer
function initFaq() {
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.parentElement;
      const wasOpen = parent.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach((it) => it.classList.remove("open"));
      if (!wasOpen) {
        parent.classList.add("open");
      }
    });
  });
}

// Set Minimum Booking Date to Today
function initDatePicker() {
  const dateInput = document.getElementById("functionDate");
  const heroDate = document.getElementById("heroDate");
  const today = new Date().toISOString().split("T")[0];
  if (dateInput) dateInput.min = today;
  if (heroDate) {
    heroDate.min = today;
    heroDate.value = today;
  }
}

// Gallery Filter Buttons
function initGalleryFilters() {
  document.querySelectorAll(".gallery-filters .filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".gallery-filters .filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter") || "all";
      renderGallery(filter);
    });
  });
}

// Add-on checkboxes and booking form event listeners
function initFormListeners() {
  const serviceSelect = document.getElementById("bookingService");
  const peopleInput = document.getElementById("bookingPeople");
  
  if (serviceSelect) {
    serviceSelect.addEventListener("change", calculatePrice);
  }
  if (peopleInput) {
    peopleInput.addEventListener("input", calculatePrice);
  }

  document.querySelectorAll(".addon-checkbox").forEach((cb) => {
    cb.addEventListener("change", calculatePrice);
  });
}

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  const initialHash = window.location.hash.replace("#", "") || "home";
  navigateTo(initialHash);

  window.addEventListener("hashchange", () => {
    const hash = window.location.hash.replace("#", "") || "home";
    navigateTo(hash);
  });

  renderGallery("all");
  calculatePrice();
  initFaq();
  initDatePicker();
  initGalleryFilters();
  initFormListeners();
  initPWA();
});
