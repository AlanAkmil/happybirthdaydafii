"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/ucapan", label: "Ucapan" },
  { href: "/kenangan", label: "Kenangan" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-30 flex justify-center px-4 pt-4">
      <div className="flex gap-1 rounded-full border-2 border-ink/10 bg-white/80 p-1.5 shadow-md backdrop-blur">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 font-display text-sm font-600 transition-colors sm:px-5 sm:text-base ${
                active
                  ? "bg-pink text-white shadow-sm"
                  : "text-ink/70 hover:bg-pink-soft/60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
