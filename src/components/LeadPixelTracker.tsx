"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export default function LeadPixelTracker() {
  useEffect(() => {
    window.fbq?.("track", "Lead");
  }, []);

  return null;
}
