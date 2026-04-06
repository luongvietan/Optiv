"use client";

import InfinityBandScroll from "@/components/landing/InfinityBandScroll";
import { lp } from "@/lib/landing/styles";
import {
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Filter,
  Rocket,
  Star,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

type TabId = "analyse" | "train" | "testing" | "deploy";

const TABS: { id: TabId; label: string; Icon: typeof BarChart3 }[] = [
  { id: "analyse", label: "Analyse", Icon: BarChart3 },
  { id: "train", label: "Train", Icon: BookOpen },
  { id: "testing", label: "Testing", Icon: Filter },
  { id: "deploy", label: "Deploy", Icon: Rocket },
];

function TabPanels({
  activeTab,
  onSelect,
}: {
  activeTab: TabId;
  onSelect: (id: TabId) => void;
}) {
  return (
    <>
      <div className="rounded-2xl bg-gray-100 p-1.5 md:hidden">
        <div
          className="grid grid-cols-2 grid-rows-2 gap-1.5"
          role="tablist"
          aria-label="Hero workflow steps"
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => onSelect(tab.id)}
                className={`flex min-h-[4.25rem] w-full min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-center text-xs font-medium leading-tight transition-colors ${
                  active
                    ? "bg-white text-black shadow-sm ring-1 ring-black/5"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                <span className="max-w-full truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden w-full rounded-full bg-gray-100 p-1 md:flex md:items-center md:gap-1">
        {TABS.map((tab) => {
          const active = activeTab === tab.id;
          const Icon = tab.Icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelect(tab.id)}
              className={`flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "bg-white text-black shadow-sm ring-1 ring-black/5"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden />
              {tab.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

function VideoOverlays({ activeTab }: { activeTab: TabId }) {
  const steps = ["Connect", "Configure", "Sync", "Launch"];
  const trainMetrics = [
    { label: "Loss", value: "0.02" },
    { label: "Epoch", value: "12/18" },
    { label: "Accuracy", value: "94%" },
    { label: "ETA", value: "3m" },
  ];
  const deployItems = [
    "Security scan passed",
    "Staging verified",
    "CDN propagated",
    "Health checks green",
  ];

  return (
    <div
      key={activeTab}
      className="animate-fade-in-overlay absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/20 to-transparent p-2 sm:p-4"
      style={{ opacity: 0 }}
    >
      <div
        className="animate-slide-up-overlay w-[min(100%,28rem)] max-w-full overflow-visible rounded-xl bg-white p-3 shadow-2xl sm:rounded-2xl sm:p-6"
        style={{ opacity: 0 }}
      >
        {activeTab === "analyse" ? (
          <div>
            <h3 className="text-sm font-semibold leading-snug text-black sm:text-lg">
              Set Up Your AI Workspace
            </h3>
            <p className="mt-0.5 text-[0.65rem] text-gray-600 sm:mt-1 sm:text-sm">
              Wizard · Step 1 of 4
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 sm:mt-4 sm:h-2">
              <div
                className="h-full rounded-full bg-purple-600"
                style={{ width: "25%" }}
              />
            </div>
            <ul className="mt-2 space-y-1.5 sm:mt-6 sm:space-y-3">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-[0.7rem] leading-tight text-gray-800 sm:gap-3 sm:text-sm"
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] font-semibold sm:h-7 sm:w-7 sm:text-xs ${
                      i === 0
                        ? "bg-purple-100 text-purple-800"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {activeTab === "train" ? (
          <div>
            <h3 className="text-sm font-semibold leading-snug text-black sm:text-lg">
              AI Model Training
            </h3>
            <p className="mt-0.5 text-[0.65rem] text-gray-600 sm:mt-1 sm:text-sm">
              Fine-tune in progress
            </p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-200 sm:mt-4 sm:h-2">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: "67%" }}
              />
            </div>
            <div className="mt-2 grid grid-cols-2 gap-1.5 sm:mt-6 sm:gap-3">
              {trainMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-lg border border-gray-100 bg-gray-50 px-1.5 py-1 sm:rounded-xl sm:px-3 sm:py-2"
                >
                  <p className="text-[0.6rem] text-gray-500 sm:text-xs">
                    {m.label}
                  </p>
                  <p className="text-[0.7rem] font-semibold tabular-nums text-black sm:text-sm">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "testing" ? (
          <div className="text-center">
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 sm:h-14 sm:w-14">
              <CheckCircle2
                className="h-5 w-5 text-emerald-600 sm:h-8 sm:w-8"
                aria-hidden
              />
            </div>
            <h3 className="mt-1.5 text-sm font-semibold text-black sm:mt-4 sm:text-lg">
              Test Suite Results
            </h3>
            <p className="mt-0.5 text-xl font-semibold tabular-nums text-emerald-600 sm:mt-2 sm:text-3xl">
              127/127
            </p>
            <p className="text-[0.65rem] text-gray-600 sm:text-sm">
              All tests passed
            </p>
          </div>
        ) : null}

        {activeTab === "deploy" ? (
          <div>
            <h3 className="text-sm font-semibold leading-snug text-black sm:text-lg">
              Deploy to Production
            </h3>
            <p className="mt-0.5 text-[0.65rem] text-gray-600 sm:mt-1 sm:text-sm">
              Review checklist before go-live
            </p>
            <ul className="mt-2 space-y-1 sm:mt-5 sm:space-y-3">
              {deployItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-1.5 text-[0.7rem] leading-snug text-gray-800 sm:gap-2 sm:text-sm"
                >
                  <Check className="h-3 w-3 shrink-0 text-emerald-600 sm:h-4 sm:w-4" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-2 w-full rounded-full bg-black py-1.5 text-[0.7rem] font-medium text-white transition-colors hover:bg-gray-800 sm:mt-6 sm:py-2.5 sm:text-sm"
            >
              Deploy Now
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabId>("analyse");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const bandRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const startCycle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => {
        const i = TABS.findIndex((t) => t.id === prev);
        return TABS[(i + 1) % TABS.length].id;
      });
    }, 4000);
  }, []);

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startCycle]);

  useLayoutEffect(() => {
    const badge = badgeRef.current;
    const title = titleRef.current;
    const lead = leadRef.current;
    const cta = ctaRef.current;
    const tabs = tabsRef.current;
    const video = videoRef.current;
    const band = bandRef.current;
    if (
      !badge ||
      !title ||
      !lead ||
      !cta ||
      !tabs ||
      !video ||
      !band
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });
      tl.from(badge, { opacity: 0, y: 22, duration: 0.55 })
        .from(
          title.querySelectorAll(":scope > span"),
          { opacity: 0, y: 36, duration: 0.65, stagger: 0.1 },
          "-=0.25",
        )
        .from(lead, { opacity: 0, y: 24, duration: 0.5 }, "-=0.35")
        .from(cta, { opacity: 0, y: 18, duration: 0.45 }, "-=0.3")
        .from(tabs, { opacity: 0, y: 20, duration: 0.5 }, "-=0.25")
        .from(
          video,
          { opacity: 0, scale: 0.96, y: 28, duration: 0.8 },
          "-=0.2",
        )
        .from(band, { opacity: 0, y: 20, duration: 0.55 }, "-=0.45");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const selectTab = useCallback(
    (id: TabId) => {
      setActiveTab(id);
      startCycle();
    },
    [startCycle],
  );

  return (
    <section ref={sectionRef} id="hero" className="bg-white">
      <div className={lp.heroShell}>
        <div className="relative z-10">
          <div
            ref={badgeRef}
            className="mb-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 will-change-transform"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded border border-gray-300">
              <Star className="h-3.5 w-3.5 fill-black text-black" aria-hidden />
            </span>
            <span className="text-sm font-medium text-black">
              4.9 rating from 18.3K+ users
            </span>
          </div>

          <h1
            ref={titleRef}
            className="mb-5 text-3xl font-normal leading-[1.1] tracking-tight sm:text-4xl md:text-7xl lg:text-[80px]"
          >
            <span className="block text-black">Work Smarter. Move Faster.</span>
            <span className="mt-1 block bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
              AI Powers You Up.
            </span>
          </h1>

          <p
            ref={leadRef}
            className="mx-auto mb-8 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl"
          >
            Intelligent automation syncs with the tools you love to streamline
            tasks, boost output, and save time.
          </p>

          <div ref={ctaRef} className="mb-12 flex justify-center px-1">
            <a href="#cta" className={lp.btnPrimary}>
              Begin Free Trial
            </a>
          </div>

          <div ref={tabsRef} className="mx-auto mb-8 max-w-3xl">
            <TabPanels activeTab={activeTab} onSelect={selectTab} />
          </div>
        </div>

        <div
          ref={videoRef}
          className="relative z-0 h-[min(56vw,22rem)] min-h-[260px] sm:h-[400px] md:h-[500px]"
        >
          <div
            className="pointer-events-none absolute -inset-6 z-0 md:-inset-10"
            aria-hidden
          >
            {/* Mid-edge glows — symmetric on all four sides */}
            <div className="absolute left-1/2 top-6 h-[42%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-200/40 blur-3xl md:top-10" />
            <div className="absolute bottom-6 left-1/2 h-[42%] w-[72%] -translate-x-1/2 translate-y-1/2 rounded-full bg-fuchsia-200/40 blur-3xl md:bottom-10" />
            <div className="absolute left-6 top-1/2 h-[72%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/40 blur-3xl md:left-10" />
            <div className="absolute right-6 top-1/2 h-[72%] w-[42%] translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/40 blur-3xl md:right-10" />
          </div>
          <div className="relative z-10 h-full overflow-hidden rounded-3xl">
            <video
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/images/landing/hero.mp4"
            />
            <VideoOverlays activeTab={activeTab} />
          </div>
        </div>

        <div ref={bandRef} className="mt-16 sm:mt-20 md:mt-24">
          <InfinityBandScroll />
        </div>
      </div>
    </section>
  );
}
