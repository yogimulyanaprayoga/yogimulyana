// import clsxm from "@/lib/clsxm";

import clsx from "clsx";
import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

export default function CustomLink({
  children,
  className = "",
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        "animated-underline custom-link inline-flex items-center font-medium",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary-200",
        "border-b border-dotted border-dark hover:border-black/0",
        className
      )}
    >
      <span className="dark:bg-gradient-to-tr dark:from-[#66ffdb] dark:to-[#57cbff] dark:bg-clip-text dark:text-transparent">
        {children}
      </span>
    </UnstyledLink>
  );
}
