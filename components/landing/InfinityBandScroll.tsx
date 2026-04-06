import { cn } from "@/lib/utils";

const PARTNER_LOGOS = [
  { src: "/logos/interscope.svg", alt: "Interscope Records" },
  { src: "/logos/spotify.svg", alt: "Spotify" },
  { src: "/logos/bmw.svg", alt: "BMW" },
  { src: "/logos/googlecloud.svg", alt: "Google Cloud" },
] as const;

const LOGO_BOX =
  "flex h-10 w-[7.5rem] shrink-0 items-center justify-center md:h-11 md:w-[8.5rem]";

const LOGO_LIST =
  "m-0 flex shrink-0 list-none flex-nowrap items-center gap-10 p-0 sm:gap-14 md:gap-16 pr-10 sm:pr-14 md:pr-16";

function LogoList({ decorative = false }: { decorative?: boolean }) {
  return (
    <>
      {PARTNER_LOGOS.map(({ src, alt }) => (
        <li key={src} className={LOGO_BOX}>
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
        </li>
      ))}
    </>
  );
}

export default function InfinityBandScroll() {
  return (
    <div
      className={cn(
        "inline-flex w-full min-w-0 flex-nowrap overflow-hidden py-8",
        "mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-200px),transparent_100%)]",
      )}
    >
      <div
        className={cn(
          "flex w-max min-w-0 flex-nowrap animate-infinite-scroll motion-reduce:animate-none",
          "[backface-visibility:hidden]",
        )}
      >
        <ul className={LOGO_LIST}>
          <LogoList />
        </ul>
        <ul className={LOGO_LIST} aria-hidden>
          <LogoList decorative />
        </ul>
      </div>
    </div>
  );
}
