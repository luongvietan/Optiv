"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AVATARS = [
  "https://i.pravatar.cc/128?img=12",
  "https://i.pravatar.cc/128?img=32",
  "https://i.pravatar.cc/128?img=47",
];

export function AiProductivitySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineARef = useRef<HTMLSpanElement>(null);
  const lineBRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const lineA = lineARef.current;
    const lineB = lineBRef.current;
    const card = cardRef.current;
    if (!section || !lineA || !lineB || !card) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        })
        .from(lineA, {
          opacity: 0,
          x: -56,
          filter: "blur(8px)",
          duration: 0.75,
          ease: "power3.out",
        })
        .from(
          lineB,
          {
            opacity: 0,
            x: 56,
            filter: "blur(8px)",
            duration: 0.75,
            ease: "power3.out",
          },
          "-=0.55",
        )
        .from(
          card,
          {
            opacity: 0,
            y: 48,
            scale: 0.94,
            rotateX: 6,
            transformOrigin: "50% 80%",
            duration: 0.85,
            ease: "power3.out",
          },
          "-=0.45",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={lp.sectionCompact}
      aria-labelledby="ai-productivity-heading"
    >
      <div className="mx-auto w-full text-center">
        <h2
          id="ai-productivity-heading"
          className={cn(lp.headingSection, "mb-5")}
        >
          <span ref={lineARef} className="block text-black">
            AI Productivity ensures every task, message, and workflow is handled
          </span>
          <span ref={lineBRef} className={cn("mt-1 block", lp.gradientText)}>
            automatically, anytime, anywhere.
          </span>
        </h2>

        <div className="mx-auto mt-12 max-w-3xl md:mt-14 [perspective:1200px]">
          <div
            ref={cardRef}
            className={cn(
              "flex flex-col gap-6 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:px-8 sm:py-4",
              lp.card,
            )}
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:text-left">
              <div className="flex shrink-0 -space-x-2.5">
                {AVATARS.map((src, i) => (
                  <div
                    key={src}
                    className={cn(
                      "relative h-11 w-11 overflow-hidden rounded-full border-2 border-white ring-1 ring-gray-100",
                      i === 0 && "z-10",
                      i === 1 && "z-20",
                      i === 2 && "z-30",
                    )}
                  >
                    <Image
                      src={src}
                      alt=""
                      width={44}
                      height={44}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="space-y-0.5">
                <p className="text-base font-semibold text-black">
                  Join thousands using AI daily
                </p>
                <p className={lp.muted}>
                  Get your AI Assistant in one click
                </p>
              </div>
            </div>

            <Link href="/signup" className={cn(lp.btnPrimary, "shrink-0")}>
              Get Your Assistant
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
