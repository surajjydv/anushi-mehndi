import { BUSINESS_CONFIG } from "@/constants/businessConfig";

export function generateBookingWhatsAppUrl({
  name,
  phone,
  serviceTitle,
  eventDate,
  location,
  peopleCount,
  addons = [],
  finalTotal,
  couponCode,
}) {
  const lines = [
    `*Hello Anushka Ji, I would like to book a Mehndi Appointment:*`,
    ``,
    `👤 *Name:* ${name || "Client"}`,
    `📞 *Phone:* ${phone || "Not provided"}`,
    `🎨 *Service:* ${serviceTitle}`,
    `📅 *Event Date:* ${eventDate || "Flexible"}`,
    `📍 *Location in Lucknow:* ${location || "Lucknow"}`,
    `👥 *Number of People:* ${peopleCount}`,
  ];

  if (addons.length > 0) {
    lines.push(`✨ *Selected Add-ons:* ${addons.join(", ")}`);
  }

  if (couponCode) {
    lines.push(`🏷️ *Coupon Applied:* ${couponCode}`);
  }

  lines.push(`💰 *Estimated Total:* ₹${finalTotal.toLocaleString("en-IN")}`);
  lines.push(``);
  lines.push(`Please confirm if this date & time slot is available! 🙏`);

  const fullText = lines.join("\n");
  return `https://wa.me/91${BUSINESS_CONFIG.phone}?text=${encodeURIComponent(fullText)}`;
}
