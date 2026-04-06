"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CTA_BG_SRC = "/images/landing/CTA.png";

const METRIC_TARGET = 26_900_789;

export function SocialProofCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const metricRef = useRef<HTMLDivElement>(null);
  const metricNumberRef = useRef<HTMLSpanElement>(null);
  const ctaBlockRef = useRef<HTMLDivElement>(null);
  const ctaImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const stats = statsRef.current;
    const divider = dividerRef.current;
    const metric = metricRef.current;
    const metricNumber = metricNumberRef.current;
    const ctaBlock = ctaBlockRef.current;
    const ctaImage = ctaImageRef.current;
    if (
      !section ||
      !stats ||
      !divider ||
      !metric ||
      !metricNumber ||
      !ctaBlock ||
      !ctaImage
    ) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      metricNumber.textContent = METRIC_TARGET.toLocaleString("en-US");
      return;
    }

    const ctaCopy = ctaBlock.querySelectorAll("h3, p, a");
    const statsIntro = [
      stats.querySelector("h2"),
      stats.querySelector("p"),
    ].filter(Boolean) as HTMLElement[];

    const scrollDefaults = {
      toggleActions: "play none none none" as const,
      invalidateOnRefresh: true,
    };

    const ctx = gsap.context(() => {
      const counter = { val: 0 };
      let lastDisplayed = -1;

      const statsTl = gsap.timeline({
        scrollTrigger: {
          trigger: stats,
          start: "top 88%",
          ...scrollDefaults,
        },
      });

      statsTl
        .fromTo(
          statsIntro,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.58,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true,
            immediateRender: false,
          },
        )
        .fromTo(
          divider,
          { scaleX: 0, opacity: 0.4 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.65,
            ease: "power2.inOut",
            transformOrigin: "50% 50%",
            force3D: true,
            immediateRender: false,
          },
          "-=0.32",
        )
        .fromTo(
          metric,
          { opacity: 0, y: 24, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.68,
            ease: "power3.out",
            force3D: true,
            immediateRender: false,
            onStart: () => {
              counter.val = 0;
              lastDisplayed = -1;
              metricNumber.textContent = "0";
            },
          },
          "-=0.4",
        )
        .to(
          counter,
          {
            val: METRIC_TARGET,
            duration: 1.75,
            ease: "power2.out",
            onUpdate: () => {
              const n = Math.floor(counter.val);
              if (n !== lastDisplayed) {
                lastDisplayed = n;
                metricNumber.textContent = n.toLocaleString("en-US");
              }
            },
          },
          "<",
        );

      gsap
        .timeline({
          scrollTrigger: {
            trigger: ctaBlock,
            start: "top 88%",
            ...scrollDefaults,
          },
        })
        .fromTo(
          ctaImage,
          { scale: 1.04 },
          {
            scale: 1,
            duration: 1,
            ease: "power2.out",
            force3D: true,
            immediateRender: false,
          },
        )
        .fromTo(
          ctaBlock,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            force3D: true,
            immediateRender: false,
          },
          0,
        )
        .fromTo(
          ctaCopy,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.55,
            stagger: 0.1,
            ease: "power3.out",
            force3D: true,
            immediateRender: false,
          },
          "-=0.65",
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={lp.section} aria-labelledby="social-proof-heading">
      <div
        ref={statsRef}
        className={cn(lp.container, "relative z-10 text-center md:text-left")}
      >
        <h2 id="social-proof-heading" className={lp.headingSectionMd}>
          Don&apos;t Just Take Our Word for it
        </h2>
        <p className={cn(lp.mutedBase, "mt-2 font-medium")}>
          9,677+ Active Users
        </p>

        <div
          ref={dividerRef}
          className="mt-6 h-px w-full origin-center bg-gray-200"
          aria-hidden
        />

        <div
          ref={metricRef}
          className="js-social-metric mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-2"
        >
          <span
            ref={metricNumberRef}
            className="text-3xl font-normal tabular-nums tracking-tight text-black sm:text-4xl md:text-5xl lg:text-6xl"
          >
            26,900,789
          </span>
          <span className={cn(lp.mutedBase, "md:text-lg")}>
            Tasks Completed with Optiv AI
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
            <div
              ref={ctaImageRef}
              className="absolute inset-0 overflow-hidden"
              aria-hidden
            >
              <Image
                src={CTA_BG_SRC}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1152px) 100vw, 1152px"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/25" />

            <div className="relative z-10 flex min-h-[280px] flex-col items-center justify-center py-12 pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] text-center sm:min-h-[300px] sm:pl-6 sm:pr-6 md:min-h-[340px] md:px-12 md:py-16">
              <h3 className="max-w-xl text-balance text-xl font-normal leading-[1.1] tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
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
