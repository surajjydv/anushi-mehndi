"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { MEHNDI_SERVICES, MAKEUP_SERVICES, BOOKING_ADDONS } from "@/constants/servicesData";
import { generateBookingWhatsAppUrl } from "@/utils/whatsappLink";
import UpiPaymentSection from "./UpiPaymentSection";
import {
  Calendar,
  MapPin,
  User,
  Phone,
  Users,
  Check,
  MessageCircle,
} from "lucide-react";

export default function BookingWizard({ calculator, onNotify }) {
  const searchParams = useSearchParams();

  const {
    selectedServiceId,
    setSelectedServiceId,
    activeService,
    peopleCount,
    setPeopleCount,
    selectedAddons,
    toggleAddon,
    couponCode,
    setCouponCode,
    appliedCoupon,
    couponError,
    applyCoupon,
    removeCoupon,
    calculation,
  } = calculator;

  // Initialize from URL search params if present
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const couponParam = searchParams.get("coupon");

    if (serviceParam) {
      setSelectedServiceId(serviceParam);
    }
    if (couponParam) {
      applyCoupon(couponParam);
    }
  }, [searchParams, setSelectedServiceId, applyCoupon]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    location: "Gomti Nagar, Lucknow",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const res = applyCoupon();
    if (onNotify) {
      onNotify(res.message, res.success ? "success" : "error");
    }
  };

  const selectedAddonNames = selectedAddons
    .map((id) => BOOKING_ADDONS.find((a) => a.id === id)?.title)
    .filter(Boolean);

  const whatsappUrl = generateBookingWhatsAppUrl({
    name: formData.name,
    phone: formData.phone,
    serviceTitle: activeService.title,
    eventDate: formData.date,
    location: formData.location,
    peopleCount,
    addons: selectedAddonNames,
    finalTotal: calculation.finalTotal,
    couponCode: appliedCoupon?.code,
  });

  return (
    <div className="py-8 sm:py-12 bg-surface-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-left mb-8">
          <span className="text-xs font-bold tracking-wider text-henna-800 uppercase block mb-1">
            Instant Cost Calculator & Slot Request
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Plan & Book Your Mehndi Appointment
          </h1>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Select your preferred henna package, optional add-ons, and promo code to see transparent upfront pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form & Configuration */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Service Picker */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-subtle space-y-4">
              <label className="block text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider">
                1. Select Henna or Makeup Service
              </label>

              <select
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-xl px-4 py-3 text-sm sm:text-base text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-henna-700"
              >
                <optgroup label="Mehndi Artistry Services">
                  {MEHNDI_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} — ₹{s.price.toLocaleString("en-IN")}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Bridal Makeup Studio">
                  {MAKEUP_SERVICES.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.title} — ₹{m.price.toLocaleString("en-IN")}
                    </option>
                  ))}
                </optgroup>
              </select>

              {activeService && (
                <div className="bg-stone-50 rounded-xl p-4 text-sm text-stone-700 flex items-start justify-between gap-4 border border-stone-200">
                  <div>
                    <span className="font-bold text-stone-900 text-base block">{activeService.title}</span>
                    <span className="text-xs sm:text-sm text-stone-600 leading-relaxed block mt-1">
                      {activeService.description}
                    </span>
                  </div>
                  <span className="font-serif font-bold text-base sm:text-lg text-henna-800 flex-shrink-0">
                    ₹{activeService.price.toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {/* People Count (for squad / party) */}
              {(selectedServiceId === "sangeet-family" || selectedServiceId === "party-guest") && (
                <div className="pt-3 flex items-center justify-between text-sm border-t border-stone-100">
                  <span className="text-stone-800 flex items-center gap-2 font-medium">
                    <Users className="w-4 h-4 text-stone-500" />
                    Number of family members / guests:
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setPeopleCount(Math.max(1, peopleCount - 1))}
                      className="w-9 h-9 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-base"
                    >
                      -
                    </button>
                    <span className="font-mono font-bold text-base w-8 text-center">
                      {peopleCount}
                    </span>
                    <button
                      onClick={() => setPeopleCount(peopleCount + 1)}
                      className="w-9 h-9 rounded-lg border border-stone-300 bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-base"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Step 2: Add-ons */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-subtle space-y-4">
              <label className="block text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider">
                2. Optional Add-ons & Care Kits
              </label>

              <div className="space-y-3">
                {BOOKING_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`flex items-start gap-3.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                        isChecked
                          ? "bg-henna-50/70 border-henna-400 text-stone-900 shadow-sm"
                          : "bg-stone-50/60 border-stone-200 text-stone-700 hover:bg-stone-50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleAddon(addon.id)}
                        className="mt-1 w-4 h-4 rounded text-henna-700 focus:ring-henna-600 border-stone-300"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-stone-900 text-sm sm:text-base">{addon.title}</span>
                          <span className="font-serif font-bold text-sm sm:text-base text-stone-900">
                            +₹{addon.price}
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-stone-600 mt-0.5">{addon.desc}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Event Details */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/90 shadow-subtle space-y-4">
              <label className="block text-xs sm:text-sm font-bold text-stone-900 uppercase tracking-wider">
                3. Event & Contact Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <label className="text-xs sm:text-sm text-stone-700 font-semibold block mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-3.5 py-2.5 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-henna-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-stone-700 font-semibold block mb-1.5">
                    Phone / WhatsApp Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-3.5 py-2.5 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-henna-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-stone-700 font-semibold block mb-1.5">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-3.5 py-2.5 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-henna-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs sm:text-sm text-stone-700 font-semibold block mb-1.5">
                    Location in Lucknow
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Gomti Nagar, Lucknow"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-3.5 py-2.5 text-stone-900 font-medium focus:outline-none focus:ring-2 focus:ring-henna-700"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Live Price Summary & Checkout */}
          <div className="lg:col-span-5 space-y-5 lg:sticky lg:top-24">
            
            {/* Price Breakdown Card */}
            <div className="bg-stone-900 text-stone-100 rounded-2xl p-6 border border-stone-800 shadow-lift">
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-champagne-300">
                  Estimated Summary
                </span>
                <span className="text-xs bg-stone-800 text-stone-300 px-2.5 py-1 rounded-md font-medium">
                  Live Calculation
                </span>
              </div>

              <div className="py-5 space-y-3 text-sm text-stone-300">
                <div className="flex justify-between items-center">
                  <span>Base Service ({activeService.title}):</span>
                  <span className="font-mono font-bold text-white text-base">
                    ₹{calculation.baseTotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {calculation.addonsCost > 0 && (
                  <div className="flex justify-between items-center">
                    <span>Add-ons Total:</span>
                    <span className="font-mono font-bold text-white text-base">
                      +₹{calculation.addonsCost.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-center pt-2 border-t border-stone-800 text-stone-400">
                  <span>Subtotal:</span>
                  <span className="font-mono text-base">
                    ₹{calculation.subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                {calculation.discount > 0 && (
                  <div className="flex justify-between items-center text-emerald-400 font-semibold">
                    <span>Discount ({appliedCoupon?.code}):</span>
                    <span className="font-mono text-base">
                      -₹{calculation.discount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
              </div>

              {/* Final Amount */}
              <div className="pt-4 border-t border-stone-800 flex items-baseline justify-between">
                <div>
                  <span className="text-xs sm:text-sm text-stone-400 block font-medium">Total Payable</span>
                  <span className="text-xs text-stone-500">Includes all doorstep taxes</span>
                </div>
                <div className="font-serif text-3xl font-bold text-champagne-200">
                  ₹{calculation.finalTotal.toLocaleString("en-IN")}
                </div>
              </div>

              {/* Coupon Form */}
              <div className="mt-5 pt-4 border-t border-stone-800">
                {appliedCoupon ? (
                  <div className="bg-emerald-950/70 border border-emerald-800 text-emerald-300 text-sm px-4 py-2.5 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2 truncate">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-mono font-bold">{appliedCoupon.code}</span>
                      <span className="text-xs text-emerald-200">({appliedCoupon.title})</span>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-stone-400 hover:text-white text-xs underline ml-2 flex-shrink-0 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyPromo} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 bg-stone-800/80 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 uppercase font-mono focus:outline-none focus:ring-1 focus:ring-champagne-400 font-semibold"
                    />
                    <button
                      type="submit"
                      className="bg-champagne-100 hover:bg-champagne-200 text-champagne-950 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-xs text-rose-400 mt-1.5 font-medium">{couponError}</p>
                )}
              </div>

              {/* WhatsApp Submit CTA */}
              <div className="mt-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base py-3.5 px-4 rounded-xl shadow-subtle transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Booking on WhatsApp</span>
                </a>
                <p className="text-xs text-stone-400 text-center mt-2.5">
                  Direct connection with Anushka Yadav. No automated spam.
                </p>
              </div>
            </div>

            {/* UPI Advance Slot Booking Box */}
            <UpiPaymentSection onCopied={(msg) => onNotify && onNotify(msg, "info")} />

          </div>

        </div>

      </div>
    </div>
  );
}
