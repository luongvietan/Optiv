"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, ChevronRight, Rocket, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const MEADOW_SRC = "/images/landing/BuildPlan.png";

export function BuildPlanAiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const copy = copyRef.current;
    const visual = visualRef.current;
    if (!section || !copy || !visual) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        })
        .from(copy, {
          opacity: 0,
          x: -64,
          duration: 0.85,
          ease: "power3.out",
        })
        .from(
          visual,
          {
            opacity: 0,
            x: 72,
            rotateY: -8,
            transformOrigin: "left center",
            duration: 0.95,
            ease: "power3.out",
          },
          "-=0.65",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={lp.section}
      aria-labelledby="build-plan-ai-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 [perspective:1400px] lg:grid-cols-2 lg:gap-16">
        <div
          ref={copyRef}
          className="text-center lg:text-left"
        >
          <h2 id="build-plan-ai-heading" className={lp.headingSectionMd}>
            Build, Plan, and Execute with AI
          </h2>
          <p className={cn(lp.lead, "mx-auto mt-5 max-w-xl lg:mx-0")}>
            AI helps you manage time, tasks, and resources efficiently.
          </p>

          <div
            className={cn(
              "mt-8 px-6 py-8 text-center md:px-10 md:py-10",
              lp.cardMuted,
            )}
          >
            <p className="text-lg font-medium text-black md:text-xl">
              Think Beyond Limits
            </p>
            <p className={cn(lp.muted, "mt-2 md:text-base")}>
              Automate ideas into execution instantly.
            </p>
          </div>

          <p className={cn(lp.muted, "mt-5")}>Think outside the box</p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link href="/signup" className={lp.btnPrimary}>
              Get Started — Free
            </Link>
          </div>
        </div>

        <div
          ref={visualRef}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gradient-to-br from-pink-300/35 via-purple-300/25 to-sky-300/35 blur-3xl"
            aria-hidden
          />
          <div
            className={cn(
              "relative mx-auto aspect-square w-full max-w-lg lg:mx-0 lg:aspect-[5/6] lg:max-h-[540px] lg:max-w-none",
              lp.roundedMedia,
            )}
          >
            <Image
              src={MEADOW_SRC}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
              <div className="w-full max-w-[320px] rounded-2xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] sm:max-w-sm sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium leading-snug text-black sm:text-lg">
                    Set Up Your AI Workspace
                  </h3>
                  <button
                    type="button"
                    className="rounded-md p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" strokeWidth={2} />
                  </button>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Rocket
                    className="h-5 w-5 shrink-0 text-purple-600"
                    aria-hidden
                  />
                  <div className="relative h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="absolute inset-y-0 left-0 w-[25%] rounded-full bg-gradient-to-r from-pink-500 to-purple-600"
                      aria-hidden
                    />
                  </div>
                  <span className="shrink-0 text-xs font-semibold tabular-nums text-gray-700">
                    25%
                  </span>
                </div>

                <ul className="mt-6 space-y-4">
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </span>
                    <span className="pt-0.5 text-sm font-semibold text-black">
                      Select AI Agent Type
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-black text-xs font-semibold text-black">
                      2
                    </span>
                    <span className="pt-0.5 text-sm font-normal text-black">
                      Auto Onboarding…
                    </span>
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <div className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-medium text-gray-400">
                        3
                      </span>
                      <span className="pt-0.5 text-sm text-gray-400">
                        Activate AI Assistant
                      </span>
                    </div>
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-300" />
                  </li>
                  <li className="flex items-start justify-between gap-2">
                    <div className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-medium text-gray-400">
                        4
                      </span>
                      <span className="pt-0.5 text-sm text-gray-400">
                        Start Using Agent
                      </span>
                    </div>
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-gray-300" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
