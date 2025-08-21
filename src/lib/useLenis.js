"use client";

import Lenis from "lenis";
import { useEffect } from "react";

export default function useLenis() {
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      // Add more options for better compatibility
      smoothTouch: false, // Disable on touch devices if needed
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
}
