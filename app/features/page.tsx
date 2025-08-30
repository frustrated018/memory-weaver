import type React from "react";
import type { Metadata } from "next";
import {
  Search,
  Images,
  Wand2,
  Upload,
  Baseline as Timeline,
  MessageSquare,
} from "lucide-react";
import { Navabar } from "@/components/custom/navbar";

export const metadata: Metadata = {
  title: "Features • Memory Weaver",
  description: "Search your memories by feelings, not folders.",
};

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const FEATURES: Feature[] = [
  {
    title: "Emotion‑Based Search",
    description: "Find photos, videos, and notes by the feelings they evoke.",
    icon: Search,
  },
  {
    title: "Smart Memory Curation",
    description: "Automatically organizes memories into meaningful clusters.",
    icon: Wand2,
  },
  {
    title: "Upload & Explore",
    description: "Add photos and clips easily and revisit them anytime.",
    icon: Upload,
  },
  {
    title: "Interactive Timeline",
    description: "Browse your memories in a smooth, scrollable timeline view.",
    icon: Timeline,
  },
  {
    title: "Echo AI Chat",
    description:
      "Ask questions like “What did I feel on my first trip to the beach?”",
    icon: MessageSquare,
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navabar />
      {/* Hero */}
      <section className="mx-auto max-w-3xl px-4 pt-24 pb-10 text-center md:pt-28">
        <h1 className="mt-0 text-balance text-3xl font-semibold md:text-5xl">
          Search your memories by feelings, not folders.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/70">
          A modern way to recall what matters—organized by how moments felt, not
          just when they happened.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="/upload"
            className="inline-flex items-center rounded-md bg-cyan-500/20 px-5 py-2.5 text-sm font-medium text-cyan-300 ring-1 ring-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.25)] transition hover:bg-cyan-500/30 hover:text-cyan-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Start Saving Memories
          </a>
          <a
            href="/search"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Explore Search
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}

          {/* Bonus illustrative tile */}
          <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.04]">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30">
                <Images className="h-5 w-5 text-cyan-400" aria-hidden />
              </div>
              <h3 className="text-base font-medium">All Your Media</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Works with photos, short clips, notes, and more—kept private and
              organized for you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ title, description, icon: Icon }: Feature) {
  return (
    <article className="group rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-white/[0.04]">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/15 ring-1 ring-cyan-400/30">
          <Icon className="h-5 w-5 text-cyan-400" aria-hidden />
        </div>
        <h3 className="text-base font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-white/70">{description}</p>
      <div className="sr-only">Feature: {title}</div>
    </article>
  );
}
