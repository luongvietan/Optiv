import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import Image from "next/image";
import Link from "next/link";

const AVATARS = [
  "https://i.pravatar.cc/128?img=12",
  "https://i.pravatar.cc/128?img=32",
  "https://i.pravatar.cc/128?img=47",
];

export function AiProductivitySection() {
  return (
    <section
      className={lp.sectionCompact}
      aria-labelledby="ai-productivity-heading"
    >
      <div className="mx-auto w-full text-center">
        <h2
          id="ai-productivity-heading"
          className={cn(lp.headingSection, "mb-5")}
        >
          <span className="block text-black">
            AI Productivity ensures every task, message, and workflow is handled
          </span>
          <span className={cn("mt-1 block", lp.gradientText)}>
            automatically, anytime, anywhere.
          </span>
        </h2>

        <div className="mx-auto mt-12 max-w-3xl md:mt-14">
          <div
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
