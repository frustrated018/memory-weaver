import { Vortex } from "@/components/ui/vortex";
import { Navabar } from "@/components/custom/navbar";
import { Hero } from "@/components/custom/hero";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navabar />
      <Vortex
        backgroundColor="#000000"
        containerClassName="min-h-screen"
        className="relative flex min-h-screen w-full flex-col items-center justify-center"
      >
        <div className="z-10 pointer-events-auto">
          <Hero />
        </div>

        {/* Anchors to satisfy nav targets */}
        <div id="features" className="sr-only" />
        <div id="upload" className="sr-only" />
        <div id="search" className="sr-only" />
        <div id="about" className="sr-only" />
        <div id="demo" className="sr-only" />
      </Vortex>
    </main>
  );
}
