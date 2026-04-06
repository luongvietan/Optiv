"use client";

import { Lenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Đồng bộ Lenis với GSAP ScrollTrigger (theo hướng dẫn chính thức của Lenis).
 * Phải nằm trong <Lenis root>.
 */
function GsapLenisSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(ticker);
    };
  }, [lenis]);

  return null;
}

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Lenis
      root
      options={{
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
      }}
    >
      <GsapLenisSync />
      {children}
    </Lenis>
  );
}
