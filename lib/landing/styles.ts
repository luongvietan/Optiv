/**
 * Design tokens aligned with {@link components/landing/sections/hero/HeroSection}.
 * Display: font-normal + tracking-tight + leading-[1.1]. Lead body: text-gray-600.
 * Primary CTA: rounded-full bg-black px-8 py-3 text-base font-medium hover:bg-gray-800.
 */
export const lp = {
  /** Standard section (not hero): white bg + horizontal padding aligned with hero inner `px-6` */
  section: "bg-white px-6 py-20 md:py-24 lg:py-28",
  /** Tighter vertical rhythm (e.g. below hero) */
  sectionCompact: "bg-white px-6 pb-20 pt-10 md:pb-28 md:pt-14",

  /** Readable column width for marketing blocks */
  container: "mx-auto w-full max-w-6xl",

  /**
   * Section titles — same voice as hero h1: font-normal, not bold.
   * Scale one step below hero’s 6xl→80px for interior sections.
   */
  headingSection:
    "text-balance font-normal tracking-tight leading-[1.1] text-4xl text-black md:text-5xl lg:text-6xl",
  headingSectionMd:
    "text-balance font-normal tracking-tight leading-[1.1] text-3xl text-black md:text-4xl lg:text-5xl",
  headingSectionSm:
    "text-balance font-normal tracking-tight leading-[1.1] text-2xl text-black md:text-3xl",

  /** Relaxed leading + padding: tight `leading-[1.1]` + bg-clip-text clips glyph tops in some browsers */
  gradientText:
    "bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text pb-0.5 pt-1 text-transparent leading-snug",

  /** Hero subline: `text-lg text-gray-600 md:text-xl` */
  lead: "text-lg leading-relaxed text-gray-600 md:text-xl",
  leadCenter:
    "mx-auto max-w-2xl text-center text-lg leading-relaxed text-gray-600 md:text-xl",

  muted: "text-sm text-gray-600",
  mutedBase: "text-base text-gray-600",

  /** Hero primary CTA — “Begin Free Trial” */
  btnPrimary:
    "inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800",
  /** Header / compact black pills */
  btnPrimarySm:
    "inline-flex items-center justify-center rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800",

  /** Light cards / bars (AI productivity CTA row) */
  card: "rounded-2xl border border-gray-100 bg-white shadow-sm",
  cardMuted: "rounded-2xl bg-neutral-100",

  /** Large imagery blocks (hero video uses rounded-3xl) */
  roundedMedia: "overflow-hidden rounded-3xl",

  /** Light CTA on photo / dark overlay (inverse of btnPrimary) */
  btnOnDark:
    "inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-medium text-black transition-colors hover:bg-neutral-100",
} as const;
