export function CtaSection() {
  return (
    <section id="cta" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="rounded-3xl border border-black/5 bg-zinc-50 px-6 py-12 text-center dark:border-white/10 dark:bg-zinc-900/50 sm:px-12">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Ready to start?
        </h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400">
          Replace this with your primary call to action.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Primary action
          </a>
        </div>
      </div>
    </section>
  );
}
