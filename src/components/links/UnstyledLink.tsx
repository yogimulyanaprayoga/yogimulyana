import clsx from "clsx";
import Link, { LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
} & LinkProps;

const UnstyledLink = ({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) => {
  const isNewTab =
    openNewTab !== undefined
      ? openNewTab
      : href && !href.startsWith("/") && !href.startsWith("#");

  if (!isNewTab) {
    return (
      <Link href={href} {...rest} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={clsx(className, "cursor-newtab")}
    >
      {children}
    </Link>
  );
};

export default UnstyledLink;
