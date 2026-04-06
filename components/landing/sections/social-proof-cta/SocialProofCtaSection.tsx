"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CTA_BG_SRC = "/images/landing/CTA.png";

export function SocialProofCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stats = statsRef.current;
    const metric = metricRef.current;
    const ctaBlock = ctaBlockRef.current;
    if (!section || !stats || !metric || !ctaBlock) return;

    const ctaCopy = ctaBlock.querySelectorAll("h3, p, a");
    const statsIntro = [
      stats.querySelector("h2"),
      stats.querySelector("p"),
      stats.querySelector(".mt-6"),
    ].filter(Boolean) as HTMLElement[];

    const scrollDefaults = {
      toggleActions: "play none none none" as const,
      invalidateOnRefresh: true,
    };

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: stats,
            start: "top 92%",
            ...scrollDefaults,
          },
        })
        .fromTo(
          statsIntro,
          { opacity: 0, y: 26 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.09,
            ease: "power2.out",
            immediateRender: false,
          },
        )
        .fromTo(
          metric,
          { opacity: 0, scale: 0.82 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.35)",
            immediateRender: false,
          },
          "-=0.1",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ctaBlock,
            start: "top 92%",
            ...scrollDefaults,
          },
        })
        .fromTo(
          ctaBlock,
          { opacity: 0, y: 72, clipPath: "inset(10% 0 10% 0)" },
          {
            opacity: 1,
            y: 0,
            clipPath: "inset(0% 0 0% 0)",
            duration: 0.95,
            ease: "power3.out",
            immediateRender: false,
          },
        )
        .fromTo(
          ctaCopy,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            immediateRender: false,
          },
          "-=0.55",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 120);
    return () => {
      cancelAnimationFrame(id);
      window.clearTimeout(t);
    };
  }, []);

  return (
    <section ref={sectionRef} className={lp.section} aria-labelledby="social-proof-heading">
      <div ref={statsRef} className={cn(lp.container, "relative z-10")}>
        <h2 id="social-proof-heading" className={lp.headingSectionMd}>
          Don&apos;t Just Take Our Word for it
        </h2>
        <p className={cn(lp.mutedBase, "mt-2 font-medium")}>
          9,677+ Active Users
        </p>

        <div className="mt-6 h-px w-full bg-gray-200" aria-hidden />

        <div
          ref={metricRef}
          className="js-social-metric mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-2"
        >
          <span className="text-4xl font-normal tabular-nums tracking-tight text-black md:text-5xl lg:text-6xl">
            26,900,789
          </span>
          <span className={cn(lp.mutedBase, "md:text-lg")}>
            Tasks Completed with OptEx AI
          </span>
        </div>
      </div>

      <div className={cn(lp.container, "relative z-0 mt-16 md:mt-24")}>
        <div className="relative z-0">
          <div
            className="pointer-events-none absolute -inset-6 z-0 md:-inset-10"
            aria-hidden
          >
            <div className="absolute left-1/2 top-6 h-[42%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/40 blur-3xl md:top-10" />
            <div className="absolute bottom-6 left-1/2 h-[42%] w-[72%] -translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-200/40 blur-3xl md:bottom-10" />
            <div className="absolute left-6 top-1/2 h-[72%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/40 blur-3xl md:left-10" />
            <div className="absolute right-6 top-1/2 h-[72%] w-[42%] translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/40 blur-3xl md:right-10" />
          </div>
          <div
            ref={ctaBlockRef}
            className={cn(
              "relative z-10 min-h-[300px] md:min-h-[340px] md:rounded-[2.5rem]",
              lp.roundedMedia,
            )}
          >
            <Image
              src={CTA_BG_SRC}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/25" />

            <div className="relative z-10 flex min-h-[300px] flex-col items-center justify-center px-6 py-14 text-center md:min-h-[340px] md:px-12 md:py-16">
              <h3 className="max-w-xl text-balance text-2xl font-normal leading-[1.1] tracking-tight text-white md:text-3xl lg:text-4xl">
                Start Your Productivity Journey Today
              </h3>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-white/95 md:text-xl">
                Work smarter. Save time. Achieve more.
              </p>
              <Link href="/signup" className={cn(lp.btnOnDark, "mt-8")}>
                Try AI for Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
