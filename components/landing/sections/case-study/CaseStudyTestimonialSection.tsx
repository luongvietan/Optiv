import Image from "next/image";
import Link from "next/link";

const BG_SRC = "/images/landing/About.png";
const PORTRAIT_SRC =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85";

const LOGO_SRC = "/images/logo.png";

export function CaseStudyTestimonialSection() {
  return (
    <section
      className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2"
      aria-labelledby="case-study-quote"
    >
      <div className="relative min-h-[520px] md:min-h-[600px] lg:min-h-[640px]">
        <Image
          src={BG_SRC}
          alt=""
          fill
          className="z-0 object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-black/20 to-black/50"
          aria-hidden
        />

        <div className="relative z-[2] flex min-h-[520px] flex-col md:min-h-[600px] lg:min-h-[640px]">
          {/* Full-width rule inside content stack — avoids being covered by Image layers */}
          <div
            className="mx-6 h-[1px] shrink-0 bg-white md:mx-10 lg:mx-16"
            aria-hidden
          />

          <blockquote
            id="case-study-quote"
            className="max-w-xl px-6 pb-10 pt-10 text-left md:max-w-2xl md:px-10 md:pt-14 lg:px-16 lg:pt-16"
          >
            <p className="text-2xl font-normal leading-[1.1] tracking-tight text-white md:text-3xl lg:text-4xl">
              "OptEx AI has completely changed how we work. Now we manage tasks
              faster and stay productive 24/7."
            </p>
          </blockquote>

          <div className="mt-auto px-6 pb-10 pt-4 md:px-10 lg:px-16 lg:pb-14">
            <div className="flex w-full justify-end">
              <div className="flex w-full flex-col items-stretch gap-6 sm:w-auto sm:max-w-none sm:flex-row sm:items-stretch sm:justify-end sm:gap-0">
                {/* Identity card — equal halves, rounded-3xl */}
                <div className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/35 shadow-[0_8px_40px_rgba(0,0,0,0.25)] sm:mx-0 sm:max-w-none sm:w-[min(100%,20rem)] md:w-[22rem] lg:w-[24rem]">
                  <div className="grid min-h-[9.5rem] grid-cols-2 md:min-h-[11rem]">
                    <div className="relative min-h-[9.5rem] min-w-0 md:min-h-[11rem]">
                      <Image
                        src={PORTRAIT_SRC}
                        alt=""
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 50vw, 11rem"
                      />
                    </div>
                    <div className="relative flex min-h-[9.5rem] min-w-0 items-center justify-center bg-white px-4 md:min-h-[11rem]">
                      <Image
                        src={LOGO_SRC}
                        alt=""
                        width={160}
                        height={160}
                        className="h-[4.5rem] w-[4.5rem] object-contain md:h-[5.25rem] md:w-[5.25rem]"
                      />
                    </div>
                  </div>
                </div>

                {/* Vertical rule + right column */}
                <div
                  className="hidden w-px shrink-0 self-stretch bg-white sm:mx-6 sm:block md:mx-8"
                  aria-hidden
                />

                <div className="flex w-full flex-col items-center gap-6 sm:w-auto sm:items-end sm:justify-end sm:self-stretch">
                  <div className="w-full max-w-sm rounded-2xl bg-white px-5 py-4 text-left shadow-[0_4px_24px_rgba(0,0,0,0.12)] sm:max-w-[17.5rem] sm:py-4">
                    <p className="text-lg font-bold leading-tight tracking-tight text-black">
                      Wayne Grimshaw
                    </p>
                    <p className="mt-1 text-sm font-normal leading-snug text-black">
                      Head of Operations
                    </p>
                  </div>
                  <Link
                    href="/case-studies"
                    className="inline-flex h-12 min-w-[12.5rem] items-center justify-center rounded-full bg-white px-8 text-[15px] font-semibold tracking-tight text-black shadow-[0_4px_24px_rgba(0,0,0,0.1)] transition-colors hover:bg-neutral-100"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
