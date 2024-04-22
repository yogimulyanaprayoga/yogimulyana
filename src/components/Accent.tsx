import clsx from "clsx";
import * as React from "react";

type AccentType = React.ComponentPropsWithoutRef<"span">;

export default function Accent({ children, className }: AccentType) {
  return (
    <span
      className={clsx(
        className,
        "transition-colors",
        "bg-[#66ffdb] bg-clip-text text-transparent",
        "bg-[#23a085] dark:bg-clip-text dark:text-transparent"
      )}
    >
      {children}
    </span>
  );
}
