"use client";
import Image from "next/image";
import { useState } from "react";
import { ImagePlus } from "lucide-react";
import type { ImageAsset } from "@/lib/content";

type Props = { asset: ImageAsset; sizes: string; className?: string; priority?: boolean; placeholderLabel?: string };

/** next/image with a graceful, clearly-labelled placeholder if the file is not in /public/images yet. */
export function SafeImage({ asset, sizes, className = "", priority, placeholderLabel }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div role="img" aria-label={`Placeholder: ${placeholderLabel ?? asset.src}`}
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-turquoise-soft p-6 text-center text-twilight ${className}`}>
        <ImagePlus className="h-8 w-8" aria-hidden />
        <p className="text-sm font-semibold">Photo to be added</p>
        <p className="break-all text-xs text-twilight/70">{asset.src}</p>
      </div>
    );
  }
  return (
    <Image src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} sizes={sizes}
      priority={priority} onError={() => setFailed(true)} className={className} />
  );
}
