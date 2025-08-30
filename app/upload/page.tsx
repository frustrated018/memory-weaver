"use client";

import { useState } from "react";
import { UploadButton } from "@/utils/uploadthing";
import Link from "next/link";
import { toast } from "sonner";
import { Navabar } from "@/components/custom/navbar";
import Image from "next/image";

export default function UploadMemoriesPage() {
  const [images, setImages] = useState<string[]>([]);

  return (
    <section className="relative min-h-screen w-full">
      <Navabar />
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Page Content */}
      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl flex-col items-center justify-center px-4 pt-28 pb-12">
        {/* Heading */}
        <header className="text-center">
          <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">
            Upload Memories
          </h1>
          <p className="mt-3 max-w-prose text-center text-sm text-white/70 md:text-base">
            Add photos, clips, or notes. We’ll help you search them later by how
            they felt.
          </p>
        </header>

        {/* Uploader Panel */}
        <section className="mt-8 w-full">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] backdrop-blur">
            <div className="flex flex-col items-center gap-4">
              <UploadButton
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                  const urls = res.map((file) => file.fileUrl || file.ufsUrl);
                  setImages((prev) => [...prev, ...urls]);
                  toast.success("Upload Completed!");
                }}
                onUploadError={(error: Error) => {
                  console.error("[v0] Upload error:", error);
                  toast.error(`Upload failed: ${error.message}`);
                }}
              />
              <p className="text-xs text-white/60">
                Tip: You can select multiple files. PNG, JPG, GIF, and MP4
                supported.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {images.length > 0 && (
          <section className="mt-10 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((url, idx) => (
              <Image
              height={1000}
              width={1000}
                key={idx}
                src={url}
                unoptimized
                alt={`Memory ${idx}`}
                className="w-full h-48 object-cover rounded-lg shadow-lg"
              />
            ))}
          </section>
        )}

        {/* Secondary actions */}
        <div className="mt-6 flex items-center gap-4">
          <Link
            href="/search"
            className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Search Memories
          </Link>
        </div>
      </section>
    </section>
  );
}
