const items = [
  { title: "Fast", body: "Describe a benefit." },
  { title: "Reliable", body: "Another benefit." },
  { title: "Simple", body: "Third benefit." },
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="border-y border-black/5 bg-zinc-50/80 py-20 dark:border-white/10 dark:bg-zinc-950/40"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Features
        </h2>
        <ul className="mt-12 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-black/5 bg-background p-6 dark:border-white/10"
            >
              <h3 className="font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
