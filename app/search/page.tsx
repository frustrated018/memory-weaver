"use client";

import { Navabar } from "@/components/custom/navbar";
import { MemoryImage, memoryImages } from "./memoryImages";
import { useMemo, useState } from "react";

const EMOTIONS = [
  "Nostalgia",
  "Joy",
  "Awe",
  "Melancholy",
  "Bittersweet",
  "Surprise",
  "Calm",
  "Longing",
  "Excitement",
] as const;

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return memoryImages.filter((img) => {
      const emotionOk =
        selected.size === 0 || img.tags.some((t) => selected.has(t));
      const textOk = q.length === 0 || img.alt.toLowerCase().includes(q);
      return emotionOk && textOk;
    });
  }, [selected, query]);

  function toggleEmotion(tag: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  return (
    <section className="relative min-h-screen bg-black text-white">
      <Navabar />
      <div className="mx-auto max-w-4xl px-4 pt-28 pb-20">
        <header className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">
            Memory Weaver
          </p>
          <h1 className="mt-2 text-balance text-3xl md:text-5xl font-semibold">
            Search by feelings, not folders.
          </h1>
          <p className="mt-3 text-pretty text-white/70">
            Type a memory or pick emotions to surface moments that match how it
            felt—joy, awe, nostalgia, and more.
          </p>
        </header>

        {/* Search Bar */}
        <form
          className="mx-auto mt-8 max-w-2xl"
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “beach at dusk”, “first bike”, or “nostalgia”…"
            className="w-full rounded-md bg-white/5 px-4 py-3 text-base outline-none ring-1 ring-white/10 placeholder:text-white/40 focus:bg-white/7 focus:ring-2 focus:ring-cyan-400 transition"
          />
        </form>

        {/* Emotion Chips */}
        <div className="mx-auto mt-5 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {EMOTIONS.map((tag) => {
            const active = selected.has(tag);
            return (
              <button
                key={tag}
                type="button"
                onClick={() => toggleEmotion(tag)}
                aria-pressed={active}
                className={[
                  "select-none rounded-full px-3.5 py-1.5 text-sm transition border ring-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400",
                  active
                    ? "border-cyan-400/60 bg-cyan-500/15 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                    : "border-white/15 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Results Grid */}
        <section className="mt-12">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
            {filtered.map((img: MemoryImage) => (
              <figure
                key={img.id}
                className="group overflow-hidden rounded-md border border-white/10 bg-white/5"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02] group-hover:opacity-95"
                />
                <figcaption className="flex items-center justify-between px-3 py-2 text-xs text-white/70">
                  <span className="line-clamp-1">{img.alt}</span>
                  <span aria-hidden className="text-cyan-300/80">
                    {img.tags[0]}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-8 text-center text-white/60">
              No memories match your search yet.
            </p>
          )}
        </section>
      </div>
    </section>
  );
}
