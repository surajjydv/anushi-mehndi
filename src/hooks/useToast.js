"use client";

import { useState, useCallback } from "react";

export function useToast() {
  const [toast, setToast] = useState({ show: false, message: "", type: "info" });

  const showToast = useCallback((message, type = "info") => {
    setToast({ show: true, message, type });
    const timer = setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  return { toast, showToast, hideToast };
}
