import { cn } from "@/lib/utils";

function LogoItems() {
  return (
    <>
      <li className="mx-4 flex shrink-0 items-center sm:mx-8">
        <span className="text-sm font-semibold tracking-[0.2em] text-gray-800 md:text-base">
          INTERSCOPE
        </span>
      </li>
      <li className="mx-4 flex shrink-0 items-center gap-1.5 sm:mx-8">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[10px] text-white">
          ●
        </span>
        <span className="text-sm font-bold text-gray-900 md:text-base">SPOTIFY</span>
      </li>
      <li className="mx-4 flex shrink-0 items-center gap-2 font-medium text-gray-800 sm:mx-8 md:text-base">
        <span className="grid grid-cols-3 gap-0.5" aria-hidden>
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} className="h-1 w-1 rounded-full bg-gray-400" />
          ))}
        </span>
        Nexera
      </li>
      <li className="mx-4 flex shrink-0 items-center sm:mx-8">
        <span className="font-serif text-xl italic text-gray-900 md:text-2xl">
          M3
        </span>
      </li>
      <li className="mx-4 flex shrink-0 items-center gap-2 text-sm font-medium text-gray-800 sm:mx-8 md:text-base">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gray-900 text-xs font-semibold">
          LC
        </span>
        LAURA COLE
      </li>
      <li className="mx-4 flex shrink-0 items-center gap-1.5 text-sm font-medium lowercase text-gray-800 sm:mx-8 md:text-base">
        <span className="flex gap-0.5" aria-hidden>
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <span className="h-1 w-1 rounded-full bg-gray-500" />
          <span className="h-1 w-1 rounded-full bg-gray-500" />
        </span>
        vertex
      </li>
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
      <div className="flex w-max shrink-0 flex-nowrap animate-infinite-scroll">
        <ul className="flex items-center justify-center md:justify-start [&_img]:max-w-none sm:[&_li]:mx-8 [&_li]:mx-4">
          <LogoItems />
        </ul>
        <ul
          className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none"
          aria-hidden
        >
          <LogoItems />
        </ul>
      </div>
    </div>
  );
}
