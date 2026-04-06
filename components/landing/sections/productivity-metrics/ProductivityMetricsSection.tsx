"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const METRICS = [
  {
    value: "4x",
    description: "4x Faster Task Completion",
  },
  {
    value: "96%",
    description: "96% Less Manual Work",
  },
  {
    value: "2.5x",
    description: "2.5x Higher Efficiency",
  },
] as const;

export function ProductivityMetricsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const list = listRef.current;
    if (!section || !header || !list) return;

    const items = list.querySelectorAll("li");

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        })
        .from(header.children, {
          opacity: 0,
          y: 36,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
        })
        .from(
          items,
          {
            opacity: 0,
            y: 56,
            rotateX: -12,
            transformOrigin: "50% 100%",
            duration: 0.7,
            stagger: {
              each: 0.14,
              from: "center",
            },
            ease: "back.out(1.2)",
          },
          "-=0.25",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={lp.section}
      aria-labelledby="productivity-metrics-heading"
    >
      <div className={cn(lp.container, "text-center [perspective:1000px]")}>
        <div ref={headerRef}>
          <h2 id="productivity-metrics-heading" className={lp.headingSectionMd}>
            Boost Your Productivity Like Never Before
          </h2>
          <p className={cn(lp.leadCenter, "mt-5")}>
            Designed to simplify your workflow — day or night — without constant
            effort.
          </p>
        </div>

        <ul ref={listRef} className="mt-12 grid gap-5 text-left md:mt-16 md:grid-cols-3 md:gap-6">
          {METRICS.map((item) => (
            <li
              key={item.description}
              className="rounded-2xl bg-neutral-50 px-6 py-8 md:px-8 md:py-10"
            >
              <p className={cn(lp.muted, "font-medium")}>Up-to</p>
              <p className="mt-3 text-4xl font-normal tabular-nums tracking-tight text-black md:text-5xl">
                {item.value}
              </p>
              <p className={cn(lp.muted, "mt-3 leading-snug md:text-base")}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
