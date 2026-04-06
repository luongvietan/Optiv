"use client";

import InfinityBandScroll from "@/components/landing/InfinityBandScroll";
import {
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  Rocket,
  Star,
  Users,
} from "lucide-react";
import {
  Fragment,
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
  { id: "testing", label: "Testing", Icon: Users },
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
      <div className="rounded-lg bg-gray-100 p-1 md:hidden">
        <div className="grid grid-cols-2 gap-1">
          {TABS.map((tab) => {
            const active = activeTab === tab.id;
            const Icon = tab.Icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelect(tab.id)}
                className={`flex items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden rounded-lg bg-gray-100 p-1 md:flex md:items-center md:justify-center">
        {TABS.map((tab, i) => {
          const active = activeTab === tab.id;
          const Icon = tab.Icon;
          return (
            <Fragment key={tab.id}>
              {i > 0 ? (
                <span
                  className="mx-1 hidden h-5 w-px shrink-0 bg-gray-300 md:block"
                  aria-hidden
                />
              ) : null}
              <button
                type="button"
                onClick={() => onSelect(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-black shadow-sm"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" aria-hidden />
                {tab.label}
              </button>
            </Fragment>
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
      className="animate-fade-in-overlay absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/50 via-black/20 to-transparent p-4"
      style={{ opacity: 0 }}
    >
      <div
        className="animate-slide-up-overlay max-h-[90%] w-full max-w-md overflow-auto rounded-2xl bg-white p-6 shadow-2xl"
        style={{ opacity: 0 }}
      >
        {activeTab === "analyse" ? (
          <div>
            <h3 className="text-lg font-semibold text-black">
              Set Up Your AI Workspace
            </h3>
            <p className="mt-1 text-sm text-gray-600">Wizard · Step 1 of 4</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-purple-600"
                style={{ width: "25%" }}
              />
            </div>
            <ul className="mt-6 space-y-3">
              {steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-gray-800"
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
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
            <h3 className="text-lg font-semibold text-black">
              AI Model Training
            </h3>
            <p className="mt-1 text-sm text-gray-600">Fine-tune in progress</p>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: "67%" }}
              />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {trainMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2"
                >
                  <p className="text-xs text-gray-500">{m.label}</p>
                  <p className="text-sm font-semibold text-black">{m.value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {activeTab === "testing" ? (
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 className="h-8 w-8 text-emerald-600" aria-hidden />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-black">
              Test Suite Results
            </h3>
            <p className="mt-2 text-3xl font-semibold text-emerald-600">
              127/127
            </p>
            <p className="text-sm text-gray-600">All tests passed</p>
          </div>
        ) : null}

        {activeTab === "deploy" ? (
          <div>
            <h3 className="text-lg font-semibold text-black">
              Deploy to Production
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Review checklist before go-live
            </p>
            <ul className="mt-5 space-y-3">
              {deployItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-800"
                >
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-6 w-full rounded-full bg-black py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800"
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
      <div className="w-full px-6 pb-32 pt-24 text-center">
        <div
          ref={badgeRef}
          className="mb-8 inline-flex items-center gap-2 will-change-transform"
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
          className="mb-5 text-6xl font-normal leading-[1.1] tracking-tight md:text-7xl lg:text-[80px]"
        >
          <span className="block text-black">Work Smarter. Move Faster.</span>
          <span className="mt-1 block bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
            AI Powers You Up.
          </span>
        </h1>

        <p
          ref={leadRef}
          className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl"
        >
          Intelligent automation syncs with the tools you love to streamline
          tasks, boost output, and save time.
        </p>

        <div ref={ctaRef} className="mb-12">
          <a
            href="#cta"
            className="inline-block rounded-full bg-black px-8 py-3 text-base font-medium text-white transition-colors hover:bg-gray-800"
          >
            Begin Free Trial
          </a>
        </div>

        <div ref={tabsRef} className="mx-auto mb-8 max-w-3xl">
          <TabPanels activeTab={activeTab} onSelect={selectTab} />
        </div>

        <div
          ref={videoRef}
          className="relative h-[400px] overflow-hidden rounded-3xl md:h-[500px]"
        >
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

        <div ref={bandRef} className="mt-24">
          <InfinityBandScroll />
        </div>
      </div>
    </section>
  );
}
