"use client";

import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast({ toast, onClose }) {
  if (!toast || !toast.show) return null;

  const icons = {
    success: <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />,
    error: <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />,
    info: <Info className="w-4 h-4 text-henna-700 flex-shrink-0" />,
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
      <div className="bg-white text-stone-800 text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-lift border border-stone-200/90 flex items-center gap-2.5 max-w-sm">
        {icons[toast.type] || icons.info}
        <span className="font-medium text-stone-700">{toast.message}</span>
        {onClose && (
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-600 p-0.5 ml-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
