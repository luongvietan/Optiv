import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import Image from "next/image";
import Link from "next/link";

const CTA_BG_SRC = "/images/landing/CTA.png";

export function SocialProofCtaSection() {
  return (
    <section className={lp.section} aria-labelledby="social-proof-heading">
      <div className={lp.container}>
        <h2 id="social-proof-heading" className={lp.headingSectionMd}>
          Don&apos;t Just Take Our Word for it
        </h2>
        <p className={cn(lp.mutedBase, "mt-2 font-medium")}>
          9,677+ Active Users
        </p>

        <div className="mt-6 h-px w-full bg-gray-200" aria-hidden />

        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-4 sm:gap-y-2">
          <span className="text-4xl font-normal tabular-nums tracking-tight text-black md:text-5xl lg:text-6xl">
            26,900,789
          </span>
          <span className={cn(lp.mutedBase, "md:text-lg")}>
            Tasks Completed with OptEx AI
          </span>
        </div>
      </div>

      <div className={cn(lp.container, "mt-16 md:mt-24")}>
        <div className="relative">
          <div
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-pink-300/40 via-purple-300/30 to-sky-300/40 blur-3xl"
            aria-hidden
          />
          <div
            className={cn(
              "relative min-h-[300px] md:min-h-[340px] md:rounded-[2.5rem]",
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

            <div className="relative flex min-h-[300px] flex-col items-center justify-center px-6 py-14 text-center md:min-h-[340px] md:px-12 md:py-16">
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
