import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";

const METRICS = [
  {
    value: "4x",
    description: "4x Faster Task Completion",
  },
  {
    value: "96%",
    description: "96% Less Manual Work",
  },
  {
    value: "2.5x",
    description: "2.5x Higher Efficiency",
  },
] as const;

export function ProductivityMetricsSection() {
  return (
    <section className={lp.section} aria-labelledby="productivity-metrics-heading">
      <div className={cn(lp.container, "text-center")}>
        <h2 id="productivity-metrics-heading" className={lp.headingSectionMd}>
          Boost Your Productivity Like Never Before
        </h2>
        <p className={cn(lp.leadCenter, "mt-5")}>
          Designed to simplify your workflow — day or night — without constant
          effort.
        </p>

        <ul className="mt-12 grid gap-5 text-left md:mt-16 md:grid-cols-3 md:gap-6">
          {METRICS.map((item) => (
            <li
              key={item.description}
              className="rounded-2xl bg-neutral-50 px-6 py-8 md:px-8 md:py-10"
            >
              <p className={cn(lp.muted, "font-medium")}>Up-to</p>
              <p className="mt-3 text-4xl font-normal tabular-nums tracking-tight text-black md:text-5xl">
                {item.value}
              </p>
              <p className={cn(lp.muted, "mt-3 leading-snug md:text-base")}>
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
