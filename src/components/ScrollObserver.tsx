"use client";

import { useReveal, useBarActivation } from "@/hooks";

export function ScrollObserver() {
  useReveal();
  useBarActivation();
  return null;
}
