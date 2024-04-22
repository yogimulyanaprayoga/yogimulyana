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

  //   const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;

  return (
    // <figure
    //   className={clsx(className, {
    //     "overflow-hidden rounded shadow dark:shadow-none": !noStyle,
    //     "mx-auto w-full": mdx && +width <= 800,
    //   })}
    //   style={{
    //     ...(mdx && +width <= 800 ? { maxWidth: width } : {}),
    //     ...style,
    //   }}
    //   {...rest}
    // >
    //   <div
    //     style={{
    //       position: "relative",
    //       height: 0,
    //     }}
    //     className="img-blur"
    //   >
    //     <style jsx>{`
    //       .img-blur::before {
    //         content: "";
    //         position: absolute;
    //         inset: 0;
    //         filter: blur(20px);
    //         z-index: 0;
    //         background-image: url(${urlBlurred});
    //         background-position: center center;
    //         background-size: 100%;
    //       }
    //     `}</style>
    //     <div className="absolute left-0 top-0">
    //       <Image
    //         width={
    //           typeof width === "number"
    //             ? resizedToMaxWidth
    //               ? Math.min(width, RESIZE_MAX_WIDTH)
    //               : width
    //             : undefined
    //         }
    //         height={
    //           typeof height === "number"
    //             ? resizedToMaxWidth
    //               ? (RESIZE_MAX_WIDTH * +height) / +width
    //               : height
    //             : undefined
    //         }
    //         unoptimized
    //         src={url}
    //         alt={alt}
    //         title={title || alt}
    //       />
    //     </div>
    //   </div>
    // </figure>

    <Image
      src={url}
      alt={alt}
      width={200}
      height={48}
      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
    />
  );
}
