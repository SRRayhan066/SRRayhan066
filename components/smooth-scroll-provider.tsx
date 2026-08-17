"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";

// Lenis honors prefers-reduced-motion on its own (respectReducedMotion
// defaults to true), so no manual media-query handling is needed here.
const options: LenisOptions = {
  lerp: 0.09,
  wheelMultiplier: 1,
  // Route in-page nav links through Lenis, landing just clear of the panel top
  anchors: { offset: -24 },
};

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
