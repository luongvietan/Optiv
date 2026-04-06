import { cn } from "@/lib/utils";

const PARTNER_LOGOS = [
  { src: "/logos/interscope.svg", alt: "Interscope Records" },
  { src: "/logos/spotify.svg", alt: "Spotify" },
  { src: "/logos/bmw.svg", alt: "BMW" },
  { src: "/logos/googlecloud.svg", alt: "Google Cloud" },
] as const;

const LOGO_BOX =
  "flex h-10 w-[7.5rem] shrink-0 items-center justify-center md:h-11 md:w-[8.5rem]";

function LogoItems({ decorative = false }: { decorative?: boolean }) {
  return (
    <>
      {PARTNER_LOGOS.map(({ src, alt }) => (
        <div key={src} className={LOGO_BOX}>
          <img
            src={src}
            alt={decorative ? "" : alt}
            loading="lazy"
            decoding="async"
            draggable={false}
            className={cn(
              "max-h-full max-w-full object-contain object-center",
              "grayscale brightness-0 contrast-100",
            )}
          />
        </div>
      ))}
    </>
  );
}

export default function InfinityBandScroll() {
  return (
    <div
      className={cn(
        "w-full min-w-0 overflow-hidden py-8",
        "mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]",
      )}
    >
      <div className="animate-infinite-scroll">
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-16">
          <LogoItems />
        </div>
        <div
          className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-16"
          aria-hidden
        >
          <LogoItems decorative />
        </div>
      </div>
    </div>
  );
}
