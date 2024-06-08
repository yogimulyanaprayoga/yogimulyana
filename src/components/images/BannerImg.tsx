"use client";
import { buildUrl } from "cloudinary-build-url";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

type BannerImgType = {
  publicId: string;
  height: string | number;
  width: string | number;
  alt: string;
  title?: string;
  className?: string;
  noStyle?: boolean;
  rounded?: string;

  mdx?: boolean;
} & React.ComponentPropsWithoutRef<"figure">;

export default function CloudinaryImg({
  publicId,
  height,
  width,
  alt,
  title,
  className,
  noStyle = false,
  rounded,
  mdx = false,
  style,
  ...rest
}: BannerImgType) {
  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: "theodorusclarence",
    },
    transformations: {
      effect: {
        name: "blur:1000",
      },
      quality: 1,
    },
  });
  const url = buildUrl(publicId, {
    cloud: {
      cloudName: "dr3uhvsaz",
    },
  });

  const [isLoading, setLoading] = useState(true);

  return (
    <div
      className={clsx(
        "overflow-hidden",
        isLoading ? "animate-pulse" : "",
        rounded
      )}
    >
      <Image
        src={url}
        alt={alt}
        width={200}
        height={48}
        loading="lazy"
        quality={100}
        onLoad={() => setLoading(false)}
        {...rest}
        className={clsx(
          "duration-700 ease-in-out",
          isLoading
            ? "scale-[1.02] blur-xl grayscale"
            : "scale-100 blur-0 grayscale-0",
          rounded,
          className
        )}
        // className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
    </div>
  );
}
