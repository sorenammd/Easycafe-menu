"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    href: "/",
    label: "خانه",
    route: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 9.75 12 4l9 5.75V19a2 2 0 0 1-2 2h-4v-6H9v6H5a2 2 0 0 1-2-2V9.75Z"
      />
    ),
  },
  {
    href: "/#categories",
    label: "دسته‌ها",
    route: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4H9v5H4V6.5ZM15 4h2.5A2.5 2.5 0 0 1 20 6.5V9h-5V4ZM4 15h5v5H6.5A2.5 2.5 0 0 1 4 17.5V15Zm11 0h5v2.5a2.5 2.5 0 0 1-2.5 2.5H15v-5Z"
      />
    ),
  },
  {
    href: "/#menu",
    label: "آیتم‌ها",
    route: "/",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 5h10M7 12h10M7 19h10M4 5h.01M4 12h.01M4 19h.01"
      />
    ),
  },
  {
    href: "/connect",
    label: "کانکت",
    route: "/connect",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 5.5c0 7.18 5.82 13 13 13h1.5a1 1 0 0 0 1-1v-2.45a1 1 0 0 0-.74-.97l-3.06-.77a1 1 0 0 0-1.03.3l-.67.82a1 1 0 0 1-1.09.3 10.52 10.52 0 0 1-6.47-6.47 1 1 0 0 1 .3-1.09l.82-.67a1 1 0 0 0 .3-1.03l-.77-3.06A1 1 0 0 0 6.95 2H4.5a1 1 0 0 0-1 1v2.5Z"
      />
    ),
  },
] as const;

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-4 left-1/2 z-30 w-[calc(100%-2rem)] max-w-[408px] -translate-x-1/2"
    >
      <div className="mx-auto flex items-center justify-between rounded-full border border-orange-500/18 bg-black/80 px-3 py-3 shadow-[0_24px_48px_rgba(0,0,0,0.4)] ring-1 ring-white/6 backdrop-blur-md">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className={`flex min-w-[68px] flex-col items-center gap-1.5 rounded-full px-3 py-2 text-center transition-colors ${pathname === item.route
              && pathname === item.href
              ? "bg-orange-500 text-white shadow-[0_12px_24px_rgba(255,106,0,0.3)]"
              : "text-white/72 hover:text-white"
              }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              {item.icon}
            </svg>
            <span className="text-[0.68rem] font-semibold">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
