"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function ViewOnce({
  eventName,
  children,
}: {
  eventName: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || fired.current) return;
        fired.current = true;
        trackEvent(eventName);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [eventName]);

  return <div ref={ref}>{children}</div>;
}
