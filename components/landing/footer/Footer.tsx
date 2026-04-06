"use client";

import { site } from "@/lib/landing/site";
import { lp } from "@/lib/landing/styles";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#pricing", label: "Pricing" },
  { href: "#updates", label: "Updates" },
] as const;

const resourceLinks = [
  { href: "#help", label: "Help Center" },
  { href: "#docs", label: "Documentation" },
  { href: "#community", label: "Community" },
  { href: "#tutorials", label: "Tutorials" },
] as const;

function FooterLogo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 text-white"
          fill="currentColor"
          aria-hidden
        >
          <rect x="4" y="14" width="2.5" height="6" rx="0.5" />
          <rect x="8.5" y="10" width="2.5" height="10" rx="0.5" />
          <rect x="13" y="12" width="2.5" height="8" rx="0.5" />
          <rect x="17.5" y="6" width="2.5" height="14" rx="0.5" />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-black">
        {site.name} AI
      </span>
    </Link>
  );
}

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-black">{title}</h3>
      <ul className="mt-4 space-y-3">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-sm text-gray-600 transition-colors hover:text-black"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-gray-100 bg-white">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-violet-100/[0.35] via-fuchsia-100/[0.12] to-transparent blur-2xl"
        aria-hidden
      />

      <div className="relative px-6 pb-10 pt-14 md:pt-16 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-4 lg:gap-10 xl:gap-14">
          <div className="lg:max-w-sm">
            <FooterLogo />

            <h3 className="mt-8 text-sm font-semibold text-black">Subscribe</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form
              className="mt-5 flex w-full max-w-md items-center gap-2 rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-1.5 shadow-sm"
              action="#"
              onSubmit={(e) => e.preventDefault()}
            >
              <Mail
                className="ml-1 h-5 w-5 shrink-0 text-gray-400"
                strokeWidth={1.75}
                aria-hidden
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
                className="min-w-0 flex-1 bg-transparent text-sm text-black placeholder:text-gray-400 focus:outline-none"
              />
              <button type="submit" className={cn(lp.btnPrimarySm, "shrink-0")}>
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-gray-600">
              By subscribing you agree to our{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-2 hover:text-black"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <LinkColumn title="Quick Links" links={quickLinks} />
          <LinkColumn title="Product" links={productLinks} />
          <LinkColumn title="Resources" links={resourceLinks} />
        </div>

        <div className="mx-auto mt-14 max-w-6xl border-t border-gray-200 pt-8">
          <div className="flex flex-col gap-4 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
            <p>
              © {year}{" "}
              <span className="font-semibold text-black">{site.name} AI</span>{" "}
              All rights reserved.
            </p>
            <nav
              className="flex flex-wrap items-center gap-x-3 gap-y-1 md:justify-end"
              aria-label="Legal"
            >
              <Link
                href="/terms"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Terms of Service
              </Link>
              <span className="text-gray-300" aria-hidden>
                |
              </span>
              <Link
                href="/privacy"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-300" aria-hidden>
                |
              </span>
              <Link
                href="/compliance"
                className="text-gray-600 transition-colors hover:text-black"
              >
                Compliance
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
