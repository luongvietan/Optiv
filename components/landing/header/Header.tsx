"use client";

import { cn } from "@/lib/utils";
import { lp } from "@/lib/landing/styles";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, closeMenu]);

  const mobileMenu =
    portalReady &&
    createPortal(
      <div
        id={menuId}
        className={cn(
          "fixed inset-0 z-[200] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={cn(
            "absolute inset-0 z-0 bg-black/40 transition-opacity duration-200",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu"
          onClick={closeMenu}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 z-10 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] pt-[max(0.75rem,env(safe-area-inset-top))] sm:pl-6 sm:pr-6">
            <span className="min-w-0 text-sm font-semibold text-black">Menu</span>
            <button
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-gray-900 transition-colors hover:bg-gray-100"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <X className="h-6 w-6" strokeWidth={2} aria-hidden />
            </button>
          </div>

          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto overscroll-contain px-4 py-4 sm:px-6"
            aria-label="Mobile"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base text-gray-800 transition-colors hover:bg-gray-50"
              onClick={closeMenu}
            >
              Solutions
              <ChevronDown
                className="h-4 w-4 shrink-0 text-gray-500"
                aria-hidden
              />
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base text-gray-800 transition-colors hover:bg-gray-50"
              onClick={closeMenu}
            >
              For Teams
              <ChevronDown
                className="h-4 w-4 shrink-0 text-gray-500"
                aria-hidden
              />
            </button>
            <a
              href="#about"
              className="rounded-xl px-3 py-3 text-base text-gray-800 transition-colors hover:bg-gray-50"
              onClick={closeMenu}
            >
              About Us
            </a>
            <a
              href="#learn"
              className="rounded-xl px-3 py-3 text-base text-gray-800 transition-colors hover:bg-gray-50"
              onClick={closeMenu}
            >
              Learn Hub
            </a>
          </nav>
        </div>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100/80 bg-white/95 backdrop-blur-sm">
      <div
        className="mx-auto flex w-full max-w-7xl animate-fade-in-up items-center justify-between gap-2 py-3 pl-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))] sm:gap-3 sm:py-4 sm:pl-[max(1.5rem,env(safe-area-inset-left))] sm:pr-[max(1.5rem,env(safe-area-inset-right))]"
        style={{ opacity: 0, animationDelay: "0.1s" }}
      >
        <Link
          href="/"
          className="flex min-w-0 shrink items-center gap-2"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 shrink-0 object-contain"
            priority
          />
          <span className="truncate text-base font-semibold text-black sm:text-lg">
            OptEx
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:gap-8 md:flex"
          aria-label="Main"
        >
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-black"
          >
            Solutions
            <ChevronDown className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            className="flex items-center gap-1 text-sm text-gray-700 transition-colors hover:text-black"
          >
            For Teams
            <ChevronDown className="h-4 w-4" aria-hidden />
          </button>
          <a
            href="#about"
            className="text-sm text-gray-700 transition-colors hover:text-black"
          >
            About Us
          </a>
          <a
            href="#learn"
            className="text-sm text-gray-700 transition-colors hover:text-black"
          >
            Learn Hub
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
          <Link
            href="/login"
            className="shrink-0 text-xs text-gray-700 transition-colors hover:text-black sm:text-sm"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={cn(
              lp.btnPrimarySm,
              "whitespace-nowrap px-3 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm",
            )}
          >
            Get started free
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-800 transition-colors hover:bg-gray-100 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? (
              <X className="h-6 w-6" strokeWidth={2} aria-hidden />
            ) : (
              <Menu className="h-6 w-6" strokeWidth={2} aria-hidden />
            )}
          </button>
        </div>
      </div>

      {mobileMenu}
    </header>
  );
}
