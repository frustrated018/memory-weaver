"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { User } from "lucide-react";

export function Navabar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "upload", label: "Upload Memories" },
    { href: "search", label: "Search" },
    { href: "features", label: "Features" },
  ];

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-black/30"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link
          href="#home"
          className="font-mono text-base font-bold uppercase tracking-widest text-white md:text-lg"
        >
          Memory Weaver
        </Link>

        {/* Links */}
        <ul className="hidden list-none items-center gap-6 md:flex">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded text-sm text-gray-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center">
          <Button variant={"ghost"} size={"icon"}>
            <User className="size-6"/>
          </Button>
        </div>
      </div>
    </nav>
  );
}
