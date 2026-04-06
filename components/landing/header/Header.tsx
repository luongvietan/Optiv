import { lp } from "@/lib/landing/styles";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header
      className="animate-fade-in-up px-6 py-4"
      style={{ opacity: 0, animationDelay: "0.1s" }}
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            priority
          />
          <span className="text-lg font-semibold text-black">OptEx</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
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

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-700 transition-colors hover:text-black"
          >
            Login
          </Link>
          <Link href="/signup" className={lp.btnPrimarySm}>
            Get started free
          </Link>
        </div>
      </div>
    </header>
  );
}
