"use client";

import { useState, useMemo } from "react";
import { MEHNDI_SERVICES, MAKEUP_SERVICES, BOOKING_ADDONS } from "@/constants/servicesData";
import { COUPONS_DATA } from "@/constants/couponsData";

export function useBookingCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState("budget-both-hands");
  const [peopleCount, setPeopleCount] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  const allServices = useMemo(() => {
    return [...MEHNDI_SERVICES, ...MAKEUP_SERVICES];
  }, []);

  const activeService = useMemo(() => {
    return allServices.find((s) => s.id === selectedServiceId) || MEHNDI_SERVICES[0];
  }, [allServices, selectedServiceId]);

  const toggleAddon = (addonId) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId) ? prev.filter((id) => id !== addonId) : [...prev, addonId]
    );
  };

  const applyCoupon = (codeToApply) => {
    const code = (codeToApply || couponCode).trim().toUpperCase();
    setCouponError("");

    if (!code) {
      setAppliedCoupon(null);
      return { success: false, message: "Please enter a coupon code" };
    }

    const found = COUPONS_DATA[code];
    if (found) {
      setAppliedCoupon(found);
      setCouponCode(code);
      return { success: true, message: `Applied: ${found.title}` };
    } else {
      setAppliedCoupon(null);
      setCouponError("Invalid promo code");
      return { success: false, message: "Invalid promo code" };
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    setCouponError("");
  };

  const calculation = useMemo(() => {
    const baseRate = activeService ? activeService.price : 600;
    let baseTotal = baseRate;

    if (activeService.id === "sangeet-family") {
      baseTotal = baseRate * Math.max(1, peopleCount);
    }

    const addonsCost = selectedAddons.reduce((sum, addonId) => {
      const match = BOOKING_ADDONS.find((a) => a.id === addonId);
      return sum + (match ? match.price : 0);
    }, 0);

    const subtotal = baseTotal + addonsCost;

    let discount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.type === "percent") {
        discount = Math.round((subtotal * appliedCoupon.value) / 100);
      } else if (appliedCoupon.type === "flat") {
        discount = Math.min(subtotal, appliedCoupon.value);
      }
    }

    const finalTotal = Math.max(0, subtotal - discount);

    return {
      baseRate,
      baseTotal,
      addonsCost,
      subtotal,
      discount,
      finalTotal,
    };
  }, [activeService, peopleCount, selectedAddons, appliedCoupon]);

  return {
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
  };
}
