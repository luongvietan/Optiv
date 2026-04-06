"use client";

import { site } from "@/lib/landing/site";
import { lp } from "@/lib/landing/styles";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";
import Image from "next/image";
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
      <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-black">
        <Image
          src="/images/logo.png"
          alt=""
          fill
          className="object-contain p-1.5 invert"
          sizes="40px"
        />
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
    <div className="min-w-0">
      <h3 className="text-xs font-semibold leading-tight text-black sm:text-sm">
        {title}
      </h3>
      <ul className="mt-2 space-y-2 sm:mt-3 sm:space-y-2.5 md:mt-4 md:space-y-3">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className="text-[0.7rem] leading-snug text-gray-600 transition-colors hover:text-black sm:text-sm sm:leading-normal"
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

      <div className="relative pb-[max(2.5rem,env(safe-area-inset-bottom))] pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-12 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))] md:pt-16 lg:pl-[max(2.5rem,env(safe-area-inset-left))] lg:pr-[max(2.5rem,env(safe-area-inset-right))]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 text-center lg:flex-row lg:items-start lg:justify-between lg:gap-10 lg:text-left xl:gap-14">
          <div className="min-w-0 w-full lg:flex-1">
            <div className="flex justify-center lg:justify-start">
              <FooterLogo />
            </div>

            <h3 className="mt-8 text-sm font-semibold text-black">Subscribe</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-gray-600 lg:mx-0">
              Join our newsletter to stay up to date on features and releases.
            </p>

            <form
              className="mx-auto mt-5 flex w-full max-w-md flex-col gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm sm:flex-row sm:items-center sm:gap-2 sm:rounded-full sm:py-1.5 sm:pl-3 sm:pr-1.5 lg:mx-0"
              action="#"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex min-h-10 min-w-0 flex-1 items-center gap-2 px-1 sm:px-0">
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
              </div>
              <button
                type="submit"
                className={cn(lp.btnPrimarySm, "w-full shrink-0 sm:w-auto")}
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-gray-600 lg:text-left">
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

          <div className="grid w-full grid-cols-3 gap-x-2 gap-y-8 text-center sm:gap-x-6 sm:gap-y-10 md:gap-x-10 lg:flex lg:min-w-0 lg:flex-1 lg:justify-between lg:gap-10 lg:text-left">
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="Product" links={productLinks} />
            <LinkColumn title="Resources" links={resourceLinks} />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl border-t border-gray-200 pt-8 sm:mt-14">
          <div className="flex flex-col items-center gap-4 text-center text-sm text-gray-600 md:flex-row md:items-center md:justify-between md:text-left">
            <p className="max-w-md md:max-w-none">
              © {year}{" "}
              <span className="font-semibold text-black">{site.name} AI</span>{" "}
              All rights reserved.
            </p>
            <nav
              className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-3 md:justify-end"
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
