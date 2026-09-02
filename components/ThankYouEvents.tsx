"use client";

import { useEffect } from "react";
import { trackEvent, trackMetaLead } from "@/lib/analytics";

export function ThankYouEvents() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("preserve_north_mattamy_com_ty_tracked")) return;
      sessionStorage.setItem("preserve_north_mattamy_com_ty_tracked", "1");
    } catch {
      /* continue */
    }
    trackEvent("form_submit");
    trackMetaLead();
  }, []);
  return null;
}
