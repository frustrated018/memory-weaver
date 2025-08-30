"use client"

import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-24 text-center md:pt-32">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-gray-300">Memory Weaver</p>
      <h1 className="text-pretty text-3xl font-semibold leading-tight text-white md:text-5xl">
        Search your memories by feelings, not folders.
      </h1>
      <p className="mt-4 max-w-2xl text-balance text-sm leading-6 text-gray-300 md:text-base">
        Find the moment you&apos;re thinking of by the way it felt—joy, awe, bittersweet—without digging through dates
        or directory trees.
      </p>

      <div className="mt-8 flex items-center gap-3">
        <Link
          href="/upload"
          className="rounded-md bg-cyan-500 px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
        >
          Try Demo
        </Link>
        <Link
          href="/features"
          className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white/90 transition-colors hover:text-white hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
